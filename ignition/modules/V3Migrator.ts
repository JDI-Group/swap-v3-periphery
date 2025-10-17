import { buildModule } from '@nomicfoundation/hardhat-ignition/modules'
import NonfungiblePositionManagerModule from './NonfungiblePositionManager'

const V3MigratorModule = buildModule('V3Migrator', (m) => {
  const { NonfungiblePositionManager } = m.useModule(NonfungiblePositionManagerModule)

  const V3Migrator = m.contract('V3Migrator', [
    m.getParameter('factory'),
    m.getParameter('WETH'),
    NonfungiblePositionManager
  ])

  return { V3Migrator }
})

export default V3MigratorModule