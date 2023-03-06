import dayjs from "dayjs";
import { IAddCommentFormValues } from "./AddCommentForm.types";

export const buildAddCommentFormInitialValues = (): IAddCommentFormValues => {
  return {
    chartLink: "",
    commentDate: dayjs().format("HH:mm"),
    note: "",
  };
};

export const addCommentFormValidations = () => ({
  note: (value: string) => value.length === 0,
  noteDate: (value: string) => typeof value === undefined,
});
