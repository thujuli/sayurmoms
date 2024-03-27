import React from "react";

interface Props {
  children: React.ReactNode;
}

const Container: React.FC<Props> = (props) => {
  const { children } = props;
  return <div className="max-w-[1920px] min-h-screen mx-auto">{children}</div>;
};

export default Container;
