
let homeC = document.getElementById("homeCounter")
let guestC = document.getElementById("guestCounter")

let countHome = 0
let countGuest = 0


function point1Home() {
    countHome = countHome + 1
    homeC.textContent = countHome
}

function point2Home() {
    countHome = countHome + 2
    homeC.textContent = countHome
}

function point3Home() {
    countHome = countHome + 3
    homeC.textContent = countHome
}


function point1Guest() {
    countGuest = countGuest + 1
    guestC.textContent = countGuest
}


function point2Guest() {
    countGuest = countGuest + 2
    guestC.textContent = countGuest
}


function point3Guest() {
    countGuest = countGuest + 3
    guestC.textContent = countGuest
}