let GameArray = [];

let GameObject = function (pTitle, pGenre, pLink, pPriority) {
    this.title = pTitle;
    this.genre = pGenre;
    this.link = pLink;
    this.prio = pPriority;
}

GameArray.push(new GameObject("Persona 3", "RPG", "https://store.steampowered.com/app/2161700/Persona_3_Reload/", 1));
GameArray.push(new GameObject("Call of Duty", "FPS", "https://store.steampowered.com/app/1938090/Call_of_Duty/", 2));
GameArray.push(new GameObject("XCOM", "Strategy", "https://store.steampowered.com/app/200510/XCOM_Enemy_Unknown/", 3));

document.addEventListener("DOMContentLoaded", function (event) {

    createBacklog();

    document.getElementById("addButton").addEventListener("click", function () {
        GameArray.push(new GameObject(document.getElementById("title").value, selectedType, document.getElementById("link").value,
            document.getElementById("priority").value));
        
        alert(document.getElementById("title").value + " has been added to the backlog!")
        document.getElementById("title").value = "";
        document.getElementById("link").value = "";
        document.getElementById("priority").value = "";

        createBacklog();
    })

    $(document).bind("change", "#genre", function (event, ui) {
        selectedType = document.getElementById("genre").value;
    });

    $(document).bind("change", "#selectFilter", function (event, ui) {
        filteredGenre = document.getElementById("selectFilter").value;
    });

    document.getElementById("filterButton").addEventListener("click", createFilteredList);

    document.getElementById("searchButton").addEventListener("click", searchBacklog);
})

// Functions Below

function createBacklog() {
    let backlogUL = document.getElementById("backlogUL");
    backlogUL.innerHTML = "";

    GameArray.forEach(function (element,) {
        let li = document.createElement("li");
        let link = document.createElement("a");
        link.href = element.link;
        link.target = "_blank";
        link.className = "ui-btn ui-btn-icon-right ui-icon-carat-r";
        link.innerHTML = element.prio + " -  " + element.title + " (" + element.genre + ")";
        li.appendChild(link);
        backlogUL.appendChild(li);
    })
}

function createFilteredList() {
    let filteredUL = document.getElementById("filteredUL");
    filteredUL.innerHTML = "";

    GameArray.forEach(function (game,) {
        if (game.genre == document.getElementById("selectFilter").value) {
            let li = document.createElement("li");
            let link = document.createElement("a");
            link.href = game.link;
            link.target = "_blank";
            link.className = "ui-btn ui-btn-icon-right ui-icon-carat-r";
            link.innerHTML = game.prio + "-  " + game.title + " (" + game.genre + ")";
            li.appendChild(link);
            filteredUL.appendChild(li);
        }
    })

}

function searchBacklog() {
    let searchEntry = document.getElementById("searchEntry");

    GameArray.forEach(function (game,) {
        if (game.title.toLowerCase() == searchEntry.value.toLowerCase()) {
            let li = document.createElement("li");
            let link = document.createElement("a");
            link.href = game.link;
            link.target = "_blank";
            link.className = "ui-btn ui-btn-icon-right ui-icon-carat-r";
            link.innerHTML = game.prio + "-  " + game.title + " (" + game.genre + ")";
            li.appendChild(link);
            filteredUL.appendChild(li);
        }})
    
    searchEntry.innerHTML = "";
}