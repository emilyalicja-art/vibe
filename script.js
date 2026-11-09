"use script";

const games = [

    {
        name: "Skak",
        categories: ["Strategispil", "Hygge"],
        minPlayers: 2,
        maxPlayers: 2,
        duration: 45,
        image: src= "images/skak.png"
    },

    {
        name: "UNO",
        categories: ["Kortspil", "Partyspil", "Hygge"],
        minPlayers: 2,
        maxPlayers: 10,
        duration: 20,
        image: "images/uno.png"
    },

    {
        name: "Stratego",
        categories: ["Strategispil", "Brætspil"],
        minPlayers: 2,
        maxPlayers: 2,
        duration: 45,
        image: "images/stratego.png"
    },

    {
        name: "Monopoly",
        categories: ["Brætspil", "Strategispil"],
        minPlayers: 2,
        maxPlayers: 6,
        duration: 120,
        image: "images/monopoly.png"
    },

    {
        name: "Ludo",
        categories: ["Brætspil", "Hygge"],
        minPlayers: 2,
        maxPlayers: 4,
        duration: 30,
        image: "images/ludo.png"
    },

    {
        name: "Terningespil",
        categories: ["Hygge", "Partyspil"],
        minPlayers: 2,
        maxPlayers: 6,
        duration: 20,
        image: "images/terninger.png"
    },

    {
        name: "Exploding Kittens",
        categories: ["Kortspil", "Partyspil"],
        minPlayers: 2,
        maxPlayers: 5,
        duration: 15,
        image: "images/explodingkittens.png"
    },

    {
        name: "Gættespil",
        categories: ["Partyspil", "Hygge"],
        minPlayers: 2,
        maxPlayers: 6,
        duration: 30,
        image: "images/gettespil.png"
    },

    {
        name: "Taco Cat Goat Cheese Pizza",
        categories: ["Kortspil", "Partyspil"],
        minPlayers: 2,
        maxPlayers: 8,
        duration: 15,
        image: "images/tacokat.png"
    },

    {
        name: "Cards Against Humanity",
        categories: ["Kortspil", "Partyspil"],
        minPlayers: 4,
        maxPlayers: 10,
        duration: 30,
        image: "images/cardsagainsthumanity.png"
    },

    {
        name: "Catan",
        categories: ["Brætspil", "Strategispil"],
        minPlayers: 3,
        maxPlayers: 4,
        duration: 90,
        image: "images/catan.png"
    },

    {
        name: "Hint",
        categories: ["Partyspil", "Hygge"],
        minPlayers: 4,
        maxPlayers: 10,
        duration: 45,
        image: "images/hint.png"
    },

    {
        name: "Labyrint",
        categories: ["Brætspil", "Strategispil"],
        minPlayers: 2,
        maxPlayers: 4,
        duration: 30,
        image: "images/labyrinten.png"
    },

    {
        name: "Ticket to Ride",
        categories: ["Brætspil", "Strategispil"],
        minPlayers: 2,
        maxPlayers: 5,
        duration: 60,
        image: "images/ticketroride.png"
    },

    {
        name: "Domino",
        categories: ["Brætspil", "Hygge"],
        minPlayers: 2,
        maxPlayers: 4,
        duration: 20,
        image: "images/domino.png"
    },

    {
        name: "Kortspil",
        categories: ["Kortspil", "Hygge"],
        minPlayers: 2,
        maxPlayers: 6,
        duration: 30,
        image: "images/kort.png"
    },

    {
        name: "Mikado",
        categories: ["Hygge"],
        minPlayers: 2,
        maxPlayers: 6,
        duration: 15,
        image: "images/mikdo.png"
    },

    {
        name: "Dobble",
        categories: ["Kortspil", "Partyspil"],
        minPlayers: 2,
        maxPlayers: 8,
        duration: 15,
        image: "images/dobble.png"
    },

    {
        name: "Rummikub",
        categories: ["Brætspil", "Strategispil"],
        minPlayers: 2,
        maxPlayers: 4,
        duration: 45,
        image: "images/rummikub.png"
    },

    {
        name: "Sequence",
        categories: ["Brætspil", "Strategispil"],
        minPlayers: 2,
        maxPlayers: 12,
        duration: 30,
        image: "images/sequence.png"
    },

    {
        name: "Klodsmajor",
        categories: ["Brætspil", "Hygge"],
        minPlayers: 2,
        maxPlayers: 6,
        duration: 20,
        image: "images/klods.png"
    },

    {
        name: "4 på stribe",
        categories: ["Brætspil", "Strategispil"],
        minPlayers: 2,
        maxPlayers: 2,
        duration: 15,
        image: "images/firepastribe.png"
    },

    {
        name: "Kryds & bolle",
        categories: ["Hygge", "Strategispil"],
        minPlayers: 2,
        maxPlayers: 2,
        duration: 10,
        image: "images/krydsbolle.png"
    },

    {
        name: "Backgammon",
        categories: ["Brætspil", "Strategispil"],
        minPlayers: 2,
        maxPlayers: 2,
        duration: 30,
        image: "images/backgannon.png"
    },

    {
        name: "The Mind",
        categories: ["Kortspil", "Hygge"],
        minPlayers: 2,
        maxPlayers: 4,
        duration: 20,
        image: "images/mind.png"
    },

    {
        name: "Undercover",
        categories: ["Partyspil"],
        minPlayers: 3,
        maxPlayers: 20,
        duration: 20,
        image: "images/undercover.png"
    }

];

