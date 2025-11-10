import { useEffect, useState } from "react";
import { TrendingUp, TrendingDown } from "lucide-react";

interface TickerStock {
  symbol: string;
  price: number;
  change: number;
}

const PriceTicker = () => {
  const [tickerStocks, setTickerStocks] = useState<TickerStock[]>([
    { symbol: "BTC", price: 4250000, change: 2.5 },
    { symbol: "AAPL", price: 15250, change: -1.2 },
    { symbol: "TSLA", price: 20500, change: 3.8 },
    { symbol: "AMZN", price: 14800, change: 1.5 },
    { symbol: "GOOGL", price: 11950, change: -0.8 },
    { symbol: "MSFT", price: 33400, change: 2.1 },
    { symbol: "META", price: 42500, change: 4.2 },
    { symbol: "RELIANCE", price: 2850, change: -1.5 },
  ]);

  useEffect(() => {
    const interval = setInterval(() => {
      setTickerStocks(prev => 
        prev.map(stock => ({
          ...stock,
          price: stock.price * (1 + (Math.random() - 0.5) * 0.02),
          change: (Math.random() - 0.5) * 5,
        }))
      );
    }, 3000);

    return () => clearInterval(interval);
  }, []);

  // Duplicate stocks for seamless loop
  const duplicatedStocks = [...tickerStocks, ...tickerStocks];

  return (
    <div className="w-full bg-card border-y overflow-hidden py-3">
      <div className="relative flex">
        <div className="animate-[scroll_30s_linear_infinite] flex gap-8">
          {duplicatedStocks.map((stock, index) => (
            <div 
              key={`${stock.symbol}-${index}`}
              className="flex items-center gap-2 px-4 whitespace-nowrap"
            >
              <span className="font-bold text-foreground">{stock.symbol}</span>
              <span className="text-sm text-muted-foreground">
                ₹{stock.price.toLocaleString('en-IN', { maximumFractionDigits: 0 })}
              </span>
              <span className={`flex items-center gap-1 text-xs font-semibold ${
                stock.change >= 0 ? 'text-success' : 'text-danger'
              }`}>
                {stock.change >= 0 ? (
                  <TrendingUp className="h-3 w-3" />
                ) : (
                  <TrendingDown className="h-3 w-3" />
                )}
                {Math.abs(stock.change).toFixed(2)}%
              </span>
            </div>
          ))}
        </div>
      </div>
      <style>{`
        @keyframes scroll {
          0% { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }
      `}</style>
    </div>
  );
};

export default PriceTicker;
