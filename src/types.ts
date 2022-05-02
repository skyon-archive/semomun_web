export interface Workbook {
  wid: number;
  title: string;
  bookcover: string;
}

export interface CategoryInfo {
  category: string[];
}

export interface NestedWorkbooks {
  count: number;
  workbooks: Workbook[];
}

export enum Role {
  USER = "USER",
  ADMIN = "ADMIN",
}

export interface User {
  role: string;
}
