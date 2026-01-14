let users = [
    {
        name: "Khalil",
        pic: "https://images.pexels.com/photos/792326/pexels-photo-792326.jpeg",
        about: "A passionate web developer with expertise in front-end and back-end technologies."
    },
    {
        name: "Jawad",
        pic: "https://images.unsplash.com/photo-1506968695017-764f86a9f9ec?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OHx8Ym95fGVufDB8fDB8fHww",
        about: "Creative front-end developer who loves clean UI design."
    },
    {
        name: "Abdullah",
        pic: "https://images.pexels.com/photos/940585/pexels-photo-940585.jpeg",
        about: "Backend developer focused on building scalable systems."
    },
    {
        name: "Abdulrehman",
        pic: "https://images.pexels.com/photos/1322543/pexels-photo-1322543.jpeg",
        about: "Full-stack developer with strong debugging skills."
    },
    {
        name: "Shazaib",
        pic: "https://images.pexels.com/photos/325688/pexels-photo-325688.jpeg",
        about: "Responsive web specialist and mobile-first designer."
    },
    {
        name: "Fizan",
        pic: "https://images.pexels.com/photos/1172207/pexels-photo-1172207.jpeg",
        about: "JavaScript enthusiast who enjoys building interactive apps."
    }
];

let cardsContainer = document.querySelector(".cards");
function displayUsers(userList) {
    cardsContainer.innerHTML = "";
    userList.forEach(user => {
        let Card = document.createElement("div");
        Card.classList.add("card");
        let BackImg = document.createElement("div");
        BackImg.classList.add("back-img");
        BackImg.style.backgroundImage = `url(${user.pic})`;
        let CardContent = document.createElement("div");
        CardContent.classList.add("card-content");
        let UserName = document.createElement("h2");
        UserName.classList.add("name");
        UserName.textContent = user.name;
        let About = document.createElement("p");
        About.classList.add("about");
        About.textContent = user.about;
        Card.appendChild(BackImg);
        Card.appendChild(CardContent);
        CardContent.appendChild(UserName);
        CardContent.appendChild(About);
        cardsContainer.appendChild(Card);
        let del = document.createElement("div");
        del.classList.add("delete-btn");
        del.innerHTML = `<i class="fa-solid fa-trash"></i>`;
        Card.appendChild(del);

        Card.addEventListener("mouseenter", () => {
            del.style.opacity = "1";
        });

        Card.addEventListener("mouseleave", () => {
            del.style.opacity = "0";
        });

    });
};

function showNoUserMessage() {
    cardsContainer.innerHTML = "";
    let messageDiv = document.createElement("div");
    messageDiv.classList.add("no-user-message");
    messageDiv.innerHTML = "<h2>No User Found</h2>";
    cardsContainer.appendChild(messageDiv);
}

displayUsers(users);

let input = document.querySelector("#search");

input.addEventListener("input", () => {
    let searchTerm = input.value.toLowerCase().trim();

    if (searchTerm === "") {
        displayUsers(users);
        return;
    }

    let filteredUsers = users.filter(user => {
        return user.name.toLowerCase().startsWith(searchTerm);
    });

    if (filteredUsers.length === 0) {
        showNoUserMessage();
    } else {
        displayUsers(filteredUsers);
    }
});