const gamesContainer = document.getElementById("gamesContainer");

const searchInput = document.getElementById("searchInput");

const filterButton = document.getElementById("filterButton");
const sortButton = document.getElementById("sortButton");

const filterPanel = document.getElementById("filterPanel");
const overlay = document.getElementById("overlay");

const applyButton = document.getElementById("applyButton");
const resetButton = document.getElementById("resetButton");

const playerFilter = document.getElementById("playerFilter");

const categoryButtons = document.querySelectorAll(".category-btn");

const durationCheckboxes = document.querySelectorAll(
    '.duration-options input[type="checkbox"]'
);

let appliedFilters = {
    categories: [],
    players: 2,
    durations: []
};

let selectedCategories = [];
let selectedPlayers = 2;
let selectedDurations = [];

let alphabeticalOrder = false;


function displayGames(gameList) {

    gamesContainer.innerHTML = "";

    if (gameList.length === 0) {

        gamesContainer.innerHTML = `
            <p class="no-results">
                Ingen spil fundet.
                Prøv at ændre dine filtre.
            </p>
        `;

        return;
    }

    gameList.forEach(game => {

        const gameCard = document.createElement("div");

        gameCard.classList.add("game-card");

        const image = document.createElement("img");
        image.src = game.image;
        image.alt = game.name;
        image.loading = "lazy";

        const title = document.createElement("h3");
        title.textContent = game.name;

        gameCard.appendChild(image);
        gameCard.appendChild(title);

        gamesContainer.appendChild(gameCard);

    });

}

function filterGames() {

    const searchText = searchInput.value.toLowerCase();

    let filteredGames = games.filter(game => {


        const matchesSearch = game.name
            .toLowerCase()
            .includes(searchText);

        const matchesCategory =
            appliedFilters.categories.length === 0 ||
            appliedFilters.categories.some(category =>
                game.categories.includes(category)
            );

        const matchesPlayers =
            game.minPlayers <= appliedFilters.players &&
            game.maxPlayers >= appliedFilters.players;

        const duration = game.duration;

        const matchesDuration =
            appliedFilters.durations.length === 0 ||
            appliedFilters.durations.some(time => {

                if (time === "15") {
                    return duration < 15;
                }

                if (time === "30") {
                    return duration >= 15 && duration <= 30;
                }

                if (time === "60") {
                    return duration > 30 && duration <= 60;
                }

                if (time === "61") {
                    return duration > 60;
                }

            });


        return matchesSearch &&
            matchesCategory &&
            matchesPlayers &&
            matchesDuration;

    });

    if (alphabeticalOrder) {

        filteredGames.sort((a, b) =>
            a.name.localeCompare(b.name, "da")
        );

    }

    displayGames(filteredGames);

}

searchInput.addEventListener("input", () => {

    filterGames();

});

function openFilter() {

    filterPanel.classList.add("active");
    overlay.classList.add("active");

}

function closeFilter() {

    filterPanel.classList.remove("active");
    overlay.classList.remove("active");

}

filterButton.addEventListener("click", () => {

    openFilter();

});

overlay.addEventListener("click", () => {

    closeFilter();

});

categoryButtons.forEach(button => {

    button.addEventListener("click", () => {

        const category = button.dataset.category;

        if (category === "Alle") {

            selectedCategories = [];

        } else {

            selectedCategories = selectedCategories.filter(
                item => item !== "Alle"
            );

            if (selectedCategories.includes(category)) {

                selectedCategories = selectedCategories.filter(
                    item => item !== category
                );

            } else {

                selectedCategories.push(category);

            }

        }

        updateCategoryButtons();

    });

});


function updateCategoryButtons() {

    categoryButtons.forEach(button => {

        const category = button.dataset.category;

        const isActive =
            category === "Alle"
                ? selectedCategories.length === 0
                : selectedCategories.includes(category);

        button.classList.toggle("active", isActive);

    });

}
playerFilter.addEventListener("input", () => {

    selectedPlayers = Number(playerFilter.value);

});

durationCheckboxes.forEach(checkbox => {

    checkbox.addEventListener("change", () => {

        selectedDurations = Array.from(durationCheckboxes)
            .filter(item => item.checked)
            .map(item => item.value);

    });

});

applyButton.addEventListener("click", () => {

    appliedFilters = {
        categories: [...selectedCategories],
        players: selectedPlayers,
        durations: [...selectedDurations]
    };

    filterGames();

    closeFilter();

});

resetButton.addEventListener("click", () => {

    selectedCategories = [];
    selectedPlayers = 2;
    selectedDurations = [];

    appliedFilters = {
        categories: [],
        players: 2,
        durations: []
    };

    playerFilter.value = 2;

    durationCheckboxes.forEach(checkbox => {
        checkbox.checked = false;
    });

    updateCategoryButtons();

    filterGames();

});

sortButton.addEventListener("click", () => {

    alphabeticalOrder = !alphabeticalOrder;

    sortButton.textContent = alphabeticalOrder
        ? "A - Å"
        : "Sortere";

    filterGames();

});



displayGames(games);
