import React from "react";
import { Anchor, Flex, Text } from "@mantine/core";
import RelativeTime from "dayjs/plugin/relativeTime";
import dayjs from "dayjs";
import { ITradeComment } from "../../../domain/trade-comment/TradeComment.types";

dayjs.extend(RelativeTime);

interface IProps extends ITradeComment {}

export const TradeComment: React.FC<IProps> = (props) => {
  const formattedTradeDate = dayjs().to(props.commentDate);

  return (
    <React.Fragment>
      <Text color="dimmed" mb={5} size="sm">
        {props.note}
      </Text>
      <Flex align={"center"} justify={"space-between"}>
        <Text size="xs" mt={4}>
          {formattedTradeDate}
        </Text>
        <Text color={"dimmed"} size="xs" mt={4}>
          <Anchor href={props.chartLink}>
            <Text size={"xs"}>{props.chartLink}</Text>
          </Anchor>
        </Text>
      </Flex>
    </React.Fragment>
  );
};

TradeComment.displayName = "TradeComment";
