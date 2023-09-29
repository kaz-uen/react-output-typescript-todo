import { FC, memo } from "react";
import { PageType } from "../../../types/PageType";

const PageTitle: FC<PageType> = memo((props) => {
  // const PageTitle = memo(({text}: {text: string}) => {

  const { title } = props;
  return <h2>{title}</h2>;
});
// memo化により初回レンダリング時のみ処理させる

export default PageTitle;
