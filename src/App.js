import "./App.css";
import CardWeather from "./components/card/Card";
import { useState, useEffect } from "react";
import { UsersService } from "./services/Users";
import { Header } from "./components/header/Header";

function App() {
  const [users, setUsers] = useState([]);

  async function getUsers() {
    setUsers(await UsersService.getUsers());
  }

  useEffect(() => {
    getUsers();
  }, []);

  return (
    <div
      className="App"
      style={{
        padding: 50,
        
        display: "grid",
        gridTemplateAreas: "300px 300px 300px",
      }}
    >
      
      <Header />
      <div className="container-cards">
        {users.map((item) => (
          <CardWeather name={item.name} />
        ))}
      </div>
    </div>
  );
}

export default App;
