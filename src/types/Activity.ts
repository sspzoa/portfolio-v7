export interface Activity {
  id: string;
  public_url: string;
  properties: {
    name?: { title: { plain_text: string }[] };
    host?: { multi_select: { name: string }[] };
    date?: { date: { start: string } };
  };
}
