import React, { useEffect, useState } from "react";
import Header from "./components/Header";
import Cards from "./components/Cards";
import axios from "axios";
// import Loading from "./components/Loader/Loader";
import Loader from "./components/Loader/Loader";

const App = () => {
  const [lists, setLists] = useState([]);
  const [inputSearch, setInputSearch] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null); // Add error state

  const fetchApi = async (searchTerm = "chicken") => {
    setLoading(true);
    setError(null); 
    try {
      const apiData = `https://www.themealdb.com/api/json/v1/1/search.php?s=${searchTerm}`;
      const res = await axios.get(apiData);
      const data = res.data.meals;
      setLists(data || []); 
    } catch (err) {
      console.error("Something went wrong", err);
      setError("Failed to fetch data. Please try again."); 
    } finally {
      setLoading(false); 
    }
  };

  useEffect(() => {
    fetchApi();
  }, []);

  const handleClick = () => {
    if (inputSearch) {
      fetchApi(inputSearch);
    }
  };

  if (loading) {
    return <Loader />;
  }

  return (
    <div className="wrapper">
      <Header setInputSearch={setInputSearch} handleClick={handleClick} />
      {error && <p className="error">{error}</p>}
      <Cards lists={lists} />
    </div>
  );
};

export default App;
