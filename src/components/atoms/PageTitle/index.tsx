import React, { FC, memo } from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const STitle = styled.h2`
  text-align: center;
  margin-bottom: 3rem;
`;

// eslint-disable-next-line react/display-name
const PageTitle: FC<{ title: string }> = memo((props) => {
  const { title } = props;
  return <STitle>{title}</STitle>;
});

PageTitle.propTypes = {
  title: PropTypes.string.isRequired
};

export default PageTitle;
