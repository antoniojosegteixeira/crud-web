import React from "react";
import useItems from "../hooks/useItems";

const ProjectPage = () => {
  const {
    items,
    itemName,
    itemEditId,
    itemEditName,
    setItemEditName,
    setItemName,
    handleAddItem,
    handleDeleteItem,
    handleUpdateItem,
  } = useItems();

  return (
    <div>
      <form onSubmit={handleAddItem}>
        <label>
          Item Name:
          <input type="text" value={itemName} onChange={setItemName} />
        </label>
        <button type="submit">Add Item</button>
      </form>
      <ul>
        {items.map((item) => (
          <li key={item.id}>
            {itemEditId !== item.id && item.name}
            {itemEditId === item.id && (
              <input defaultValue={itemEditName} onChange={setItemEditName} />
            )}

            <span>
              {itemEditId === item.id ? (
                <button onClick={() => handleUpdateItem(item)}>Save</button>
              ) : (
                <button onClick={() => handleUpdateItem(item)}>Edit</button>
              )}

              <button onClick={() => handleDeleteItem(item.id)}>Delete</button>
            </span>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ProjectPage;
