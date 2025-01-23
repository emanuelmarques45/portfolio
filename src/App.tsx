import { GlobalStyle } from "./components/GlobalStyle";
import { About } from "./components/blocks/About";
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
          <About />
        </S.Main>
      </S.Home>
    </>
  );
}

export default App;
