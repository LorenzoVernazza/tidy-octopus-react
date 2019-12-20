module.exports = {
    rules: {
        ...(require('./essentials').rules),
        ...(require('./lifecycle').rules),
        ...(require('./react').rules),
        ...(require('./style').rules)
    }
}