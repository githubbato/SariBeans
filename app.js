// OPTIMIZED DATA with Angeles City location focus
const products = [
    {
        id: 1,
        name: "Barako Blend",
        price: 180,
        category: "signature",
        badge: "⭐ Signature",
        description: "Strong Liberica coffee from Batangas - Available in Balibago",
        image: "https://images.unsplash.com/photo-1632663742505-4c15bd972c0f?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&w=600",
        alt: "Barako Blend coffee at Sari-Sari Bean Balibago Angeles City - Strong Liberica from Batangas Philippines",
        fullDescription: "Experience authentic Filipino Barako coffee at our Balibago location in Angeles City. This strong and bold Liberica blend from Batangas is available daily at our coffee shop near System Plus College. Perfect for students and coffee enthusiasts who prefer full-bodied cups."
    },
    {
        id: 2,
        name: "Sagada Arabica",
        price: 160,
        category: "traditional",
        badge: "☕ Best Seller",
        description: "Smooth Arabica from Mountain Province - #1 in Angeles City",
        image: "https://images.unsplash.com/photo-1623086923609-594e98bb0bff?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&w=600",
        alt: "Sagada Arabica coffee at Sari-Sari Bean Angeles City Balibago - Premium highland coffee from Sagada Philippines",
        fullDescription: "The #1 selling coffee at our Angeles City Balibago location. Sourced from the cool highlands of Sagada, this Arabica offers smooth, balanced taste with subtle chocolate notes. A favorite among System Plus students and professionals in Angeles City."
    },
    {
        id: 3,
        name: "Benguet Organic",
        price: 170,
        category: "traditional",
        badge: "🌿 Organic",
        description: "Certified organic Arabica - Sustainably grown, Available in Angeles",
        image: "https://images.unsplash.com/photo-1544421604-4bfaaeba6830?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&w=600",
        alt: "Benguet Organic coffee at Balibago coffee shop Angeles City - Sustainable organic Arabica from Benguet Philippines",
        fullDescription: "Certified organic coffee at our Balibago shop in Angeles City. Sustainably grown in Benguet with natural sweetness and floral notes. Perfect for environmentally conscious coffee lovers near System Plus College and throughout Angeles City, Pampanga."
    }
];

// ANGELES CITY LOCATION DATA
const locations = [
    {
        name: "Sari-Sari Bean - Balibago, Angeles City",
        address: "Balibago, Angeles City, Pampanga 2009",
        landmarks: "Near System Plus College Foundation, beside Abacan Bridge",
        hours: "Monday - Sunday: 7:00 AM - 10:00 PM",
        phone: "+63 45 678 9123",
        email: "hello@saribeans.store",
        image: "https://images.unsplash.com/photo-1684006997322-6a5128f44816?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&w=800",
        alt: "Sari-Sari Bean coffee shop exterior in Balibago Angeles City near System Plus College beside Abacan Bridge",
        features: ["Free WiFi", "Free Parking", "Air Conditioned", "Near System Plus", "Beside Abacan Bridge"],
        directions: {
            systemPlus: "2-minute walk from System Plus College main gate",
            abacanBridge: "Right beside Abacan Bridge on Balibago side",
            clark: "10-minute drive from Clark Freeport via MacArthur Highway",
            parking: "Free parking available in front and nearby streets"
        },
        coordinates: {
            lat: 15.1449,
            lng: 120.5910
        }
    }
];

