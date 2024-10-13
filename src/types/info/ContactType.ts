import type { IconDefinition } from '@fortawesome/fontawesome-svg-core';

export interface ContactItemType {
  href: string;
  icon: IconDefinition;
  text: string;
}

export interface ContactType {
  items: ContactItemType[];
}
