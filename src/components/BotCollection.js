import React from 'react';
import BotCard from './BotCard';

function BotCollection({ bots, onBotSelect, onDischarge }) {
  return (
    <div className="bot-collection">
      <h2>Available Bots</h2>
      <div className="bot-grid">
        {bots.map(bot => (
          <BotCard 
            key={bot.id} 
            bot={bot} 
            onClick={() => onBotSelect(bot)}
            onDischarge={onDischarge}
            action="view"
          />
        ))}
      </div>
    </div>
  );
}

export default BotCollection;