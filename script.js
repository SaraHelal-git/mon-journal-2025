// Script.js

// Sauvegarde des prières cochées
document.querySelectorAll('#ramadan input[type="checkbox"]').forEach(checkbox => {
    checkbox.addEventListener('change', () => {
        const status = Array.from(
            document.querySelectorAll('#ramadan input[type="checkbox"]')
        ).map(checkbox => checkbox.checked);
        localStorage.setItem('prayerStatus', JSON.stringify(status));
    });
});

// Récupération des prières cochées
window.addEventListener('load', () => {
    const savedStatus = JSON.parse(localStorage.getItem('prayerStatus'));
    if (savedStatus) {
        document.querySelectorAll('#ramadan input[type="checkbox"]').forEach((checkbox, index) => {
            checkbox.checked = savedStatus[index];
        });
    }
});
