// eslint-disable-next-line no-unused-vars
import React from "react";

const App = () => {
  const addUser = (e) => {
    e.preventDefault();
    const form = e.target;
    const name = form.name.value;
    const email = form.email.value;
    const user = { name, email };
    console.log(user);
    fetch("http://localhost:3000/users", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(user),
    })
      .then((res) => res.json())
      .then((data) =>{
        console.log(data)
        if (data.insertedId) {
          alert('user added successfully')
          form.reset()
        }
      });
  };

  return (
    <div>
      <h2>Simple CRUD</h2>

      <form onSubmit={addUser}>
        <input type="text" name="name" id="" required /> <br />
        <input type="email" name="email" id="" required /> <br />
        <input type="submit" value="add user" />
      </form>
    </div>
  );
};

export default App;
