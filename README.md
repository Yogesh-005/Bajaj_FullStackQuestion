# 🚀 BFHL REST API

A production-ready REST API that processes arrays and returns categorized data including numbers, alphabets, special characters, and various calculations. Built for the BFHL Full Stack Assignment.

## ✨ Features

- **POST /bfhl** - Main endpoint that processes input arrays
- **Data Categorization** - Separates odd numbers, even numbers, alphabets, and special characters
- **Mathematical Operations** - Calculates sum of all numbers
- **String Processing** - Creates concatenated string with alternating caps in reverse order
- **Dynamic User ID** - Generates user ID with current date format
- **Comprehensive Error Handling** - Input validation and graceful error responses
- **Security** - CORS enabled and Helmet security middleware
- **Testing Suite** - Automated tests for all example cases

## 🛠️ Tech Stack

- **Node.js** - Runtime environment
- **Express.js** - Web framework
- **CORS** - Cross-origin resource sharing
- **Helmet** - Security middleware
- **Axios** - HTTP client for testing

## 🚀 Quick Start

### Prerequisites
- Node.js (>=14.0.0)
- npm or yarn

### Installation

1. **Clone the repository:**
```bash
git clone https://github.com/Yogesh-005/Bajaj_FullStackQuestion.git
cd Bajaj_FullStackQuestion
```

2. **Install dependencies:**
```bash
npm install
```

3. **Start the server:**
```bash
# Development mode
npm run dev

# Production mode
npm start
```

4. **Test the API:**
```bash
npm test
```

The server will start on `http://localhost:3000`

## 📚 API Documentation

### POST /bfhl

Processes an array of data and returns categorized results.

**Request Body:**
```json
{
  "data": ["a", "1", "334", "4", "R", "$"]
}
```

**Response:**
```json
{
  "is_success": true,
  "user_id": "yogesh_p_29082025",
  "email": "yogeshpugazhendhi@gmail.com",
  "roll_number": "22BPS1044",
  "odd_numbers": ["1"],
  "even_numbers": ["334", "4"],
  "alphabets": ["A", "R"],
  "special_characters": ["$"],
  "sum": "339",
  "concat_string": "Ra"
}
```

### GET /

Health check endpoint that returns API status.

## 🧪 Test Cases

### Example 1
**Input:** `["a", "1", "334", "4", "R", "$"]`
**Output:** 
- Odd numbers: `["1"]`
- Even numbers: `["334", "4"]`
- Alphabets: `["A", "R"]`
- Special characters: `["$"]`
- Sum: `"339"`
- Concatenated string: `"Ra"`

### Example 2
**Input:** `["2", "a", "y", "4", "&", "-", "*", "5", "92", "b"]`
**Output:**
- Odd numbers: `["5"]`
- Even numbers: `["2", "4", "92"]`
- Alphabets: `["A", "Y", "B"]`
- Special characters: `["&", "-", "*"]`
- Sum: `"103"`
- Concatenated string: `"ByA"`

### Example 3
**Input:** `["A", "ABcD", "DOE"]`
**Output:**
- Odd numbers: `[]`
- Even numbers: `[]`
- Alphabets: `["A", "ABCD", "DOE"]`
- Special characters: `[]`
- Sum: `"0"`
- Concatenated string: `"EoDdCbAa"`

## 🌐 Deployment

### Railway (Recommended)
1. Go to [Railway.app](https://railway.app)
2. Sign up with GitHub
3. Click "New Project"
4. Select "Deploy from GitHub repo"
5. Choose this repository
6. Railway will automatically detect Node.js and deploy

### Vercel
```bash
npm install -g vercel
vercel
```

### Render
1. Connect your GitHub repository to Render
2. Set build command: `npm install`
3. Set start command: `npm start`

## 🔧 Environment Variables

- `PORT` - Server port (default: 3000)

## 🧪 Testing

### Automated Testing
```bash
npm test
```

### Manual Testing
- **Web Interface**: Visit `http://localhost:3000` when server is running
- **cURL**:
```bash
curl -X POST http://localhost:3000/bfhl \
  -H "Content-Type: application/json" \
  -d '{"data": ["a", "1", "334", "4", "R", "$"]}'
```
- **Postman**: Import the collection and test endpoints

## 📁 Project Structure

```
Bajaj_FullStackQuestion/
├── server.js              # Main API server
├── package.json           # Dependencies and scripts
├── test.js               # Automated test suite
├── public/
│   └── index.html        # Web interface for testing
├── vercel.json           # Vercel deployment config
├── .gitignore            # Git ignore rules
└── README.md             # This file
```

## 🎯 Assignment Requirements

| Requirement | Status | Implementation |
|-------------|--------|----------------|
| POST method | ✅ | Express.js POST route |
| `/bfhl` endpoint | ✅ | Main API endpoint |
| Status code 200 | ✅ | Proper HTTP responses |
| User ID format | ✅ | `full_name_ddmmyyyy` |
| is_success field | ✅ | Boolean response field |
| Odd numbers array | ✅ | Filtered and returned as strings |
| Even numbers array | ✅ | Filtered and returned as strings |
| Alphabets array | ✅ | Uppercase conversion |
| Special characters | ✅ | Identified and separated |
| Sum calculation | ✅ | All numbers summed |
| Concatenation | ✅ | Reverse order, alternating caps |
| Error handling | ✅ | Try-catch blocks and validation |
| Best practices | ✅ | Clean code, security, documentation |

## 👨‍💻 Author

**Yogesh Pugazhendhi**
- Email: yogeshpugazhendhi@gmail.com
- Roll Number: 22BPS1044
- GitHub: [@Yogesh-005](https://github.com/Yogesh-005)

## 📄 License

This project is licensed under the MIT License.

---

**Live Demo**: [Deployed on Railway](https://your-railway-app-url.railway.app)

**API Endpoint**: `https://your-railway-app-url.railway.app/bfhl`
