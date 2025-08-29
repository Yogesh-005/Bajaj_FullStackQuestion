#!/usr/bin/env node

const fs = require('fs');
const path = require('path');

console.log('🚀 BFHL API Quick Start\n');

// Check if package.json exists
if (!fs.existsSync('package.json')) {
    console.log('❌ package.json not found. Please run this script from the project root directory.');
    process.exit(1);
}

// Check if server.js exists
if (!fs.existsSync('server.js')) {
    console.log('❌ server.js not found. Please ensure all files are present.');
    process.exit(1);
}

console.log('✅ Project structure looks good!');
console.log('\n📋 Next steps:\n');

console.log('1. 📝 Update your personal information in server.js:');
console.log('   - Change "john_doe" to your full name');
console.log('   - Update email address');
console.log('   - Update roll number');
console.log('\n2. 🚀 Start the server:');
console.log('   npm start');
console.log('\n3. 🧪 Test the API:');
console.log('   node test.js');
console.log('\n4. 🌐 Open in browser:');
console.log('   http://localhost:3000');
console.log('\n5. 📤 Deploy to hosting:');
console.log('   - Follow DEPLOYMENT.md for detailed instructions');
console.log('   - Recommended: Vercel (free and easy)');
console.log('\n6. 📝 Submit your API endpoint:');
console.log('   https://forms.office.com/r/ZeVpUYp3zV');

console.log('\n🎯 Your API endpoint will be: https://your-app-url.com/bfhl');
console.log('\nGood luck! 🍀');
