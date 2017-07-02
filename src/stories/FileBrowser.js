import React from 'react';
import { storiesOf } from '@storybook/react';
import FileBrowser from 'components/FileBrowser';
import { withKnobs, array, boolean } from '@storybook/addon-knobs';
import yeast from 'yeast';
import JSZip from 'jszip';

const stories = storiesOf('FileBrowser', module);

// Add the `withKnobs` decorator to add knobs support to your stories.
// You can also configure `withKnobs` as a global decorator.
stories.addDecorator(withKnobs);

stories.addWithJSX('default', () => {
	const defaultContent = [
		{
			name: 'dir1',
			isDirectory: true,
			uuid: yeast(),
			content: [
				{
					name: 'test1.txt',
					url: 'test1.txt',
					uuid: yeast(),
				},
				{
					name: 'test2.txt',
					url: 'test2.txt',
					uuid: yeast(),
				},
				{
					name: 'test3.txt',
					url: 'test3.txt',
					uuid: yeast(),
				},
				{
					name: 'test4.txt',
					url: 'test4.txt',
					uuid: yeast(),
				},
				{
					name: 'test5.txt',
					url: 'test5.txt',
					uuid: yeast(),
				},
				{
					name: 'dir2',
					uuid: yeast(),
					isDirectory: true,
					isOpen: true,
					content: [
						{
							name: 'test.txt',
							url: 'test.txt',
							uuid: yeast(),
						},
					],
				},
			],
		},
		{
			name: 'dir3',
			uuid: yeast(),
			isDirectory: true,
			isOpen: true,
			content: [
				{
					name: 'test.txt',
					url: 'test.txt',
					uuid: yeast(),
				},
			],
		},
		{
			name: 'test5.txt',
			url: 'test5.txt',
			uuid: yeast(),
		},
		{
			name: 'test6.txt',
			url: 'test6.txt',
			uuid: yeast(),
		},
	];
	const defaultDebug = false;
	return <FileBrowser debug={boolean('debug', defaultDebug)} content={array('content', defaultContent)} />;
});
