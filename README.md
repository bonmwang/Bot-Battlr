# 🤖 Bot Battlr - Build Your Bot Army



A React web application where you can browse, enlist, and manage an army of unique bots. Built with React, React Hooks, and a JSON-server backend.

## 🚀 Features

- **Browse** a collection of 10 unique bots with different classes
- **Enlist** bots to your army (one per class)
- **View detailed specs** for each bot
- **Sort bots** by health, damage, or armor
- **Filter bots** by class (Support, Medic, Assault, etc.)
- **Discharge bots** permanently from service
- **Army statistics** showing your team's total power
- **Responsive design** works on desktop and mobile

## 📦 Data Structure

All bot data is stored in `db.json` with the following fields for each bot:
```json
{
  "id": Number,
  "name": String,
  "health": Number (50-150),
  "damage": Number (10-60),
  "armor": Number (40-100),
  "bot_class": String,
  "catchphrase": String,
  "avatar_url": String
}
🛠️ Installation & Setup
Clone the repository

bash
git clone https://github.com/bonmwang/bot-battlr.git
cd bot-battlr
Install dependencies

bash
npm install
Start the backend server (in one terminal)

bash
json-server --watch db.json --port 8001
Start the React app (in another terminal)

bash
npm start
Access the app

Frontend: http://localhost:3000

Backend API: http://localhost:8001/bots

🧩 Components
Component	Description
App	Main container
BotCollection	Displays all available bots
BotCard	Individual bot display card
BotSpecs	Detailed bot view
BotArmy	Shows enlisted bots
ArmyStats	Displays army statistics
SortBar	Sorting controls
FilterBar	Filtering controls
🔄 API Endpoints
Endpoint	Method	Description
/bots	GET	Fetch all bots
/bots/:id	DELETE	Remove a bot
🛠️ Tech Stack
Frontend: React, React Hooks, CSS

Backend: json-server

Development: npm, Git

📝 License
This project is licensed under the MIT License - see the LICENSE file for details.

🙏 Acknowledgments
Robohash for robot avatars

Flatiron School for project inspiration

React documentation

📸 Screenshots
Add your screenshots here

🤝 Contributing
Fork the project

Create your feature branch (git checkout -b feature/AmazingFeature)

Commit your changes (git commit -m 'Add some AmazingFeature')

Push to the branch (git push origin feature/AmazingFeature)

Open a Pull Request


### How to Use This README:

1. Replace placeholder text (like `your-username`) with your actual information
2. Add real screenshots (name them `bot-battlr-screenshot.png` and place in `/public`)
3. Customize the acknowledgments section
4. Add your license file if using something other than MIT
5. Update the features list if you've added more functionality

### Recommended Improvements to Add:

1. **Add real screenshots** after taking them from your working app
2. **Include a demo link** if deployed (Netlify, Vercel, etc.)
3. **Add badges** for build status, license, etc.
4. **Expand the API documentation** if you add more endpoints
5. **Add testing information** if you implement tests

Would you like me to generate any specific section in more detail or help you create actual screenshots of your application?