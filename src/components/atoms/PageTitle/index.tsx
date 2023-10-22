import React, { FC, memo } from 'react';
import PropTypes from 'prop-types';

// eslint-disable-next-line react/display-name
const PageTitle: FC<{ title: string }> = memo((props) => {
  const { title } = props;
  return <h2>{title}</h2>;
});

PageTitle.propTypes = {
  title: PropTypes.string.isRequired
};

export default PageTitle;
