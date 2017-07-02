/* eslint-disable import/no-extraneous-dependencies, import/no-unresolved, import/extensions */

import 'babel-polyfill';
import { setAddon, configure } from '@storybook/react';
import JSXAddon from 'storybook-addon-jsx';

setAddon(JSXAddon);

function loadStories() {
	require('../src/stories');
}

configure(loadStories, module);
