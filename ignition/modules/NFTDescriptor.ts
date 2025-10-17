import { buildModule } from '@nomicfoundation/hardhat-ignition/modules'

const NFTDescriptorModule = buildModule('NFTDescriptor', (m) => {
  const NFTDescriptor = m.library('NFTDescriptor')
  return { NFTDescriptor }
})

export default NFTDescriptorModule
