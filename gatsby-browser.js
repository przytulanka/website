/* eslint react/prop-types:0 */
import React from 'react';
import Layout from './src/layouts/index';

import './src/assets/styles/global.css';
import './src/assets/styles/fonts.css';

export const wrapPageElement = ({ element }) => <Layout>{element}</Layout>;

export default wrapPageElement;
