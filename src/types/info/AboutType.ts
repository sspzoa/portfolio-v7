export interface AboutType {
  id: string;
  properties: {
    name?: { title: { plain_text: string }[] };
    organization?: { rich_text: { plain_text: string }[] };
    date?: { date: { start: string } };
    url?: { rich_text: { plain_text: string }[] };
  };
}
