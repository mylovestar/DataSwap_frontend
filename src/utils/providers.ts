import { StaticJsonRpcProvider } from '@ethersproject/providers'

export const BSC_PROD_NODE = process.env.NEXT_PUBLIC_NODE_PRODUCTION || 'https://mainnet.base.org'

export const bscRpcProvider = new StaticJsonRpcProvider(BSC_PROD_NODE)

export default null
