

class ICQMessenger {
    constructor() {
        this.contacts = [];
        this.currentContact = null;
        this.messages = {};
        this.messageCounter = 0;
        this.typingTimeout = null;
        
        this.init();
    }

    init() {
        this.loadData();
        this.setupEventListeners();
        this.renderContacts();
        this.updateMessageCount();
    }

   
    loadData() {
      
        const savedContacts = localStorage.getItem('icq_contacts');
        if (savedContacts) {
            this.contacts = JSON.parse(savedContacts);
        } else {
            this.contacts = this.getDefaultContacts();
            this.saveContacts();
        }

        
        const savedMessages = localStorage.getItem('icq_messages');
        if (savedMessages) {
            this.messages = JSON.parse(savedMessages);
        } else {
            this.messages = {};
        }

      
        const savedCounter = localStorage.getItem('icq_message_counter');
        if (savedCounter) {
            this.messageCounter = parseInt(savedCounter);
        }
    }

   
    getDefaultContacts() {
        return [
            {
                id: 1,
                name: 'Max Mustermann',
                status: 'online',
                avatar: 'M',
                lastSeen: 'gerade eben',
                unreadCount: 0
            },
            {
                id: 2,
                name: 'Anna Schmidt',
                status: 'online',
                avatar: 'A',
                lastSeen: 'vor 2 Minuten',
                unreadCount: 2
            },
            {
                id: 3,
                name: 'Tom Weber',
                status: 'offline',
                avatar: 'T',
                lastSeen: 'vor 1 Stunde',
                unreadCount: 0
            },
            {
                id: 4,
                name: 'Lisa Müller',
                status: 'online',
                avatar: 'L',
                lastSeen: 'gerade eben',
                unreadCount: 1
            },
            {
                id: 5,
                name: 'Peter Krause',
                status: 'offline',
                avatar: 'P',
                lastSeen: 'vor 3 Stunden',
                unreadCount: 0
            }
        ];
    }

    
    setupEventListeners() {
      
        document.getElementById('sendButton').addEventListener('click', () => {
            this.sendMessage();
        });

      
        document.getElementById('messageInput').addEventListener('keypress', (e) => {
            if (e.key === 'Enter' && !e.shiftKey) {
                e.preventDefault();
                this.sendMessage();
            }
        });

       
        document.getElementById('messageInput').addEventListener('input', (e) => {
            this.updateCharCount(e.target.value.length);
        });

       
        document.getElementById('contactSearch').addEventListener('input', (e) => {
            this.searchContacts(e.target.value);
        });

      
        document.querySelector('.btn-close').addEventListener('click', () => {
            this.closeMessenger();
        });

        document.querySelector('.btn-minimize').addEventListener('click', () => {
            this.minimizeMessenger();
        });

        document.querySelector('.btn-maximize').addEventListener('click', () => {
            this.maximizeMessenger();
        });

        
        document.querySelector('.btn-emoji').addEventListener('click', () => {
            this.showEmojiPicker();
        });

        document.querySelector('.btn-attach').addEventListener('click', () => {
            this.showAttachmentOptions();
        });
    }

    
    renderContacts() {
        const contactList = document.getElementById('contactList');
        contactList.innerHTML = '';

        this.contacts.forEach(contact => {
            const contactElement = this.createContactElement(contact);
            contactList.appendChild(contactElement);
        });
    }

   
    createContactElement(contact) {
        const contactDiv = document.createElement('div');
        contactDiv.className = 'contact-item';
        contactDiv.dataset.contactId = contact.id;

        contactDiv.innerHTML = `
            <div class="contact-avatar">${contact.avatar}</div>
            <div class="contact-info">
                <div class="contact-name">${contact.name}</div>
                <div class="contact-status">${contact.status === 'online' ? 'Online' : 'Offline'}</div>
            </div>
            <div class="contact-time">${contact.lastSeen}</div>
            ${contact.unreadCount > 0 ? `<div class="unread-badge">${contact.unreadCount}</div>` : ''}
        `;

        contactDiv.addEventListener('click', () => {
            this.selectContact(contact);
        });

        return contactDiv;
    }

    
    selectContact(contact) {
       
        if (this.currentContact) {
            const prevActive = document.querySelector(`[data-contact-id="${this.currentContact.id}"]`);
            if (prevActive) prevActive.classList.remove('active');
        }

       
        this.currentContact = contact;
        const newActive = document.querySelector(`[data-contact-id="${contact.id}"]`);
        if (newActive) newActive.classList.add('active');

        
        this.updateChatHeader(contact);
        this.loadChatHistory(contact.id);
        this.clearUnreadCount(contact.id);

        
        const chatMessages = document.getElementById('chatMessages');
        chatMessages.innerHTML = '';
        
       
        this.displayChatHistory(contact.id);
    }

    
    updateChatHeader(contact) {
        document.getElementById('currentContactName').textContent = contact.name;
        document.getElementById('currentContactStatus').textContent = contact.status === 'online' ? 'Online' : 'Offline';
        document.getElementById('currentContactAvatar').innerHTML = contact.avatar;
        
        
        const statusIndicator = document.querySelector('.status-indicator');
        statusIndicator.className = `status-indicator ${contact.status}`;
    }

    
    loadChatHistory(contactId) {
        if (!this.messages[contactId]) {
            this.messages[contactId] = [];
        }
    }

    
    displayChatHistory(contactId) {
        const chatMessages = document.getElementById('chatMessages');
        const messages = this.messages[contactId] || [];

        if (messages.length === 0) {
            chatMessages.innerHTML = `
                <div class="welcome-message">
                    <i class="fas fa-comments"></i>
                    <h2>Neuer Chat mit ${this.currentContact.name}</h2>
                    <p>Starte eine Konversation!</p>
                </div>
            `;
            return;
        }

        chatMessages.innerHTML = '';
        messages.forEach(message => {
            const messageElement = this.createMessageElement(message);
            chatMessages.appendChild(messageElement);
        });

        
        chatMessages.scrollTop = chatMessages.scrollHeight;
    }

    
    sendMessage() {
        const messageInput = document.getElementById('messageInput');
        const messageText = messageInput.value.trim();

        if (!messageText || !this.currentContact) return;

        
        const message = {
            id: ++this.messageCounter,
            text: messageText,
            sender: 'me',
            timestamp: new Date().toISOString(),
            type: 'text'
        };

        
        if (!this.messages[this.currentContact.id]) {
            this.messages[this.currentContact.id] = [];
        }
        this.messages[this.currentContact.id].push(message);

        
        this.displayMessage(message);

        
        this.saveMessages();
        this.saveMessageCounter();

        
        messageInput.value = '';
        this.updateCharCount(0);

        
        this.updateMessageCount();

       
        setTimeout(() => {
            this.simulateResponse();
        }, Math.random() * 3000 + 2000);
    }

    
    displayMessage(message) {
        const chatMessages = document.getElementById('chatMessages');
        const messageElement = this.createMessageElement(message);
        chatMessages.appendChild(messageElement);
        
        
        chatMessages.scrollTop = chatMessages.scrollHeight;
    }

    
    createMessageElement(message) {
        const messageDiv = document.createElement('div');
        messageDiv.className = `message ${message.sender === 'me' ? 'sent' : 'received'}`;

        const time = new Date(message.timestamp).toLocaleTimeString('de-DE', {
            hour: '2-digit',
            minute: '2-digit'
        });

        messageDiv.innerHTML = `
            <div class="message-avatar">${message.sender === 'me' ? 'Ich' : this.currentContact?.avatar || '?'}</div>
            <div class="message-content">
                <div class="message-text">${this.escapeHtml(message.text)}</div>
                <div class="message-time">${time}</div>
            </div>
        `;

        return messageDiv;
    }

   
    escapeHtml(text) {
        const div = document.createElement('div');
        div.textContent = text;
        return div.innerHTML;
    }

    
    simulateResponse() {
        if (!this.currentContact) return;

        const responses = [
            'Das ist interessant!',
            'Verstehe, was du meinst.',
            'Kann ich dir dabei helfen?',
            'Das klingt gut!',
            'Erzähl mir mehr davon.',
            '👍',
            'Interessant!',
            'Das macht Sinn.',
            'Gute Idee!',
            'Ich bin mir nicht sicher...'
        ];

        const randomResponse = responses[Math.floor(Math.random() * responses.length)];
        
        const message = {
            id: ++this.messageCounter,
            text: randomResponse,
            sender: 'contact',
            timestamp: new Date().toISOString(),
            type: 'text'
        };

      
        this.messages[this.currentContact.id].push(message);
        
       
        this.displayMessage(message);
        
        
        this.saveMessages();
        this.saveMessageCounter();
        
       
        this.updateMessageCount();
    }

    
    searchContacts(query) {
        const contactItems = document.querySelectorAll('.contact-item');
        const searchTerm = query.toLowerCase();

        contactItems.forEach(item => {
            const contactName = item.querySelector('.contact-name').textContent.toLowerCase();
            if (contactName.includes(searchTerm)) {
                item.style.display = 'flex';
            } else {
                item.style.display = 'none';
            }
        });
    }

   
    clearUnreadCount(contactId) {
        const contact = this.contacts.find(c => c.id === contactId);
        if (contact) {
            contact.unreadCount = 0;
            this.saveContacts();
            this.renderContacts();
        }
    }

    
    updateCharCount(count) {
        document.getElementById('charCount').textContent = count;
        
       
        const sendButton = document.getElementById('sendButton');
        sendButton.disabled = count === 0;
    }

  
    updateMessageCount() {
        const totalMessages = Object.values(this.messages).reduce((total, chat) => total + chat.length, 0);
        document.getElementById('messageCount').textContent = `${totalMessages} Nachrichten`;
    }

   
    showEmojiPicker() {
        const emojis = ['😊', '😂', '❤️', '👍', '🎉', '🔥', '💯', '😎', '🤔', '😢'];
        const emojiPicker = document.createElement('div');
        emojiPicker.className = 'emoji-picker';
        emojiPicker.style.cssText = `
            position: absolute;
            bottom: 80px;
            left: 20px;
            background: white;
            border: 1px solid #e9ecef;
            border-radius: 10px;
            padding: 10px;
            display: grid;
            grid-template-columns: repeat(5, 1fr);
            gap: 5px;
            box-shadow: 0 5px 15px rgba(0,0,0,0.2);
            z-index: 1000;
        `;

        emojis.forEach(emoji => {
            const emojiBtn = document.createElement('button');
            emojiBtn.textContent = emoji;
            emojiBtn.style.cssText = `
                background: none;
                border: none;
                font-size: 20px;
                cursor: pointer;
                padding: 5px;
                border-radius: 5px;
                transition: background 0.2s;
            `;
            emojiBtn.addEventListener('click', () => {
                this.insertEmoji(emoji);
                document.body.removeChild(emojiPicker);
            });
            emojiBtn.addEventListener('mouseenter', (e) => {
                e.target.style.background = '#f8f9fa';
            });
            emojiBtn.addEventListener('mouseleave', (e) => {
                e.target.style.background = 'none';
            });
            emojiPicker.appendChild(emojiBtn);
        });

        document.body.appendChild(emojiPicker);

        
        setTimeout(() => {
            document.addEventListener('click', function closeEmojiPicker(e) {
                if (!emojiPicker.contains(e.target)) {
                    document.body.removeChild(emojiPicker);
                    document.removeEventListener('click', closeEmojiPicker);
                }
            });
        }, 100);
    }

    
    insertEmoji(emoji) {
        const messageInput = document.getElementById('messageInput');
        const start = messageInput.selectionStart;
        const end = messageInput.selectionEnd;
        const text = messageInput.value;
        
        messageInput.value = text.substring(0, start) + emoji + text.substring(end);
        messageInput.focus();
        messageInput.setSelectionRange(start + emoji.length, start + emoji.length);
        
      
        this.updateCharCount(messageInput.value.length);
    }

  
    showAttachmentOptions() {
        alert('Attachment-Funktionalität würde hier implementiert werden (Datei-Upload, Bilder, etc.)');
    }


