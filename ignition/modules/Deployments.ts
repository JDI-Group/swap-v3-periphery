import { buildModule } from '@nomicfoundation/hardhat-ignition/modules'
import SwapRouterModule from './SwapRouter'
import NonfungiblePositionManagerModule from './NonfungiblePositionManager'
import QuoterModule from './Quoter'
import QuoterV2Module from './QuoterV2'
import TickLensModule from './TickLens'
import UniswapInterfaceMulticallModule from './UniswapInterfaceMulticall'
import V3MigratorModule from './V3Migrator'

/**
 * Complete deployment module - Deploy all Uniswap V3 Periphery contracts at once
 * Dependency relationships will be automatically handled:
 * NFTDescriptor → NonfungibleTokenPositionDescriptor → NonfungiblePositionManager
 */
const DeploymentsModule = buildModule('Deployments', (m) => {
  // Core contracts
  const { SwapRouter } = m.useModule(SwapRouterModule)
  const { NonfungiblePositionManager } = m.useModule(NonfungiblePositionManagerModule)
  const { V3Migrator } = m.useModule(V3MigratorModule)
  // Lens 合约（辅助工具）
  const { Quoter } = m.useModule(QuoterModule)
  const { QuoterV2 } = m.useModule(QuoterV2Module)
  const { TickLens } = m.useModule(TickLensModule)
  const { UniswapInterfaceMulticall } = m.useModule(UniswapInterfaceMulticallModule)
  
  return {
    // Core contracts
    SwapRouter,
    NonfungiblePositionManager,
    V3Migrator,
    // Lens contracts
    Quoter,
    QuoterV2,
    TickLens,
    UniswapInterfaceMulticall
  }
})

export default DeploymentsModule

// npx hardhat ignition deploy ignition/modules/Deployments.ts --network {network} --parameters ./ignition/parameters/chain-177888.json