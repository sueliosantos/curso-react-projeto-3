import { Heading } from '../../components/Heading';
import * as Styled from './styles';

function Home() {
  return (
    <div className="App">
      <Styled.Wrapper background="yellow">
        <Heading> O texto que eu quero </Heading>
      </Styled.Wrapper>
    </div>
  );
}

export default Home;
