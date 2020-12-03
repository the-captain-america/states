import { css } from 'styled-components';

const breakpoints = {
  xs: '(min-width: 480px)',
  sm: '(min-width: 768px)',
  md: '(min-width: 1024px)',
  lg: '(min-width: 1280px)',
  xl: '(min-width: 1281px)',
};

const media = {
  xs: (...args) =>
    css`
      @media ${breakpoints.xs} {
        ${css(...args)}
      }
    `,
  sm: (...args) =>
    css`
      @media ${breakpoints.sm} {
        ${css(...args)}
      }
    `,
  md: (...args) =>
    css`
      @media ${breakpoints.md} {
        ${css(...args)}
      }
    `,
  lg: (...args) =>
    css`
      @media ${breakpoints.lg} {
        ${css(...args)}
      }
    `,
  xl: (...args) =>
    css`
      @media ${breakpoints.xl} {
        ${css(...args)}
      }
    `,
};

export default media;
