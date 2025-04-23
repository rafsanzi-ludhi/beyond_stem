let currentIndex = 0;
let facts = [];

function displayFact(index) {
  const container = document.getElementById("fact-display");
  container.innerHTML = "";

  const data = facts[index];

  const card = document.createElement("div");
  card.className = "card mx-auto mb-4";
  card.style.maxWidth = "600px";

  const img = document.createElement("img");
  img.src = `${data.fact_img}`;

  img.alt = "Fact image";
  img.className = "card-img-top";
  card.appendChild(img);

  const body = document.createElement("div");
  body.className = "card-body";

  const factText = document.createElement("p");
  factText.className = "card-text";
  factText.textContent = data.fact;

  body.appendChild(factText);
  card.appendChild(body);

  container.appendChild(card);
}

async function fetchFacts() {
  const options = {
    headers: {
      Authorization: localStorage.getItem("token"),
    },
  };

  const response = await fetch("http://localhost:3000/history", options);

  if (response.status === 200) {
    facts = await response.json();
    if (facts.length > 0) {
      displayFact(currentIndex);
    } else {
      // Optional: Display a message or handle no facts.
      // Do we want this functionality?
      const container = document.getElementById("fact-display");
      container.innerHTML = "<p>No facts available.</p>";
    }
  } else {
    window.location.assign("./index.html");
  }
}

document.getElementById("next-btn").addEventListener("click", () => {
  if (currentIndex < facts.length - 1) {
    currentIndex++;
    displayFact(currentIndex);
  }
});

document.getElementById("prev-btn").addEventListener("click", () => {
  if (currentIndex > 0) {
    currentIndex--;
    displayFact(currentIndex);
  }
});

fetchFacts();
