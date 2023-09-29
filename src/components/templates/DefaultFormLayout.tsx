import React, { FC } from "react";

const DefaultFormLayout: FC<{ children: React.ReactNode }> = ({ children }) => {
  return <div className="form common-form flex-form">{children}</div>;
};

export default DefaultFormLayout;
