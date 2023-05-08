import { useState } from "react";
import { Link, useLoaderData } from "react-router-dom";

const User = () => {
  const loadedUsers = useLoaderData();
  const [users, setUsers] = useState(loadedUsers);

  const handleDelete = (_id) => {
    console.log("delete", _id);
    fetch(`http://localhost:3000/users/${_id}`, {
      method: "DELETE",
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        if (data.deletedCount > 0) {
          const remaining = users.filter((user) => user._id !== _id);
          setUsers(remaining);
          alert("Deleted successfully");
        }
      });
  };

  return (
    <div>
      <h1>User : {users.length}</h1>
      {users.map((user) => (
        <p key={user._id}>
          {user.name} : {user.email}
          <Link to={`/update/${user._id}`}>
            <button>Update</button>
          </Link>
          <button onClick={() => handleDelete(user._id)}>X</button>
        </p>
      ))}
    </div>
  );
};

export default User;
