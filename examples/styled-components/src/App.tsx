import React from 'react';
import Switcher from './components/Switcher';
import RedText from './components/TextWithColor';

const App = () => {
  return (
    <div>
      <Switcher.Wrapper>
        <Switcher.Component name="One">
          <RedText>One</RedText>
        </Switcher.Component>
        <Switcher.Component name="Two">
          <RedText>Two</RedText>
        </Switcher.Component>
        <Switcher.Component name="Three">
          <RedText>Three</RedText>
        </Switcher.Component>
      </Switcher.Wrapper>
    </div>
  );
};

export default App;
