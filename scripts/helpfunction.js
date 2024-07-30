/* Note class hide hinzufügen */
function closeNote() {
    document.getElementById('newTitel').classList.add('d-none');
    document.getElementById('contentBars').classList.add('d-none');
}


/* Papierkorb class hide hinzufügen */
function closeNavbar() {
    document.getElementById('contentNote').classList.remove('d-none');
    document.getElementById('newNote').classList.remove('d-none');
    document.getElementById('deleteBasket').classList.add('d-none');
}


function closeEdit() {
    document.getElementById('edit').classList.add('d-none');
}


/* class hide entfernen */
function openNote() {
    document.getElementById('newTitel').classList.remove('d-none');
    document.getElementById('contentBars').classList.remove('d-none');
}