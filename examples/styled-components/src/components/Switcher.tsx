import React, { Children, ReactElement, ReactNode, useState } from 'react';
import styled from 'styled-components';

const Center = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;

type SwitchButtonProps = { active: boolean };

const SwitchButton = styled.button<SwitchButtonProps>`
  background: ${(props) => (props.active ? 'red' : 'white')};
  border-color: black;
  box-shadow: none;
  margin: 5px;
  &:hover {
    background-color: gray;
  }
`;

type WrapperProps = {
  children?: ReactElement<ComponentProps> | ReactElement<ComponentProps>[];
};

type ComponentProps = {
  name: string;
  children?: ReactNode;
};

const Switcher = {
  Wrapper: ({ children }: WrapperProps) => {
    const childArray = Children.toArray(children);

    const [index, setIndex] = useState(0);

    return (
      <div>
        <Center>
          {Children.map(children, (child, i) => {
            return (
              <SwitchButton
                active={index === i}
                onClick={() => {
                  setIndex(i);
                }}
              >
                {child?.props.name}
              </SwitchButton>
            );
          })}
        </Center>
        <Center>{childArray[index]}</Center>
      </div>
    );
  },
  Component: ({ children }: ComponentProps) => {
    return <>{children}</>;
  },
};

export default Switcher;
