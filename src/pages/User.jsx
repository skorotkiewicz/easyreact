import React, { useState } from "react";
import { useParams, Link } from "react-router-dom";
import { useSelector } from "react-redux";

const User = () => {
  const { name } = useParams(); // <-- read value from url, see App.jsx Line 91
  const [userName, setUserName] = useState("");
  const users = useSelector((state) => state.users);

  const newUrl = `/user/${userName.length > 0 ? userName : name}`;

  const user = users.active.find((t) => {
    return t.username === name;
  });

  return (
    <div>
      {user && user.id > 0 ? (
        <DetailsUser u={user} />
      ) : (
        <DefaultUser name={name} newUrl={newUrl} setUserName={setUserName} />
      )}
    </div>
  );
};

const DefaultUser = ({ name, newUrl, setUserName }) => {
  return (
    <>
      <h3>Hello {name}!</h3>
      <input
        type="text"
        onChange={(e) => {
          setUserName(e.target.value);
        }}
      />
      <p>
        Go to user profile: <Link to={newUrl}>{newUrl}</Link>
      </p>
    </>
  );
};

const DetailsUser = (u) => {
  u = u.u;
  return (
    <div>
      <table>
        <tbody>
          <tr>
            <th rowSpan="2">Name:</th>
            <td>{u.name}</td>
          </tr>
          <tr>
            <td>@{u.username}</td>
          </tr>
          <tr>
            <th>E-Mail:</th>
            <td>{u.email}</td>
          </tr>
          <tr>
            <th>Phone:</th>
            <td>{u.phone}</td>
          </tr>
          <tr>
            <th>Website:</th>
            <td>{u.website}</td>
          </tr>
        </tbody>
      </table>

      <h4>Private Address</h4>
      <table>
        <tbody>
          <tr>
            <th>Street:</th>
            <td>{u.address.street}</td>
          </tr>
          <tr>
            <th>Suite:</th>
            <td>{u.address.suite}</td>
          </tr>
          <tr>
            <th>City:</th>
            <td>{u.address.city}</td>
          </tr>
          <tr>
            <th>Zipcode:</th>
            <td>{u.address.zipcode}</td>
          </tr>
          <tr>
            <th>GEO:</th>
            <td>
              lat: {u.address.geo.lat} / lng: {u.address.geo.lng}
            </td>
          </tr>
        </tbody>
      </table>

      <h4>Company</h4>
      <table>
        <tbody>
          <tr>
            <th>Name:</th>
            <td>{u.company.name}</td>
          </tr>
          <tr>
            <th>Phrase:</th>
            <td>{u.company.catchPhrase}</td>
          </tr>
          <tr>
            <th>BS:</th>
            <td>{u.company.bs}</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

export default User;
