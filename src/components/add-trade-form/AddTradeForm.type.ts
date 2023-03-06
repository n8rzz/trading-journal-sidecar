import { ITradeSummary } from "../../domain/trade/trade.types";

export interface IAddTradeFormValues extends Omit<ITradeSummary, "comments"> {}
