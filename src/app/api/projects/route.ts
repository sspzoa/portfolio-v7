import { NextResponse } from 'next/server';

const PROJECTS_DATABASE_ID = 'c47cae2234124b8abf20e1ec41f864e0';

export async function GET() {
  const res = await fetch(`https://api.notion.com/v1/databases/${PROJECTS_DATABASE_ID}/query`, {
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
          property: 'workPeriod',
          direction: 'descending',
        },
      ],
    }),
  });

  const data = await res.json();
  return NextResponse.json(data);
}
