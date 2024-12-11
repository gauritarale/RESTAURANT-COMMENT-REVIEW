import React, { useState, useEffect } from 'react';
import axios from 'axios';
const Leaderboard = () => {
  // State to store the leaderboard data
  const [restaurants, setRestaurants] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [list,setList] = useState([]);
  // Fetch the leaderboard data
  useEffect(() => {
   
        axios.get('http://localhost:8000/top10/')
        .then((response)=>{
            console.log(response.data.leaderboard);
            setRestaurants(response.data.leaderboard);
            setLoading(false);
        })
        .catch((error)=>{
            console.log(error);
            setError(error);
            setLoading(false);
        });
    //   try {
    //     const response = await fetch('http://localhost:8000/top10');
    //     if (!response.ok) {
    //       throw new Error('Failed to fetch leaderboard data');
    //     }
    //     const data = await response.json();
    //     setRestaurants(data);
    //     setLoading(false);
    //   } catch (error) {
    //     setError(error.message);
    //     setLoading(false);
    //   }

  }, []);

  if (loading) {
    return <div>Loading leaderboard...</div>;
  }

  if (error) {
    return <div>Error: {error}</div>;
  }

  return (
    <div>
      <h2>Restaurant Leaderboard</h2>
      <table>
        <thead>
          <tr>
            <th>Restaurant Name</th>
            <th>Score</th>
          </tr>
        </thead>
        <tbody>
          {restaurants.map((restaurant, index) => (
            <tr key={restaurant.id}>
              <td>{restaurant.restaurant_id}</td>
              <td>{restaurant.score}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Leaderboard;

