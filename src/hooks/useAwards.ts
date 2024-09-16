import { use } from 'react';

async function fetchAwards() {
  const res = await fetch(`https://api.notion.com/v1/databases/${process.env.AWARDS_DATABASE_ID}/query`, {
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

  return await res.json();
}

export function useAwards() {
  return use(fetchAwards());
}
