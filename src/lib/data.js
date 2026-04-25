export async function getCategories() {
  const res = await fetch(
    "https://openapi.programming-hero.com/api/news/categories",
  );
  const data = res.json();
  return data;
}

export async function getNewsByC(id) {
  const res = await fetch(
    `https://openapi.programming-hero.com/api/news/category/${id}`,
  );
  const data = res.json();
  return data;
}