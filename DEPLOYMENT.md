# Deployment Guide

This guide will help you deploy the BFHL API to various hosting platforms.

## Prerequisites

1. **GitHub Account**: Create a public repository and push your code
2. **Node.js**: Ensure your code works locally first

## Step 1: Prepare Your Code

Before deploying, update the following in `server.js`:

```javascript
// Change these values to your information
user_id: generateUserId("your_full_name"), // Replace "john_doe" with your name
email: "your.email@example.com", // Replace with your email
roll_number: "YOUR_ROLL_NUMBER", // Replace with your roll number
```

## Step 2: Push to GitHub

```bash
# Initialize git repository
git init
git add .
git commit -m "Initial commit: BFHL API"

# Create a new repository on GitHub and push
git remote add origin https://github.com/yourusername/bfhl-api.git
git branch -M main
git push -u origin main
```

## Deployment Options

### Option 1: Vercel (Recommended - Free & Easy)

1. **Install Vercel CLI**:
   ```bash
   npm install -g vercel
   ```

2. **Deploy**:
   ```bash
   vercel
   ```

3. **Follow the prompts**:
   - Link to existing project: No
   - Project name: bfhl-api (or your preferred name)
   - Directory: ./ (current directory)

4. **Your API will be available at**: `https://your-project-name.vercel.app/bfhl`

### Option 2: Railway (Free Tier Available)

1. **Go to [Railway.app](https://railway.app)**
2. **Sign up with GitHub**
3. **Click "New Project"**
4. **Select "Deploy from GitHub repo"**
5. **Choose your repository**
6. **Railway will automatically detect Node.js and deploy**

### Option 3: Render (Free Tier Available)

1. **Go to [Render.com](https://render.com)**
2. **Sign up with GitHub**
3. **Click "New +" → "Web Service"**
4. **Connect your GitHub repository**
5. **Configure**:
   - **Name**: bfhl-api
   - **Environment**: Node
   - **Build Command**: `npm install`
   - **Start Command**: `npm start`
6. **Click "Create Web Service"**

### Option 4: Heroku (Paid)

1. **Install Heroku CLI**:
   ```bash
   npm install -g heroku
   ```

2. **Login and create app**:
   ```bash
   heroku login
   heroku create your-app-name
   ```

3. **Deploy**:
   ```bash
   git push heroku main
   ```

## Testing Your Deployed API

### Using cURL

```bash
# Test the health endpoint
curl https://your-app-url.com/

# Test the main endpoint
curl -X POST https://your-app-url.com/bfhl \
  -H "Content-Type: application/json" \
  -d '{"data": ["a", "1", "334", "4", "R", "$"]}'
```

### Using the Web Interface

1. **Open your browser**
2. **Go to**: `https://your-app-url.com/`
3. **Use the web interface to test your API**

### Using Postman

1. **Create a new POST request**
2. **URL**: `https://your-app-url.com/bfhl`
3. **Headers**: `Content-Type: application/json`
4. **Body** (raw JSON):
   ```json
   {
     "data": ["a", "1", "334", "4", "R", "$"]
   }
   ```

## Environment Variables

If you need to set environment variables:

### Vercel
```bash
vercel env add PORT
```

### Railway
- Go to your project dashboard
- Click on "Variables" tab
- Add your environment variables

### Render
- Go to your service dashboard
- Click on "Environment" tab
- Add your environment variables

## Troubleshooting

### Common Issues

1. **Port Issues**: The app uses `process.env.PORT` which is automatically set by hosting platforms

2. **Build Errors**: Ensure all dependencies are in `package.json`

3. **CORS Issues**: The app includes CORS middleware, but you might need to configure it for your domain

4. **404 Errors**: Ensure your hosting platform is configured to serve the Node.js app correctly

### Debugging

1. **Check logs**:
   - Vercel: `vercel logs`
   - Railway: Dashboard → Logs
   - Render: Dashboard → Logs

2. **Test locally first**: Always test your API locally before deploying

3. **Check environment**: Ensure your hosting platform supports Node.js

## Final Steps

1. **Test your deployed API** with the provided examples
2. **Update the form** with your API endpoint: `https://your-app-url.com/bfhl`
3. **Submit the form**: https://forms.office.com/r/ZeVpUYp3zV

## API Endpoint Format

Your final API endpoint should be:
```
https://your-app-url.com/bfhl
```

Make sure it:
- ✅ Returns status code 200 for successful requests
- ✅ Accepts POST method
- ✅ Returns all required fields
- ✅ Handles the example cases correctly
