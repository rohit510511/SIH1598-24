// Flip colors and extinguish the flame on click
document.getElementById('flame').addEventListener('click', function() {
    // Extinguish the flame
    this.classList.add('flame-extinguished');

    // Flip the page colors
    document.body.classList.toggle('flipped-colors');
});

function showPopup() {
    document.getElementById('popup').style.display = 'flex';
}

function closePopup() {
    document.getElementById('popup').style.display = 'none';
}
let currentMonth = new Date().getMonth(); // Default to current month

function generateCalendar(year, month) {
    const months = [
        'January', 'February', 'March', 'April', 'May', 'June',
        'July', 'August', 'September', 'October', 'November', 'December'
    ];
    const daysInMonth = [31, (new Date(year, 1, 29).getDate() === 29 ? 29 : 28), 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];

    const calendarContainer = document.getElementById('year-calendar');
    calendarContainer.innerHTML = ''; // Clear any existing content

    const monthElement = document.createElement('div');
    monthElement.className = 'month';

    const header = document.createElement('div');
    header.className = 'month-header';
    header.innerText = months[month] + ' ' + year;
    monthElement.appendChild(header);

    const grid = document.createElement('div');
    grid.className = 'calendar-grid';

    // Add day names
    const dayNames = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];
    dayNames.forEach(dayName => {
        const dayElement = document.createElement('div');
        dayElement.className = 'day';
        dayElement.innerText = dayName;
        grid.appendChild(dayElement);
    });

    // Calculate first day of the month
    const firstDay = new Date(year, month, 1).getDay();

    // Add empty cells for days before the first day
    for (let j = 0; j < firstDay; j++) {
        const emptyCell = document.createElement('div');
        emptyCell.className = 'date';
        grid.appendChild(emptyCell);
    }

    // Add dates
    for (let j = 1; j <= daysInMonth[month]; j++) {
        const dateElement = document.createElement('div');
        dateElement.className = 'date';
        dateElement.innerText = j;
        grid.appendChild(dateElement);
    }

    monthElement.appendChild(grid);
    calendarContainer.appendChild(monthElement);
}

// Show the calendar for the current month
function showMonth(month) {
    const year = 2024; // Set the year here
    if (month < 0) month = 11; // December
    if (month > 11) month = 0; // January
    currentMonth = month;
    generateCalendar(year, currentMonth);
}

// Event listeners for navigation buttons
document.getElementById('prev-month').addEventListener('click', function() {
    showMonth(currentMonth - 1);
});

document.getElementById('next-month').addEventListener('click', function() {
    showMonth(currentMonth + 1);
});

// Initialize the calendar
showMonth(currentMonth);

// Function to hide the popup
function hidePopup() {
    document.getElementById('popup').style.display = 'none';
}