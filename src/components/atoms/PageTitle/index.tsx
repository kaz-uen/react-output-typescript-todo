import { FC, memo } from "react";
import { PageType } from "../../../types/PageType";

const PageTitle: FC<PageType> = memo((props) => {
  const { title } = props;
  return <h2>{title}</h2>;
});

export default PageTitle;
