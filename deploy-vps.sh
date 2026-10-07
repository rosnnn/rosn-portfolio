#!/usr/bin/env bash
set -e

echo "========================================="
echo " Deploying Portfolio on VPS (rosnnn.online)"
echo "========================================="

# 1. Ensure required packages are installed
if ! command -v node &> /dev/null; then
    echo "Installing Node.js 20..."
    curl -fsSL https://deb.nodesource.com/setup_20.x | bash -
    apt-get install -y nodejs
fi

if ! command -v pm2 &> /dev/null; then
    echo "Installing PM2 globally..."
    npm install -g pm2
fi

if ! command -v nginx &> /dev/null; then
    echo "Installing Nginx..."
    apt-get update && apt-get install -y nginx
fi

# 2. Setup project directory
DEPLOY_DIR="/var/www/portfolio"
echo "Deploying to $DEPLOY_DIR..."
mkdir -p /var/www

if [ -d "$DEPLOY_DIR/.git" ]; then
    echo "Pulling latest code from GitHub..."
    cd "$DEPLOY_DIR"
    git fetch origin main
    git reset --hard origin/main
else
    echo "Cloning repository from GitHub..."
    rm -rf "$DEPLOY_DIR"
    git clone https://github.com/rosnnn/rosn-portfolio.git "$DEPLOY_DIR"
    cd "$DEPLOY_DIR"
fi

# 3. Install dependencies and build production bundle
echo "Installing dependencies..."
npm install

echo "Building Next.js production bundle..."
npm run build

# 4. Start / Restart application with PM2 on dedicated port 3005
PORT=3005
echo "Managing PM2 process on port $PORT..."
pm2 delete portfolio 2>/dev/null || true
pm2 start npm --name "portfolio" -- start -- -p $PORT
pm2 save
pm2 startup systemd -u root --hp /root 2>/dev/null || true

# 5. Configure Nginx safely (isolated configuration)
NGINX_CONF="/etc/nginx/sites-available/portfolio.conf"
echo "Writing isolated Nginx configuration to $NGINX_CONF..."

cat > "$NGINX_CONF" << 'EOF'
server {
    listen 80;
    server_name portfolio.rosnnn.online rosnnn.online;

    location / {
        proxy_pass http://127.0.0.1:3005;
        proxy_http_version 1.1;
        proxy_set_header Upgrade $http_upgrade;
        proxy_set_header Connection 'upgrade';
        proxy_set_header Host $host;
        proxy_cache_bypass $http_upgrade;
        proxy_set_header X-Real-IP $remote_addr;
        proxy_set_header X-Forwarded-For $proxy_add_x_forwarded_for;
        proxy_set_header X-Forwarded-Proto $scheme;
    }
}
EOF

ln -sf "$NGINX_CONF" /etc/nginx/sites-enabled/portfolio.conf

echo "Testing Nginx configuration..."
nginx -t

echo "Reloading Nginx..."
systemctl reload nginx

# 6. Configure SSL with Certbot
if command -v certbot &> /dev/null; then
    echo "Securing domains with SSL via Certbot..."
    certbot --nginx -d portfolio.rosnnn.online -d rosnnn.online --non-interactive --agree-tos --email connect.rosn@gmail.com --redirect || true
else
    echo "Certbot not found. Installing certbot..."
    apt-get update && apt-get install -y certbot python3-certbot-nginx
    certbot --nginx -d portfolio.rosnnn.online -d rosnnn.online --non-interactive --agree-tos --email connect.rosn@gmail.com --redirect || true
fi

echo "========================================="
echo " Deployment Complete!"
echo " Live at: https://portfolio.rosnnn.online/"
echo "          https://rosnnn.online/"
echo "========================================="
