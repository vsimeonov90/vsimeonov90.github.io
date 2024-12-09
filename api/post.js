import fs from 'fs';
import path from 'path';

const filePath = path.resolve('./data/questions.json'); // Path to the JSON file

export default async function handler(req, res) {
    try {
        if (req.method === 'POST') {
            const { question } = req.body;
            if (!question) {
                return res.status(400).json({ error: 'Question is required' });
            }

            const data = JSON.parse(fs.readFileSync(filePath, 'utf8'));
            data.push({ question, date: new Date().toISOString() });

            fs.writeFileSync(filePath, JSON.stringify(data, null, 2)); // Save to file
            return res.status(200).json({ success: true, message: 'Question added!' });
        } else if (req.method === 'GET') {
            const data = JSON.parse(fs.readFileSync(filePath, 'utf8'));
            return res.status(200).json(data); // Return all questions
        } else {
            return res.status(405).json({ error: 'Method not allowed' });
        }
    } catch (error) {
        return res.status(500).json({ error: 'Server error', details: error.message });
    }
}
