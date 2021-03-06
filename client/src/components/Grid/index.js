import PropTypes from 'prop-types';
import React from 'react';

// Exporting the Container, Row, and Col components from this file

// This Container component allows us to use a bootstrap container without worrying about class names
export function Container({ fluid, children }) {
    return <div className={`container${fluid ? `-fluid` : ``}`}>{children}</div>;
}
Container.propTypes = {
    children: PropTypes.node,
    fluid: PropTypes.string
};

// This Row component lets us use a bootstrap row without having to think about class names
export function Row({ fluid, children }) {
    return <div className={`row${fluid ? `-fluid` : ``}`}>{children}</div>;
}
Row.propTypes = {
    children: PropTypes.node,
    fluid: PropTypes.string
};

// This Col component lets us size bootstrap columns with less syntax
// e.g. <Col size="md-12"> instead of <div className="col-md-12">
export function Col({ size, children }) {
    return (
        <div
            className={size
                .split(` `)
                .map(s => `col-${ s}`)
                .join(` `)}
        >
            {children}
        </div>
    );
}
Col.propTypes = {
    children: PropTypes.node,
    size: PropTypes.string
};
