import { screen } from '@testing-library/react';
import { SelectionBackground } from '.';
import { renderTheme } from '../../styles/render-theme';

describe('<SelectionBackground />', () => {
  it('should render with background dark', () => {
    const { container } = renderTheme(
      <SelectionBackground background={true}>
        <h1>Children</h1>
      </SelectionBackground>,
    );
    expect(screen.getByRole('heading')).toBeInTheDocument();

    expect(container).toMatchSnapshot();
  });

  it('should render with background light', () => {
    const { container } = renderTheme(<SelectionBackground>Children</SelectionBackground>);
    expect(screen.getByRole('heading')).toBeInTheDocument();
  });
});
