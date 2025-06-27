// app/api/instructions/route.ts
import { NextResponse } from 'next/server';

export async function POST(req: Request) {
  const { recipe } = await req.json();

  if (!process.env.OPENAI_API_KEY) {
    return NextResponse.json(
      { error: 'Missing OpenAI API key' },
      { status: 500 }
    );
  }

  const prompt = `Give me step-by-step cooking instructions for ${recipe}.`;

  const res = await fetch('https://api.openai.com/v1/chat/completions', {
    method: 'POST',
    headers: {
      Authorization: `Bearer ${process.env.OPENAI_API_KEY}`,
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      model: 'gpt-3.5-turbo',
      messages: [{ role: 'user', content: prompt }],
      temperature: 0.7,
    }),
  });

  if (!res.ok) {
    const errorText = await res.text();
    return NextResponse.json({ error: errorText }, { status: res.status });
  }

  const data = await res.json();

  const reply = data?.choices?.[0]?.message?.content;

  return NextResponse.json({
    instructions: reply || 'No instructions found.',
  });
}