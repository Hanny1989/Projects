

// -----------------------
// 🔄 LocalStorage-Funktionen
// -----------------------

function saveNoteToStorage(id, title, content) {
  const notes = JSON.parse(localStorage.getItem('notes') || '[]');
  notes.push({ id, title, content });
  localStorage.setItem('notes', JSON.stringify(notes));
}

function deleteNoteFromStorage(id) {
  let notes = JSON.parse(localStorage.getItem('notes') || '[]');
  notes = notes.filter(note => note.id != id);
  localStorage.setItem('notes', JSON.stringify(notes));
}

function loadNotesFromStorage() {
  const notes = JSON.parse(localStorage.getItem('notes') || '[]');
  for (const note of notes) {
    const noteElement = new MyNote();
    noteElement.setNote(note.title, note.content, note.id);
    document.getElementById('notes-container').appendChild(noteElement);
  }
}

// -----------------------
// ➕ Notiz hinzufügen
// -----------------------

document.getElementById('add-note').addEventListener('click', () => {
  const title = document.getElementById('note-title').value.trim();
  const content = document.getElementById('note-content').value.trim();

  if (!title || !content) {
    alert("Bitte Titel und Inhalt eingeben.");
    return;
  }

  const noteElement = new MyNote();
  const id = Date.now(); // einfache ID
  noteElement.setNote(title, content, id);
  document.getElementById('notes-container').appendChild(noteElement);

  saveNoteToStorage(id, title, content);

  document.getElementById('note-title').value = '';
  document.getElementById('note-content').value = '';
});

// Beim Laden: gespeicherte Notizen anzeigen
window.addEventListener('DOMContentLoaded', loadNotesFromStorage);