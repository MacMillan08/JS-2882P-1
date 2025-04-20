document.addEventListener("DOMContentLoaded", () => {
    fetchUsers();
  });
  
  async function fetchUsers() {
    try {
      const response = await fetch("https://jsonplaceholder.typicode.com/users");
      const users = await response.json();
      displayUsers(users);
    } catch (error) {
      console.error("Veri çekilirken hata oluştu:", error);
    }
  }
  
  function displayUsers(users) {
    const container = document.getElementById("user-list");
  
    users.forEach(user => {
      const card = document.createElement("div");
      card.className = "user-card";
  
      card.innerHTML = `
        <h2>${user.name} (@${user.username})</h2>
  
        <div class="section">
          <i class="fa-solid fa-user"></i><strong>ID:</strong> ${user.id}
        </div>
  
        <div class="section">
          <i class="fa-solid fa-envelope"></i> <strong>Email:</strong> ${user.email}<br>
          <i class="fa-solid fa-phone"></i> <strong>Telefon:</strong> ${user.phone}<br>
          <i class="fa-solid fa-globe"></i> <strong>Web:</strong> ${user.website}
        </div>
  
        <div class="section">
          <i class="fa-solid fa-location-dot"></i> <strong>Adres:</strong><br>
          ${user.address.street}, ${user.address.suite}<br>
          ${user.address.city}, ${user.address.zipcode}
        </div>
  
        <div class="section">
          <i class="fa-solid fa-building"></i> <strong>Şirket:</strong><br>
          ${user.company.name}<br>
          "${user.company.catchPhrase}"<br>
          (${user.company.bs})
        </div>
      `;
  
      container.appendChild(card);
    });
  }
  