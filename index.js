const API =
  "https://www.whenisthenextmcufilm.com/api";

async function loadMCU() {
  const res = await fetch(API);
  const data = await res.json();

  document.getElementById("days").innerText = data.days_until;
  document.getElementById("title").innerText = data.title;
  document.getElementById("overview").innerText = data.overview;
  document.getElementById("date").innerText = "📅 " + data.release_date;
  document.getElementById("type").innerText = "🎬 " + data.type;
  document.getElementById("poster").src = data.poster_url;

  document.getElementById("nextCard").innerHTML = `
    <img src="${data.following_production.poster_url}">
    <div>
      <h3>${data.following_production.title}</h3>
      <p>${data.following_production.release_date}</p>
      <small>${data.following_production.days_until} days later</small>
    </div>
  `;
}

loadMCU();
