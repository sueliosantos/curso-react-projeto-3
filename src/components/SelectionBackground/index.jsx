import P from 'prop-types';
import { SectionContainer } from '../SectionContainer';
import * as Styled from './styles';

export const SelectionBackground = ({ children, background = false }) => {
  return (
    <Styled.Container background={background}>
      <SectionContainer>{children}</SectionContainer>
    </Styled.Container>
  );
};

SelectionBackground.propTypes = {
  children: P.node.isRequired,
  background: P.bool,
};
