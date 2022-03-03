# run the app with the pm2 service

echo "changing directory to ~/PathfinderEncyclopediaServer"
cd ~/PathfinderEncyclopediaServer
echo "running npm install"
npm install
echo "starting the server"
node index.js
