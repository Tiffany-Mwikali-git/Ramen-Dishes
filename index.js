// Example ramen data
const ramens = [
    { name: "Shoyu Ramen", 
        restaurant: "Ichiran", 
        rating: 5, 
        comments: "Delicious!", 
        image: "./images/gyukotsu.jpg" },
    { name: "Miso Ramen", 
        restaurant: "Ippudo", 
        rating: 4, 
        comments: "Very satisfying!", 
        image: "./images/kojiro.jpg" },
    { name: "naruto", 
        restaurant: "ipad", 
        rating: 4, 
        comments: "Very satisfying!", 
        image: "./images/naruto.jpg" },
    {name: "kojiro", 
        restaurant: "ipad", 
        rating: 3, 
        comments: "Very satisfying!", 
        image: "./images/nirvana.jpg" },
    {name: "kara", 
        restaurant: "ipady", 
        rating: 4, 
        comments: "Very satisfying!", 
        image: "./images/shoyu.jpg" }      
];

// Display ramen images
function displayRamens() { 
    const menu = document.getElementById("ramen-menu");
    menu.innerHTML =""; // Clear any existing images
    ramens.forEach(ramen => {
        const img = document.createElement('img');
        img.src = ramen.image;
        img.alt = ramen.name;
        img.addEventListener("click", () => handleClick(ramen));
        menu.appendChild(img);
    });
}

// Handle ramen image click
function handleClick(ramen) {
    document.getElementById("detail-image").src = ramen.image;
    document.getElementById("detail-name").textContent = `Name: ${ramen.name}`;
    document.getElementById("detail-restaurant").textContent = `Restraunt: ${ramen.restaurant}`;
    document.getElementById("detail-rating").textContent = `Rating: ${ramen.rating}`;
    document.getElementById("detail-comments").textContent = `Comments: ${ramen.comments}`;
}

// Handle new ramen form submission
function addSubmitListener() {
    const form = document.getElementById("new-ramen-form");
    form.addEventListener("submit", event => {
        event.preventDefault();

        // Get form values
        const name = document.getElementById("new-name").value;
        const restaurant = document.getElementById("new-restaurant").value;
        const rating = document.getElementById("new-rating").value;
        const comments = document.getElementById("new-comments").value;
        const image = document.getElementById("new-image").value;

        // Create new ramen object
        const newRamen = { name, restaurant, rating, comments, image };
        ramens.push(newRamen);

        // Update ramen menu
        displayRamens();

        // Clear form fields
        form.reset();
    });
}

// Initialize app
function main() {
    displayRamens();
    addSubmitListener();
}
document.addEventListener("DOMContentLoaded", main);