const menuItems = {
    signature: [
        { name: "Ube Latte (8oz/12oz/16oz)", price: "₱140/150/160", description: "Most popular in Angeles City" },
        { name: "Pandan Latte (8oz/12oz/16oz)", price: "₱140/150/160", description: "Filipino favorite" },
        { name: "Mango Latte (8oz/12oz/16oz)", price: "₱140/150/160", description: "Tropical blend" },
        { name: "Leche Latte (8oz/12oz/16oz)", price: "₱140/150/160", description: "Sweet milk latte" },
        { name: "Dirty Matcha Latte (12oz/16oz)", price: "₱175/190", description: "Matcha with espresso" },
        { name: "Dirty Horchata (12oz/16oz)", price: "₱150/170", description: "Unique blend" }
    ],
    traditional: [
        { name: "Americano (8oz/12oz/16oz)", price: "₱110/120/130", description: "Classic black coffee" },
        { name: "Long Black (8oz/12oz/16oz)", price: "₱110/120/130", description: "Strong brew" },
        { name: "Cappuccino (8oz/12oz/16oz)", price: "₱130/140/150", description: "Italian classic" },
        { name: "Latte (8oz/12oz/16oz)", price: "₱130/140/150", description: "Smooth & creamy" },
        { name: "Flat White (8oz/12oz/16oz)", price: "₱130/140/150", description: "Microfoam perfection" }
    ],
    matcha: [
        { name: "Ube Matcha Latte (12oz/16oz)", price: "₱170/185", description: "Ube + matcha fusion" },
        { name: "Pandan Matcha Latte (12oz/16oz)", price: "₱170/185", description: "Filipino twist" },
        { name: "Mango Pandan Latte (12oz/16oz)", price: "₱170/185", description: "Tropical matcha" },
        { name: "Matcha Latte (12oz/16oz)", price: "₱160/175", description: "Pure Japanese matcha" }
    ],
    horchata: [
        { name: "Ube Horchata (12oz/16oz)", price: "₱145/165", description: "Purple yam rice drink" },
        { name: "Pandan Horchata (12oz/16oz)", price: "₱145/165", description: "Fragrant & sweet" },
        { name: "Mango Horchata (12oz/16oz)", price: "₱145/165", description: "Tropical refresher" },
        { name: "Horchata (12oz/16oz)", price: "₱130/150", description: "Classic rice drink" }
    ],
    refreshers: [
        { name: "Honey Calamansi Fizz (12oz/16oz)", price: "₱100/115", description: "Sweet citrus fizz" },
        { name: "Mango Calamansi Fizz (12oz/16oz)", price: "₱100/115", description: "Tropical fizz" },
        { name: "Calamansi Fizz (12oz/16oz)", price: "₱100/115", description: "Filipino lemon soda" }
    ]
};

// Initialize on page load
document.addEventListener('DOMContentLoaded', function() {
    renderProducts();
    renderLocations();
    renderMenu('all');
    setupEventListeners();
    setupScroll();
    document.getElementById('year').textContent = new Date().getFullYear();
});

// Render Products with optimized images
function renderProducts() {
    const grid = document.getElementById('products-grid');
    if (!grid) return;
    
    grid.innerHTML = products.map(product => `
        <div class="product-card" onclick="openProductModal(${product.id})">
            <div class="product-image">
                <img src="${product.image}" 
                     alt="${product.alt}" 
                     loading="lazy"
                     width="300"
                     height="250">
                <div class="product-badge">${product.badge}</div>
            </div>
            <div class="product-content">
                <div class="product-header">
                    <h3 class="product-name">${product.name}</h3>
                    <span class="product-price">₱${product.price}</span>
                </div>
                <p class="product-description">${product.description}</p>
                <button class="product-button" onclick="addToCart(${product.id}, event)" aria-label="Add ${product.name} to cart">
                    Order in Balibago
                </button>
            </div>
        </div>
    `).join('');
}

