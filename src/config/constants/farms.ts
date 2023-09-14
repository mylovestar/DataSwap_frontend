import { serializeTokens } from 'utils/serializeTokens'
import { bscTokens } from './tokens'
import { SerializedFarmConfig } from './types'

const serializedTokens = serializeTokens(bscTokens)

export const CAKE_BNB_LP_MAINNET = '0xFa812Cc15677355Af16c55FE666F6F69E76920F9'

const farms: SerializedFarmConfig[] = [
  /**
   * These 3 farms (PID 0, 2, 3) should always be at the top of the file.
   */
  {
    pid: 0,
    v1pid: 0,
    lpSymbol: 'DATA',
    lpAddresses: {
      97: '0x0E09FaBB73Bd3Ade0a17ECC321fD13a19e81cE82',
      8453: '0x3715872e527FD578C54bc9028DeD0ad237136D0E',
    },
    token: serializedTokens.cake,
    quoteToken: serializedTokens.cake,
  },
  {
    pid: 1,
    v1pid: 251,
    lpSymbol: 'DATA-ETH LP',
    lpAddresses: {
      97: '0x3ed8936cAFDF85cfDBa29Fbe5940A5b0524824F4',
      8453: CAKE_BNB_LP_MAINNET,
    },
    token: serializedTokens.cake,
    quoteToken: serializedTokens.wbnb,
  },
  {
    pid: 3,
    v1pid: 252,
    lpSymbol: 'USDC-ETH LP',
    lpAddresses: {
      97: '0xa35062141Fa33BCA92Ce69FeD37D0E8908868AAe',
      8453: '0xab067c01C7F5734da168C699Ae9d23a4512c9FdB',
    },
    token: serializedTokens.usdc,
    quoteToken: serializedTokens.wbnb,
  },
  {
    pid: 2,
    v1pid: 252,
    lpSymbol: 'DATA-USDC LP',
    lpAddresses: {
      97: '0xa35062141Fa33BCA92Ce69FeD37D0E8908868AAe',
      8453: '0xA35aA6e16a82D0C9d810e31197975fE9e9fF6c46',
    },
    token: serializedTokens.cake,
    quoteToken: serializedTokens.usdc,
  },
  
]

export default farms
