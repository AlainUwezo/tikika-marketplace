import Header from "@/app/components/layouts/Header";
import React, { FunctionComponent, ReactNode } from "react";

interface Props {
  children: ReactNode;
}

const layout: FunctionComponent<Props> = ({ children }) => {
  return (
    <div>
      <Header />
      <div>{children}</div>
    </div>
  );
};

export default layout;
