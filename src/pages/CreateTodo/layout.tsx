import { FC } from "react";
import { useCreateTodoTemplate } from "../../hooks/CreateTodo/useCreateTodoTemplate";
import Form from "../../components/atoms/Form";
import Input from "../../components/atoms/Input";
import TextArea from "../../components/atoms/TextArea";
import Button from "../../components/atoms/Button";

const CreateTodo: FC = () => {
  const [
    { todoTitle, todoContent },
    { handleChangeTitle, handleChangeContent, createTodoSubmit },
  ] = useCreateTodoTemplate();

  return (
    <div className="form common-form flex-form">
      <h2>Create Todo</h2>
      <Form onSubmit={createTodoSubmit}>
        <Input
          title={"タイトル"}
          id={"title"}
          type={"text"}
          placeholder={"タイトルを入力"}
          value={todoTitle}
          onChange={handleChangeTitle}
        />
        <TextArea
          title={"内容"}
          id="content"
          placeholder="詳細を入力"
          value={todoContent}
          onChange={handleChangeContent}
        />
        <div className="btn-center">
          <Button type={"submit"} className={"default-btn color-reverse-btn"}>
            送信
          </Button>
        </div>
      </Form>
    </div>
  );
};

export default CreateTodo;
