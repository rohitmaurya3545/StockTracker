import { TrendingUp, TrendingDown } from "lucide-react";
import { Stock } from "./StockCard";
import { Card } from "./ui/card";

interface TopGainersLosersProps {
  stocks: Stock[];
}

const TopGainersLosers = ({ stocks }: TopGainersLosersProps) => {
  const sortedByGain = [...stocks].sort((a, b) => b.changePercent - a.changePercent);
  const topGainers = sortedByGain.slice(0, 3);
  const topLosers = sortedByGain.slice(-3).reverse();

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
      {/* Top Gainers */}
      <Card className="p-6 bg-gradient-to-br from-success/5 to-success/10 border-success/20">
        <div className="flex items-center gap-2 mb-4">
          <div className="h-10 w-10 rounded-lg bg-success/20 flex items-center justify-center">
            <TrendingUp className="h-5 w-5 text-success" />
          </div>
          <h3 className="text-xl font-bold text-foreground">Top Gainers</h3>
        </div>
        <div className="space-y-3">
          {topGainers.map((stock, index) => (
            <div 
              key={stock.symbol}
              className="flex items-center justify-between p-3 rounded-lg bg-card/50 hover:bg-card transition-all border border-success/10"
            >
              <div className="flex items-center gap-3">
                <span className="text-2xl font-bold text-success/60">#{index + 1}</span>
                <div>
                  <p className="font-bold text-foreground">{stock.symbol}</p>
                  <p className="text-xs text-muted-foreground">{stock.name}</p>
                </div>
              </div>
              <div className="text-right">
                <p className="font-bold text-foreground">₹{stock.price.toLocaleString('en-IN')}</p>
                <p className="text-sm font-semibold text-success flex items-center gap-1 justify-end">
                  <TrendingUp className="h-3 w-3" />
                  +{stock.changePercent.toFixed(2)}%
                </p>
              </div>
            </div>
          ))}
        </div>
      </Card>

      {/* Top Losers */}
      <Card className="p-6 bg-gradient-to-br from-danger/5 to-danger/10 border-danger/20">
        <div className="flex items-center gap-2 mb-4">
          <div className="h-10 w-10 rounded-lg bg-danger/20 flex items-center justify-center">
            <TrendingDown className="h-5 w-5 text-danger" />
          </div>
          <h3 className="text-xl font-bold text-foreground">Top Losers</h3>
        </div>
        <div className="space-y-3">
          {topLosers.map((stock, index) => (
            <div 
              key={stock.symbol}
              className="flex items-center justify-between p-3 rounded-lg bg-card/50 hover:bg-card transition-all border border-danger/10"
            >
              <div className="flex items-center gap-3">
                <span className="text-2xl font-bold text-danger/60">#{index + 1}</span>
                <div>
                  <p className="font-bold text-foreground">{stock.symbol}</p>
                  <p className="text-xs text-muted-foreground">{stock.name}</p>
                </div>
              </div>
              <div className="text-right">
                <p className="font-bold text-foreground">₹{stock.price.toLocaleString('en-IN')}</p>
                <p className="text-sm font-semibold text-danger flex items-center gap-1 justify-end">
                  <TrendingDown className="h-3 w-3" />
                  {stock.changePercent.toFixed(2)}%
                </p>
              </div>
            </div>
          ))}
        </div>
      </Card>
    </div>
  );
};

export default TopGainersLosers;
