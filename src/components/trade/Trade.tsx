import React from "react";
import { Stack, Timeline } from "@mantine/core";
import { TradeComment } from "./trade-comment/TradeComment";
import { TradeSummary } from "./trade-summary/TradeSummary";
import { ITradeSummary } from "@src/domain/trade/trade.types";
import { ITradeComment } from "@src/domain/trade-comment/TradeComment.types";

interface IProps {
  tradeSummary: ITradeSummary;
}

export const Trade: React.FC<IProps> = (props) => {
  return (
    <Stack mb={60} spacing={"xl"}>
      <TradeSummary {...props.tradeSummary} />

      <Timeline bulletSize={24} lineWidth={2}>
        {props.tradeSummary.comments.map((comment: ITradeComment) => (
          <Timeline.Item key={comment.note.replace(" ", "-")}>
            <TradeComment {...comment} />
          </Timeline.Item>
        ))}
      </Timeline>
    </Stack>
  );
};

Trade.displayName = "Trade";
