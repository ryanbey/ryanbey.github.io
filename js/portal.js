// Keeps copyright date up to date
let d = new Date();
document.getElementById('current-year').innerText = "\u00A9" + d.getFullYear() + " Ryan Bey";

// Updates "Last Updated" on assignment portal home page
var lastmodified = document.lastModified;
document.getElementById('last-updated').innerText = "Last Updated: " + lastmodified;