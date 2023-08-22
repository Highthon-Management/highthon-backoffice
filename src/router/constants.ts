/** pages 폴더에 파일 추가하고 여기에 경로 추가해야함. */
export const PAGE_LIST = ["/", "/posts/[:id]", "/posts/[:id]/patch"] as const;

export type PageListType = (typeof PAGE_LIST)[number];
