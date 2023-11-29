/* eslint-disable react/prop-types */
import { useState } from "react";
import User from "../../components/User/User";
import "./Users.css";

export default function Users({ usersData }) {
  return (
    <div>
      <div className="section__heading">
        <h1>Users</h1>
      </div>
      <div className="users">
        {usersData.map((user) => (
          <User key={user.id} user={user} />
        ))}
      </div>
    </div>
  );
}
