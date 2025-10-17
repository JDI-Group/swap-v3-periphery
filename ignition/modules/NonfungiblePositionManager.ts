import { buildModule } from '@nomicfoundation/hardhat-ignition/modules'
import NonfungibleTokenPositionDescriptorModule from './NonfungibleTokenPositionDescriptor'

const NonfungiblePositionManagerModule = buildModule('NonfungiblePositionManager', (m) => {
  const { NonfungibleTokenPositionDescriptor } = m.useModule(NonfungibleTokenPositionDescriptorModule)
  
  const NonfungiblePositionManager = m.contract('NonfungiblePositionManager', [
    m.getParameter('factory'),
    m.getParameter('WETH'),
    NonfungibleTokenPositionDescriptor
  ])
  
  return { NonfungiblePositionManager }
})

export default NonfungiblePositionManagerModule
