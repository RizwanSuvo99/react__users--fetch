/* eslint-disable no-unused-vars */
import Users from "./pages/Users/Users";
import "./App.css";
import { useState } from "react";

function App() {
  const [usersData, setUsersData] = useState([]);
  const url = "https://jsonplaceholder.typicode.com/users";

  fetch(url)
    .then((response) => response.json())
    .then((data) => setUsersData(data));

  return (
    <div>
      <Users usersData={usersData}/>
    </div>
  );
}

export default App;
