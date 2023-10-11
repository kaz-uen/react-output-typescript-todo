import { FC, memo } from "react";

const PageTitle: FC<{ title: string }> = memo((props) => {
  const { title } = props;
  return <h2>{title}</h2>;
});

export default PageTitle;
