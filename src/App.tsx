import { GlobalStyle } from "./components/GlobalStyle";
import { Hero } from "./components/blocks/Hero";
import { Navbar } from "./components/blocks/Navbar";
import * as S from "./style";

function App() {
  return (
    <>
      <GlobalStyle />
      <S.Home>
        <Navbar />
        <S.Main>
          <Hero />
        </S.Main>
      </S.Home>
    </>
  );
}

export default App;
