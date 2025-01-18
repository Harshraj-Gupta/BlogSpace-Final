// ********************** Card append functionality **********************************
// References to modal elements
const modal = document.getElementById("postEditor");
const publishBtn = document.querySelector(".publish-btn");
const cancelBtn = document.querySelector(".cancel-btn");
const closeBtn = document.querySelector(".close-btn");

// References to input fields
const postTitleInput = document.getElementById("postTitle");
const categorySelect = document.getElementById("category");
const editorContent = document.getElementById("editor");

// Reference to card container
const cardContainer = document.querySelector(".card-container");

function createCard(title, category, description) {
  // Image card
  const card = document.createElement("div");
  card.classList.add("card");
  const imageCard = document.createElement("div");
  imageCard.classList.add("card-image-container");
  const imgTag = document.createElement("img");
  if (category === "Technology") imgTag.src = "./Technology.jpg";
  else if (category === "Travel") imgTag.src = "./Travel.jpg";
  else if (category === "Food") imgTag.src = "./Food.jpg";
  else if (category === "Lifestyle") imgTag.src = "./Lifestyle.jpg";
  else if (category === "Business") imgTag.src = "./bus.jpg";
  else if (category === "Health") imgTag.src = "./Health.jpg";
  else if (category === "Education") imgTag.src = "./Education.jpg";
  else if (category === "Entertainment") imgTag.src = "./Entertainment.jpg";
  imgTag.alt = "Food";
  imgTag.classList.add("card-image");
  imageCard.appendChild(imgTag);

  // content card
  const contentCard = document.createElement("div");
  contentCard.classList.add("content");

  const categoryElement = document.createElement("h3");
  categoryElement.textContent = category;

  const titleElement = document.createElement("h1");
  titleElement.textContent = title;

  const descriptionElement = document.createElement("p");
  descriptionElement.className = "description";
  descriptionElement.innerHTML = description;

  const actionContainer = document.createElement("div");
  actionContainer.classList.add("action");

  // creating and appending like button
  const likeButton = document.createElement("button");
  likeButton.classList.add("icon-button", "like-button");
  likeButton.innerHTML = `<svg
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    stroke-width="2"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  >
                    <path
                      d="M19 14c1.49-1.46 3-3.21 3-5.5A5.5 5.5 0 0 0 16.5 3c-1.76 0-3 .5-4.5 2-1.5-1.5-2.74-2-4.5-2A5.5 5.5 0 0 0 2 8.5c0 2.3 1.5 4.05 3 5.5l7 7Z"
                    />
                  </svg>`;
  const span = document.createElement("span");
  span.classList.add("like-counter");
  span.textContent = 0;
  likeButton.appendChild(span);
  actionContainer.appendChild(likeButton);

  // creating and appending other buttons
  const iconButtons = [
    `<svg
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    stroke-width="2"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  >
                    <path
                      d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"
                    />
                  </svg>`,
    `<svg
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    stroke-width="2"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  >
                    <path d="M4 12v8a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2v-8" />
                    <polyline points="16 6 12 2 8 6" />
                    <line x1="12" y1="2" x2="12" y2="15" />
                  </svg>`,
    `<svg
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    stroke-width="2"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  >
                    <path d="M2 12s3-7 10-7 10 7 10 7-3 7-10 7-10-7-10-7Z" />
                    <circle cx="12" cy="12" r="3" />
                  </svg>`,
  ];
  iconButtons.forEach((icon) => {
    const button = document.createElement("button");
    button.className = "icon-button";
    button.innerHTML = icon;
    actionContainer.appendChild(button);
  });

  const readMore = document.createElement("a");
  readMore.className = "read-more";
  readMore.href = "#";
  readMore.textContent = "Read More";

  actionContainer.appendChild(readMore);

  // Assemble card

  contentCard.appendChild(categoryElement);
  contentCard.appendChild(titleElement);
  contentCard.appendChild(descriptionElement);
  contentCard.appendChild(actionContainer);
  card.appendChild(imageCard);
  card.appendChild(contentCard);

  // Append card to container
  cardContainer.insertBefore(card, cardContainer.firstChild);
}

// Event listener for the publish button

publishBtn.addEventListener("click", () => {
  const title = postTitleInput.value.trim();
  const category = categorySelect.value;
  const description = editorContent.innerHTML.trim();

  if (!title || !category || !description) {
    alert("Please fill out all fields.");
    return;
  }
  createCard(title, category, description);
  closeModal();
  window.location.href = "#recent-post-section";
  reload();
});

// Event listeners for closing the modal
cancelBtn.addEventListener("click", closeModal);
closeBtn.addEventListener("click", closeModal);

// Function to clear modal fields
function clearModalFields() {
  postTitleInput.value = "";
  categorySelect.value = "";
  editorContent.innerHTML = "";
}

