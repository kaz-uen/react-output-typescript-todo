import { FC } from "react";
import { useEditTodoTemplate } from "../../hooks/EditTodo/useEditTodoTemplate";
import Form from "../../components/atoms/Form";
import Input from "../../components/atoms/Input";
import TextArea from "../../components/atoms/TextArea";
import Button from "../../components/atoms/Button";

const EditTodo: FC = () => {
  const [
    { updateTitle, updateContent },
    { handleChangeTitle, handleChangeContent, updateTodoSubmit },
  ] = useEditTodoTemplate();

  return (
    <div className="form common-form flex-form">
      <h2>Edit Todo</h2>
      <Form onSubmit={updateTodoSubmit}>
        <Input
          title={"タイトル"}
          id={"title"}
          type={"text"}
          value={updateTitle}
          onChange={handleChangeTitle}
        />
        <TextArea
          title={"内容"}
          id="content"
          value={updateContent}
          onChange={handleChangeContent}
        />
        <div className="btn-center">
          <Button type={"submit"} className={"default-btn color-reverse-btn"}>
            更新
          </Button>
        </div>
      </Form>
    </div>
  );
};

export default EditTodo;
