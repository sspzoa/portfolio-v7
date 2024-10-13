export interface SkillType {
  id: string;
  properties: {
    name?: { title: { plain_text: string }[] };
    icon?: { files: Array<{ file: { url: string } }> };
  };
}
