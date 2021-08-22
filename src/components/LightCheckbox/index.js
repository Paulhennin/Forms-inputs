import React from 'react';
import PropTypes from 'prop-types';

import './style.scss';

export default function LightCheckbox() {
  return (
    <section className="section">
      <div>
        <input className="light-checkbox-input" type="checkbox" />
      </div>
    </section>
  );
}

LightCheckbox.propTypes = {

};
