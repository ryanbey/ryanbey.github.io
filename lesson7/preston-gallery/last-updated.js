let d = new Date(document.lastModified);

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

let monthName = months[d.getMonth()];
let dayName = days[d.getDay()];
let year = d.getFullYear();
let lastUpdated = `${dayName}, ${d.getDate()} ${monthName} ${year}`;

document.getElementById("last-updated").innerHTML = "Last Updated: " + lastUpdated;

// Current day for pancake banner
let literallyToday = new Date()
let today = literallyToday.getDay();

// If it's Friday, add the pancake banner
if (today == 5) {
    document.querySelector(".pancake").innerHTML = "Saturday = Preston Pancakes in the Park! 9:00 a.m. Saturday at the city park pavilion"
}
else {
    document.querySelector(".pancake").classList.remove("pancake");
}




// WIND CHILL
let temp = document.querySelector('#ws-currently').innerText;
let speed = document.querySelector('#ws-wind-speed').innerText;
buildWC(speed, temp);

// Calculate the Windchill
function buildWC(speed, temp) {
    let wcTemp = document.getElementById('ws-wind-chill');
    
    // Compute the windchill
    let wc = 35.74 + 0.6215 * temp - 35.75 * Math.pow(speed, 0.16) + 0.4275 * temp * Math.pow(speed, 0.16);
    console.log(wc);

    // Round the answer down to integer
    wc = Math.floor(wc);

    // If chill is greater than temp, return the temp
    wc = (wc > temp)?temp:wc;

    // Display the windchill
    console.log(wc);
    wc = wc+'°F';
    wcTemp.innerHTML = wc;
}
