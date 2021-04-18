import React from "react";
import { Link } from "react-router-dom";

const User = ({ name, email, company, username }) => {
  return (
    <div className="user-container">
      <h3>{name}</h3>
      <p>{email}</p>
      <p>{company.name}</p>
      <p>{company.catchPhrase}</p>
      <Link to={"/user/" + username}>Go to details page</Link>
    </div>
  );
};

export default User;