// Render Angeles City Location
function renderLocations() {
    const grid = document.getElementById('locations-grid');
    if (!grid) return;
    
    grid.innerHTML = locations.map(location => `
        <div class="location-card">
            <div class="location-image">
                <img src="${location.image}" 
                     alt="${location.alt}" 
                     loading="lazy"
                     width="800"
                     height="500">
            </div>
            <div class="location-content">
                <h3 class="location-name">${location.name}</h3>
                <div class="location-details">
                    <div class="location-detail">
                        <span class="location-icon">📍</span>
                        <div>
                            <p class="location-text"><strong>${location.address}</strong></p>
                            <p style="font-size: 0.9rem; margin-top: 0.25rem;">${location.landmarks}</p>
                        </div>
                    </div>
                    <div class="location-detail">
                        <span class="location-icon">🕒</span>
                        <p class="location-text">${location.hours}</p>
                    </div>
                    <div class="location-detail">
                        <span class="location-icon">📞</span>
                        <p class="location-text">
                            <a href="tel:${location.phone.replace(/\s/g, '')}" style="color: inherit; text-decoration: none;">
                                ${location.phone}
                            </a>
                        </p>
                    </div>
                    <div class="location-detail">
                        <span class="location-icon">✨</span>
                        <p class="location-text">${location.features.join(' • ')}</p>
                    </div>
                </div>
                <button class="location-button" 
                        onclick="trackGetDirections('${location.name}')" 
                        aria-label="Get directions to ${location.name}">
                    Get Directions to Balibago
                </button>
            </div>
        </div>
    `).join('');
}

// Render Menu with enhanced structure
function renderMenu(category) {
    const menuContainer = document.getElementById('menu-categories');
    if (!menuContainer) return;
    
    const categoryIcons = {
        signature: '✨',
        traditional: '☕',
        matcha: '🍵',
        horchata: '🥛',
        refreshers: '💧'
    };
    
    const categoryColors = {
        signature: '#C9A961',
        traditional: '#D4845C',
        matcha: '#8B9E7E',
        horchata: '#FF6B35',
        refreshers: '#6B9BD1'
    };
    
    const categoryTitles = {
        signature: 'Signature Filipino Drinks',
        traditional: 'Classic Coffee',
        matcha: 'Matcha Beverages (Hot/Cold)',
        horchata: 'Horchata Drinks (Cold)',
        refreshers: 'Refreshers (Cold)'
    };

    let html = '';
    if (category === 'all') {
        Object.keys(menuItems).forEach(cat => {
            html += createMenuCategory(cat, menuItems[cat], categoryIcons[cat], categoryColors[cat], categoryTitles[cat]);
        });
    } else {
        html = createMenuCategory(category, menuItems[category], categoryIcons[category], categoryColors[category], categoryTitles[category]);
    }
    
    menuContainer.innerHTML = html;
}

function createMenuCategory(cat, items, icon, color, title) {
    return `
        <div class="menu-category">
            <div class="menu-category-header">
                <div class="menu-category-icon" style="background-color: ${color};">${icon}</div>
                <h3 class="menu-category-title">${title}</h3>
            </div>
            <div class="menu-items" role="list">
                ${items.map(item => `
                    <div class="menu-item" role="listitem">
                        <div>
                            <span class="menu-item-name">${item.name}</span>
                            ${item.description ? `<span style="display: block; font-size: 0.75rem; color: rgba(61, 40, 23, 0.6); margin-top: 0.25rem;">${item.description}</span>` : ''}
                        </div>
                        <span class="menu-item-price">${item.price}</span>
                    </div>
                `).join('')}
            </div>
        </div>
    `;
}

// Product Modal
function openProductModal(productId) {
    const product = products.find(p => p.id === productId);
    const modal = document.getElementById('product-modal');
    const modalBody = document.getElementById('modal-body');
    
    if (!modal || !modalBody || !product) return;
    
    modalBody.innerHTML = `
        <img src="${product.image}" 
             alt="${product.alt}" 
             class="modal-product-image"
             width="600"
             height="400">
        <h2 class="modal-product-name">${product.name}</h2>
        <p class="modal-product-price">₱${product.price}</p>
        <p class="modal-product-description">${product.fullDescription}</p>
        <button class="modal-add-to-cart" onclick="addToCart(${product.id}, event)">
            Add to Cart
        </button>
    `;
    
    modal.classList.add('active');
    
    // Track product view in GA4
    if (typeof gtag !== 'undefined') {
        gtag('event', 'view_item', {
            currency: 'PHP',
            value: product.price,
            items: [{
                item_id: product.id,
                item_name: product.name,
                item_category: product.category,
                price: product.price
            }]
        });
    }
}

