import { atom } from 'nanostores';

export const pages = ['about', 'users', 'library'] as const;

export type Page = (typeof pages)[number];

export type PageInfo = { previous?: Page; current?: Page };

const initialState: PageInfo = {};

export const pageInfo = atom<PageInfo>(initialState);

export const setPreviousPage = (page: Page) => {
  pageInfo.set({ ...pageInfo.value, previous: page });
};

export const setCurrentPage = (page: Page) => {
  pageInfo.set({ ...pageInfo.value, current: page });
};

export const setPageInfo = (info: PageInfo) => {
  pageInfo.set({ ...info });
};
