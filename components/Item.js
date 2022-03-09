import React, { useContext } from "react";
import { ItemsContext } from "../context/items";

const Item = ({ item }) => {
  // for updating and deleting item
  const { updateItem, deleteItem } = useContext(ItemsContext);

  // Update the record when the checkbox is checked
  const handleCompleted = () => {
    const updatedFields = { ...item?.fields };
    const updatedItem = { id: item?.id, fields: updatedFields };
    updateItem(updatedItem);
  };

  return (
    <li className="flex items-center d-flex rounded-lg my-2 py-2 px-4">
      <p className="flex-1 text-gray-800 mx-2">
        {item?.fields?.name}
      </p>
      {/* delete item when the delete button is clicked*/}
      <button
        type="button"
        className="text-sm bg-red-500 hover:bg-red-700 py-1 px-2 rounded"
        onClick={() => deleteItem(item?.id)}
      >
        Delete
      </button>
    </li>
  );
};

export default Item;
