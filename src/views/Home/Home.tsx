import React from 'react'
import styled from 'styled-components'
import { Heading, Text, BaseLayout } from 'uikit'
import { useQueryParam, StringParam } from 'use-query-params'
import { useTranslation } from 'contexts/Localization'
import Page from 'components/layout/Page'
import FarmStakingCard from 'views/Home/components/FarmStakingCard'
import CakeStats from 'views/Home/components/CakeStats'
import TotalValueLockedCard from 'views/Home/components/TotalValueLockedCard'
import Cookies from 'universal-cookie'
import TwitterCard from 'views/Home/components/TwitterCard'
import { isAddress } from '../../utils/web3'
import rot13 from '../../utils/encode'
import Contracts from './components/Contracts'

const Hero = styled.div`
  align-items: center;
  background-image: url('/images/cherry.png');
  background-repeat: no-repeat;
  background-position: top center;
  display: flex;
  justify-content: center;
  flex-direction: column;
  margin: auto;
  padding-top: 156px;
  text-align: center;

  ${({ theme }) => theme.mediaQueries.lg} {
    background-image: url('/images/cherry.png'), url('/images/egg/3b.png');
    background-position: left center, right center;
    height: 165px;
    padding-top: 0;
  }
`

const Cards = styled(BaseLayout)`
  align-items: stretch;
  justify-content: stretch;
  margin-bottom: 24px;
  grid-gap: 24px;

  & > div {
    grid-column: span 6;
    width: 100%;
  }

  ${({ theme }) => theme.mediaQueries.sm} {
    & > div {
      grid-column: span 8;
    }
  }

  ${({ theme }) => theme.mediaQueries.lg} {
    margin-bottom: 32px;
    grid-gap: 32px;

    & > div {
      grid-column: span 6;
    }
  }
`

const Home: React.FC = () => {
  const cookies = new Cookies();
  const [ref, setNum] = useQueryParam('ref', StringParam);
 
  if(ref) {
    if(isAddress(rot13(ref))) {
      cookies.set("ref", ref)
    }
  }
  return (
    <Page>
      <Hero>
        <Heading as="h1" scale="xl" mb="18px" color="secondary" style={{textAlign:'center'}}>
          PolyCherry
        </Heading>
        <Text>CHERRY Token has already been launched</Text>
        <Text>Farming will start at</Text>
      </Hero>
      {/* <Text mb="18px" style={{color:'#df2f2f', textAlign: 'center', fontSize: '19px'}}>Yield Farming on Polygon Network</Text> */}
      <div>
        <Cards>
          <FarmStakingCard />
          <TwitterCard />
          <CakeStats />
          <TotalValueLockedCard />
          <Contracts />
        </Cards>
      </div>
    </Page>
  )
}

export default Home
