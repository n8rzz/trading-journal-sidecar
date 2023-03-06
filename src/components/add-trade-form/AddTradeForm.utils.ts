import dayjs from "dayjs";
import { IAddTradeFormValues } from "./AddTradeForm.type";

export const buildAddTradeFormInitialValues = (): IAddTradeFormValues => {
  return {
    chartLink: "",
    longOrShort: "long",
    notes: "",
    price: 0,
    qty: 1,
    stopLoss: 0,
    symbol: "MESH2023",
    takeProfit: 0,
    timeframe: "",
    tradeDate: new Date(),
    tradeTime: dayjs().format("HH:mm"),
  };
};
