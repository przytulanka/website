export default {
	'*.{js,jsx,mjs}': [
		'prettier --config ./prettier.config.mjs --write',
		'stylelint --fix',
		'eslint --fix',
	],
	'*.{css,scss}': [
		'prettier --config ./prettier.config.mjs --write',
		'stylelint --fix',
	],
	'*.{json,md}': ['prettier --config ./prettier.config.mjs --write'],
};
