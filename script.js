// Sample kills data (you can later load from a file or API)
const killsData = [
  { name: "Slatzao", kills: 42 },
  { name: "Pond", kills: 37 },
  { name: "killer", kills: 33 },
  { name: "Vexed", kills: 29 },
  { name: "RustLord", kills: 25 }
];

// Sample shop items
const shopItems = [
  {
    name: "VIP Rank",
    desc: "Priority queue, colored name, VIP-only events.",
    price: 10,
    link: "https://yourstore.com/vip"
  },
  {
    name: "Queue Skip Pack",
    desc: "Skip the queue for the next 5 joins.",
    price: 5,
    link: "https://yourstore.com/queueskip"
  },
  {
    name: "Starter Pack",
    desc: "Starter kit with basic gear and resources.",
    price: 7,
    link: "https://yourstore.com/starterpack"
  }
];

function renderKills() {
  const tbody = document.querySelector("#kills-table tbody");
  const sorted = killsData.sort((a, b) => b.kills - a.kills);

  sorted.forEach((player, i) => {
    const row = document.createElement("tr");
    row.innerHTML = `
      <td>${i + 1}</td>
      <td>${player.name}</td>
      <td>${player.kills}</td>
    `;
    tbody.appendChild(row);
  });
}

function renderShop() {
  const shop = document.getElementById("shop-items");

  shopItems.forEach(item => {
    const div = document.createElement("div");
    div.className = "shop-item";
    div.innerHTML = `
      <h3>${item.name}</h3>
      <p>${item.desc}</p>
      <p><strong>$${item.price}</strong></p>
      <button onclick="window.open('${item.link}', '_blank')">
        Purchase
      </button>
    `;
    shop.appendChild(div);
  });
}

renderKills();
renderShop();
