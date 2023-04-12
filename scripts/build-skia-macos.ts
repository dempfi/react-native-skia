import { configurations } from './skia-configuration'
import { executeCmd } from './utils'

const configuration = configurations.ios

console.log('Building skia for macOS...')
let command = ''

Object.keys(configuration.targets).forEach(targetKey => {
  command += (command !== '' ? ' && ' : '') + `yarn ts-node ./scripts/build-skia.ts macos ${targetKey}`
})

executeCmd(command, 'macOS', () => {
  console.log(`Done building skia for macOS.`)
})
