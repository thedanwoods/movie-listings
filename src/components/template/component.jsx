import React from 'react';
import PropTypes from 'prop-types';

import './template.scss';

const TemplateComponent = ({ onClick, tested }) => (
  <div className="template">
    <button type="button" onClick={onClick}>
      This is a template component!
    </button>
    {tested && <p>TESTED!</p>}
  </div>
);

TemplateComponent.propTypes = {
  tested: PropTypes.bool.isRequired,
  onClick: PropTypes.func.isRequired,
};

export default TemplateComponent;
