import { FC } from "react";
import { Link } from "react-router-dom";
import useDetail from "../../../features/hooks/TodoStateHandle/useDetail";
import PageTitle from "../../atoms/PageTitle";
import { PAGE_TITLE } from "../../../constants/InitialData";
import styled from "styled-components";
import LinkButton from "../../atoms/Link/Button";

const DetailContent: FC = () => {
  const Title = PAGE_TITLE.detail;

  const { todo } = useDetail();
  const { id, title, content } = todo;
  const texts = content?.split(/(\n)/).map((text) => {
    return text.match(/\n/) ? <br /> : text;
  });

  return (
    <>
      <SContent>
        <PageTitle title={Title} />
        <p className="content-number">ID: {id}</p>
        <h3 className="content-title">{title}</h3>
        <div className="content-body">
          <p>
            内容: <br />
            {texts}
          </p>
        </div>
      </SContent>

      <SReturn>
        <LinkButton>
          <Link to="/">TOPへ戻る</Link>
        </LinkButton>
      </SReturn>
    </>
  );
};

const SContent = styled.div`
  width: 90vw;
  margin: 0 auto;
  padding: 1.5rem 0;
  max-width: var(--fixed-width);
  & .content-number,
  & .content-title,
  & .content-body {
    margin-bottom: 1.5rem;
  }
`;

const SReturn = styled.div`
  text-align: center;
`;

export default DetailContent;
