export type PaginationParams = {
  page: number
  pageSize?: number
}

export type PaginationMeta = {
  page: number
  totalPages: number
  totalItems: number
}

export const DEFAULT_PAPGE_SIZE = 10

export const DEFAULT_INITAL_PAGE_PARAM: PaginationParams = {
  page: 1,
  pageSize: DEFAULT_PAPGE_SIZE,
}
