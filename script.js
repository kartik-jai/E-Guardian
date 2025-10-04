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


