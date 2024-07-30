/* rendert neue Notiz */
function renderNewNotes(i, titel, note) {
    return `
        <div>
            <div class="notes">
                <h1>${titel}</h1>
                <p>${note}</p>
                <div class="noteBar">
                    <div class="tooltip">
                        <img src="./assets/img/icons8-archiv-hinzufügen-48.png" alt=""><span
                        class="tooltiptext">Archivieren</span>
                    </div>
                    <div class="noteButton">    
                        <button onclick="deleteNote(${i})">Löschen</button>
                        <button onclick="editNote(${i})">Bearbeiten</button>
                    </div>    
                </div>
            </div>
        </div>`;
}


/* rendert neue Notiz */
function renderDeleteNotes(i, titel, note) {
    return `
        <div class="notes">
                <h1>${titel}</h1>
                <p>${note}</p>
            <div class="noteBar">
                <div class="tooltip">
                        <img src="./assets/img/icons8-archiv-hinzufügen-48.png" alt=""><span
                        class="tooltiptext">Archivieren</span>
                </div>
                <div class="noteButton">    
                        <button onclick="deleteBasketNote(${i})">Löschen</button>
                        <button onclick="restore(${i})">Wiederherstellen</button>
                </div>    
            </div>
        </div>`;
}


/* rendert delete Alert */
function renderDeleteAlert() {
    return `
    <div id="confirmDeleteAlert" class="deleteAlert">
        <div class="contentDeleteAlert">
            <p>Möchten Sie wirklich löschen?</p>
            <button onclick="confirmDelete(true)">Ja</button>
            <button onclick="confirmDelete(false)">Nein</button>
        </div>
    </div>`
}


/* rendert Bearbeitung einer Notiz */
function renderEditNote(i, titel, note) {
    return `
        <div class="contentEdit">
            <div class="editNotes">
                <input id="editTitel" class="inputTitel" type="text" placeholder="Titel" value="${titel}">
                <textarea class="editTextArea" name="Text" id="editText"
                    placeholder="Notiz schreiben...">${note}</textarea>
                <div class="noteBar">
                    <div class="noteButton">    
                        <button onclick="saveEdit(${i})">Speichern</button>
                        <button onclick="closeEdit()">Beenden</button>
                    </div>    
                </div>
            </div>
        </div>`;
}