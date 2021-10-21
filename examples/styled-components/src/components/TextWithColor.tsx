import React, { ReactNode } from 'react';

type Props = {
  children?: ReactNode;
};

const textWithColor =
  ([color]: TemplateStringsArray) =>
  ({ children }: Props) => {
    return <div style={{ color: color }}>{children}</div>;
  };

const RedText = textWithColor`red`;

export default RedText;
