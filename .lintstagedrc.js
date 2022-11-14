const path = require('path')

module.exports = {
    // https://github.com/okonet/lint-staged#example-wrap-filenames-in-single-quotes-and-run-once-per-file
    '**/*.ts?(x)': absolutePaths => {
        const cwd = process.cwd()
        const relativePaths = absolutePaths.map(file => path.relative(cwd, file))
        const args = relativePaths.join(' --file ')
        return `npm run lint --fix --file ${args}`
    }
}
