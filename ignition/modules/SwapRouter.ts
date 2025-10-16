import { buildModule } from '@nomicfoundation/hardhat-ignition/modules'

const SwapRouterModule = buildModule('SwapRouter', (m) => {
  const SwapRouter = m.contract('SwapRouter', [m.getParameter('factory'), m.getParameter('WETH')])
  return { SwapRouter }
})

export default SwapRouterModule
