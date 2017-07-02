import React from 'react';
import { storiesOf } from '@storybook/react';
import ZippedFileBrowser from 'components/ZippedFileBrowser';
import { withKnobs, array, boolean } from '@storybook/addon-knobs';

import testFolder from '!base64-loader!./_fixtures/test_folder.zip';

const stories = storiesOf('ZippedFileBrowser', module);

// Add the `withKnobs` decorator to add knobs support to your stories.
// You can also configure `withKnobs` as a global decorator.
stories.addDecorator(withKnobs);

stories.addWithJSX('fromZip', () => {
	return <ZippedFileBrowser data={testFolder} />;
});
