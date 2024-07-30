let titels = [];
let notes = [];
let paperBasketTitels = [];
let paperBasketNotes = [];


function init() {
    loadLocalStorage();
    render();
}


function render() {
    document.getElementById('newTitel').classList.add('d-none');
    document.getElementById('contentBars').classList.add('d-none');
    newNotes()
}


function newNotes() {
    let newNoteDiv = document.getElementById('newNote')
    newNoteDiv.innerHTML = '';
    for (let i = 0; i < titels.length; i++) {
        const titel = titels[i];
        const note = notes[i];
        newNoteDiv.innerHTML += renderNewNotes(i, titel, note);
    }
}


/* fügt eine neue Notiz hinzu */
function addNote() {
    let titel = document.getElementById('newTitel')
    let note = document.getElementById('newText')
    if (titel.value == 0 || note.value == 0) {
        alert("Bitte einen Titel und eine Notiz hinzufügen!");
    } else {
        titels.push(titel.value);
        notes.push(note.value);
    }
    clearInputs(titel, note)
    render();
    saveLocalStorage();
}


/* setzt Eingabefelder zurück*/
function clearInputs(title, text) {
    title.value = '';
    text.value = '';
}


/* löscht erstellte Notizen und verschiebt sie in den Papierkorb*/
function deleteNote(i) {
    paperBasketTitels.push(titels[i])
    paperBasketNotes.push(notes[i])
    titels.splice(i, 1);
    notes.splice(i, 1);
    render();
    saveLocalStorage();
}


/* öffnet den Papierkorb */
function basketNotes() {
    document.getElementById('contentNote').classList.add('d-none');
    document.getElementById('newNote').classList.add('d-none');
    document.getElementById('deleteBasket').classList.remove('d-none');
    let trash = document.getElementById('deleteNote');
    trash.innerHTML = '';
    for (let i = 0; i < paperBasketTitels.length; i++) {
        const titel = paperBasketTitels[i];
        const note = paperBasketNotes[i];
        trash.innerHTML += renderDeleteNotes(i, titel, note);
    }
}


/* öffnet delete Alert Auswahl*/
function deleteBasketNote(i) {
    ToDelete = i;
    document.getElementById('alert').innerHTML = renderDeleteAlert();
    document.getElementById('confirmDeleteAlert').style.display = 'block';
}


/* Ja/Nein delete Alert Ergebnis abfrage aus gerenderten Alert*/
function confirmDelete(confirm) {
    if (confirm) {
        paperBasketTitels.splice(ToDelete, 1);
        paperBasketNotes.splice(ToDelete, 1);
    }
    document.getElementById('confirmDeleteAlert').style.display = 'none';
    basketNotes();
    saveLocalStorage();
}


/* fügt Note aus dem Papierkorb zu den Notizen hinzu */
function restore(i) {
    titels.push(paperBasketTitels[i]);
    notes.push(paperBasketNotes[i]);
    paperBasketTitels.splice(i, 1);
    paperBasketNotes.splice(i, 1);
    render();
    basketNotes();
    saveLocalStorage();
}


/* bearbeitet eine Notiz */
function editNote(i) {
    const titel = titels[i];
    const note = notes[i];
    document.getElementById('edit').innerHTML = renderEditNote(i, titel, note);
    document.getElementById('edit').classList.remove('d-none');

}


/* fügt bearbeitete Notiz hinzu */
function saveEdit(i) {
    let newTitel = document.getElementById('editTitel').value;
    let newText = document.getElementById('editText').value;
    if (newTitel.value == 0 || newText.value == 0) {
        alert("Bitte einen Titel und eine Notiz hinzufügen!");
        return;
    }
    titels[i] = newTitel;
    notes[i] = newText;
    document.getElementById('edit').classList.add('d-none');
    render();
    saveLocalStorage();
}


/* speichert im Local Storage */
function saveLocalStorage() {
    let titel = JSON.stringify(titels);
    let note = JSON.stringify(notes);
    let BasketTitels = JSON.stringify(paperBasketTitels);
    let BasketNotes = JSON.stringify(paperBasketNotes);
    localStorage.setItem('titels', titel);
    localStorage.setItem('notes', note);
    localStorage.setItem('paperBasketTitels', BasketTitels);
    localStorage.setItem('paperBasketNotes', BasketNotes);
}


/* lädt aus dem Local Storage */
function loadLocalStorage() {
    let titel = localStorage.getItem('titels');
    let note = localStorage.getItem('notes');
    let BasketTitels = localStorage.getItem('paperBasketTitels');
    let BasketNotes = localStorage.getItem('paperBasketNotes');
    if (titel && note) {
        titels = JSON.parse(titel);
        notes = JSON.parse(note);
    }
    if (BasketTitels && BasketNotes) {
        paperBasketTitels = JSON.parse(BasketTitels);
        paperBasketNotes = JSON.parse(BasketNotes);
    }
}


