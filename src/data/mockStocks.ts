import { Stock } from "@/components/StockCard";

export const generateMockStocks = (): Stock[] => {
  const baseStocks = [
    { symbol: "BTC", name: "Bitcoin", basePrice: 4250000 },
    { symbol: "AAPL", name: "Apple Inc.", basePrice: 15250 },
    { symbol: "TSLA", name: "Tesla Inc.", basePrice: 20500 },
    { symbol: "AMZN", name: "Amazon.com Inc.", basePrice: 14800 },
    { symbol: "GOOGL", name: "Alphabet Inc.", basePrice: 11950 },
    { symbol: "MSFT", name: "Microsoft Corporation", basePrice: 33400 },
    { symbol: "META", name: "Meta Platforms Inc.", basePrice: 42500 },
    { symbol: "TATAMOTORS", name: "Tata Motors Limited", basePrice: 785 },
    { symbol: "RELIANCE", name: "Reliance Industries", basePrice: 2850 },
    { symbol: "INFY", name: "Infosys Limited", basePrice: 1420 },
    { symbol: "TCS", name: "Tata Consultancy Services", basePrice: 3650 },
    { symbol: "HDFCBANK", name: "HDFC Bank Limited", basePrice: 1580 },
  ];

  return baseStocks.map((stock) => {
    // Generate random price variation
    const variation = (Math.random() - 0.5) * 0.1; // -5% to +5%
    const currentPrice = stock.basePrice * (1 + variation);
    const change = currentPrice - stock.basePrice;
    const changePercent = (change / stock.basePrice) * 100;
    
    // Generate high/low based on current price
    const high = currentPrice * (1 + Math.random() * 0.03);
    const low = currentPrice * (1 - Math.random() * 0.03);
    
    // Generate volume
    const volume = (Math.random() * 10 + 1).toFixed(2) + "M";

    return {
      symbol: stock.symbol,
      name: stock.name,
      price: currentPrice,
      change,
      changePercent,
      high,
      low,
      volume,
    };
  });
};

// Generate additional stocks for search
export const generateAllStocks = (): Stock[] => {
  const additionalStocks = [
    { symbol: "NFLX", name: "Netflix Inc.", basePrice: 48000 },
    { symbol: "NVDA", name: "NVIDIA Corporation", basePrice: 45000 },
    { symbol: "TCS", name: "Tata Consultancy Services", basePrice: 3650 },
    { symbol: "HDFCBANK", name: "HDFC Bank Limited", basePrice: 1580 },
    { symbol: "ICICIBANK", name: "ICICI Bank Limited", basePrice: 1120 },
    { symbol: "SBIN", name: "State Bank of India", basePrice: 625 },
    { symbol: "BHARTIARTL", name: "Bharti Airtel Limited", basePrice: 1450 },
    { symbol: "ITC", name: "ITC Limited", basePrice: 425 },
    { symbol: "WIPRO", name: "Wipro Limited", basePrice: 450 },
    { symbol: "LT", name: "Larsen & Toubro", basePrice: 3250 },
  ];

  const baseStocks = [
    { symbol: "BTC", name: "Bitcoin", basePrice: 4250000 },
    { symbol: "AAPL", name: "Apple Inc.", basePrice: 15250 },
    { symbol: "TSLA", name: "Tesla Inc.", basePrice: 20500 },
    { symbol: "AMZN", name: "Amazon.com Inc.", basePrice: 14800 },
    { symbol: "GOOGL", name: "Alphabet Inc.", basePrice: 11950 },
    { symbol: "MSFT", name: "Microsoft Corporation", basePrice: 33400 },
    { symbol: "META", name: "Meta Platforms Inc.", basePrice: 42500 },
    { symbol: "TATAMOTORS", name: "Tata Motors Limited", basePrice: 785 },
    { symbol: "RELIANCE", name: "Reliance Industries", basePrice: 2850 },
    { symbol: "INFY", name: "Infosys Limited", basePrice: 1420 },
    { symbol: "TCS", name: "Tata Consultancy Services", basePrice: 3650 },
    { symbol: "HDFCBANK", name: "HDFC Bank Limited", basePrice: 1580 },
  ];

  const allStocks = [...baseStocks, ...additionalStocks];

  return allStocks.map((stock) => {
    const variation = (Math.random() - 0.5) * 0.1;
    const currentPrice = stock.basePrice * (1 + variation);
    const change = currentPrice - stock.basePrice;
    const changePercent = (change / stock.basePrice) * 100;
    const high = currentPrice * (1 + Math.random() * 0.03);
    const low = currentPrice * (1 - Math.random() * 0.03);
    const volume = (Math.random() * 10 + 1).toFixed(2) + "M";

    return {
      symbol: stock.symbol,
      name: stock.name,
      price: currentPrice,
      change,
      changePercent,
      high,
      low,
      volume,
    };
  });
};
