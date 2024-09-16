export interface Project {
  id: string;
  public_url: string;
  icon: { file: { url: string } };
  cover: { file: { url: string } };
  properties: {
    name?: { title: { plain_text: string }[] };
    description?: { rich_text: { plain_text: string }[] };
  };
}
