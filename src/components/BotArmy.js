import React from 'react';
import BotCard from './BotCard';

function BotArmy({ army, onRelease, onDischarge }) {
  return (
    <div className="bot-army">
      <h2>Your Bot Army</h2>
      {army.length === 0 ? (
        <p>No bots in your army yet. Click on bots to add them!</p>
      ) : (
        <div className="army-grid">
          {army.map(bot => (
            <BotCard 
              key={bot.id} 
              bot={bot} 
              onClick={() => onRelease(bot)}
              onDischarge={onDischarge}
              action="release"
            />
          ))}
        </div>
      )}
    </div>
  );
}

export default BotArmy;