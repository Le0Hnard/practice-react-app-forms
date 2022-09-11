import React from 'react';
import { SimpleButton } from './SimpleButton';
import PropTypes from "prop-types";

export const CallbackButton = (props) => {
  let { theme, ...childProps } = props;

  return (
    <SimpleButton { ...childProps } className={ `btn btn-${props.theme} btn-sm m-1` } />
  )
}

CallbackButton.defaultProps = {
  text: "Default Text",
  theme: "warning"
};

CallbackButton.propTypes = {
  text: PropTypes.string,
  theme: PropTypes.string,
  callback: PropTypes.func,
  disabled: PropTypes.oneOfType([PropTypes.bool,PropTypes.string])
};
