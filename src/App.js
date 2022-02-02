import React, { useEffect, useState } from "react";
import Req from "./Components/req";
import "./App.css";
import { Button } from "@mui/material";
import { TextField } from "@mui/material";
import Footer from "./Components/Footer";

function App() {
  const APP_ID = "ec3b1641";
  const APP_KEY = "02d6c73e612ba86f2817b9f5efe7628b";

  const [reps, setReps] = useState([]);
  const [search, setSearch] = useState("");
  const [query, setQuery] = useState("cake");

  const getRequest = async () => {
    const response = await fetch(
      `https://api.edamam.com/search?q=${query}&app_id=${APP_ID}&app_key=${APP_KEY}`
    );

    const data = await response.json();
    console.log(data.hits);
    setReps(data.hits);
  };

  useEffect(() => {
    getRequest();
  }, [query]);

  const updateSearch = (e) => {
    setSearch(e.target.value);
    console.log(search);
  };
  const getSearch = (e) => {
    e.preventDefault();
    setQuery(search);
    setSearch('');
  };

  return (
    <div>
      <div className="App">
        <form onSubmit={getSearch} className="form">
          <TextField
            color="info"
            size="small"
            id="outlined-basic"
            label="Search What You Want !"
            variant="outlined"
            type="search"
            value={search}
            onChange={updateSearch}
            className="search_bar"
          />
          <Button onClick={getSearch} variant="outlined" className="btn">
            Button
          </Button>
        </form>
        <h2 className="h2">Let's get Recipes</h2>
        <div className="reps">
          {reps.map((food) => (
            <Req
              key={food.recipe.label}
              label={food.recipe.label}
              disc={food.recipe.cuisineType}
              img={food.recipe.image}
              ingredients={food.recipe.ingredients}
              url={food.recipe.url}
            />
          ))}
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default App;
