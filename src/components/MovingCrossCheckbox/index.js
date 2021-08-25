import React from 'react';
import PropTypes from 'prop-types';

import './style.scss';

export default function MovingCrossCheckbox() {
  return (
    <section className="section section-2">
      <div className="moving-checkbox-section">
        <div className="moving-checkbox">
          <input className="moving-checkbox-input" type="checkbox" />
        </div>
        <div className="moving-checkbox">
          <input className="moving-checkbox-input" type="checkbox" />
        </div>
        <div className="moving-checkbox">
          <input className="moving-checkbox-input" type="checkbox" />
        </div>
        <div className="moving-checkbox">
          <input className="moving-checkbox-input" type="checkbox" />
        </div>
        <div className="moving-checkbox">
          <input className="moving-checkbox-input" type="checkbox" />
        </div>
        <div className="moving-checkbox">
          <input className="moving-checkbox-input" type="checkbox" />
        </div>

      </div>
    </section>
  );
}

MovingCrossCheckbox.propTypes = {

};
