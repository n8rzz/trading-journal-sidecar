import React, { useEffect } from "react";
import {
  Button,
  Flex,
  Grid,
  NativeSelect,
  NumberInput,
  SegmentedControl,
  Space,
  Stack,
  Text,
  Textarea,
  TextInput,
} from "@mantine/core";
import { DatePickerInput, TimeInput } from "@mantine/dates";
import {
  IconCalendar,
  IconClock,
  IconCurrencyDollar,
} from "@tabler/icons-react";
import { useForm } from "@mantine/form";
import { buildAddTradeFormInitialValues } from "./AddTradeForm.utils";
import { IAddTradeFormValues } from "./AddTradeForm.type";

export const AddTradeForm: React.FC = () => {
  const form = useForm<IAddTradeFormValues>({
    initialValues: buildAddTradeFormInitialValues(),
  });

  const onSubmit = (formValues: IAddTradeFormValues) => {
    console.log("---", formValues);
    form.validate();
  };

  return (
    <form onSubmit={form.onSubmit(onSubmit)}>
      <Stack>
        <Text align="left" fz={"lg"}>
          Add Tade
        </Text>

        <Grid>
          <Grid.Col span={4}>
            <DatePickerInput
              icon={<IconCalendar size="1rem" stroke={1.5} />}
              label={"Date"}
              maw={300}
              mx={"auto"}
              name={"tradeDate"}
              required={true}
              placeholder={"Date"}
              withAsterisk={true}
              {...form.getInputProps("tradeDate")}
            />
          </Grid.Col>
          <Grid.Col span={4}>
            <TimeInput
              icon={<IconClock size="1rem" stroke={1.5} />}
              label={"Time"}
              mx={"auto"}
              name={"tradeTime"}
              required={true}
              withAsterisk={true}
              withSeconds={false}
              {...form.getInputProps("tradeTime")}
            />
          </Grid.Col>
          <Grid.Col span={4}>
            <Flex align={"center"} justify={"flex-start"} pt={"1.5rem"}>
              <SegmentedControl
                color={"cyan"}
                data={[
                  { label: "Long", value: "long" },
                  { label: "Short", value: "short" },
                ]}
                name={"longOrShort"}
                orientation={"horizontal"}
                transitionTimingFunction={"linear"}
                {...form.getInputProps("longOrShort")}
              />
            </Flex>
          </Grid.Col>
        </Grid>

        <Grid align={"center"} justify={"space-between"}>
          <Grid.Col span={6}>
            <TextInput
              label={"Symbol"}
              name={"symbol"}
              placeholder={"Symbol"}
              required={true}
              withAsterisk={true}
              {...form.getInputProps("symbol")}
            />
          </Grid.Col>
          <Grid.Col span={6}>
            <TextInput
              type={"number"}
              label={"Price"}
              name={"price"}
              placeholder={"Price"}
              required={true}
              rightSection={<IconCurrencyDollar size={14} />}
              rightSectionWidth={30}
              {...form.getInputProps("price")}
            />
          </Grid.Col>
        </Grid>

        <Grid>
          <Grid.Col span={3}>
            <NativeSelect
              data={["M1", "M2", "M5", "M10", "M15"]}
              label={"Timeframe"}
              name={"timeframe"}
              required={true}
              withAsterisk={true}
              {...form.getInputProps("timeframe")}
            />
          </Grid.Col>
          <Grid.Col span={3}>
            <NumberInput
              label={"Qty"}
              name={"qty"}
              placeholder={"Qty"}
              required={true}
              {...form.getInputProps("qty")}
            />
          </Grid.Col>
          <Grid.Col span={3}>
            <NumberInput
              label={"TP"}
              name={"takeProfit"}
              placeholder={"TP"}
              required={true}
              {...form.getInputProps("takeProfit")}
            />
          </Grid.Col>
          <Grid.Col span={3}>
            <NumberInput
              label={"SL"}
              name={"stopLoss"}
              placeholder={"SL"}
              required={true}
              {...form.getInputProps("stopLoss")}
            />
          </Grid.Col>
        </Grid>

        <Stack align={"flex-end"} spacing={"xs"}>
          <Text c={"dimmed"} fz={"small"} fs={"italic"}>
            TP = Take Profit, SL = Stop Loss
          </Text>
        </Stack>

        <TextInput
          name={"chartLink"}
          placeholder={"Chart Link"}
          {...form.getInputProps("chartLink")}
        />

        <Textarea
          autosize={true}
          maxRows={6}
          minRows={2}
          placeholder="Notes"
          {...form.getInputProps("notes")}
        />

        <Space h={"sm"} />

        <Button color={"cyan"} type={"submit"}>
          Add
        </Button>
      </Stack>
    </form>
  );
};

AddTradeForm.displayName = "AddTradeForm";
