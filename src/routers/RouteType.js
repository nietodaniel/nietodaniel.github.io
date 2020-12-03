import React from 'react';
import PropTypes from 'prop-types';

import { Route } from 'react-router-dom';

export const RouteType = ({
    isAuthenticated,
    component: Component,
    ...rest
}) => {

    return (
        <Route { ...rest }
            component={ (props) => (
                    ( <Component { ...props } /> )
            )}
        
        />
    )
}

RouteType.propTypes = {
    isAuthenticated: PropTypes.bool.isRequired,
    component: PropTypes.func.isRequired
}
