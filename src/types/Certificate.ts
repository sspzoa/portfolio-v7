export interface Certificate {
  id: string;
  public_url: string;
  properties: {
    name?: { title: { plain_text: string }[] };
    kind?: { rich_text: { plain_text: string }[] };
    institution?: { rich_text: { plain_text: string }[] };
    date?: { date: { start: string } };
  };
}
