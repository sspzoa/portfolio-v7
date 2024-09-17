import { use } from 'react';

const ACTIVITIES_DATABASE_ID = '9ada0cfa5510493ea8f5a3be2b8b516a';

async function fetchActivities() {
  const res = await fetch(`https://api.notion.com/v1/databases/${ACTIVITIES_DATABASE_ID}/query`, {
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

export function useActivities() {
  return use(fetchActivities());
}
