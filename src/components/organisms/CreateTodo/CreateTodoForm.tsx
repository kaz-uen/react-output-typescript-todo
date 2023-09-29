import { FC } from "react";
import Form from "../../atoms/Form";
import PageTitle from "../../atoms/PageTitle";
import Input from "../../atoms/Input";
import TextArea from "../../atoms/TextArea";
import Button from "../../atoms/Button";
import DefaultFormLayout from "../../templates/DefaultFormLayout";
import useCreateTodoStateHandle from "../../../features/hooks/CreateTodo/useCreateTodoStateHandle";
import { PAGE_TITLE } from "../../../constants/InitialData";

const CreateTodoForm: FC = () => {
  const Title = PAGE_TITLE.create;

  const {
    todoTitle,
    setTodoTitle,
    todoContent,
    setTodoContent,
    createTodoSubmit,
  } = useCreateTodoStateHandle();

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
        <div className="btn-center">
          <Button type={"submit"} className={"default-btn color-reverse-btn"}>
            送信
          </Button>
        </div>
      </Form>
    </DefaultFormLayout>
  );
};

export default CreateTodoForm;
