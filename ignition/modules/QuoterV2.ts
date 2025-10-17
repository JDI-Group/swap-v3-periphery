import { buildModule } from '@nomicfoundation/hardhat-ignition/modules'

const QuoterV2Module = buildModule('QuoterV2', (m) => {
  const QuoterV2 = m.contract('QuoterV2', [m.getParameter('factory'), m.getParameter('WETH')])
  return { QuoterV2 }
})

export default QuoterV2Module
