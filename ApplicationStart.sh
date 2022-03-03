# run the app with the pm2 service

echo "changing directory to ~/PathfinderEncyclopediaServer"
cd ~/PathfinderEncyclopediaServer
echo "running npm install for node modules"
sudo npm i
echo "running npm i pm2"
sudo npm i pm2
echo "starting the server"
sudo pm2 start index.js
