import React from "react";
import DataItem from "./DataItem";

const Datas = ({ data,handleRemove }) => {
  return (
    <table className="table table-hover">
      <thead>
        <tr>
          <td>id</td>
          <td>Name</td>
          <td>Age</td>
          <td>Email</td>
          <td>Action</td>
        </tr>
      </thead>
      <tbody>
        {data.map((item, index) => (
          <DataItem key={index} {...item} handleRemove={handleRemove}></DataItem>
        ))}
      </tbody>
    </table>
  );
};

export default Datas;
