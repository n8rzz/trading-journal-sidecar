import React, { useEffect } from "react";
import "./TradeList.css";
import { tradeListMock } from "@src/components/trade/__mock__/trade.mocks";
import { ITradeSummary } from "@src/domain/trade/trade.types";
import { Trade } from "@src/components/trade/Trade";
import { Title } from "@mantine/core";

export const TradeList: React.FC = () => {
  return (
    <div className={"root"}>
      <Title mb={40} order={1}>
        Trades
      </Title>

      {tradeListMock.map((trade: ITradeSummary) => (
        <Trade key={trade.id} tradeSummary={trade} />
      ))}
    </div>
  );
};

TradeList.displayName = "TradeList";
