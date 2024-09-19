import { use } from 'react';

const AWARDS_DATABASE_ID = 'e01e1b8eb9ac45049db60a8b0e91523c';

async function fetchAwards() {
  const res = await fetch(`https://api.notion.com/v1/databases/${AWARDS_DATABASE_ID}/query`, {
    method: 'POST',
    next: { revalidate: 3600 },
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
