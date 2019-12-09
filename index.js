module.exports = {
	...require('./categories/core'),
    extends: "tidy-octopus",
	rules: require('./categories/rules').rules
};
