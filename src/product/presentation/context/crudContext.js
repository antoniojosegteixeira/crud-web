import React, { createContext, useState, useEffect } from "react";
import {
  getProducts,
  addProduct,
  deleteProduct,
  editProduct,
} from "../../controllers/productController";

export const CrudContext = createContext();

export const CrudContextProvider = (props) => {
  const [items, setItems] = useState([]);
  const [updatingItemId, setUpdatingItemId] = useState("");

  useEffect(() => {
    getAllProducts();
  }, []);

  const getAllProducts = () => {
    getProducts().then((listOfProducts) => {
      console.log(listOfProducts);
      setItems(listOfProducts);
    });
  };

  const handleAddNewItem = async (product) => {
    // Add item to database
    try {
      await addProduct(product);
      getAllProducts();
    } catch (err) {
      console.log(`error adding ${product}`);
    }
  };

  const handleDeleteItem = async (id) => {
    try {
      await deleteProduct(id);
      getAllProducts();
    } catch (err) {
      console.log(`error deleting ${id}`);
    }
  };

  const handleUpdateItem = async (product) => {
    try {
      console.log(`editing ${product}`);
      await editProduct(product);
      setUpdatingItemId("");
      getAllProducts();
    } catch (err) {
      console.log(`error updating ${product}`);
    }
  };

  return (
    <CrudContext.Provider
      value={{
        items,
        handleAddNewItem,
        handleDeleteItem,
        updatingItemId,
        setUpdatingItemId,
        handleUpdateItem,
      }}
    >
      {props.children}
    </CrudContext.Provider>
  );
};
