import React from "react";
import { Link, useParams } from "react-router-dom/cjs/react-router-dom";

export const Main = () => {
  return (
    <>
      <h1>Main page</h1>
      <Link to="/users">Users List Page</Link>
    </>
  );
};

const users = [
  { _id: 1, name: "User1" },
  { _id: 2, name: "User2" },
  { _id: 3, name: "User3" },
  { _id: 4, name: "User4" },
  { _id: 5, name: "User5" },
];

export const Users = () => {
  const { userId, edit } = useParams();
  return (
    <>
      {userId ? (
        edit === "edit" ? (
          <EditUserPage />
        ) : (
          <UserPage />
        )
      ) : (
        <UsersListPage />
      )}
    </>
  );
};

export const UserPage = () => {
  const { userId } = useParams();
  return (
    <>
      <h1>User Page</h1>
      <p>
        <Link to="/users">Users List Page</Link>
      </p>
      <p>
        <Link to={`/users/${userId}/edit`}>Edit this user</Link>
      </p>
      userId: {userId}
    </>
  );
};

const UsersListPage = () => {
  return (
    <div>
      <ul>
        {users.map((u) => (
          <li key={u._id}>
            <Link to={`/users/${u._id}/profile`}>{u.name}</Link>
          </li>
        ))}
      </ul>
      <Link to="/">Main Page</Link>
    </div>
  );
};

const EditUserPage = () => {
  const { userId } = useParams();
  const userIdNew = Number(userId) + 1;
  return (
    <>
      <h1>Edit User Page</h1>
      <p>
        <Link to={`/users/${userId}/profile`}>User Profile Page</Link>
      </p>
      <p>
        <Link to={`/users/${userIdNew}/profile`}>Another User Page</Link>
      </p>

      <p>
        <Link to="/users">Users List Page</Link>
      </p>
    </>
  );
};
