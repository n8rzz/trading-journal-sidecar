// https://www.tradingview.com/x/2mlbLYMc/
// 1228 - LONG run sputtering out. going short on the 2nd pullback. S M1/1 47/13 @ 4037.50
// 1235 - moving SL into profit
// 1230 - SL hit, small win.
//
// https://www.tradingview.com/x/EQkQWj2P/
// 1242 - same move. S M1/1 39/10 @ 4036.50
// 1301 - stopped out for a small win

import { ITradeSummary } from "../../../domain/trade/trade.types";

export const tradeListMock: ITradeSummary[] = [
  {
    chartLink: "https://www.tradingview.com/x/2mlbLYMc/",
    comments: [
      {
        note: "moving SL into profit",
        chartLink: "",
        commentDate: new Date("2023-03-03T18:35:00.529Z"),
      },
      {
        note: "SL hit, small win.",
        chartLink: "",
        commentDate: new Date("2023-03-03T18:38:00.529Z"),
      },
    ],
    id: "b39a8311-33af-467d-a976-479975db862c",
    longOrShort: "short",
    notes: "LONG run sputtering out. going short on the 2nd pullback.",
    price: 4037.5,
    qty: 1,
    stopLoss: 13,
    symbol: "MESH2023",
    takeProfit: 47,
    timeframe: "M1",
    tradeDate: new Date("2023-03-03T18:28:00.529Z"),
    tradeTime: "12:28",
  },
  {
    chartLink: "https://www.tradingview.com/x/EQkQWj2P/",
    comments: [
      {
        note: "stopped out for a small win",
        chartLink: "",
        commentDate: new Date("2023-03-03T19:01:00.529Z"),
      },
    ],
    id: "c6318b3a-4649-4165-bf4c-20ba613c8efe",
    longOrShort: "short",
    notes: "same move",
    price: 4036.5,
    qty: 1,
    stopLoss: 10,
    symbol: "MESH2023",
    takeProfit: 39,
    timeframe: "M1",
    tradeDate: new Date("2023-03-03T18:42:00.529Z"),
    tradeTime: "12:42",
  },
];
