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
