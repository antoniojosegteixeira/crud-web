const url = "https://localhost:3000/";

export async function getProducts() {
  const response = await fetch(`${url}`, {});

  return response.data;
}

export async function addProduct() {
  const response = await fetch(`${url}/add-product`, {});

  return response.data;
}

export async function editProduct() {
  const response = await fetch(`${url}/edit-product`, {});

  return response.data;
}

export async function deleteProduct(id) {
  const response = await fetch(`${url}/delete-product`, {});

  return response.data;
}
