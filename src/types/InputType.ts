export type InputPropsType = {
  title?: string;
  id?: string;
  type?: string;
  placeholder?: string;
  value?: string | number | readonly string[];
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
  // その他input要素関連の独自プロパティを追加
  isSearchInput?: boolean;
};
