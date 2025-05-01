import React from 'react';

function ArmyStats({ army }) {
  const totalHealth = army.reduce((sum, bot) => sum + bot.health, 0);
  const totalDamage = army.reduce((sum, bot) => sum + bot.damage, 0);
  const totalArmor = army.reduce((sum, bot) => sum + bot.armor, 0);
  const averageHealth = army.length > 0 ? Math.round(totalHealth / army.length) : 0;
  const averageDamage = army.length > 0 ? Math.round(totalDamage / army.length) : 0;
  const averageArmor = army.length > 0 ? Math.round(totalArmor / army.length) : 0;

  return (
    <div className="army-stats">
      <h3>Army Statistics</h3>
      <div className="stats-grid">
        <div className="stat-item">
          <span className="stat-label">Total Bots:</span>
          <span className="stat-value">{army.length}</span>
        </div>
        <div className="stat-item">
          <span className="stat-label">Total Health:</span>
          <span className="stat-value">{totalHealth}</span>
        </div>
        <div className="stat-item">
          <span className="stat-label">Total Damage:</span>
          <span className="stat-value">{totalDamage}</span>
        </div>
        <div className="stat-item">
          <span className="stat-label">Total Armor:</span>
          <span className="stat-value">{totalArmor}</span>
        </div>
        <div className="stat-item">
          <span className="stat-label">Avg Health:</span>
          <span className="stat-value">{averageHealth}</span>
        </div>
        <div className="stat-item">
          <span className="stat-label">Avg Damage:</span>
          <span className="stat-value">{averageDamage}</span>
        </div>
        <div className="stat-item">
          <span className="stat-label">Avg Armor:</span>
          <span className="stat-value">{averageArmor}</span>
        </div>
      </div>
    </div>
  );
}

export default ArmyStats;