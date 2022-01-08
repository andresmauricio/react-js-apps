import styled from 'styled-components';
import NxWelcome from './nx-welcome';

const StyledApp = styled.div`
  // Your style here
`;

export function App() {
  return (
    <StyledApp>
      <h1>New element go</h1>
      <p>Hello</p>
      <NxWelcome title="06-climate-app"/>
    </StyledApp>
  );
}

export default App;
