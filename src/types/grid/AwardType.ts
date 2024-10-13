export interface AwardType {
  id: string;
  public_url: string;
  properties: {
    name?: { title: { plain_text: string }[] };
    description?: { rich_text: { plain_text: string }[] };
    date?: { date: { start: string } };
  };
}
