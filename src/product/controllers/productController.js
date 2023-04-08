import ProductModel from "../models/productModel";

const url = "http://localhost:4000";

export async function getProducts() {
  const response = await fetch(`${url}`, {});
  const jsonData = await response.json();

  // Creates a list of items from json response
  const listOfItems = [];

  if (jsonData) {
    jsonData.map((item) => {
      const itemModel = ProductModel.fromJson(item);
      listOfItems.push(itemModel);
    });
  }

  return listOfItems;
}

export async function addProduct(data) {
  await fetch(`${url}/add-product`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(data),
  });
}

export async function editProduct(data) {
  await fetch(`${url}/edit-product`, {
    method: "PUT",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(data),
  });
}

export async function deleteProduct(id) {
  await fetch(`${url}/delete-product/${id}`, {
    method: "DELETE",
  });

  return;
}
