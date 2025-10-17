import type { HardhatUserConfig } from 'hardhat/types/config'
import hardhatIgnitionViewPlugin from '@nomicfoundation/hardhat-ignition-viem'
import hardhatToolboxViemPlugin from '@nomicfoundation/hardhat-toolbox-viem'
import hardhatVerifyPlugin from '@nomicfoundation/hardhat-verify'
import 'dotenv/config'

const LOW_OPTIMIZER_COMPILER_SETTINGS = {
  version: '0.7.6',
  settings: {
    evmVersion: 'istanbul',
    optimizer: {
      enabled: true,
      runs: 2_000,
    },
    metadata: {
      bytecodeHash: 'none',
    },
  },
}

const LOWEST_OPTIMIZER_COMPILER_SETTINGS = {
  version: '0.7.6',
  settings: {
    evmVersion: 'istanbul',
    optimizer: {
      enabled: true,
      runs: 1_000,
    },
    metadata: {
      bytecodeHash: 'none',
    },
  },
}

const DEFAULT_COMPILER_SETTINGS = {
  version: '0.7.6',
  settings: {
    evmVersion: 'istanbul',
    optimizer: {
      enabled: true,
      runs: 1_000_000,
    },
    metadata: {
      bytecodeHash: 'none',
    },
  },
}

const config = {
  plugins: [
    hardhatIgnitionViewPlugin,
    hardhatToolboxViemPlugin,
    hardhatVerifyPlugin,
  ],
  verify: {
    blockscout: { enabled: true },
  },
  solidity: {
    profiles: {
      default: {
        compilers: [DEFAULT_COMPILER_SETTINGS],
        overrides: {
          'contracts/NonfungiblePositionManager.sol': LOW_OPTIMIZER_COMPILER_SETTINGS,
          'contracts/test/MockTimeNonfungiblePositionManager.sol': LOW_OPTIMIZER_COMPILER_SETTINGS,
          'contracts/test/NFTDescriptorTest.sol': LOWEST_OPTIMIZER_COMPILER_SETTINGS,
          'contracts/NonfungibleTokenPositionDescriptor.sol': LOWEST_OPTIMIZER_COMPILER_SETTINGS,
          'contracts/libraries/NFTDescriptor.sol': LOWEST_OPTIMIZER_COMPILER_SETTINGS,
        }
      },
    },
  },
  networks: {
    moonchainHudson: {
      url: 'https://hudson-rpc.mchain.ai',
      type: 'http',
      chainId: 177888,
      chainType: 'l1',
      accounts: [process.env.PRIVATE_KEY!],
    },
    moonchain: {
      url: 'http://207.246.101.30:8545',
      type: 'http',
      chainId: 999888,
      chainType: 'l1',
      accounts: [process.env.PRIVATE_KEY!],
    },
  },
} as const satisfies HardhatUserConfig

export default config
