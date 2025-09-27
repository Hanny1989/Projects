class MyNote extends HTMLElement {
    constructor() {
      super();
      const shadow = this.attachShadow({ mode: 'open' });

      shadow.innerHTML = `
        <style>
          *{
            margin :0px;

            }
            .body{
            display:flex;
            justify-content: center;
            }
          .note {
            background: #f0f8ff;
            padding: 12px;
            margin: 10px 0;
            border-left: 4px solid #007acc;
            border-radius: 8px;
            font-family: sans-serif;
            position: relative;
          }

          .note button {
            position: absolute;
            top: 10px;
            right: 10px;
            background: #dc3545;
            color: white;
            border: none;
            border-radius: 4px;
            padding: 4px 8px;
            cursor: pointer;
          }

          .note button:hover {
            background: #a71d2a;
          }
        </style>

        <div class="note">
          <strong id="title">Titel</strong>: <span id="content">Inhalt</span>
          <button>&#10004;</button>
        </div>
      `;

      this.shadowRoot.querySelector('button').addEventListener('click', () => {
        this.deleteSelf();
      });
    }
    setNote(title, content, id = null) {
        this.shadowRoot.getElementById('title').textContent = title;
        this.shadowRoot.getElementById('content').textContent = content;
        this.dataset.id = id || Date.now(); // unique ID
      }

      deleteSelf() {
        const id = this.dataset.id;
        this.remove();
        deleteNoteFromStorage(id);
      }
    }

    customElements.define('my-note', MyNote);
   z