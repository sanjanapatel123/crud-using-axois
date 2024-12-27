import React, { useState } from "react";
import { v4 as uuid } from "uuid";

const DataForm = ({ data, addData }) => {
  const [name, setName] = useState("");
  const [age, setAge] = useState(0);
  const [email, setEmail] = useState("");

  function handleAdd(e) {
    e.preventDefault();
    if (name.trim().length === 0 && email.trim().length === 0) {
      alert("Please enter a name");
    } else if (age === 0) {
      alert("Please enter an age");
    } else {
      const data = {
        id: Math.floor(Math.random() * 100),
        name: name,
        age: age,
        email: email,
      };

      addData(data);
      setName("");
      setAge(0);
      setEmail("");
    }
  }
  function handleEdit(id) {}
  return (
    <form
      style={{
        display: "flex",
        marginTop: "10px",
        justifyContent: "center",
        marginBottom: "10px",
      }}
    >
      <input
        type="text"
        placeholder="enter the name"
        name="name"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />{" "}
      &nbsp;
      <input
        type="text"
        placeholder="enter the age"
        name="name"
        value={age}
        onChange={(e) => setAge(e.target.value)}
      />{" "}
      &nbsp;
      <input
        type="email"
        placeholder="enter the email"
        name="name"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />{" "}
      &nbsp;
      <button className="btn btn-primary">save</button>
      <button className="btn btn-success " onClick={(e) => handleAdd(e)}>
        Add
      </button>
    </form>
  );
};

export default DataForm;
