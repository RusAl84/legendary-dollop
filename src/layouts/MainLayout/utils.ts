import {Item} from './types';


export function itemEquals(item1?: Item, item2?: Item): boolean {
  if (!item1 || !item2) return false;
  const equalName = item1.name === item2.name;
  const equalDesc = item1.desc === item2.desc;
  const equalPhoto = item1.photo === item2.photo;
  return equalName && equalDesc && equalPhoto;
}