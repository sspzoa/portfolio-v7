import { NextResponse } from 'next/server';

const SKILLS_DATABASE_ID = '11ecc9b72a9c800eba06e276577aa180';

export async function GET() {
  const res = await fetch(`https://api.notion.com/v1/databases/${SKILLS_DATABASE_ID}/query`, {
    method: 'POST',
    cache: 'no-cache',
    headers: {
      Accept: 'application/json',
      'Notion-Version': '2022-02-22',
      'Content-Type': 'application/json',
      Authorization: `Bearer ${process.env.NOTION_API_KEY}`,
    },
    body: JSON.stringify({
      sorts: [
        {
          property: 'order',
          direction: 'ascending',
        },
      ],
    }),
  });

  const data = await res.json();
  return NextResponse.json(data);
}