function closeModal() {
    const modal = document.getElementById('product-modal');
    if (modal) modal.classList.remove('active');
}

// Add to Cart with GA4 tracking
function addToCart(productId, event) {
    event.stopPropagation();
    const product = products.find(p => p.id === productId);
    if (!product) return;

    // Track in GA4
    if (typeof gtag !== 'undefined') {
        gtag('event', 'add_to_cart', {
            currency: 'PHP',
            value: product.price,
            items: [{
                item_id: product.id,
                item_name: product.name,
                price: product.price,
                quantity: 1
            }]
        });
    }

    // Show notification
    const notification = document.getElementById('cart-notification');
    if (notification) {
        notification.innerHTML = `✅ Added <strong>${product.name}</strong> to cart! <a href="cart.html">View Cart</a>`;
        notification.style.display = 'block';
        setTimeout(() => notification.style.display = 'none', 3000);
    }

    closeModal();
}

// Track get directions
function trackGetDirections(locationName) {
    if (typeof gtag !== 'undefined') {
        gtag('event', 'get_directions', {
            location_name: locationName,
            city: 'Angeles City',
            area: 'Balibago'
        });
    }
    window.open('https://www.google.com/maps/search/Balibago+Angeles+City+System+Plus', '_blank');
}

// Menu Filter
function setupEventListeners() {
    const filterBtns = document.querySelectorAll('.filter-btn');
    filterBtns.forEach(btn => {
        btn.addEventListener('click', function() {
            filterBtns.forEach(b => {
                b.classList.remove('active');
                b.setAttribute('aria-selected', 'false');
            });
            this.classList.add('active');
            this.setAttribute('aria-selected', 'true');
            const filter = this.getAttribute('data-filter');
            renderMenu(filter);
            
            // Track filter usage
            if (typeof gtag !== 'undefined') {
                gtag('event', 'menu_filter', {
                    filter_category: filter
                });
            }
        });
    });
    
    // Modal close handlers
    const modal = document.getElementById('product-modal');
    const closeBtn = document.querySelector('.modal-close');
    
    if (closeBtn) closeBtn.addEventListener('click', closeModal);
    if (modal) {
        modal.addEventListener('click', function(e) {
            if (e.target === modal) closeModal();
        });
    }
}

// Mobile Menu Toggle
function toggleMobileMenu() {
    const mobileNav = document.getElementById('mobile-nav');
    const menuIcon = document.getElementById('menu-icon');
    const btn = document.querySelector('.mobile-menu-btn');
    
    if (mobileNav.classList.contains('active')) {
        mobileNav.classList.remove('active');
        menuIcon.textContent = '☰';
        btn.setAttribute('aria-expanded', 'false');
    } else {
        mobileNav.classList.add('active');
        menuIcon.textContent = '✕';
        btn.setAttribute('aria-expanded', 'true');
    }
}

// Scroll Effects
function setupScroll() {
    const header = document.querySelector('.header');
    if (!header) return;
    
    window.addEventListener('scroll', function() {
        if (window.scrollY > 50) {
            header.classList.add('scrolled');
        } else {
            header.classList.remove('scrolled');
        }
    });
    
    // Smooth scroll for anchor links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            const href = this.getAttribute('href');
            if (href !== '#' && document.querySelector(href)) {
                e.preventDefault();
                document.querySelector(href).scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                });
                
                const mobileNav = document.getElementById('mobile-nav');
                if (mobileNav && mobileNav.classList.contains('active')) {
                    toggleMobileMenu();
                }
            }
        });
    });
}
