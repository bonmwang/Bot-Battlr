import React from 'react';

function BotCard({ bot, onClick, onDischarge, action }) {
  const handleDischarge = (e) => {
    e.stopPropagation();
    onDischarge(bot);
  };

  return (
    <div className="bot-card" onClick={onClick}>
      <div className="bot-image">
        <img src={bot.avatar_url} alt={bot.name} />
      </div>
      <div className="bot-info">
        <h3>{bot.name}</h3>
        <p>{bot.bot_class}</p>
        <div className="bot-stats">
          <span title="Health">❤️ {bot.health}</span>
          <span title="Damage">⚔️ {bot.damage}</span>
          <span title="Armor">🛡️ {bot.armor}</span>
        </div>
        <p className="catchphrase">{bot.catchphrase}</p>
      </div>
      <div className="bot-actions">
        <button 
          className="discharge-btn" 
          onClick={handleDischarge}
        >
          x
        </button>
        <button className="action-btn">
          {action === 'view' ? 'View Details' : 'Release'}
        </button>
      </div>
    </div>
  );
}

export default BotCard;