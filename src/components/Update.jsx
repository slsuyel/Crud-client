import { useLoaderData } from "react-router-dom";

const Update = () => {
  const loaderUser = useLoaderData();

  const handleUpdate = (event) => {
    event.preventDefault();
    const form = event.target;
    const name = form.name.value;
    const email = form.email.value;
    const updatedUser = { name, email };
    console.log(updatedUser);
    fetch(`http://localhost:3000/users/${loaderUser._id}`, {
      method: "PUT",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(updatedUser),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data)
        if (data.modifiedCount>0) {
            alert('user modified')
        }
      });
  };

  return (
    <div>
      <h2>Updating</h2>
      <h2>name: {loaderUser.name} </h2>
      <form onSubmit={handleUpdate}>
        <input type="text" name="name" defaultValue={loaderUser?.name} id="" />
        <br />
        <input
          type="email"
          name="email"
          defaultValue={loaderUser?.email}
          id=""
        />
        <br />
        <input type="submit" value="Update" />
      </form>
    </div>
  );
};

export default Update;
