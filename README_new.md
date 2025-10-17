# Uniswap V3 Periphery - Hardhat Ignition 部署模块

## 📋 模块列表

### 核心合约
- **SwapRouter** - 交换路由器
- **NonfungiblePositionManager** - NFT 位置管理器
- **NonfungibleTokenPositionDescriptor** - NFT 描述符
- **NFTDescriptor** - NFT 描述符库（自动依赖）

### Lens 合约（辅助工具）
- **Quoter** - 报价器 V1
- **QuoterV2** - 报价器 V2（推荐）
- **TickLens** - Tick 信息查询
- **UniswapInterfaceMulticall** - 批量调用

## 🚀 部署命令

### 单独部署某个模块

```bash
# 部署 SwapRouter
npx hardhat ignition deploy ignition/modules/SwapRouter.ts --network <network-name>

# 部署 NonfungiblePositionManager（会自动部署依赖的 NFTDescriptor 和 NonfungibleTokenPositionDescriptor）
npx hardhat ignition deploy ignition/modules/NonfungiblePositionManager.ts --network <network-name>

# 部署 QuoterV2
npx hardhat ignition deploy ignition/modules/QuoterV2.ts --network <network-name>

# 部署 TickLens
npx hardhat ignition deploy ignition/modules/TickLens.ts --network <network-name>
```

### 一次性部署所有合约

```bash
npx hardhat ignition deploy ignition/modules/CompleteDeployment.ts --network <network-name>
```

## 📝 参数配置

在 `ignition/parameters/chain-<chainId>.json` 中配置参数：

```json
{
  "SwapRouter": {
    "factory": "你的 UniswapV3Factory 地址",
    "WETH": "你的 WETH9 地址"
  },
  "NonfungibleTokenPositionDescriptor": {
    "WETH": "你的 WETH9 地址",
    "nativeLabel": "原生代币标签的 bytes32 格式"
  },
  "NonfungiblePositionManager": {
    "factory": "你的 UniswapV3Factory 地址",
    "WETH": "你的 WETH9 地址"
  },
  "QuoterV2": {
    "factory": "你的 UniswapV3Factory 地址",
    "WETH": "你的 WETH9 地址"
  },
  "Quoter": {
    "factory": "你的 UniswapV3Factory 地址",
    "WETH": "你的 WETH9 地址"
  }
}
```

### 生成 nativeLabel (bytes32)

```javascript
// 使用 ethers
const ethers = require('ethers')
console.log(ethers.utils.formatBytes32String('ETH'))
// 0x4554480000000000000000000000000000000000000000000000000000000000

// 使用 viem
const { pad, stringToHex } = require('viem')
console.log(pad(stringToHex('ETH'), { size: 32 }))
// 0x4554480000000000000000000000000000000000000000000000000000000000
```

## 🔄 依赖关系

Hardhat Ignition 会自动处理以下依赖关系：

```
NFTDescriptor (Library)
    ↓
NonfungibleTokenPositionDescriptor (链接 NFTDescriptor)
    ↓
NonfungiblePositionManager (使用 NonfungibleTokenPositionDescriptor)
```

**您只需要部署 NonfungiblePositionManager，它会自动按顺序部署所有依赖！**

## 📊 推荐部署顺序（如果单独部署）

1. **基础合约**
   ```bash
   npx hardhat ignition deploy ignition/modules/SwapRouter.ts --network <network>
   npx hardhat ignition deploy ignition/modules/NonfungiblePositionManager.ts --network <network>
   ```

2. **Lens 合约（可选但推荐）**
   ```bash
   npx hardhat ignition deploy ignition/modules/QuoterV2.ts --network <network>
   npx hardhat ignition deploy ignition/modules/TickLens.ts --network <network>
   npx hardhat ignition deploy ignition/modules/UniswapInterfaceMulticall.ts --network <network>
   ```

## 🎯 验证合约

部署后验证合约（需要配置 Etherscan API Key）：

```bash
npx hardhat ignition verify chain-<chainId>
```

## 📦 导出部署地址

```bash
# 导出部署信息
npx hardhat ignition status chain-<chainId>
```

部署信息会保存在 `ignition/deployments/chain-<chainId>/` 目录中。

