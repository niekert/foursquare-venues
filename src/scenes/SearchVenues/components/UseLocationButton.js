import React from 'react';
import { func } from 'prop-types';
import { branch, renderNothing } from 'recompose';
import { MyLocationIcon } from 'shared/components/icons';
import { IconButton } from 'style/Buttons';
import { alpha } from 'shared/util/colors';
import { prop } from 'styled-tools';

const StyledIconButton = IconButton.extend`
  color: ${props => alpha(props.theme.color.main, 0.6)};

  &:hover {
    color: ${prop('theme.color.main')};
  }
`;

function UseLocationButton({ onClick }) {
  return (
    <StyledIconButton onClick={onClick}>
      <MyLocationIcon />
    </StyledIconButton>
  );
}

UseLocationButton.propTypes = {
  onClick: func.isRequired,
};

// If the current browser does not support the geoloction api, render nothing.
const enhance = branch(() => !('geolocation' in navigator), renderNothing);

export default enhance(UseLocationButton);
