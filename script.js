// === 1. Tracker des tâches ===
function initTaskTracker() {
    const taskElements = document.querySelectorAll('.task-checkbox');
    const savedTasks = JSON.parse(localStorage.getItem('tasks')) || [];

    taskElements.forEach((task, index) => {
        task.checked = savedTasks[index] || false;

        task.addEventListener('change', () => {
            const taskStatus = Array.from(taskElements).map(t => t.checked);
            localStorage.setItem('tasks', JSON.stringify(taskStatus));
        });
    });
}

// === 2. Mood Tracker ===
function initMoodTracker() {
    const moodOptions = document.querySelectorAll('.mood-option');
    const savedMood = localStorage.getItem('mood');

    if (savedMood) {
        document.querySelector(`.mood-option[value="${savedMood}"]`).checked = true;
    }

    moodOptions.forEach(option => {
        option.addEventListener('change', () => {
            const selectedMood = document.querySelector('.mood-option:checked').value;
            localStorage.setItem('mood', selectedMood);
        });
    });
}

// === 3. Suivi des objectifs ===
function updateProgressBar() {
    const progressBar = document.querySelector('.progress-bar');
    const progressValue = parseInt(localStorage.getItem('progress')) || 0;

    progressBar.style.width = `${progressValue}%`;
    progressBar.textContent = `${progressValue}%`;

    document.querySelector('#increase-progress').addEventListener('click', () => {
        const newValue = Math.min(progressValue + 10, 100);
        localStorage.setItem('progress', newValue);
        updateProgressBar();
    });

    document.querySelector('#reset-progress').addEventListener('click', () => {
        localStorage.setItem('progress', 0);
        updateProgressBar();
    });
}

// === 4. Réinitialisation ===
function initResetButton() {
    document.querySelector('#reset-all').addEventListener('click', () => {
        if (confirm('Voulez-vous vraiment tout réinitialiser ?')) {
            localStorage.clear();
            location.reload();
        }
    });
}

// === Initialisation ===
document.addEventListener('DOMContentLoaded', () => {
    initTaskTracker();
    initMoodTracker();
    updateProgressBar();
    initResetButton();
});
