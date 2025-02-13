import React from 'react';
import '../../Styles/NavRT.css';
import '../../Styles/FootBallField.css';
import gif from '/logo/pitch.gif'

function FootBallField() {
  return (
    <div className="field">
      <img
        src={gif}
        alt="Soccer Field"
        className="soccer-field"
      />
    </div>
  );
}

export default FootBallField;
