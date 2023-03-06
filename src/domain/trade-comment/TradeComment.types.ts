import type { Dayjs } from "dayjs";

export interface ITradeComment {
  chartLink: string;
  commentDate: Date | Dayjs;
  id?: string;
  note: string;
}
