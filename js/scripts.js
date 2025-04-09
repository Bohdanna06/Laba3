const coffeeData = [
    {
        image: '/image/coffe_cup3.jpg',
        name: 'Latte',
        description: 'A latte or caffè latte is a milk coffee that boasts a silky layer of foam as a real highlight to the drink'
    },
    {
        image: '/image/iced-coffee-05.jpg', 
        name: 'Cappuccino',
        description: 'A cappuccino is a beloved espresso-based hot coffee drink made with layering of espresso, steamed milk, and milk foam on top'
    },
    {
        image: '/image/Instant-Iced-Coffee-5-1.jpg', 
        name: 'Macchiato',
        description: ' The macchiato is an espresso coffee drink, topped with a small amount of foamed or steamed milk to allow the taste of the espresso to still shine through.'
    },
    {
        image: '/image/coffee1.webp',
        name: 'Americano with milk',
        description: 'Americano with milk is an espresso-based beverage made by adding hot water and milk to a shot of espresso'
    },
    {
        image: '/image/nespresso-recipes-Granola-coffee.webp', 
        name: 'Nespresso',
        description: ' Nespresso is a premium coffee brand, and by 2011 annual sales exceeded 3 billion Swiss francs. The word Nespresso is a combination of the words "Nestlé" and "Espresso", which are often used in other Nestlé brands.'
    },
    {
        image: '/image/coffe3.jpeg',
        name: 'Ristretto',
        description: 'A ristretto is a short shot of espresso made with finely ground beans and less water.'
    },
    {
        image: ' image/images.jpeg',
        name: 'Flat White',
        description: 'A flat white is a blend of microfoamed milk poured over a single or double shot of espresso.'
    },
    {
        image: 'image/Beverages_Product_Images_1200x1200_CoffeeFrappe.webp',
        name: 'Frappe',
        description: 'The Frappé is generally made of water, espresso, sugar, milk, ice and is shaken, blended or beaten to combine the ingredients.'
    }
];

let currentIndex = 0;

function loadCoffeeImages() {
    const gallery = document.getElementById('coffee-gallery');
    

    if (!gallery) {
        alert('Gallery not found');
        return;
    }

    // Перевірка, чи є зображення для завантаження
    if (coffeeData.length === 0) {
        alert('No coffee data available');
        return;
    }

    // Завантажуємо зображення
    for (let i = currentIndex; i < currentIndex + 2 && i < coffeeData.length; i++) {
        const coffee = coffeeData[i];
        
        const img = document.createElement('img');
        img.src = coffee.image; 
        img.alt = coffee.name;
        img.classList.add('coffee-img');
        
        img.addEventListener('click', () => showCoffeeInfo(coffee));
        
        gallery.appendChild(img);
    }

    currentIndex += 2;

    if (currentIndex >= coffeeData.length) {
        document.getElementById('loadMore').style.display = 'none';
    }
}


// Функція для показу інформації про каву
function showCoffeeInfo(coffee) {
    const infoDiv = document.getElementById('coffeeInfo');
    
    if (!infoDiv) {
        alert('Coffee info div not found');
        return;
    }

    infoDiv.innerHTML = 
    `<h2>${coffee.name}</h2>
    <p>${coffee.description}</p>
    <span id="closeBtn" class="close-btn">х</span>`;
    infoDiv.style.display = 'block';

  
    const closeBtn = document.getElementById('closeBtn');
    if (closeBtn) {
        // Спочатку видаляємо старий обробник події, якщо є
        closeBtn.removeEventListener('click', closeInfo);
        // Додаємо новий обробник події
        closeBtn.addEventListener('click', closeInfo);
    }
}

// Функція для закриття інформації про каву
function closeInfo() {
    const infoDiv = document.getElementById('coffeeInfo');
    infoDiv.style.display = 'none';
}


document.getElementById('loadMore').addEventListener('click', loadCoffeeImages);


window.addEventListener("load", function() {
    loadCoffeeImages();
});
