import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';  // Import useNavigate
import { useContext } from 'react';
import { userContext } from '../Context/Context';
import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
function RestaurantList() {
  // Use useNavigate hook
  const navigate = useNavigate();
  const location = useLocation();
  // Hardcoded list of restaurants (you could fetch this data from an API)
  const initialRestaurants = [
    { id: 1, name: 'The Gourmet Kitchen', type: 'Italian', rating: 4.5 ,},
    { id: 2, name: 'Spicy Delights', type: 'Indian', rating: 4.2 },
    { id: 3, name: 'Sushi Master', type: 'Japanese', rating: 4.8 },
    { id: 4, name: 'Burger Haven', type: 'American', rating: 4.0 },
    { id: 5, name: 'Taco Fiesta', type: 'Mexican', rating: 4.3 },
  ];
  
  const [restaurants, setRestaurants] = useState(initialRestaurants);
  const [searchTerm, setSearchTerm] = useState('');
  const user = useContext(userContext);
  const[userName,setUserName] = useState('');
  
  useEffect(() => {
  setUserName(location.state.email);
  }, []);

  // Handle search input change
  const handleSearchChange = (e) => {
    setSearchTerm(e.target.value);
  };

  // Filter the restaurant list based on search term
  const filteredRestaurants = restaurants.filter((restaurant) =>
    restaurant.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  // Handle the onClick to navigate to the Restaurant Page
  const handleRestaurantClick = (id,name) => {
    const d = location.state;
    d.rid = id;
    d.rname = name;
    console.log(d);
    navigate(`/Home1`,{state:d});  // Navigate to the Restaurant details page
  };

  return (
    <div style={styles.container}>
      <h2 style={styles.heading}>{userName}</h2>

      {/* Search Bar */}
      <input
        type="text"
        placeholder="Search for a restaurant..."
        value={searchTerm}
        onChange={handleSearchChange}
        style={styles.searchInput}
      />

      {/* Restaurant List */}
      <div style={styles.restaurantList}>
        {filteredRestaurants.length > 0 ? (
          filteredRestaurants.map((restaurant) => (
            <div
              key={restaurant.id}
              style={styles.restaurantItem}
              onClick={() => handleRestaurantClick(restaurant.id,restaurant.name )}  // On click, navigate to the details page
            >
              <h3>{restaurant.name}</h3>
              <p><strong>Type:</strong> {restaurant.type}</p>
              <p><strong>Rating:</strong> {restaurant.rating} / 5</p>
            </div>
          ))
        ) : (
          <p style={styles.noResults}>No results found</p>
        )}
      </div>
    </div>
  );
}

// Basic styling
const styles = {
  container: {
    maxWidth: '600px',
    margin: '0 auto',
    padding: '20px',
    backgroundColor: '#f8f8f8',
    borderRadius: '8px',
    boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
  },
  heading: {
    textAlign: 'center',
    color: '#333',
  },
  searchInput: {
    width: '100%',
    padding: '10px',
    fontSize: '14px',
    marginBottom: '20px',
    border: '1px solid #ccc',
    borderRadius: '4px',
  },
  restaurantList: {
    marginTop: '20px',
  },
  restaurantItem: {
    backgroundColor: 'grey',
    padding: '15px',
    borderRadius: '6px',
    marginBottom: '10px',
    boxShadow: '0 2px 4px rgba(0, 0, 0, 0.1)',
    cursor: 'pointer',  // Adding a pointer cursor for clickable items
  },
  noResults: {
    textAlign: 'center',
    color: 'red',
    fontSize: '16px',
  },
};

export default RestaurantList;
