let users = [
    {
        name: "Khalil",
        pic: "https://images.pexels.com/photos/792326/pexels-photo-792326.jpeg",
        about: "A passionate web developer with expertise in front-end and back-end technologies."
    },
    {
        name: "Ahmed",
        pic: "https://images.pexels.com/photos/1105058/pexels-photo-1105058.jpeg",
        about: "Creative front-end developer who loves clean UI design."
    },
    {
        name: "Usman",
        pic: "https://images.pexels.com/photos/940585/pexels-photo-940585.jpeg",
        about: "Backend developer focused on building scalable systems."
    },
    {
        name: "Ali",
        pic: "https://images.pexels.com/photos/1322543/pexels-photo-1322543.jpeg",
        about: "Full-stack developer with strong debugging skills."
    },
    {
        name: "Hamza",
        pic: "https://images.pexels.com/photos/325688/pexels-photo-325688.jpeg",
        about: "Responsive web specialist and mobile-first designer."
    },
    {
        name: "Bilal",
        pic: "https://images.pexels.com/photos/1172207/pexels-photo-1172207.jpeg",
        about: "JavaScript enthusiast who enjoys building interactive apps."
    }
];

// Get the cards container, not the main container
let cardsContainer = document.querySelector(".cards");

function displayUsers(userList) {
    userList.forEach(user => {
        // Create card container
        let Card = document.createElement("div");
        Card.classList.add("card");

        // Create image background
        let BackImg = document.createElement("div");
        BackImg.classList.add("back-img");
        BackImg.style.backgroundImage = `url(${user.pic})`;

        // Create content container
        let CardContent = document.createElement("div");
        CardContent.classList.add("card-content");

        // Create name element
        let UserName = document.createElement("h2");
        UserName.classList.add("name");
        UserName.textContent = user.name;

        // Create about element
        let About = document.createElement("p");
        About.classList.add("about");
        About.textContent = user.about;

        // Assemble the card
        Card.appendChild(BackImg);
        Card.appendChild(CardContent);
        CardContent.appendChild(UserName);
        CardContent.appendChild(About);

        // Append card to the cards container
        cardsContainer.appendChild(Card);
    });
}

// Initial display of all users
displayUsers(users);

// Get the input element (use #search, not .input)
let input = document.querySelector("#search");

input.addEventListener("input", () => {
    let filteredUsers = users.filter(user => {
        // Case-insensitive search that checks if name starts with input
        return user.name.toLowerCase().startsWith(input.value.toLowerCase());
    });
    
    // Clear the container before displaying filtered results
    cardsContainer.innerHTML = "";
    
    // Display filtered users
    displayUsers(filteredUsers);
});