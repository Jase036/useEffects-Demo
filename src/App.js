import GlobalStyles from "./GlobalStyles";
import styled from "styled-components";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import Header from "./Header";
import Counter from "./Counter";

const App = () => {
  return (
    <>
      <GlobalStyles />
      <Wrapper>
        <BrowserRouter>
          <Header />
          <Switch>
            <Route exact path="/">
              <HomeWrapper>
                <h1>Home component</h1>
                <p>Click on Counter link to mount the counter component</p>
                <p>Click on Home link to unmount the counter component</p>
                <p>
                  Look at the console.logs generated through the useEffect()
                  functions & their returns
                </p>
              </HomeWrapper>
            </Route>
            <Route path="/counter">
              <Counter />
            </Route>
          </Switch>
        </BrowserRouter>
      </Wrapper>
    </>
  );
}

const Wrapper = styled.div`
  height: 100%;
  width: 100%;
  
`;

const HomeWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 16px;
`;
export default App;
