import { FC } from "react";
import Form from "../../atoms/Form";
import Input from "../../atoms/Input";
import TextArea from "../../atoms/TextArea";
import Button from "../../atoms/Button";
import DefaultFormLayout from "../../templates/DefaultFormLayout";
import PageTitle from "../../atoms/PageTitle";
import { PAGE_TITLE } from "../../../constants/InitialData";
import useEdit from "../../../features/hooks/TodoStateHandle/useEdit";

const EditForm: FC = () => {
  const Title = PAGE_TITLE.edit;

  const {
    updateTitle,
    setUpdateTitle,
    updateContent,
    setUpdateContent,
    updateTodoSubmit,
  } = useEdit();

  return (
    <DefaultFormLayout>
      <PageTitle title={Title} />
      <Form onSubmit={updateTodoSubmit}>
        <Input
          title={"タイトル"}
          id={"title"}
          type={"text"}
          value={updateTitle}
          onChange={(e) => setUpdateTitle(e.target.value)}
        />
        <TextArea
          title={"内容"}
          id="content"
          value={updateContent}
          onChange={(e) => setUpdateContent(e.target.value)}
        />
        <div className="btn-center">
          <Button type={"submit"} className={"default-btn color-reverse-btn"}>
            更新
          </Button>
        </div>
      </Form>
    </DefaultFormLayout>
  );
};

export default EditForm;
