import { buildModule } from '@nomicfoundation/hardhat-ignition/modules'

const UniswapInterfaceMulticallModule = buildModule('UniswapInterfaceMulticall', (m) => {
  const UniswapInterfaceMulticall = m.contract('UniswapInterfaceMulticall')
  return { UniswapInterfaceMulticall }
})

export default UniswapInterfaceMulticallModule

