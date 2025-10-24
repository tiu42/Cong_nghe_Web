// ========== SEARCH FUNCTION ==========
const searchInput = document.getElementById("searchInput");
const searchBtn = document.getElementById("searchBtn");

searchBtn.addEventListener("click", () => {
  const keyword = searchInput.value.toLowerCase().trim();
  const products = document.querySelectorAll(".product");

  products.forEach((product) => {
    const name = product.querySelector(".product-name").textContent.toLowerCase();
    if (name.includes(keyword) || keyword === "") {
      product.style.display = "";
    } else {
      product.style.display = "none";
    }
  });
});

// Cho phép tìm kiếm ngay khi gõ (Enter hoặc keyup)
searchInput.addEventListener("keyup", (event) => {
  if (event.key === "Enter" || event.key === "Return") searchBtn.click();
});

// ========== ADD PRODUCT FORM ==========
const addBtn = document.getElementById("addProductBtn");
const form = document.getElementById("addProductForm");
const cancelBtn = document.getElementById("cancelBtn");
const errorMsg = document.getElementById("errorMsg");
const productList = document.getElementById("product-list");

// Ẩn/hiện form khi bấm nút Add Product
addBtn.addEventListener("click", () => {
  form.classList.toggle("hidden");
  errorMsg.textContent = "";
});

// Nút Cancel: ẩn form và reset
cancelBtn.addEventListener("click", () => {
  form.classList.add("hidden");
  form.reset();
  errorMsg.textContent = "";
});

// ========== HANDLE SUBMIT ==========
form.addEventListener("submit", (e) => {
  e.preventDefault();

  const name = document.getElementById("newName").value.trim();
  const price = document.getElementById("newPrice").value.trim();
  const desc = document.getElementById("newDesc").value.trim();

  // Validate dữ liệu
  if (!name || !price || isNaN(price) || price <= 0) {
    errorMsg.textContent = "⚠️ Please enter a valid product name and price.";
    return;
  }

  errorMsg.textContent = "";

  // Tạo sản phẩm mới
  const newProduct = document.createElement("article");
  newProduct.className = "product";
  newProduct.innerHTML = `
    <h3 class="product-name">${name}</h3>
    <p class="product-desc">${desc || "No description provided."}</p>
    <p class="product-price">Price: $${Number(price).toLocaleString()}</p>
  `;

  // Thêm vào đầu danh sách
  productList.prepend(newProduct);

  // Reset form và ẩn
  form.reset();
  form.classList.add("hidden");
});
