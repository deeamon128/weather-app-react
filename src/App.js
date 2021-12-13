import React, {useState, useEffect} from 'react';



const api = {
  key: "6159c5f09c63f65e38e8bcbb9084c619",
  base:  "https://api.openweathermap.org/data/2.5/"
}

function App() {
  return (
    <div className='app'>
      <main>
        <div className='search-box'>
          <input 
            type="text"
            className="search-bar"
            placeholder="Search"
          />
        </div>
      </main>
    </div>
  );
}

export default App;
