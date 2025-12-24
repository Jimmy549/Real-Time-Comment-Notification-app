# Backend Deployment Guide

## Render Deployment

### Build Command:
```
npm install && npm run build
```

### Start Command:
```
npm start
```

### Environment Variables:
- `NODE_ENV=production`
- `PORT=10000` (Render will set this automatically)

### Important Notes:
1. All build dependencies are in the main dependencies section
2. TypeScript compilation outputs to `dist/` folder
3. Server binds to `0.0.0.0` for Render compatibility
4. CORS is configured for production frontend URLs

## Manual Deployment Steps:
1. Push code to GitHub
2. Connect GitHub repo to Render
3. Set build command: `npm install && npm run build`
4. Set start command: `npm start`
5. Deploy!