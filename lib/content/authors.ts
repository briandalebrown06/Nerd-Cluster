import type { Author } from '@/lib/content/types';

export const authors: Author[] = [
  {
    id: 'maya-lane',
    name: 'Maya Lane',
    role: 'Senior Culture Editor',
  },
  {
    id: 'rowan-kent',
    name: 'Rowan Kent',
    role: 'Reviews Editor',
  },
  {
    id: 'jules-orozco',
    name: 'Jules Orozco',
    role: 'Features Writer',
  },
];

export function getAuthorById(authorId: string) {
  return authors.find((author) => author.id === authorId);
}
