import { constructSameAddressMap } from '../utils/constructSameAddressMap'
import { SupportedChainId } from './chains'
const V2_FACTORY_ADDRESS = '0x0776309DD49F7888AC4F2C76861fd53b45995608'
type AddressMap = { [chainId: number]: string }

export const UNI_ADDRESS: AddressMap = constructSameAddressMap('0x1f9840a85d5aF5bf1D1762F925BDADdC4201F984')
export const INU_ADDRESS: AddressMap = constructSameAddressMap('0x24b19E6A2D523314A40B384b899a8bC12dD89B69')
// toDo
export const MULTICALL_ADDRESS: AddressMap = {
  ...constructSameAddressMap('0x1F98415757620B543A52E61c46B32eB19261F984', [SupportedChainId.TETHERMOON]),
}
export const V2_FACTORY_ADDRESSES: AddressMap = constructSameAddressMap(V2_FACTORY_ADDRESS)
export const V2_ROUTER_ADDRESS: AddressMap = constructSameAddressMap('0x7a250d5630B4cF539739dF2C5dAcb4c659F2488D')

/**
 * The oldest V0 governance address
 */
export const GOVERNANCE_ALPHA_V0_ADDRESSES: AddressMap = constructSameAddressMap('')

/**
 * The older V1 governance address
 */
export const GOVERNANCE_ALPHA_V1_ADDRESSES: AddressMap = {
  [SupportedChainId.TETHERMOON]: '0xC4e172459f1E7939D522503B81AFAaC1014CE6F6',
}

/**
 * The latest governor bravo that is currently admin of timelock
 */
export const GOVERNANCE_BRAVO_ADDRESSES: AddressMap = {
  [SupportedChainId.TETHERMOON]: '0x408ED6354d4973f66138C91495F2f2FCbd8724C3',
}

export const ENS_REGISTRAR_ADDRESSES: AddressMap = {
  [SupportedChainId.TETHERMOON]: '0x00000000000C2E074eC69A0dFb2997BA6C7d2e1e',
}

export const SOCKS_CONTROLLER_ADDRESSES: AddressMap = {
  [SupportedChainId.TETHERMOON]: '0x65770b5283117639760beA3F867b69b3697a91dd',
}

export const MERKLE_DISTRIBUTOR_ADDRESS: AddressMap = {
  [SupportedChainId.TETHERMOON]: '0x090D4613473dEE047c3f2706764f49E0821D256e',
}

export const ARGENT_WALLET_DETECTOR_ADDRESS: AddressMap = {
  [SupportedChainId.TETHERMOON]: '0xeca4B0bDBf7c55E9b7925919d03CbF8Dc82537E8',
}

export const TIMELOCK_ADDRESS: AddressMap = constructSameAddressMap('0x1a9C8182C09F50C8318d769245beA52c32BE35BC')

export const V3_CORE_FACTORY_ADDRESSES: AddressMap = constructSameAddressMap(V3_FACTORY_ADDRESS, [])
export const QUOTER_ADDRESSES: AddressMap = constructSameAddressMap('', [])
export const NONFUNGIBLE_POSITION_MANAGER_ADDRESSES: AddressMap = constructSameAddressMap('', [])

export const SWAP_ROUTER_ADDRESSES: AddressMap = constructSameAddressMap('', [])
export const V3_MIGRATOR_ADDRESSES: AddressMap = constructSameAddressMap('', [])
