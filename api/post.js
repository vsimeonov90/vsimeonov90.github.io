import fs from 'fs';
import path from 'path';

const filePath = path.resolve('./data/questions.json');

export default async function handler(req, res) {
    res.setHeader('Access-Control-Allow-Origin', '*'); // Allow all origins
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS'); // Allowed methods
    res.setHeader('Access-Control-Allow-Headers', 'Content-Type'); // Allowed headers

    if (req.method === 'OPTIONS') {
        return res.status(200).end(); // Handle preflight requests
    }

    try {
        if (req.method === 'POST') {
            const { question } = req.body;
            if (!question) {
                return res.status(400).json({ error: 'Question is required' });
            }

            const data = JSON.parse(fs.readFileSync(filePath, 'utf8'));
            data.push({ question, date: new Date().toISOString() });

            fs.writeFileSync(filePath, JSON.stringify(data, null, 2));
            return res.status(200).json({ success: true, message: 'Question added!' });
        } else if (req.method === 'GET') {
            const data = JSON.parse(fs.readFileSync(filePath, 'utf8'));
            return res.status(200).json(data);
        } else {
            return res.status(405).json({ error: 'Method not allowed' });
        }
    } catch (error) {
        return res.status(500).json({ error: 'Server error', details: error.message });
    }
}