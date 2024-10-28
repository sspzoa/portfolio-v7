import { NextResponse } from 'next/server';

const CERTIFICATES_DATABASE_ID = '105cc9b72a9c8088a82defcfa25890aa';

export async function GET() {
  const res = await fetch(`https://api.notion.com/v1/databases/${CERTIFICATES_DATABASE_ID}/query`, {
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
          property: 'date',
          direction: 'descending',
        },
      ],
    }),
  });

  const data = await res.json();
  return NextResponse.json(data);
}
