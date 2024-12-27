import React from "react";

const DataItem = ({ id, name, age, email, handleRemove }) => {
  return (
    <tr>
      <td>{id}</td>
      <td>{name}</td>
      <td>{age}</td>
      <td>{email}</td>
      <td>
        <button className="btn btn-primary">Edit</button> &nbsp;
        <button className="btn btn-danger" onClick={() => handleRemove(id)}>
          Remove
        </button>
      </td>
    </tr>
  );
};

export default DataItem;
