// Sauvegarder les notes mensuelles
function initMonthlyNotes() {
    const notes = document.getElementById('monthly-notes');
    const savedNotes = localStorage.getItem('monthly-notes');

    if (savedNotes) {
        notes.value = savedNotes;
    }

    notes.addEventListener('input', () => {
        localStorage.setItem('monthly-notes', notes.value);
    });
}

// Tracker des prières
function initPrayerTracker() {
    const checkboxes = document.querySelectorAll('.prayer-checkbox');
    const savedStatus = JSON.parse(localStorage.getItem('prayer-status')) || [];

    checkboxes.forEach((checkbox, index) => {
        checkbox.checked = savedStatus[index] || false;

        checkbox.addEventListener('change', () => {
            const status = Array.from(checkboxes).map(cb => cb.checked);
            localStorage.setItem('prayer-status', JSON.stringify(status));
        });
    });
}

// Initialisation globale
document.addEventListener('DOMContentLoaded', () => {
    initMonthlyNotes();
    initPrayerTracker();
});
