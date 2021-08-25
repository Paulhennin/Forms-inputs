import React from 'react';
import PropTypes from 'prop-types';

import './style.scss';

export default function LineInput() {
  return (
    <section className="section section-3">
      <div className="lineinput">
        <input className="lineinput-input" type="text" />
        <span className="lineinput-line-1"></span>
        <span className="lineinput-line-2"></span>
        <span className="lineinput-line-3"></span>
        <span className="lineinput-line-4"></span>
      </div>
      <div className="lineinput">
        <input className="lineinput-input" type="text" />
        <span className="lineinput-line-1"></span>
        <span className="lineinput-line-2"></span>
        <span className="lineinput-line-3"></span>
        <span className="lineinput-line-4"></span>
      </div>
    </section>
);
}

LineInput.propTypes = {

};
