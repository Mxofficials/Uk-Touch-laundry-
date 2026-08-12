// ==========================================
// UK TOUCH LAUNDRY - PRODUCTS / SERVICES (products.js)
// ==========================================

const servicesData = [
  {
    id: 1,
    title: "Wash & Fold",
    description: "Everyday laundry washed, dried, and neatly folded using premium, eco-friendly detergents.",
    image: "fold.jpg"
  },
  {
    id: 2,
    title: "Dry Cleaning",
    description: "Expert cleaning care for delicate fabrics, suits, dresses, and formal wear.",
    image: "laundry.jpg"
  },
  {
    id: 3,
    title: "Steam Pressing & Ironing",
    description: "Crisp, wrinkle-free pressing to keep your outfits looking fresh and professional.",
    image: "iron.jpg"
  },
  {
    id: 4,
    title: "Stain Removal",
    description: "Specialized treatment targeting tough spots and stubborn stains without harming fabric.",
    image: "stain.jpg"
  },
  {
    id: 5,
    title: "Bedding & Duvet Care",
    description: "Deep cleaning for heavy blankets, comforters, duvets, and bed linens.",
    image: "bed.jpg"
  },
  {
    id: 6,
    title: "Express Delivery",
    description: "Quick turnaround times with convenient pickup and delivery right to your door.",
    image: "aim.jpg"
  }
];

// Function to dynamically render service cards into the DOM
function renderServices() {
  const container = document.getElementById('servicesContainer');

  if (!container) return;

  // Clear existing content
  container.innerHTML = '';

  // Loop through services and create HTML elements
  servicesData.forEach(service => {
    const card = document.createElement('div');
    card.className = 'service-card';

    card.innerHTML = `
      <img src="${service.image}" alt="${service.title}">
      <div class="service-info">
        <h3>${service.title}</h3>
        <p>${service.description}</p>
      </div>
    `;

    container.appendChild(card);
  });
}

// Run render function once the DOM content is fully loaded
document.addEventListener('DOMContentLoaded', renderServices);