import { relative } from 'path'

export default {
  './src/*': absolutePaths => {
    const cwd = process.cwd()
    const relativePaths = absolutePaths.map(file => relative(cwd, file))
    const args = relativePaths.join(' --file ')
    return `next lint --fix --file ${args}`
  }
}
