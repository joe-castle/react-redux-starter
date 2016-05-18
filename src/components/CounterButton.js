import React, {PropTypes} from 'react';

const CounterButton = ({
  displayText,
  onChangeClick
}) => (
  <button type='button'
    onClick={onChangeClick}
  >
    {displayText}
  </button>
);

CounterButton.propTypes = {
  displayText: PropTypes.string,
  onChangeClick: PropTypes.func
};

export default CounterButton;
