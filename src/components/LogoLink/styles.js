import styled, { css } from 'styled-components';

export const Container = styled.a`
  ${({ theme }) => css`
    display: flex;
    align-items: center;
    text-decoration: none;
    color: inherit;
    height: 10rem;

    > img {
      max-height: 6rem;
    }
  `}
`;
