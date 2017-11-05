import { css } from 'styled-components';

const breakPoints = {
  extraSmall: 600,
  small: 768,
  medium: 992,
  large: 1200,
};

function breakpointMinWidth(minWidth) {
  return function breakpoint(strings, ...interpolations) {
    return css`
      @media (min-width: ${minWidth}px) {
        ${css(strings, ...interpolations)};
      }
    `;
  };
}

// Small devices (landscape phones, more than 600px)
export const smallUp = breakpointMinWidth(breakPoints.extraSmall + 1);

// Medium devices (tablets, more than 768px)
export const mediumScreenUp = breakpointMinWidth(breakPoints.small + 1);

// Large devices (desktops, more than 992px)
export const largeScreenUp = breakpointMinWidth(breakPoints.medium + 1);

// Large devices (desktops, more than 1200px)
export const extraLargeScreenUp = breakpointMinWidth(breakPoints.large + 1);
