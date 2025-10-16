import { buildModule } from '@nomicfoundation/hardhat-ignition/modules'

const NFTDescriptorModule = buildModule('NFTDescriptor', (m) => {
  const NFTDescriptor = m.contract('NFTDescriptor')
  return { NFTDescriptor }
})

export default NFTDescriptorModule
