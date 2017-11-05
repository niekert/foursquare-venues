import React from 'react';
import { func, bool } from 'prop-types';
import { branch, renderNothing } from 'recompose';
import { MyLocationIcon } from 'shared/components/icons';
import { IconButton } from 'style/Buttons';
import { alpha } from 'shared/util/colors';
import { ifProp, prop } from 'styled-tools';
import { keyframes } from 'styled-components';

const loadingKeyframes = keyframes`
  from {
    opacity : 1;
  }
  50% {
    opacity: 0.3;
  }
  to {
    opacity: 1;
  }
`;

const StyledIconButton = IconButton.extend`
  color: ${props =>
    props.isActive
      ? props.theme.color.active
      : alpha(props.theme.color.main, 0.6)};
  animation: ${ifProp(
    'isLoading',
    `${loadingKeyframes} 3s linear infinite`,
    'none',
  )};

  &:hover {
    color: ${prop('theme.color.main')};
  }
`;

function UseLocationButton({ onClick, isLoading, isActive }) {
  return (
    <StyledIconButton
      onClick={onClick}
      isLoading={isLoading}
      isActive={isActive}
    >
      <MyLocationIcon />
    </StyledIconButton>
  );
}

UseLocationButton.propTypes = {
  onClick: func.isRequired,
  isActive: bool.isRequired,
  isLoading: bool.isRequired,
};

// If the current browser does not support the geoloction api, render nothing.
const enhance = branch(() => !('geolocation' in navigator), renderNothing);

export default enhance(UseLocationButton);
