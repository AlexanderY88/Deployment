# Deployment Instructions for DigitalOcean

## 1. Prepare your server (Initial Setup)
SSH into your droplet (replace `root` and `165.245.218.225` with your details):
```bash
ssh root@165.245.218.225
```

Once inside, install Node.js and Git:
```bash
sudo apt update
sudo apt install -y nodejs npm git
```

## 2. Clone and Install
Clone your repository:
```bash
git clone https://github.com/AlexanderY88/Deployment.git
cd Deployment
```

Install all dependencies:
```bash
npm run install-all
```

## 3. Configure Environment Variables
Create the `.env` files on the server (since they are ignored by Git):

**Server `.env`:**
```bash
nano server/.env
# Paste:
NODE_PORT=5000
CLIENT_URL=http://localhost
```

**Frontend `.env`:**
```bash
nano frontend/.env
# Paste (relative to server IP):
VITE_API_BASE_URL=http://165.245.218.225:5000/api
```

## 4. Build and Run
Build the frontend:
```bash
npm run build
```

Install PM2 (Process Manager) to keep your app running in the background:
```bash
sudo npm install -g pm2
pm2 start server/app.js --name "my-app"
```

## 5. Summary
Your app is now running on:
- API/Site: `http://165.245.218.225:5000`
- To check status: `pm2 status`
- To see logs: `pm2 logs`
