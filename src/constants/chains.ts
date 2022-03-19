import ethereumLogoUrl from 'assets/images/ethereum-logo.png'
import tethermoonLogoUrl from 'assets/images/rbm-logo.svg'
import ms from 'ms.macro'

export enum SupportedChainId {
  TETHERMOON = 159,
}

export const ALL_SUPPORTED_CHAIN_IDS: SupportedChainId[] = [SupportedChainId.TETHERMOON]

export const L1_CHAIN_IDS = [SupportedChainId.TETHERMOON] as const

export type SupportedL1ChainId = typeof L1_CHAIN_IDS[number]

export const L2_CHAIN_IDS = [] as const

export type SupportedL2ChainId = typeof L2_CHAIN_IDS[number]

export interface L1ChainInfo {
  readonly blockWaitMsBeforeWarning?: number
  readonly docs: string
  readonly explorer: string
  readonly infoLink: string
  readonly label: string
  readonly logoUrl?: string
  readonly rpcUrls?: string[]
  readonly nativeCurrency: {
    name: string // 'Goerli ETH',
    symbol: string // 'gorETH',
    decimals: number //18,
  }
}
export interface L2ChainInfo extends L1ChainInfo {
  readonly bridge: string
  readonly logoUrl: string
  readonly statusPage?: string
}

export type ChainInfo = { readonly [chainId: number]: L1ChainInfo | L2ChainInfo } & {
  readonly [chainId in SupportedL2ChainId]: L2ChainInfo
} &
  { readonly [chainId in SupportedL1ChainId]: L1ChainInfo }

export const CHAIN_INFO: ChainInfo = {
  [SupportedChainId.TETHERMOON]: {
    docs: 'https://docs.uniswap.org/',
    explorer: 'https://explorer.tethermoon.io/',
    infoLink: 'https://info.arborswap.io/#/',
    label: 'Tethermoon',
    logoUrl: tethermoonLogoUrl,
    nativeCurrency: { name: 'RBM', symbol: 'RBM', decimals: 18 },
  },
}

export const ARBITRUM_HELP_CENTER_LINK = 'https://help.uniswap.org/en/collections/3137787-uniswap-on-arbitrum'
export const OPTIMISM_HELP_CENTER_LINK =
  'https://help.uniswap.org/en/collections/3137778-uniswap-on-optimistic-ethereum-oξ'
