import { MenuEntry } from 'uikit'
import { ContextApi } from 'contexts/Localization/types'

const config: (t: ContextApi['t']) => MenuEntry[] = (t) => [
  {
    label: 'Layered Farming',
    icon: 'LayerIcon',
    items: [
      {
        label: 'Layer 1 - PolyNuts',
        href: 'https://polynuts.farm/',
      },
      {
        label: 'Layer 2 - PolyCherry',
        href: 'https://polycherry.com/',
      },
    ],
  },
  {
    label: t('Home'),
    icon: 'HomeIcon',
    href: '/',
  },
  {
    label: t('Trade'),
    icon: 'TradeIcon',
    items: [
      {
        label: "Exchange",
        href: "https://quickswap.exchange/#/swap?outputCurrency=0xbD01698Ab485A7b8092A4e32B9c8B1939F6D2708",
      },
      {
        label: "Liquidity",
        href:"https://quickswap.exchange/#/add/0x2791bca1f2de4661ed88a30c99a7a9449aa84174/0xbD01698Ab485A7b8092A4e32B9c8B1939F6D2708"
      },
     
    ],
  },
  {
    label: t('Farms'),
    icon: 'FarmIcon',
    href: '/farms',
  },
  {
    label: t('Pools'),
    icon: 'PoolIcon',
    href: '/pools',
  },
  {
    label: t('Auto Cherry'),
    icon: 'IfoIcon',
    href: '/poolscherry',
  },
  {
    label: t('Dividends'),
    icon: 'BondsIcon',
    href: '/dividends',
  },
  {
    label: t('Referral'),
    icon: 'GroupsIcon',
    href: '/referral',
  },
  {
    label: t('Info'),
    icon: 'InfoIcon',
    items:[
      {
        label: 'Dexguru',
        href:'https://dex.guru/token/0xbD01698Ab485A7b8092A4e32B9c8B1939F6D2708-polygon'
       },
       {
        label: 'PooCoin',
        href:'https://poocoin.app/tokens/0xbD01698Ab485A7b8092A4e32B9c8B1939F6D2708'
       },
    ]
  },
  {
    label: t('More'),
    icon: 'MoreIcon',
    items: [
      {
        label: 'Github',
        href: 'https://github.com/',
      },
      {
        label: t('Docs'),
        href: 'https://docs.polycherry.com',
      },
   
     
    ],
  },
  // {
  //   label:'Audited by Quillaudits',
  //   icon:'AuditIcon',
  //   href:'https://github.com/polycherry/audits'
  // }

]

export default config
