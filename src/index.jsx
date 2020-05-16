import React from 'react';
import PropTypes from 'prop-types';
import styled from '@emotion/styled'
import './styles.css';

const Container = styled.div(props => ({
  display: 'inline-flex',
  paddingLeft: props.paddingLeft || '20px'
}));

const AvatarContainer = styled.div(props => ({
  width: props.width || '32px',
  height: props.height || '32px',
  borderRadius: props.borderRadius || '50%',
  boxShadow: props.boxShadow || '0 0 4px rgba(0, 0, 0, 0.5)',
  border: props.border || '2px solid #FFF',
  overflow: 'hidden',
  marginLeft: props.marginLeft || '-20px'
}));

const Avatar = styled.img(props => ({
  width: props.width || '100%',
  height: props.height || '100%',
  marginTop: '0'
}));

const GroupedAvatarIcons = ({
  data = [],
  imageKey,
  maxAvatarCount = 3,
  styles
}) => {
  const items = data.map((item, index) => {
    if (index < maxAvatarCount) {
      return (
        <AvatarContainer {...styles.avatarContainer || {}} key={index}>
          <Avatar src={item[imageKey]} alt="Icon" />
        </AvatarContainer>
      );
    }
    return (<></>);
  });
  return (
    <Container {...styles.container || {}}>
      {items}
    </Container>
  );
};

GroupedAvatarIcons.propTypes = {
  data: PropTypes.array.isRequired,
  imageKey: PropTypes.string.isRequired
};

export default GroupedAvatarIcons;