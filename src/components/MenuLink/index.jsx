import P from 'prop-types';
import * as Styled from './styles';

export const MenuLink = ({ children, link, newTabe = false }) => {
  const target = newTabe ? '_blank' : '_self';
  return (
    <Styled.Container href={link} target={target}>
      {children}
    </Styled.Container>
  );
};

MenuLink.propTypes = {
  children: P.node.isRequired,
  link: P.string.isRequired,
  newTabe: P.bool,
};
