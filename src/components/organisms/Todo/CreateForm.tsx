import { FC } from "react";
import Form from "../../atoms/Form";
import PageTitle from "../../atoms/PageTitle";
import Input from "../../atoms/Input";
import TextArea from "../../atoms/TextArea";
import DefaultFormLayout from "../../templates/DefaultFormLayout";
import useCreate from "../../../features/hooks/TodoStateHandle/useCreate";
import { PAGE_TITLE } from "../../../constants/InitialData";
import styled from "styled-components";
import DefaultButton from "../../atoms/Button/Default";

const CreateForm: FC = () => {
  const Title = PAGE_TITLE.create;

  const {
    todoTitle,
    setTodoTitle,
    todoContent,
    setTodoContent,
    createTodoSubmit,
  } = useCreate();

  return (
    <DefaultFormLayout>
      <PageTitle title={Title} />
      <Form onSubmit={createTodoSubmit}>
        <Input
          title={"タイトル"}
          id={"title"}
          type={"text"}
          placeholder={"タイトルを入力"}
          value={todoTitle}
          onChange={(e) => setTodoTitle(e.target.value)}
        />
        <TextArea
          title={"内容"}
          id={"content"}
          placeholder={"詳細を入力"}
          value={todoContent}
          onChange={(e) => setTodoContent(e.target.value)}
        />
        <SSubmit>
          <DefaultButton type={"submit"}>
            送信
          </DefaultButton>
        </SSubmit>
      </Form>
    </DefaultFormLayout>
  );
};

const SSubmit = styled.div`
    text-align: center;
`;

export default CreateForm;
