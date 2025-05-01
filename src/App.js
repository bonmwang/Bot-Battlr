import React, { useState, useEffect, useCallback } from 'react';
import BotCollection from './components/BotCollection';
import BotArmy from './components/BotArmy';
import BotSpecs from './components/BotSpecs';
import SortBar from './components/SortBar';
import FilterBar from './components/FilterBar';
import ArmyStats from './components/ArmyStats';
import './App.css';

function App() {
  const [bots, setBots] = useState([]);
  const [army, setArmy] = useState([]);
  const [selectedBot, setSelectedBot] = useState(null);
  const [sortBy, setSortBy] = useState('health');
  const [filters, setFilters] = useState({
    Support: false,
    Medic: false,
    Assault: false,
    Defender: false,
    Captain: false,
    Witch: false
  });
  const [searchTerm, setSearchTerm] = useState('');
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  // Load army from localStorage on initial render
  useEffect(() => {
    const savedArmy = localStorage.getItem('botArmy');
    if (savedArmy) {
      setArmy(JSON.parse(savedArmy));
    }
  }, []);

  // Save army to localStorage whenever it changes
  useEffect(() => {
    localStorage.setItem('botArmy', JSON.stringify(army));
  }, [army]);

  // Fetch bots from Express server
  useEffect(() => {
    setLoading(true);
    fetch('http://localhost:8002/bots')
      .then(res => {
        if (!res.ok) throw new Error('Failed to fetch bots');
        return res.json();
      })
      .then(data => {
        setBots(data);
        setLoading(false);
      })
      .catch(err => {
        console.error('Error fetching bots:', err);
        setError(err.message);
        setLoading(false);
      });
  }, []);

  const addToArmy = useCallback((bot) => {
    if (!army.some(b => b.id === bot.id) && !army.some(b => b.bot_class === bot.bot_class)) {
      setArmy([...army, bot]);
    }
  }, [army]);

  const releaseFromArmy = useCallback((bot) => {
    setArmy(army.filter(b => b.id !== bot.id));
  }, [army]);

  const dischargeBot = (bot) => {
    fetch(`http://localhost:8001/bots/${bot.id}`, {
      method: 'DELETE'
    })
    .then(res => {
      if (!res.ok) throw new Error('Failed to delete bot');
      setBots(bots.filter(b => b.id !== bot.id));
      setArmy(army.filter(b => b.id !== bot.id));
    })
    .catch(err => {
      console.error('Error deleting bot:', err);
      setError(err.message);
    });
  };

  const handleSort = (criteria) => {
    setSortBy(criteria);
  };

  const handleFilter = (botClass) => {
    setFilters({
      ...filters,
      [botClass]: !filters[botClass]
    });
  };

  const filteredBots = bots.filter(bot => {
    const matchesSearch = bot.name.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesFilter = Object.values(filters).every(val => !val) || 
                         filters[bot.bot_class];
    return matchesSearch && matchesFilter;
  });

  const sortedBots = [...filteredBots].sort((a, b) => b[sortBy] - a[sortBy]);

  return (
    <div className="App">
      <h1>Bot Battlr</h1>
      
      {error && (
        <div className="error-alert">
          Error: {error}
          <button onClick={() => setError(null)}>Dismiss</button>
        </div>
      )}

      <div className="controls">
        <div className="search-bar">
          <input
            type="text"
            placeholder="Search bots by name..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
        </div>
        <SortBar onSort={handleSort} activeSort={sortBy} />
        <FilterBar onFilter={handleFilter} filters={filters} />
      </div>

      {loading ? (
        <div className="loading-spinner">
          <div className="spinner"></div>
          <p>Loading bots...</p>
        </div>
      ) : (
        <div className="container">
          {selectedBot ? (
            <BotSpecs 
              bot={selectedBot} 
              onBack={() => setSelectedBot(null)}
              onEnlist={() => {
                addToArmy(selectedBot);
                setSelectedBot(null);
              }}
            />
          ) : (
            <BotCollection 
              bots={sortedBots} 
              onBotSelect={setSelectedBot}
              onDischarge={dischargeBot}
            />
          )}
          
          <div className="army-section">
            <BotArmy 
              army={army} 
              onRelease={releaseFromArmy} 
              onDischarge={dischargeBot}
            />
            <ArmyStats army={army} />
          </div>
        </div>
      )}
    </div>
  );
}

export default App;