import { NextResponse } from 'next/server';

const AWARDS_DATABASE_ID = 'e01e1b8eb9ac45049db60a8b0e91523c';

export async function GET() {
  const res = await fetch(`https://api.notion.com/v1/databases/${AWARDS_DATABASE_ID}/query`, {
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
