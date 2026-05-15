// 1. DATA: List of 30 products
const products = [
    // Detergent Cake | Category: Laundry
    {id: 1, name: "Guru Detergent Cake", cat: "laundry", price: "₹10", color: "Blue|Green|White|Pink", weight: "135-150grams", img: "Image/GDC_10.png" },
    {id: 2, name: "Guru Jumbo Detergent Cake", cat: "laundry", price: "₹20", color: "NA", weight: "300grams", img: "Image/GJDC_20.png" },
    {id:3, name: "Guru Gold Detergent Cake", cat: "laundry", price: "₹31", color: "Blue", weight: "250grams", img: "Image/GGDC_31.JPG"},
    {id:4, name: "Guru Active Wash", cat: "laundry", price: "₹25", color: "Blue", weight: "250-300grams", img: "Image/GAW_25.png"},
    {id:5, name: "Cushi Detergent Cake", cat: "laundry", price: "₹20", color: "Pink", weight: "150 grams", img: "Image/CDC_20.png"},
    //Detergent Washing Powder | Category: Laundry
    {id:6, name: "Guru Washing Powder", cat: "laundry", price: "₹5", color: "Green", weight: "60 grams", img: "Image/GWP_05.JPG"},
    {id:7, name: "Guru Washing Powder", cat: "laundry", price: "₹10", color: "Green", weight: "125 grams", img: "Image/GWP_10.JPG"},
    {id:8, name: "Guru Washing Powder", cat: "laundry", price: "₹40", color: "Green|Blue", weight: "500 grams", img: "Image/GWP_40.JPG"},
    {id:9, name: "Guru Washing Powder", cat: "laundry", price: "₹75", color: "Green", weight: "1 Kg grams", img: "Image/GWP_75.JPG"},
    {id:10, name: "Guru Washing Powder", cat: "laundry", price: "₹400", color: "Blue", weight: "5 Kg", img: "Image/GWP_400.JPG"},
    {id:11, name: "Guru Total Washing Powder", cat: "laundry", price: "₹99", color: "Orange", weight: "1.75 Kg", img: "Image/GTWP_99.JPG"},
    {id:12, name: "Guru Total Washing Powder", cat: "laundry", price: "₹80", color: "NA", weight: "1 Kg", img: "Image/GTWP_80.JPG"},
    {id:13, name: "Guru Janatha Washing Powder", cat: "laundry", price: "₹350", color: "Blue|Pink", weight: "5+1=6 Kg", img: "Image/GJWP_350.JPG"},
    //Detergent Washing Liquid | Category: Laundry
    {id:14, name: "Guru Ultra Pouch", cat: "laundry", price: "₹99", color: "Blue|Pink", weight: "1Ltr", img: "Image/GUP_99.png"},
    {id:15, name: "Cushi Clean Multipurpose Liquid", cat: "laundry", price: "₹70", color: "Green", weight: "500ml", img: "Image/CCML_70.png"},
    {id:16, name: "Cushi Clean Multipurpose Liquid", cat: "laundry", price: "₹110", color: "Green", weight: "1Ltr", img: "Image/CCML_110.png"},
    {id:17, name: "Cushi Clean Multipurpose Liquid", cat: "laundry", price: "₹500", color: "Green|Extra Perfume", weight: "5Ltr", img: "Image/CCML_500.png"},
    {id:18, name: "Guru Matic Detergent Liquid", cat: "laundry", price: "₹450", color: "Green|Orange|Blue", weight: "5Ltr", img: "Image/GMDL_450.png"},
    {id:19, name: "Guru Detergent Liquid", cat: "laundry", price: "₹200", color: "Green|Pink|Blue", weight: "2Ltr", img: "Image/GDL_200.JPG"},
    {id:20, name: "Total Detergent Liquid", cat: "laundry", price: "₹170", color: "NA", weight: "1Ltr", img: "Image/TDL_170.png"},
    {id:21, name: "Total Detergent Liquid", cat: "laundry", price: "₹750", color: "NA", weight: "5Ltr", img: "Image/TDL_750.png"},
    //DISH WASH  | Category: DISH WASH
    { id: 27, name: "Galaxy Dish Wash Bar", cat: "dish", price: "₹10", color: "Green", weight: "100-125g", img: "Image/GDWB_10.JPG" },
    { id: 28, name: "Galaxy Dish Wash Powder", cat: "dish", price: "₹10", color: "Green", weight: "250g", img: "Image/GDWP_10.JPG" },
    { id: 29, name: "Galaxy Dish Wash Round Bar", cat: "dish", price: "₹40", color: "Green", weight: "250g", img: "Image/GDWRB_40.JPG" },
    { id: 30, name: "Galaxy Dish Wash Round Bar", cat: "dish", price: "₹60", color: "Green", weight: "500g", img: "Image/GDWRB_60.JPG" },
    { id: 31, name: "Galaxy Dish Wash Liquid", cat: "dish", price: "₹50", color: "Green", weight: "250ml", img: "Image/GDWL_50.png" },
    { id: 32, name: "Galaxy Dish Wash Liquid", cat: "dish", price: "₹100", color: "Green", weight: "500ml", img: "Image/GDWL_100.png" },


    
];



document.addEventListener('DOMContentLoaded', () => {
    const grid = document.getElementById('product-grid');
    const searchInput = document.getElementById('productSearch');
    const filterBtns = document.querySelectorAll('.filter-btn');
    const modal = document.getElementById('productModal');

    // 2. FUNCTION: Display Products
    function displayProducts(items) {
        grid.innerHTML = items.map(p => `
            <div class="product-card" data-category="${p.cat}">
                <img src="${p.img}" alt="${p.name}">
                <span class="badge" style="font-size:0.7rem; color: #888;">${p.cat.toUpperCase()}</span>
                <h3>${p.name}</h3>
                <p class="card-price">${p.price}</p>
                <button class="view-btn" onclick="openModal(${p.id})">View Details</button>
            </div>
        `).join('');
    }

    // 3. FUNCTION: Filter & Search
    function updateGallery() {
        const term = searchInput.value.toLowerCase();
        const activeCat = document.querySelector('.filter-btn.active').dataset.filter;

        const filtered = products.filter(p => {
            const matchesSearch = p.name.toLowerCase().includes(term);
            const matchesCat = activeCat === 'all' || p.cat === activeCat;
            return matchesSearch && matchesCat;
        });
        displayProducts(filtered);
    }

    // 4. MODAL LOGIC
    window.openModal = (id) => {
        const p = products.find(prod => prod.id === id);
        document.getElementById('modalTitle').innerText = p.name;
        document.getElementById('modalImg').src = p.img;
        document.getElementById('modalPrice').innerText = p.price;
        document.getElementById('modalColor').innerText = p.color;
        document.getElementById('modalWeight').innerText = p.weight;
        document.getElementById('modalCategory').innerText = p.cat.toUpperCase();
        modal.style.display = "block";
    };

    // Events
    searchInput.addEventListener('input', updateGallery);
    filterBtns.forEach(btn => {
        btn.addEventListener('click', () => {
            document.querySelector('.filter-btn.active').classList.remove('active');
            btn.classList.add('active');
            updateGallery();
        });
    });

    // Initial Load
    displayProducts(products);

    // Close Modal
    document.querySelector('.close-modal').onclick = () => modal.style.display = "none";
    window.onclick = (e) => { if(e.target == modal) modal.style.display = "none"; }
});
