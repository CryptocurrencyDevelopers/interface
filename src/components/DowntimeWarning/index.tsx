import { Trans } from '@lingui/macro'
import { SupportedChainId } from 'constants/chains'
import { useActiveWeb3React } from 'hooks/web3'
import { AlertOctagon } from 'react-feather'
import styled from 'styled-components/macro'
import { ExternalLink } from 'theme'

const Root = styled.div`
  background-color: ${({ theme }) => (theme.darkMode ? '#888D9B' : '#CED0D9')};
  border-radius: 18px;
  color: black;
  display: flex;
  flex-direction: row;
  font-size: 14px;
  margin: 12px auto;
  padding: 16px;
  width: 100%;
  max-width: 880px;
`
const WarningIcon = styled(AlertOctagon)`
  display: block;
  margin: auto 16px auto 0;
  min-height: 22px;
  min-width: 22px;
`
const ReadMoreLink = styled(ExternalLink)`
  color: black;
  text-decoration: underline;
`

export default function DowntimeWarning() {
  const { chainId } = useActiveWeb3React()
  if (!chainId) {
    return null
  }

  const Content = () => {
    switch (chainId) {
      case SupportedChainId.TETHERMOON:
        return (
          <div>
            <Trans>
              TETHERMOON is in Beta testnet and may experience downtime or changes without notice. Do not execute trades
              with real ETH. During downtime, your position will not earn fees and you will be unable to remove
              liquidity. <ReadMoreLink href="https://t.me/roburnaannouncements">Read more.</ReadMoreLink>
            </Trans>
          </div>
        )
      default:
        return null
    }
  }

  return (
    <Root>
      <WarningIcon />
      <Content />
    </Root>
  )
}
