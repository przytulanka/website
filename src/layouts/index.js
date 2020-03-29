import React from 'react';
import PropTypes from 'prop-types';
import { ThemeProvider } from 'styled-components';
import { theme } from 'assets/styles/theme';

const Layout = ({ children }) => (
	<ThemeProvider theme={theme}>{children}</ThemeProvider>
);

Layout.propTypes = {
	children: PropTypes.node.isRequired,
};

export default Layout;
