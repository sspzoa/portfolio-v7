import { NextResponse } from 'next/server';

const ABOUT_DATABASE_ID = '11ecc9b72a9c800aa061f9d2fe431f33';

export async function GET() {
  const res = await fetch(`https://api.notion.com/v1/databases/${ABOUT_DATABASE_ID}/query`, {
    method: 'POST',
    headers: {
      Accept: 'application/json',
      'Notion-Version': '2022-02-22',
      'Content-Type': 'application/json',
      Authorization: `Bearer ${process.env.NOTION_API_KEY}`,
    },
    body: JSON.stringify({
      sorts: [
        {
          property: 'date',
          direction: 'descending',
        },
      ],
    }),
  });

  const data = await res.json();
  return NextResponse.json(data);
}
