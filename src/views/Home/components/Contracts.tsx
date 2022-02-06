import React from 'react'
import { Card, CardBody, Heading, LinkExternal, Text } from 'uikit'
import BigNumber from 'bignumber.js/bignumber'
import styled from 'styled-components'
import { getBalanceNumber } from 'utils/formatBalance'
import { useTotalSupply, useBurnedBalance } from 'hooks/useTokenBalance'
import { Link } from 'react-router-dom'
import { getCakeAddress } from 'utils/addressHelpers'
import CardValue from './CardValue'
import { useFarms, usePriceCakeBusd } from '../../../state/hooks'

const StyledCakeStats = styled(Card)`
  margin-left: auto;
  margin-right: auto;
`

const Row = styled.div`
  align-items: center;
  display: flex;
  font-size: 14px;
  justify-content: space-between;
  margin-bottom: 8px;
`

const Contracts = () => {
  return (
    <StyledCakeStats>
      <CardBody>
        <Heading scale="xl" mb="24px">
         Contracts
        </Heading>
        <Row>
          <Text fontSize="14px">MasterChef</Text>
          <LinkExternal href="https://polygonscan.com/address/0x15d073a4a6D452a95fB9B3d80cF9e3Dc75BbFDD8#readContract" style={{fontWeight: 500, fontSize: '14px'}}>0x15d073a4a6D452a95fB9B3d80cF9e3Dc75BbFDD8</LinkExternal>
        </Row>
        <Row>
          <Text fontSize="14px">PolyCherry</Text>
          <LinkExternal href="https://polygonscan.com/address/0xbD01698Ab485A7b8092A4e32B9c8B1939F6D2708#readContract" style={{fontWeight: 500, fontSize: '14px'}}>0xbD01698Ab485A7b8092A4e32B9c8B1939F6D2708</LinkExternal>
        </Row>
        <Row>
          <Text fontSize="14px">AutoVault</Text>
          <LinkExternal href="https://polygonscan.com/address/0xB62E8C9f46d99525e83B1100Bab8E7381F2B4B43#readContract" style={{fontWeight: 500, fontSize: '14px'}}>0xB62E8C9f46d99525e83B1100Bab8E7381F2B4B43</LinkExternal>
        </Row>
        <Row>
          <Text fontSize="14px">TimeLock</Text>
          <LinkExternal href="https://polygonscan.com/address/0xF89FCE48131E7e6C5252b71507229e510c96d7e4#readContract" style={{fontWeight: 500, fontSize: '14px'}}>0xF89FCE48131E7e6C5252b71507229e510c96d7e4</LinkExternal>
        </Row>
        {/* <Row>
          <Text fontSize="14px">Timelock</Text>
          <LinkExternal href="https://polygonscan.com/address/0xf816863fade5c2349ba6cd0446c193d64f6004d0#readContract" style={{fontWeight: 500, fontSize: '14px'}}>0x303EBbF881583b1ea6BcB128bD9f0cC64101075F</LinkExternal>
        </Row> */}
       
      </CardBody>
    </StyledCakeStats>
  )
}

export default Contracts
