import { Ether, Token, WETH9 } from '@uniswap/sdk-core'

import { INU_ADDRESS } from './addresses'
import { SupportedChainId } from './chains'

export const AMPL = new Token(
  SupportedChainId.TETHERMOON,
  '0xD46bA6D942050d489DBd938a2C909A5d5039A161',
  9,
  'AMPL',
  'Ampleforth'
)
export const DAI = new Token(
  SupportedChainId.TETHERMOON,
  '0x6B175474E89094C44Da98b954EedeAC495271d0F',
  18,
  'DAI',
  'Dai Stablecoin'
)
export const DAI_ARBITRUM_ONE = new Token(
  SupportedChainId.TETHERMOON,
  '0x5d94f3Fe253487016522560a19b28281a5F08Ec8',
  18,
  'WRBA',
  'Wrapped Roburna'
)
export const RBM: { [chainId: number]: Token } = {
  [SupportedChainId.TETHERMOON]: new Token(
    SupportedChainId.TETHERMOON,
    '0x5d94f3Fe253487016522560a19b28281a5F08Ec8',
    18,
    'WRBA',
    'Wrapped Roburna'
  ),
}
export const DAI_OPTIMISM = new Token(
  SupportedChainId.TETHERMOON,
  '0x5d94f3Fe253487016522560a19b28281a5F08Ec8',
  18,
  'WRBA',
  'Wrapped Roburna'
)
export const USDC = new Token(
  SupportedChainId.TETHERMOON,
  '0x5d94f3Fe253487016522560a19b28281a5F08Ec8',
  18,
  'WRBA',
  'Wrapped Roburna'
)
export const USDC_ARBITRUM = new Token(
  SupportedChainId.TETHERMOON,
  '0x5d94f3Fe253487016522560a19b28281a5F08Ec8',
  18,
  'WRBA',
  'Wrapped Roburna'
)
export const USDC_OPTIMISM = new Token(
  SupportedChainId.TETHERMOON,
  '0x5d94f3Fe253487016522560a19b28281a5F08Ec8',
  18,
  'WRBA',
  'Wrapped Roburna'
)
export const USDT = new Token(
  SupportedChainId.TETHERMOON,
  '0x5d94f3Fe253487016522560a19b28281a5F08Ec8',
  18,
  'WRBA',
  'Wrapped Roburna'
)
export const USDT_ARBITRUM_ONE = new Token(
  SupportedChainId.TETHERMOON,
  '0x5d94f3Fe253487016522560a19b28281a5F08Ec8',
  18,
  'WRBA',
  'Wrapped Roburna'
)
export const USDT_OPTIMISM = new Token(
  SupportedChainId.TETHERMOON,
  '0x5d94f3Fe253487016522560a19b28281a5F08Ec8',
  18,
  'WRBA',
  'Wrapped Roburna'
)
export const WBTC = new Token(
  SupportedChainId.TETHERMOON,
  '0x2260FAC5E5542a773Aa44fBCfeDf7C193bc2C599',
  8,
  'WBTC',
  'Wrapped BTC'
)
export const WBTC_ARBITRUM_ONE = new Token(
  SupportedChainId.TETHERMOON,
  '0x5d94f3Fe253487016522560a19b28281a5F08Ec8',
  18,
  'WRBA',
  'Wrapped Roburna'
)
export const WBTC_OPTIMISM = new Token(
  SupportedChainId.TETHERMOON,
  '0x5d94f3Fe253487016522560a19b28281a5F08Ec8',
  18,
  'WRBA',
  'Wrapped Roburna'
)
export const FEI = new Token(
  SupportedChainId.TETHERMOON,
  '0x5d94f3Fe253487016522560a19b28281a5F08Ec8',
  18,
  'WRBA',
  'Wrapped Roburna'
)
export const TRIBE = new Token(
  SupportedChainId.TETHERMOON,
  '0x5d94f3Fe253487016522560a19b28281a5F08Ec8',
  18,
  'WRBA',
  'Wrapped Roburna'
)
export const FRAX = new Token(
  SupportedChainId.TETHERMOON,
  '0x5d94f3Fe253487016522560a19b28281a5F08Ec8',
  18,
  'WRBA',
  'Wrapped Roburna'
)
export const FXS = new Token(
  SupportedChainId.TETHERMOON,
  '0x5d94f3Fe253487016522560a19b28281a5F08Ec8',
  18,
  'WRBA',
  'Wrapped Roburna'
)
export const renBTC = new Token(
  SupportedChainId.TETHERMOON,
  '0x5d94f3Fe253487016522560a19b28281a5F08Ec8',
  18,
  'WRBA',
  'Wrapped Roburna'
)
export const ETH2X_FLI = new Token(
  SupportedChainId.TETHERMOON,
  '0x5d94f3Fe253487016522560a19b28281a5F08Ec8',
  18,
  'WRBA',
  'Wrapped Roburna'
)
export const UNI: { [chainId: number]: Token } = {
  [SupportedChainId.TETHERMOON]: new Token(
    SupportedChainId.TETHERMOON,
    INU_ADDRESS[1],
    18,
    'WROBURNA',
    'Wrapped Roburna'
  ),
}

export const WETH9_EXTENDED: { [chainId: number]: Token } = {
  ...WETH9,
  [SupportedChainId.TETHERMOON]: new Token(
    SupportedChainId.TETHERMOON,
    '0x24b19E6A2D523314A40B384b899a8bC12dD89B69',
    18,
    'WROBURNA',
    'Wrapped Roburna'
  ),
}

export class ExtendedEther extends Ether {
  public get wrapped(): Token {
    if (this.chainId in WETH9_EXTENDED) return WETH9_EXTENDED[this.chainId]
    throw new Error('Unsupported chain ID')
  }

  private static _cachedEther: { [chainId: number]: ExtendedEther } = {}

  public static onChain(chainId: number): ExtendedEther {
    return this._cachedEther[chainId] ?? (this._cachedEther[chainId] = new ExtendedEther(chainId))
  }
}
