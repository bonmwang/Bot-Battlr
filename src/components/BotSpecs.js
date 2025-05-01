import React from 'react';

function BotSpecs({ bot, onBack, onEnlist }) {
  return (
    <div className="bot-specs">
      <div className="bot-details">
        <div className="bot-image">
          <img src={bot.avatar_url} alt={bot.name} />
        </div>
        <div className="bot-info">
          <h2>{bot.name}</h2>
          <p><strong>Class:</strong> {bot.bot_class}</p>
          <p><strong>Catchphrase:</strong> {bot.catchphrase}</p>
          <div className="bot-stats">
            <div><strong>Health:</strong> {bot.health}</div>
            <div><strong>Damage:</strong> {bot.damage}</div>
            <div><strong>Armor:</strong> {bot.armor}</div>
          </div>
        </div>
      </div>
      <div className="specs-actions">
        <button onClick={onBack}>Back to List</button>
        <button onClick={onEnlist}>Enlist Bot</button>
      </div>
    </div>
  );
}

export default BotSpecs;