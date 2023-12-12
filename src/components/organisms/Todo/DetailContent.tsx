import React, { FC } from 'react';
import useTodo from '../../../features/todo/hooks/useTodo';
import PageTitle from '../../atoms/PageTitle';
import { PAGE_TITLE } from '../../../constants/InitialData';
import styled from 'styled-components';
import LinkButton from '../../atoms/Link/Button';

const SContent = styled.div`
  width: 90vw;
  margin: 0 auto;
  padding: 1.5rem 0;
  max-width: var(--fixed-width);
`;

const SNumber = styled.p`
  margin-bottom: 3rem;
`;

const STitle = styled.h3`
  margin-bottom: 3rem;
`;

const SBody = styled.div`
  margin-bottom: 3rem;
`;

const SReturn = styled.div`
  text-align: center;
`;

const DetailContent: FC = () => {
  const Title = PAGE_TITLE.detail;
  const { todo } = useTodo();
  const { id, title, content } = todo;
  const texts = content?.split(/(\n)/).map((text) => {
    return text.match(/\n/) ? <br /> : text;
  });

  return (
    <>
      <SContent>
        <PageTitle title={Title} />
        <SNumber>ID: {id}</SNumber>
        <STitle>{title}</STitle>
        <SBody>
          <p>
            内容: <br />
            {texts}
          </p>
        </SBody>
      </SContent>

      <SReturn>
        <LinkButton to="/">TOPへ戻る</LinkButton>
      </SReturn>
    </>
  );
};

export default DetailContent;
