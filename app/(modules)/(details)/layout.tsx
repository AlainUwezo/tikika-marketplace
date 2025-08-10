import HeaderDetail from "@/app/components/layouts/HeaderDetail";
import React, { FunctionComponent, ReactNode } from "react";

interface Props {
  children: ReactNode;
}

const layout: FunctionComponent<Props> = ({ children }) => {
  return (
    <div>
      <HeaderDetail />
      <div>{children}</div>
    </div>
  );
};

export default layout;
