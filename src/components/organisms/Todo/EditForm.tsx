import React, { FC } from 'react';
import Form from '../../atoms/Form';
import Input from '../../atoms/Input/Default';
import TextArea from '../../atoms/TextArea';
import DefaultFormLayout from '../../templates/DefaultFormLayout';
import PageTitle from '../../atoms/PageTitle';
import { PAGE_TITLE } from '../../../constants/InitialData';
import useEdit from '../../../features/todo/hooks/TodoStateHandle/useEdit';
import styled from 'styled-components';
import DefaultButton from '../../atoms/Button/Default';

const SSubmit = styled.div`
  margin-top: 1em;
  margin-bottom: 1em;
  text-align: center;
`;

const EditForm: FC = () => {
  const Title = PAGE_TITLE.edit;
  const { updateTitle, setUpdateTitle, updateContent, setUpdateContent, updateTodoSubmit } = useEdit();

  return (
    <DefaultFormLayout>
      <PageTitle title={Title} />
      <Form onSubmit={updateTodoSubmit}>
        <Input
          title={'タイトル'}
          id={'title'}
          type={'text'}
          value={updateTitle}
          onChange={(e) => setUpdateTitle(e.target.value)}
        />
        <TextArea
          title={'内容'}
          id="content"
          value={updateContent}
          onChange={(e) => setUpdateContent(e.target.value)}
        />
        <SSubmit>
          <DefaultButton type={'submit'}>更新</DefaultButton>
        </SSubmit>
      </Form>
    </DefaultFormLayout>
  );
};

export default EditForm;
