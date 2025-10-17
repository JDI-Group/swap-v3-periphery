import { buildModule } from '@nomicfoundation/hardhat-ignition/modules'

const TickLensModule = buildModule('TickLens', (m) => {
  const TickLens = m.contract('TickLens')
  return { TickLens }
})

export default TickLensModule
