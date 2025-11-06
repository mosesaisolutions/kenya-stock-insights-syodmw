
export interface Stock {
  id: string;
  symbol: string;
  name: string;
  price: number;
  change: number;
  recommendation: 'buy' | 'sell' | 'accumulate';
  sector: string;
  marketCap: number;
  peRatio: number;
  dividendYield: number;
  description: string;
  priceHistory: { date: string; price: number }[];
  economicIndicators: string[];
  politicalFactors: string[];
  companyPerformance: {
    revenue: number;
    profitMargin: number;
    debtToEquity: number;
    roe: number;
  };
}

export const stocks: Stock[] = [
  {
    id: 'kcb',
    symbol: 'KCB',
    name: 'KCB Group Holdings',
    price: 42.50,
    change: 2.5,
    recommendation: 'accumulate',
    sector: 'Banking',
    marketCap: 125000000000,
    peRatio: 8.5,
    dividendYield: 4.2,
    description: 'KCB Group is one of Kenya\'s leading banking institutions with a strong presence across East Africa.',
    priceHistory: [
      { date: '2024-01-01', price: 38.00 },
      { date: '2024-02-01', price: 39.50 },
      { date: '2024-03-01', price: 40.20 },
      { date: '2024-04-01', price: 41.00 },
      { date: '2024-05-01', price: 42.50 },
    ],
    economicIndicators: ['Stable inflation', 'Strong GDP growth', 'Improved credit demand'],
    politicalFactors: ['Stable political environment', 'Supportive monetary policy'],
    companyPerformance: {
      revenue: 85000000000,
      profitMargin: 0.28,
      debtToEquity: 0.45,
      roe: 0.18,
    },
  },
  {
    id: 'equity',
    symbol: 'EQUITY',
    name: 'Equity Group Holdings',
    price: 38.75,
    change: 1.8,
    recommendation: 'buy',
    sector: 'Banking',
    marketCap: 95000000000,
    peRatio: 7.2,
    dividendYield: 5.1,
    description: 'Equity Group is a leading financial services provider in Kenya with innovative digital banking solutions.',
    priceHistory: [
      { date: '2024-01-01', price: 35.00 },
      { date: '2024-02-01', price: 36.20 },
      { date: '2024-03-01', price: 37.00 },
      { date: '2024-04-01', price: 38.00 },
      { date: '2024-05-01', price: 38.75 },
    ],
    economicIndicators: ['Rising mobile money adoption', 'Digital transformation', 'Youth market growth'],
    politicalFactors: ['Government support for fintech', 'Regulatory clarity'],
    companyPerformance: {
      revenue: 72000000000,
      profitMargin: 0.32,
      debtToEquity: 0.38,
      roe: 0.22,
    },
  },
  {
    id: 'safaricom',
    symbol: 'SAFARICOM',
    name: 'Safaricom PLC',
    price: 28.30,
    change: -1.2,
    recommendation: 'accumulate',
    sector: 'Telecommunications',
    marketCap: 450000000000,
    peRatio: 12.5,
    dividendYield: 3.8,
    description: 'Safaricom is Kenya\'s largest telecommunications company with extensive network coverage and M-Pesa services.',
    priceHistory: [
      { date: '2024-01-01', price: 29.50 },
      { date: '2024-02-01', price: 29.00 },
      { date: '2024-03-01', price: 28.80 },
      { date: '2024-04-01', price: 28.50 },
      { date: '2024-05-01', price: 28.30 },
    ],
    economicIndicators: ['Growing data consumption', 'Increased mobile penetration', 'M-Pesa expansion'],
    politicalFactors: ['Regulatory stability', 'Government digital initiatives'],
    companyPerformance: {
      revenue: 180000000000,
      profitMargin: 0.25,
      debtToEquity: 0.52,
      roe: 0.15,
    },
  },
  {
    id: 'bamburi',
    symbol: 'BAMBURI',
    name: 'Bamburi Cement Limited',
    price: 52.00,
    change: 3.2,
    recommendation: 'buy',
    sector: 'Manufacturing',
    marketCap: 65000000000,
    peRatio: 9.8,
    dividendYield: 4.5,
    description: 'Bamburi Cement is a leading cement manufacturer in East Africa with strong market position.',
    priceHistory: [
      { date: '2024-01-01', price: 48.00 },
      { date: '2024-02-01', price: 49.50 },
      { date: '2024-03-01', price: 50.20 },
      { date: '2024-04-01', price: 51.00 },
      { date: '2024-05-01', price: 52.00 },
    ],
    economicIndicators: ['Infrastructure development', 'Real estate boom', 'Construction growth'],
    politicalFactors: ['Government infrastructure projects', 'Regional development initiatives'],
    companyPerformance: {
      revenue: 42000000000,
      profitMargin: 0.22,
      debtToEquity: 0.35,
      roe: 0.19,
    },
  },
  {
    id: 'eabl',
    symbol: 'EABL',
    name: 'East African Breweries Limited',
    price: 65.50,
    change: -0.8,
    recommendation: 'sell',
    sector: 'Consumer Goods',
    marketCap: 180000000000,
    peRatio: 14.2,
    dividendYield: 3.2,
    description: 'EABL is a leading beverage company in East Africa with iconic brands and strong distribution network.',
    priceHistory: [
      { date: '2024-01-01', price: 67.00 },
      { date: '2024-02-01', price: 66.50 },
      { date: '2024-03-01', price: 66.00 },
      { date: '2024-04-01', price: 65.75 },
      { date: '2024-05-01', price: 65.50 },
    ],
    economicIndicators: ['Rising inflation', 'Consumer spending pressure', 'Excise tax concerns'],
    politicalFactors: ['Potential tax increases', 'Regulatory scrutiny'],
    companyPerformance: {
      revenue: 95000000000,
      profitMargin: 0.18,
      debtToEquity: 0.48,
      roe: 0.12,
    },
  },
  {
    id: 'stanchart',
    symbol: 'STANCHART',
    name: 'Standard Chartered Bank Kenya',
    price: 185.00,
    change: 2.1,
    recommendation: 'accumulate',
    sector: 'Banking',
    marketCap: 75000000000,
    peRatio: 8.9,
    dividendYield: 4.8,
    description: 'Standard Chartered Bank Kenya is a premier international bank with strong corporate and investment banking services.',
    priceHistory: [
      { date: '2024-01-01', price: 175.00 },
      { date: '2024-02-01', price: 178.50 },
      { date: '2024-03-01', price: 180.00 },
      { date: '2024-04-01', price: 182.50 },
      { date: '2024-05-01', price: 185.00 },
    ],
    economicIndicators: ['Strong corporate activity', 'International trade growth', 'Investment inflows'],
    politicalFactors: ['Stable regulatory environment', 'International partnerships'],
    companyPerformance: {
      revenue: 58000000000,
      profitMargin: 0.30,
      debtToEquity: 0.42,
      roe: 0.20,
    },
  },
  {
    id: 'airtel',
    symbol: 'AIRTEL',
    name: 'Airtel Networks Kenya Limited',
    price: 32.50,
    change: 0.5,
    recommendation: 'accumulate',
    sector: 'Telecommunications',
    marketCap: 85000000000,
    peRatio: 11.5,
    dividendYield: 2.8,
    description: 'Airtel Networks is a major telecommunications provider in Kenya with growing 4G coverage and data services.',
    priceHistory: [
      { date: '2024-01-01', price: 31.00 },
      { date: '2024-02-01', price: 31.50 },
      { date: '2024-03-01', price: 32.00 },
      { date: '2024-04-01', price: 32.25 },
      { date: '2024-05-01', price: 32.50 },
    ],
    economicIndicators: ['5G rollout', 'Data consumption growth', 'Enterprise solutions demand'],
    politicalFactors: ['Spectrum allocation', 'Regulatory support for competition'],
    companyPerformance: {
      revenue: 68000000000,
      profitMargin: 0.16,
      debtToEquity: 0.65,
      roe: 0.10,
    },
  },
  {
    id: 'nse',
    symbol: 'NSE',
    name: 'Nairobi Securities Exchange',
    price: 22.75,
    change: 1.3,
    recommendation: 'buy',
    sector: 'Financial Services',
    marketCap: 18000000000,
    peRatio: 10.2,
    dividendYield: 5.5,
    description: 'NSE is the primary securities exchange in Kenya, facilitating capital market activities and investment.',
    priceHistory: [
      { date: '2024-01-01', price: 21.00 },
      { date: '2024-02-01', price: 21.50 },
      { date: '2024-03-01', price: 22.00 },
      { date: '2024-04-01', price: 22.40 },
      { date: '2024-05-01', price: 22.75 },
    ],
    economicIndicators: ['Increased market activity', 'IPO pipeline', 'Investor confidence'],
    politicalFactors: ['Capital market reforms', 'Government support for market development'],
    companyPerformance: {
      revenue: 8500000000,
      profitMargin: 0.35,
      debtToEquity: 0.25,
      roe: 0.25,
    },
  },
];
