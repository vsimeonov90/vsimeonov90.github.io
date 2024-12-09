import { get, set } from '@vercel/edge-config';

export const config = {
    runtime: 'edge',
};

export default async function handler(req) {
    const headers = {
        'Access-Control-Allow-Origin': '*', // Allow requests from anywhere
        'Access-Control-Allow-Methods': 'GET, POST, OPTIONS',
        'Access-Control-Allow-Headers': 'Content-Type',
    };

    if (req.method === 'OPTIONS') {
        return new Response(null, { status: 200, headers });
    }

    try {
        if (req.method === 'POST') {
            const { question } = await req.json();
            if (!question) {
                return new Response(JSON.stringify({ error: 'Question is required' }), {
                    status: 400,
                    headers: { 'Content-Type': 'application/json', ...headers },
                });
            }

            const questions = (await get('questions')) || [];
            questions.push({ question, date: new Date().toISOString() });

            await set('questions', questions);

            return new Response(JSON.stringify({ success: true }), {
                status: 200,
                headers: { 'Content-Type': 'application/json', ...headers },
            });
        } else if (req.method === 'GET') {
            const questions = (await get('questions')) || [];
            return new Response(JSON.stringify(questions), {
                status: 200,
                headers: { 'Content-Type': 'application/json', ...headers },
            });
        } else {
            return new Response(JSON.stringify({ error: 'Method not allowed' }), {
                status: 405,
                headers: { 'Content-Type': 'application/json', ...headers },
            });
        }
    } catch (error) {
        return new Response(JSON.stringify({ error: 'Internal Server Error', details: error.message }), {
            status: 500,
            headers: { 'Content-Type': 'application/json', ...headers },
        });
    }
}