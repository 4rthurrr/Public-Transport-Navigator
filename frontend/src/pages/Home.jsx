import React, { useEffect, useState } from 'react';
import axios from 'axios';

const Home = () => {
  const [data, setData] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      const token = localStorage.getItem('token');
      try {
        const response = await axios.get('http://localhost:5000/api/protected', {
          headers: { Authorization: `Bearer ${token}` }
        });
        setData(response.data);
      } catch (err) {
        console.error(err);
      }
    };
    fetchData();
  }, []);

  if (!data) return <div>Loading...</div>;

  const handleLogout = () => {
    localStorage.removeItem('token');
    window.location.href = '/login';
  };

  return (
    <div>
      <h2>Welcome to Public Transport Navigator</h2>
      <p>{data.message}</p>
      <button onClick={handleLogout}>Logout</button>
    </div>
  );
};

export default Home;