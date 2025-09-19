function searchItem() {
    // Get the search term
    const searchBox = document.getElementById('searchBox');
    const searchTerm = searchBox.value.trim().toLowerCase();
    


    // Define the mapping of items to their Explore_Seeds links
    const itemLinks = {
        
        };

    // Check if the search term exists in the mapping
    if (itemLinks[searchTerm]) {
        window.location.href = itemLinks[searchTerm]; // Redirect to the item's page
    } else {
        alert("Item not found in the catalog.");
    }
}

// Seed data
const seeds = [
    {
        name: "Tomato",
        image: "images/tomato.jpg",
        description: "A versatile vegetable perfect for sauces, salads, and more."
    },
    {
        name: "Lettuce",
        image: "images/lettuce.jpg",
        description: "A fresh and crispy addition to your salads and sandwiches."
    },
    {
        name: "Sunflower",
        image: "images/sunflower.jpg",
        description: "Bright and cheerful flowers that attract pollinators."
    },
    // Add more seed objects as needed...
];

// Display seeds in the catalog
function displaySeeds() {
    const seedList = document.getElementById('seed-list');
    seedList.innerHTML = seeds.map(seed => `
        <div class="feature">
            <img src="${seed.image}" alt="${seed.name}">
            <h2>${seed.name}</h2>
            <p>${seed.description}</p>
        </div>
    `).join('');
}

// Search functionality
function searchSeeds() {
    const query = document.getElementById('searchBox').value.toLowerCase();
    const filteredSeeds = seeds.filter(seed => seed.name.toLowerCase().includes(query));
    const seedList = document.getElementById('seed-list');
    seedList.innerHTML = filteredSeeds.map(seed => `
        <div class="feature">
            <img src="${seed.image}" alt="${seed.name}">
            <h2>${seed.name}</h2>
            <p>${seed.description}</p>
        </div>
    `).join('');
}

// Initialize catalog
displaySeeds();
