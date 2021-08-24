import React from 'react';
import PropTypes from 'prop-types';

import './style.scss';

export default function LightCheckbox2() {
  return (
    <section className="section section-1">
      <div className="light-checkbox-2">
        <input className="light-checkbox-2-input" type="checkbox" />
      </div>
      <div className="light-checkbox-2">
        <input className="light-checkbox-2-input" type="checkbox" />
      </div>
    </section>
  );
}

LightCheckbox2.propTypes = {

};
