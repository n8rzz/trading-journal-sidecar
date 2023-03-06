import React from "react";
import dayjs from "dayjs";
import { Anchor, Container, Flex, Stack, Text } from "@mantine/core";

interface IProps {
  chartLink?: string;
  longOrShort: string;
  notes?: string;
  price: number;
  qty: number;
  stopLoss: number;
  symbol: string;
  takeProfit: number;
  timeframe: string;
  tradeDate: Date;
  tradeTime: string;
}

export const TradeSummary: React.FC<IProps> = (props) => {
  const formattedTradeDate = dayjs(props.tradeDate).format("ddd MMM D, YYYY");
  const longOrSHortSymbol = props.longOrShort === "long" ? "L" : "S";
  const tradeString = `${longOrSHortSymbol} ${props.timeframe}/${props.qty} ${props.takeProfit}/${props.stopLoss}@${props.price}`;

  return (
    <Stack>
      <Flex align={"center"} justify={"space-between"}>
        <Stack spacing={"s"}>
          <Text>{props.tradeTime}</Text>
          <Text color={"dimmed"}>{formattedTradeDate}</Text>
        </Stack>

        <Stack spacing={"xs"}>
          <Anchor href={props.chartLink} target={"_blank"}>
            <Text color={"orange"} size={"xs"}>
              {props.chartLink}
            </Text>
          </Anchor>

          <Text color={"dimmed"} fs={"italic"} size={"sm"}>
            {tradeString}
          </Text>
        </Stack>
      </Flex>

      <Text>{props.notes}</Text>
    </Stack>
  );
};

TradeSummary.displayName = "TradeSummary";