// Function to open the modal
function openModal() {
  modal.classList.remove("hidden");
}

// Function to close the modal
function closeModal() {
  modal.classList.add("hidden");
  clearModalFields();
}
// // Function to clear modal fields
function clearModalFields() {
  postTitleInput.value = "";
  categorySelect.value = "";
  editorContent.innerHTML = "";
}

// Menu Functionality
const menuicon = document.querySelector(".menu-icon");
const crossicon = document.querySelector("#cross-icon");

const menucontainer = document.querySelector(".menu-container");
menuicon.addEventListener("click", () => {
  menucontainer.style.display =
    menucontainer.style.display === "none" ? "block" : "none";
});

document.addEventListener("DOMContentLoaded", () => {
  const createPostBtn = document.getElementById("createPostBtn");
  const heroButton = document.querySelector(".hero-button");
  const modal = document.getElementById("postEditor");
  const closeBtn = modal.querySelector(".close-btn");
  const cancelBtn = modal.querySelector(".cancel-btn");
  const toolbarButtons = document.querySelectorAll(".toolbar button");

  // Show modal
  createPostBtn.addEventListener("click", () => {
    modal.classList.remove("hidden");
  });
  heroButton.addEventListener("click", () => {
    modal.classList.remove("hidden");
  });

  // Hide modal
  const hideModal = () => {
    modal.classList.add("hidden");
    resetForm();
  };

  closeBtn.addEventListener("click", hideModal);
  cancelBtn.addEventListener("click", hideModal);

  // Close modal when clicking outside
  modal.addEventListener("click", (e) => {
    if (e.target === modal) {
      hideModal();
    }
  });

  toolbarButtons.forEach((button) => {
    button.addEventListener("click", () => {
      const command = button.dataset.command;

      if (command === "heading") {
        document.execCommand("formatBlock", false, "<h1>");
      } else {
        document.execCommand(command, false, null);
      }

      if (["bold", "italic", "underline"].includes(command)) {
        button.classList.toggle("active");
      }
    });
  });
});

// **************************** Note Taking Tool   ***************************************

// Initialize Lucide icons
lucide.createIcons();

// DOM Elements
const goalInput = document.getElementById("goalInput");
const goalDisplay = document.getElementById("goalDisplay");
const writingArea = document.getElementById("writingArea");
const wordCount = document.getElementById("wordCount");
const eventTitle = document.getElementById("eventTitle");
const eventDate = document.getElementById("eventDate");
const eventTime = document.getElementById("eventTime");
const addEventBtn = document.getElementById("addEvent");
const eventsList = document.getElementById("eventsList");

// Event Listeners
goalInput.addEventListener("input", updateGoal);
writingArea.addEventListener("input", updateWordCount);
addEventBtn.addEventListener("click", addEvent);

// Functions
function updateGoal() {
  const goal = parseInt(goalInput.value) || 0;
  goalDisplay.textContent = goal;
}

function updateWordCount() {
  const text = writingArea.value.trim();
  const words = text ? text.split(/\s+/).length : 0;
  wordCount.textContent = words;
}

function addEvent() {
  if (!eventTitle.value || !eventDate.value || !eventTime.value) {
    alert("Please fill in all event details");
    return;
  }

  const eventDiv = document.createElement("div");
  eventDiv.className = "event-item";

  const eventInfo = document.createElement("div");
  eventInfo.innerHTML = `
        <h3>${eventTitle.value}</h3>
        <p>${formatDate(eventDate.value)} at ${eventTime.value}</p>
    `;

  const deleteBtn = document.createElement("button");
  deleteBtn.innerHTML = '<i data-lucide="trash-2"></i>';
  deleteBtn.onclick = () => eventDiv.remove();

  eventDiv.appendChild(eventInfo);
  eventDiv.appendChild(deleteBtn);
  eventsList.appendChild(eventDiv);

  // Clear inputs
  eventTitle.value = "";
  eventDate.value = "";
  eventTime.value = "";

  // Reinitialize Lucide icons for the new elements
  lucide.createIcons();
}

function formatDate(dateStr) {
  const date = new Date(dateStr);
  return date.toLocaleDateString("en-US", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });
}

// Like functionality
function reload() {
  const likeButtons = document.querySelectorAll(".like-button"); // Select all like buttons

  likeButtons.forEach((button) => {
    let likes = 0; // Each button has its own like counter

    button.addEventListener("click", () => {
      console.log("hi");
      likes++;
      const likeCounter = button.querySelector(".like-counter"); // Find the counter inside the button
      likeCounter.textContent = likes; // Update the counter for the specific button
      console.log("hi");
    });
  });
}

document.addEventListener("DOMContentLoaded", reload);
