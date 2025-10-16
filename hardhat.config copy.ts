import type { HardhatUserConfig } from 'hardhat/types/config'
import hardhatIgnitionViewPlugin from '@nomicfoundation/hardhat-ignition-viem'
import hardhatToolboxViemPlugin from '@nomicfoundation/hardhat-toolbox-viem'
import hardhatVerifyPlugin from '@nomicfoundation/hardhat-verify'
import 'dotenv/config'

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
        settings: {
          optimizer: { enabled: true, runs: 800 },
          metadata: {
            // do not include the metadata hash, since this is machine dependent
            // and we want all generated code to be deterministic
            // https://docs.soliditylang.org/en/v0.7.6/metadata.html
            bytecodeHash: 'none',
          },
        },
        version: '0.7.6',
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
