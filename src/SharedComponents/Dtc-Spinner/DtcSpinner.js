import React from 'react';
import PropTypes from 'prop-types';

import './spinner.css';

function DtcSpinner({ customIcon, icon, loading, children }) {
	return (
		<React.Fragment>
			{customIcon && loading && <img src={require(`${icon}`)} className="spinner-icon" alt="Loading..." />}
			{!customIcon && loading && <div className="spinner">{children}</div>}
		</React.Fragment>
	);
}

export default DtcSpinner;
DtcSpinner.propTypes = {
	color: PropTypes.string,
	customIcon: PropTypes.bool,
	icon: PropTypes.string
};
DtcSpinner.defaultProps = {
	customIcon: false
};
