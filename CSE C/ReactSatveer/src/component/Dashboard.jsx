import React, { useState } from 'react';

function Dashboard() {
  const [data, setData] = useState("");

  const fetchData = () => {
    fetch('https://api.github.com/users/satveer0905')
      .then(response => response.json())
      .then(data => {
        console.log(data);
        setData(data);
      })
      .catch(error => console.error('Error fetching data:', error));
  };

  return (
    <div>
      <h2>Welcome to the Dashboard Page</h2>
      <button onClick={fetchData}>Fetch API Data</button>
      {data && (
        <div>
          <h3>{data.name}</h3>
          <img 
            src={data.avatar_url} 
            alt={data.name} 
            style={{ width: '150px', borderRadius: '50%' }} 
          />
        </div>
      )}
    </div>
  );
}

export default Dashboard;
 