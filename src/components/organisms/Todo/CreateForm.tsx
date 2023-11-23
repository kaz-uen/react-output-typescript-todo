import React, { FC } from 'react';
import Form from '../../atoms/Form';
import PageTitle from '../../atoms/PageTitle';
import Input from '../../atoms/Input/Default';
import TextArea from '../../atoms/TextArea';
import DefaultFormLayout from '../../templates/DefaultFormLayout';
import useTodo from '../../../features/todo/hooks/useTodo';
import { PAGE_TITLE } from '../../../constants/InitialData';
import styled from 'styled-components';
import DefaultButton from '../../atoms/Button/Default';

const SSubmit = styled.div`
  margin-top: 1em;
  margin-bottom: 1em;
  text-align: center;
`;

const CreateForm: FC = () => {
  const Title = PAGE_TITLE.create;
  const { todoTitle, setTodoTitle, todoContent, setTodoContent, todoSubmit } = useTodo();

  return (
    <DefaultFormLayout>
      <PageTitle title={Title} />
      <Form onSubmit={todoSubmit}>
        <Input
          title={'タイトル'}
          id={'title'}
          type={'text'}
          placeholder={'タイトルを入力'}
          value={todoTitle}
          onChange={(e) => setTodoTitle(e.target.value)}
        />
        <TextArea
          title={'内容'}
          id={'content'}
          placeholder={'詳細を入力'}
          value={todoContent}
          onChange={(e) => setTodoContent(e.target.value)}
        />
        <SSubmit>
          <DefaultButton type={'submit'}>送信</DefaultButton>
        </SSubmit>
      </Form>
    </DefaultFormLayout>
  );
};

export default CreateForm;
