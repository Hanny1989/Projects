let myData = [];
let notesTitles = [];
let notes = [];
let trashNotesTitles = [];
let trashNotes = [];


function init() {
    loadFromLocalStorage();
    render();
    renderNotes();
    renderTrashNotes();
}

function saveToLocalStorage() {
    localStorage.setItem('myData', JSON.stringify(myData));
    localStorage.setItem('notes', JSON.stringify(notes));
    localStorage.setItem('notesTitles', JSON.stringify(notesTitles));
    localStorage.setItem('trashNotes', JSON.stringify(trashNotes));
    localStorage.setItem('trashNotesTitles', JSON.stringify(trashNotesTitles));
}


function loadFromLocalStorage() {
    myData = JSON.parse(localStorage.getItem('myData')) || [];
    notes = JSON.parse(localStorage.getItem('notes')) || [];
    notesTitles = JSON.parse(localStorage.getItem('notesTitles')) || [];
    trashNotes = JSON.parse(localStorage.getItem('trashNotes')) || [];
    trashNotesTitles = JSON.parse(localStorage.getItem('trashNotesTitles')) || [];
}


function addNote() {
    let noteInputRef = document.getElementById('noteInput');
    if (noteInputRef.value.trim() !== "") {
        notes.push(noteInputRef.value);
        notesTitles.push("Ohne Titel");
        saveToLocalStorage();
        renderNotes();
        noteInputRef.value = '';
    }
}


function deleteNote(indexNote) {
    trashNotes.push(notes[indexNote]);
    trashNotesTitles.push(notesTitles[indexNote]);

    notes.splice(indexNote, 1);
    notesTitles.splice(indexNote, 1);

    saveToLocalStorage();
    renderNotes();
    renderTrashNotes();
}


function KillNote(trashindexNote) {
    trashNotes.splice(trashindexNote, 1);
    trashNotesTitles.splice(trashindexNote, 1);

    saveToLocalStorage();
    renderTrashNotes();
}


function renderNotes() {
    let contentRef = document.getElementById('content');
    contentRef.innerHTML = notes.map((note, index) => getNoteTemplate(index)).join('');
}


function renderTrashNotes() {
    let trashContentRef = document.getElementById('trashContent');
    trashContentRef.innerHTML = trashNotes.map((_, index) => getTrashNoteTemplate(index)).join('');
}


function getNoteTemplate(indexNote) {
    return `<p> ${notesTitles[indexNote]}: ${notes[indexNote]} 
        <button onclick="deleteNote(${indexNote})">&#10004;</button></p>`;
}

function getTrashNoteTemplate(trashindexNote) {
    return `<p> ${trashNotesTitles[trashindexNote]}: ${trashNotes[trashindexNote]} 
        <button onclick="KillNote(${trashindexNote})">&#128465;</button></p>`;
}


function safeData() {
    let inputRef = document.getElementById('data_input');
    if (inputRef.value.trim() !== "") {
        myData.push(inputRef.value);
        saveToLocalStorage();
        render();
        inputRef.value = "";
    }
}


function render() {
    let contentRef = document.getElementById('content');
    contentRef.innerHTML = myData.map(data => `<p>${data}</p>`).join('');
}

window.onload = init;
