import { ITradeComment } from "../../domain/trade-comment/TradeComment.types";

export interface IAddCommentFormValues extends Omit<ITradeComment, "commentDate" | "id"> {
  commentDate: string;
}
