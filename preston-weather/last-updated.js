let d = new Date();

// Keeps copyright date up to date
document.getElementById('current-year').innerText = "\u00A9" + d.getFullYear() + " Ryan Bey";

// Updates "Last Updated" on mist pages with correct formatting
let months = [ "January", "February", "March",
               "April", "May", "June", "July",
               "August", "September", "October",
               "November", "December" ];

let days = [ "Sunday", "Monday", "Tuesday",
             "Wednesday", "Thursday",
             "Friday", "Saturday" ];

let date = new Date();
let monthName = months[date.getMonth()];
let dayName = days[date.getDay()];
let year = date.getFullYear();
let lastUpdated = `${dayName}, ${date.getDate()} ${monthName} ${year}`;

document.getElementById("last-updated").innerHTML = "Last Updated: " + lastUpdated;
