import styled from 'styled-components';
import GlobalStyle from './components/GlobalStyles';

const StyledApp = styled.div`
  // Your style here
`;

export function App() {
  return (
    <StyledApp>
      <GlobalStyle />
      Title
    </StyledApp>
  );
}

export default App;
