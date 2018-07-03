import React from 'react';
import PropTypes from 'prop-types';

const Link = ({ active, children, onClick }) => {
  if(active) {
    return <span className="nav-item nav-link active">{children}</span>
  }

  return (
    <a
      href=""
      onClick={e => {
        e.preventDefault();
        onClick();
      }}
      className="nav-item nav-link"
    >
      {children}
    </a>
  )
};

Link.propTypes = {
  active: PropTypes.bool.isRequired,
  children: PropTypes.node.isRequired,
  onClick: PropTypes.func.isRequired
};

export default Link;