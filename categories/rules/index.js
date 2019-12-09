module.exports = {
    rules: {
        ...(require('./essentials')),
        ...(require('./lifecycle')),
        ...(require('./react')),
        ...(require('./style'))
    }
}