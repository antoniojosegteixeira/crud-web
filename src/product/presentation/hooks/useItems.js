import { useState, useEffect } from "react";
import { getProducts } from "../../controllers/productController";
import ProductModel from "../../models/productModel";

function useItems() {
  const [items, setItems] = useState([]);
  const [itemName, setItemName] = useState("");
  const [itemEditId, setItemEditId] = useState(null);
  const [itemEditName, setItemEditName] = useState("");

  useEffect(() => {
    getProducts().then((listOfProducts) => {
      setItems(listOfProducts);
    });
  }, []);

  const handleItemNameChange = (event) => {
    setItemName(event.target.value);
  };

  const handleItemEditChange = (event) => {
    setItemEditName(event.target.value);
  };

  const handleAddItem = (event) => {
    event.preventDefault();
    const newItem = {
      id: items.length + 1,
      name: itemName,
    };
    // Simulate adding data to a backend API
    setItems([...items, newItem]);
    setItemName("");
  };

  const handleDeleteItem = (id) => {
    // Simulate deleting data from a backend API
    const updatedItems = items.filter((item) => item.id !== id);
    setItems(updatedItems);
  };

  const handleUpdateItem = (itemToUpdate) => {
    if (itemEditId !== itemToUpdate.id) {
      setItemEditId(itemToUpdate.id);
      setItemEditName(itemToUpdate.name);
      return;
    } else {
      // Simulate updating data in a backend API
      const updatedItems = items.map((item) =>
        item.id === itemToUpdate.id ? { ...item, name: itemEditName } : item
      );
      setItems(updatedItems);
      setItemEditId(null);
      setItemEditName("");
    }
  };

  return {
    items,
    itemName,
    itemEditId,
    itemEditName,
    setItemEditName: handleItemEditChange,
    setItemName: handleItemNameChange,
    handleAddItem,
    handleDeleteItem,
    handleUpdateItem,
  };
}

export default useItems;
