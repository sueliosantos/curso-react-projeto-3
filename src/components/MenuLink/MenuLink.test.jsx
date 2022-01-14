import { screen } from '@testing-library/react';
import { MenuLink } from '.';
import { renderTheme } from '../../styles/render-theme';

describe('<MenuLink />', () => {
  it('should render a link', () => {
    renderTheme(<MenuLink link="http://localhost">Children</MenuLink>);
    expect(screen.getByRole('link', { name: 'Children' })).toBeInTheDocument();
  });

  it('should render opne a new tab', () => {
    renderTheme(
      <MenuLink link="http://localhost" newTabe={true}>
        Children
      </MenuLink>,
    );
    expect(screen.getByRole('link', { name: 'Children' })).toHaveAttribute('target', '_blank');
  });
});
