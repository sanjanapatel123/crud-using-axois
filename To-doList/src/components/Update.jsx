import axios from "axios";
import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useParams } from "react-router-dom";

const Update = () => {
  // const [data, setData] = useState([]);
  const { id } = useParams();
  const [value, setValue] = useState({
    name: "",
    email: "",
    phone: "",
  });

  const navigate = useNavigate();
  useEffect(() => {
    axios
      .get("http://localhost:4000/user/" + id)
      .then((res) => {
        setValue(res.data);
      })
      .catch((err) => console.log(err));
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();

    axios
      .put("http://localhost:4000/user/" + id, value)
      .then((res) => {
        console.log(res.data);
        navigate("/");
      })
      .catch((err) => console.log(err));
  };
  return (
    <div className="d-flex w-100 vh-100 justify-center items-center bg-light">
      <div className="w-50 border bg-white shadow px-5 pt-3 pb-5 rounded">
        <h1>Update user</h1>
        <form onSubmit={handleSubmit}>
          <div className="mb-2">
            <label htmlFor="name">Name:</label>
            <input
              type="text"
              className="form-control"
              placeholder="Enter Name"
              id="name"
              value={value.name}
              onChange={(e) => setValue({ ...value, name: e.target.value })}
            />
          </div>
          <div className="mb-2">
            <label htmlFor="email">Email:</label>
            <input
              type="email"
              className="form-control"
              placeholder="Enter Email"
              id="email"
              value={value.email}
              onChange={(e) => setValue({ ...value, email: e.target.value })}
            />
          </div>
          <div className="mb-2">
            <label htmlFor="phone">Phone:</label>
            <input
              type="text"
              className="form-control"
              placeholder="Enter Phone"
              id="phone"
              value={value.phone}
              onChange={(e) => setValue({ ...value, phone: e.target.value })}
            />
          </div>
          <button className="btn btn-success">Update</button>
          <Link to={"/"} className="btn btn-primary ms-3">
            Back
          </Link>
        </form>
      </div>
    </div>
  );
};

export default Update;
