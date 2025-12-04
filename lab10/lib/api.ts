export async function getProducts() {
  const res = await fetch("https://deisishop.pythonanywhere.com/products");
  return await res.json();
}

export async function getProduct(id: string) {
  const res = await fetch(`https://deisishop.pythonanywhere.com/product/${id}`);
  return await res.json();
}

export async function getCategories() {
  const res = await fetch("https://deisishop.pythonanywhere.com/categories");
  return await res.json();
}

export async function getProductsByCategory(category: string) {
  const res = await fetch(
    `https://deisishop.pythonanywhere.com/products/category/${category}`,
    { cache: "no-store" }
  );
  return res.json();
}