    closeMessenger() {
        if (confirm('Möchtest du den Messenger wirklich schließen?')) {
            window.close();
        }
    }

  
    minimizeMessenger() {

        alert('Minimierung implementiert');
    }

  
    maximizeMessenger() {
   
        alert('Maximierung implementiert');
    }

   
    saveContacts() {
        localStorage.setItem('icq_contacts', JSON.stringify(this.contacts));
    }

    saveMessages() {
        localStorage.setItem('icq_messages', JSON.stringify(this.messages));
    }

    saveMessageCounter() {
        localStorage.setItem('icq_message_counter', this.messageCounter.toString());
    }

  
    clearAllData() {
        if (confirm('Alle Daten wirklich löschen? Dies kann nicht rückgängig gemacht werden!')) {
            localStorage.removeItem('icq_contacts');
            localStorage.removeItem('icq_messages');
            localStorage.removeItem('icq_message_counter');
            location.reload();
        }
    }
}


document.addEventListener('DOMContentLoaded', () => {
    window.icqMessenger = new ICQMessenger();
    
   
    window.debugMessenger = {
        clearData: () => window.icqMessenger.clearAllData(),
        showData: () => {
            console.log('Contacts:', window.icqMessenger.contacts);
            console.log('Messages:', window.icqMessenger.messages);
            console.log('Counter:', window.icqMessenger.messageCounter);
        }
    };
});


if ('serviceWorker' in navigator) {
    navigator.serviceWorker.register('/sw.js')
        .then(registration => console.log('ServiceWorker registered'))
        .catch(error => console.log('ServiceWorker registration failed'));
}
