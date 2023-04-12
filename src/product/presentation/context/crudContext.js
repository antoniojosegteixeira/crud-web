import React, { createContext, useState, useEffect } from "react";
import {
  getProducts,
  addProduct,
  deleteProduct,
  editProduct,
} from "../../controllers/productController";
import ErrorModel from "../../models/errorModel";

export const CrudContext = createContext();

export const CrudContextProvider = (props) => {
  const [items, setItems] = useState([]);
  const [updatingItemId, setUpdatingItemId] = useState("");

  useEffect(() => {
    getAllProducts();
  }, []);

  const getAllProducts = async () => {
    try {
      const listOfProducts = await getProducts();
      setItems(listOfProducts);
    } catch (err) {
      return new ErrorModel("Erro ao buscar produtos");
    }
  };

  const handleAddNewItem = async (product) => {
    // Add item to database
    try {
      await addProduct(product);
      getAllProducts();
    } catch (err) {
      return new ErrorModel("Erro ao adicionar produto");
    }
  };

  const handleDeleteItem = async (id) => {
    try {
      await deleteProduct(id);
      getAllProducts();
    } catch (err) {
      return new ErrorModel("Erro ao deletar produto");
    }
  };

  const handleUpdateItem = async (product) => {
    try {
      console.log(`editing ${product}`);
      await editProduct(product);
      setUpdatingItemId("");
      getAllProducts();
    } catch (err) {
      return new ErrorModel("Erro ao editar produto");
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
