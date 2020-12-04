export const SORT_OPTIONS = [
  {
    value: 'members',
    label: 'Members',
    count: true,
  },
  {
    value: 'proposals',
    label: 'Proposals',
    count: true,
  },
  {
    value: 'guildBankValue',
    value2: 'usd',
    label: 'Bank Value',
  },
  {
    value: 'summoningTime',
    label: 'Summoning Time',
  },
];

export const MEMBER_FILTER_OPTIONS = [
  {
    value: '1',
    label: 'Has more than one Member',
  },
];

export const VERSION_FILTER_OPTIONS = [
  {
    value: '1',
    label: 'Moloch V1',
  },
  {
    value: '2',
    label: 'Moloch V2',
  },
];

export const PURPOSE_FILTER_OPTIONS = [
  {
    value: 'Grants',
    label: 'Grants (Accelerators)',
  },
  {
    value: 'Ventures',
    label: 'Ventures (Investments)',
  },
  {
    value: 'Guilds',
    label: 'Guilds (Services)',
  },
  {
    value: 'Clubs',
    label: 'Clubs (Social)',
  },
  {
    value: 'Non-profit',
    label: 'Non-profit (Impact)',
  },
  {
    value: 'Products',
    label: 'Product (Project)',
  },
];

export const DAO1 = {
  id: 'ST1234.stacks-dao-1',
  title: 'Stacks DAO',
  version: '2',
  totalShares: 3,
  guildBankAddress: 'ST1234',
  summoningTime: new Date(),
  members: [
    { id: 'ST1', memberAddress: 'ST1', status: 'Member' },
    { id: 'ST2', memberAddress: 'ST2', status: 'Member' },
  ],
  proposals: [
    {
      id: 1,
    },
  ],
  approvedTokens: [{ id: '.dao-token' }],
  depositToken: {
    tokenAddress: '.dao-token',
    symbol: 'DAOT',
    decimals: 0,
  },
  tokenBalances: {
    id: '.dao-token',
    tokenBalance: 100,
    guildBank: 100,
    token: {
      decimals: 0,
      tokenAddress: '.dao-token',
    },
  },
  apiData: {
    hidden: false,
    purpose: 'Grants',
    name: 'Stacks DAO',
    description: 'Funding the Stacks DAO Haus',
  },
  guildBankValue: {
    usd: 1000.0,
  },
  summoner: 'ST1234567',
};
