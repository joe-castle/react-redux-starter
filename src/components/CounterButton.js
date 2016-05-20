import React, { PropTypes } from 'react';

function CounterButton({
  displayText,
  onChangeClick,
}) {
  return (
    <button
      type="button"
      onClick={onChangeClick}
    >
      {displayText}
    </button>
  );
}

CounterButton.propTypes = {
  displayText: PropTypes.string,
  onChangeClick: PropTypes.func,
};

export default CounterButton;
