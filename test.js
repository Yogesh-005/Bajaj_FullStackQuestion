const axios = require('axios');

const BASE_URL = 'http://localhost:3000';

// Test cases from the assignment
const testCases = [
    {
        name: "Example A",
        input: { data: ["a", "1", "334", "4", "R", "$"] },
        expected: {
            odd_numbers: ["1"],
            even_numbers: ["334", "4"],
            alphabets: ["A", "R"],
            special_characters: ["$"],
            sum: "339",
            concat_string: "Ra"
        }
    },
    {
        name: "Example B",
        input: { data: ["2", "a", "y", "4", "&", "-", "*", "5", "92", "b"] },
        expected: {
            odd_numbers: ["5"],
            even_numbers: ["2", "4", "92"],
            alphabets: ["A", "Y", "B"],
            special_characters: ["&", "-", "*"],
            sum: "103",
            concat_string: "ByA"
        }
    },
    {
        name: "Example C",
        input: { data: ["A", "ABcD", "DOE"] },
        expected: {
            odd_numbers: [],
            even_numbers: [],
            alphabets: ["A", "ABCD", "DOE"],
            special_characters: [],
            sum: "0",
            concat_string: "EoDdCbAa"
        }
    }
];

async function testAPI() {
    console.log('🚀 Starting API Tests...\n');

    for (const testCase of testCases) {
        try {
            console.log(`📋 Testing: ${testCase.name}`);
            console.log(`Input: ${JSON.stringify(testCase.input)}`);
            
            const response = await axios.post(`${BASE_URL}/bfhl`, testCase.input);
            
            console.log(`✅ Status: ${response.status}`);
            console.log(`Response: ${JSON.stringify(response.data, null, 2)}`);
            
            // Validate response structure
            const requiredFields = [
                'is_success', 'user_id', 'email', 'roll_number',
                'odd_numbers', 'even_numbers', 'alphabets', 
                'special_characters', 'sum', 'concat_string'
            ];
            
            const missingFields = requiredFields.filter(field => !(field in response.data));
            if (missingFields.length > 0) {
                console.log(`❌ Missing fields: ${missingFields.join(', ')}`);
            } else {
                console.log(`✅ All required fields present`);
            }
            
            // Validate expected values
            let allCorrect = true;
            for (const [key, expectedValue] of Object.entries(testCase.expected)) {
                if (JSON.stringify(response.data[key]) !== JSON.stringify(expectedValue)) {
                    console.log(`❌ ${key}: Expected ${JSON.stringify(expectedValue)}, Got ${JSON.stringify(response.data[key])}`);
                    allCorrect = false;
                }
            }
            
            if (allCorrect) {
                console.log(`✅ All expected values match!`);
            }
            
        } catch (error) {
            console.log(`❌ Error: ${error.message}`);
            if (error.response) {
                console.log(`Response: ${JSON.stringify(error.response.data, null, 2)}`);
            }
        }
        
        console.log('\n' + '='.repeat(50) + '\n');
    }
}

// Test health endpoint
async function testHealth() {
    try {
        console.log('🏥 Testing Health Endpoint...');
        const response = await axios.get(BASE_URL);
        console.log(`✅ Health check passed: ${JSON.stringify(response.data, null, 2)}`);
    } catch (error) {
        console.log(`❌ Health check failed: ${error.message}`);
    }
}

// Run tests
async function runTests() {
    await testHealth();
    console.log('\n');
    await testAPI();
}

// Check if server is running
async function checkServer() {
    try {
        await axios.get(BASE_URL);
        return true;
    } catch (error) {
        return false;
    }
}

// Main execution
async function main() {
    const serverRunning = await checkServer();
    
    if (!serverRunning) {
        console.log('❌ Server is not running. Please start the server first:');
        console.log('   npm install');
        console.log('   npm start');
        return;
    }
    
    await runTests();
}

main().catch(console.error);
