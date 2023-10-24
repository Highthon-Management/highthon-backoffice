/** pages 폴더에 파일 추가하고 여기에 경로 추가해야함. */
const EXAMPLE_DATA = ['/posts/[:id]', '/posts/[:id]/patch'];
export const pageList = ['/', ...EXAMPLE_DATA] as const;

export const pagePath = {
  landingPage: '/',
} as const;

export type PageListType = (typeof pageList)[number];
