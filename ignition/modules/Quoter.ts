import { buildModule } from '@nomicfoundation/hardhat-ignition/modules'

const QuoterModule = buildModule('Quoter', (m) => {
  const Quoter = m.contract('Quoter', [m.getParameter('factory'), m.getParameter('WETH')])
  return { Quoter }
})

export default QuoterModule
