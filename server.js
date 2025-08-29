const express = require('express');
const cors = require('cors');
const helmet = require('helmet');

const app = express();
const PORT = process.env.PORT || 3000;

app.use(helmet());
app.use(cors());
app.use(express.json());
app.use(express.static('public'));

function generateUserId(fullName) {
    const today = new Date();
    const day = String(today.getDate()).padStart(2, '0');
    const month = String(today.getMonth() + 1).padStart(2, '0');
    const year = today.getFullYear();
    const dateString = `${day}${month}${year}`;
    return `${fullName.toLowerCase()}_${dateString}`;
}

function processData(data) {
    const result = {
        odd_numbers: [],
        even_numbers: [],
        alphabets: [],
        special_characters: [],
        sum: 0
    };

    data.forEach(item => {
        const str = String(item);
        
        if (!isNaN(str) && str.trim() !== '') {
            const num = parseInt(str);
            if (num % 2 === 0) {
                result.even_numbers.push(str);
            } else {
                result.odd_numbers.push(str);
            }
            result.sum += num;
        }
        else if (/^[a-zA-Z]+$/.test(str)) {
            result.alphabets.push(str.toUpperCase());
        }
        else if (/^[^a-zA-Z0-9\s]+$/.test(str)) {
            result.special_characters.push(str);
        }
    });

    return result;
}

function createConcatString(alphabets) {
    if (alphabets.length === 0) return '';
    
    const allLetters = alphabets.join('').split('').reverse();
    
    return allLetters.map((letter, index) => {
        return index % 2 === 0 ? letter.toUpperCase() : letter.toLowerCase();
    }).join('');
}

app.post('/bfhl', (req, res) => {
    try {
        const { data } = req.body;
        
        if (!data || !Array.isArray(data)) {
            return res.status(400).json({
                is_success: false,
                error: "Invalid input. 'data' must be an array."
            });
        }

        const processed = processData(data);
        
        const response = {
            is_success: true,
            user_id: generateUserId("Yogesh_P"), 
            email: "yogeshpugazhendhi@gmail.com", 
            roll_number: "22BPS1044", 
            odd_numbers: processed.odd_numbers,
            even_numbers: processed.even_numbers,
            alphabets: processed.alphabets,
            special_characters: processed.special_characters,
            sum: String(processed.sum),
            concat_string: createConcatString(processed.alphabets)
        };

        res.status(200).json(response);
        
    } catch (error) {
        console.error('Error processing request:', error);
        res.status(500).json({
            is_success: false,
            error: "Internal server error"
        });
    }
});

app.get('/', (req, res) => {
    res.json({
        message: "BFHL API is running",
        endpoint: "/bfhl",
        method: "POST"
    });
});

app.use((err, req, res, next) => {
    console.error(err.stack);
    res.status(500).json({
        is_success: false,
        error: "Something went wrong!"
    });
});

app.use('*', (req, res) => {
    res.status(404).json({
        is_success: false,
        error: "Endpoint not found"
    });
});

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
    console.log(`API endpoint: http://localhost:${PORT}/bfhl`);
});
