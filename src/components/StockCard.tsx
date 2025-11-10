import { ArrowDown, ArrowUp, TrendingUp } from "lucide-react";
import { Card } from "@/components/ui/card";
import { cn } from "@/lib/utils";

export interface Stock {
  symbol: string;
  name: string;
  price: number;
  change: number;
  changePercent: number;
  high: number;
  low: number;
  volume: string;
}

interface StockCardProps {
  stock: Stock;
  onClick?: () => void;
}

const StockCard = ({ stock, onClick }: StockCardProps) => {
  const isPositive = stock.change >= 0;

  return (
    <Card
      className={cn(
        "group relative overflow-hidden border-2 transition-all duration-300 cursor-pointer hover:shadow-lg hover:-translate-y-1",
        "before:absolute before:inset-0 before:opacity-0 before:transition-opacity hover:before:opacity-100",
        isPositive 
          ? "before:bg-gradient-to-br before:from-success/5 before:to-success/10 hover:border-success/30" 
          : "before:bg-gradient-to-br before:from-danger/5 before:to-danger/10 hover:border-danger/30"
      )}
      onClick={onClick}
    >
      <div className="relative p-6">
        <div className="flex items-start justify-between mb-4">
          <div>
            <div className="flex items-center gap-2 mb-1">
              <h3 className="text-lg font-bold text-foreground">{stock.symbol}</h3>
              <div className={cn(
                "flex items-center gap-1 px-2 py-0.5 rounded-full text-xs font-semibold",
                isPositive ? "bg-success/10 text-success" : "bg-danger/10 text-danger"
              )}>
                {isPositive ? <ArrowUp className="h-3 w-3" /> : <ArrowDown className="h-3 w-3" />}
                {Math.abs(stock.changePercent).toFixed(2)}%
              </div>
            </div>
            <p className="text-sm text-muted-foreground line-clamp-1">{stock.name}</p>
          </div>
          <div className={cn(
            "rounded-lg p-2",
            isPositive ? "bg-success/10" : "bg-danger/10"
          )}>
            <TrendingUp className={cn("h-5 w-5", isPositive ? "text-success" : "text-danger")} />
          </div>
        </div>

        <div className="space-y-3">
          <div>
            <p className="text-3xl font-bold text-foreground">
              ₹{stock.price.toLocaleString('en-IN', { minimumFractionDigits: 2, maximumFractionDigits: 2 })}
            </p>
            <p className={cn(
              "text-sm font-medium flex items-center gap-1 mt-1",
              isPositive ? "text-success" : "text-danger"
            )}>
              {isPositive ? "+" : ""}₹{stock.change.toFixed(2)}
            </p>
          </div>

          <div className="grid grid-cols-2 gap-4 pt-3 border-t">
            <div>
              <p className="text-xs text-muted-foreground mb-1">High</p>
              <p className="text-sm font-semibold text-foreground">₹{stock.high.toFixed(2)}</p>
            </div>
            <div>
              <p className="text-xs text-muted-foreground mb-1">Low</p>
              <p className="text-sm font-semibold text-foreground">₹{stock.low.toFixed(2)}</p>
            </div>
          </div>

          <div className="pt-2">
            <p className="text-xs text-muted-foreground mb-1">Volume</p>
            <p className="text-sm font-semibold text-foreground">{stock.volume}</p>
          </div>
        </div>
      </div>
    </Card>
  );
};

export default StockCard;
