import React, { useState } from "react";

function Form() {
  const [people, setPeople] = useState([
    {
      name: "Joshua Doan",
      food: "cheese",
      email: "josh@josh.com",
      color: "green"
    },
    {
      name: "Zach Lasky",
      food: "pizza",
      email: "zach@zach.com",
      color: "blue"
    }
  ]);
  const [form, setForm] = useState({
    name: "",
    food: "",
    email: "",
    color: ""
  });
  const onChange = event => {
    setForm({ ...form, [event.target.name]: event.target.value });

    setForm({ ...form, [event.target.name]: event.target.value });
  };
  const onSubmit = event => {
    event.preventDefault();
    if (form.email.trim() === "") return;

    const newPerson = {
      name: form.name.trim(),
      email: form.email.trim(),
      food: form.food.trim(),
      color: form.color.trim()
    };

    setPeople([...people, newPerson]);
    setForm({ name: "", email: "", food: "", color: "" });
  };
  return (
    <div className="container">
      <div className="row">
        <div className="col">
          <h2>Add a person: </h2>
          <hr />
          <form onSubmit={onSubmit}>
            <label className="form-group">
              <input
                type="text"
                className="form-control"
                name="name"
                placeholder="First Name.."
                value={form.name}
                onChange={onChange}
              />
            </label>
            <label className="form-group">
              <input
                type="text"
                className="form-control"
                name="email"
                placeholder="Last Name.."
                value={form.email}
                onChange={onChange}
              />
            </label>
            <label className="form-group">
              <input
                type="text"
                className="form-control"
                name="color"
                placeholder="Last Name.."
                value={form.color}
                onChange={onChange}
              />
            </label>
            <label className="form-group">
              <input
                type="text"
                className="form-control"
                name="food"
                placeholder="Last Name.."
                value={form.food}
                onChange={onChange}
              />
            </label>
            <button className="btn btn-success" type="submit">
              Add person
            </button>
          </form>
        </div>
        <div className="col">
          <h2>People: </h2>
          <hr />
          {people.map(p => (
            <div key={Math.random() * 1000000000}>
              <p>
                {p.name} {p.email} {p.food} {p.color}
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Form;
