import { ITradeComment } from "../trade-comment/TradeComment.types";

export interface ITradeSummary {
  chartLink: string;
  comments: ITradeComment[];
  id?: string;
  longOrShort: string;
  notes: string;
  price: number;
  qty: number;
  stopLoss: number;
  symbol: string;
  takeProfit: number;
  timeframe: string;
  tradeDate: Date;
  tradeTime: string;
}
