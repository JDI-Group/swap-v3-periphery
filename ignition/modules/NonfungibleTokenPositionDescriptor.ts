import { buildModule } from '@nomicfoundation/hardhat-ignition/modules'
import NFTDescriptorModule from './NFTDescriptor'

const NonfungibleTokenPositionDescriptorModule = buildModule('NonfungibleTokenPositionDescriptor', (m) => {
  const { NFTDescriptor } = m.useModule(NFTDescriptorModule)
  const NonfungibleTokenPositionDescriptor = m.contract(
    'NonfungibleTokenPositionDescriptor',
    [
      m.getParameter('WETH'),
      m.getParameter('nativeLabel')
    ],
    {
      libraries: {
        NFTDescriptor: NFTDescriptor,
      }
    }
  )
  return { NonfungibleTokenPositionDescriptor }
})

export default NonfungibleTokenPositionDescriptorModule
