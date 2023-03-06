import {
  Button,
  Text,
  Textarea,
  Space,
  SimpleGrid,
  Stack,
  TextInput,
  Grid,
} from "@mantine/core";
import { TimeInput } from "@mantine/dates";
import { IconClock } from "@tabler/icons-react";
import React, { useEffect } from "react";
import { useForm } from "@mantine/form";
import {
  addCommentFormValidations,
  buildAddCommentFormInitialValues,
} from "./AddCommentForm.utils";
import { IAddCommentFormValues } from "./AddCommentForm.types";

// eslint-disable-next-line @typescript-eslint/no-empty-interface
interface IProps {}

export const AddCommentForm: React.FC<IProps> = () => {
  const form = useForm<IAddCommentFormValues>({
    initialValues: buildAddCommentFormInitialValues(),
    validate: addCommentFormValidations(),
  });

  const onSubmit = (formValues: IAddCommentFormValues) => {
    console.log(formValues);
  };

  return (
    <form onSubmit={form.onSubmit(onSubmit)}>
      <Text align="left" fz={"lg"}>
        Comment
      </Text>

      <Space h={"sm"} />

      <Stack>
        <TextInput
          name={"chartLink"}
          placeholder={"Chart Link"}
          {...form.getInputProps("chartLink")}
        />

        <Textarea
          autosize={true}
          maxRows={6}
          minRows={2}
          name={"note"}
          placeholder="Note"
          required={true}
          {...form.getInputProps("note")}
        />

        <Grid>
          <Grid.Col span={4}>
            <TimeInput
              icon={<IconClock size="1rem" stroke={1.5} />}
              mx="auto"
              name={"noteDate"}
              required={true}
              withSeconds={false}
              withAsterisk={true}
              {...form.getInputProps("noteDate")}
            />
          </Grid.Col>
          <Grid.Col span={5} />
          <Grid.Col span={3}>
            <Button color={"cyan"} type={"submit"}>
              Comment
            </Button>
          </Grid.Col>
        </Grid>
      </Stack>
    </form>
  );
};

AddCommentForm.displayName = "AddCommentForm";
