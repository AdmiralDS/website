export const pages = ['about', 'users', 'library'] as const;

export type Page = (typeof pages)[number];
