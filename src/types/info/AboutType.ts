export interface AboutItemType {
  date: string;
  title: string;
  organization: string;
  link: string;
}

export interface AboutType {
  items: AboutItemType[];
}
