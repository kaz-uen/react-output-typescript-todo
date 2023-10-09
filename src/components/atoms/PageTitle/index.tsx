import { FC, memo } from "react";

type PageType = {
  title: string;
};

const PageTitle: FC<PageType> = memo((props) => {
  const { title } = props;
  return <h2>{title}</h2>;
});

export default PageTitle;
