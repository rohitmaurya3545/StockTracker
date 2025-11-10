import { TrendingUp, Activity, BarChart3, DollarSign } from "lucide-react";
import { Stock } from "./StockCard";

interface MarketStatsProps {
  stocks: Stock[];
}

const MarketStats = ({ stocks }: MarketStatsProps) => {
  const gainers = stocks.filter(s => s.changePercent > 0).length;
  const losers = stocks.filter(s => s.changePercent < 0).length;
  const totalVolume = stocks.reduce((acc, s) => {
    const vol = parseFloat(s.volume.replace('M', ''));
    return acc + vol;
  }, 0);
  const avgChange = stocks.reduce((acc, s) => acc + s.changePercent, 0) / stocks.length;

  const stats = [
    {
      label: "Market Gainers",
      value: gainers.toString(),
      icon: TrendingUp,
      color: "text-success",
      bgColor: "bg-success/10",
      borderColor: "border-success/20",
    },
    {
      label: "Market Losers", 
      value: losers.toString(),
      icon: Activity,
      color: "text-danger",
      bgColor: "bg-danger/10",
      borderColor: "border-danger/20",
    },
    {
      label: "Total Volume",
      value: `${totalVolume.toFixed(1)}M`,
      icon: BarChart3,
      color: "text-primary",
      bgColor: "bg-primary/10",
      borderColor: "border-primary/20",
    },
    {
      label: "Avg Change",
      value: `${avgChange >= 0 ? '+' : ''}${avgChange.toFixed(2)}%`,
      icon: DollarSign,
      color: avgChange >= 0 ? "text-accent" : "text-secondary",
      bgColor: avgChange >= 0 ? "bg-accent/10" : "bg-secondary/10",
      borderColor: avgChange >= 0 ? "border-accent/20" : "border-secondary/20",
    },
  ];

  return (
    <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
      {stats.map((stat, index) => {
        const Icon = stat.icon;
        return (
          <div
            key={index}
            className={`p-5 rounded-xl border ${stat.borderColor} ${stat.bgColor} hover:scale-105 transition-transform cursor-pointer`}
          >
            <div className="flex items-center gap-3 mb-2">
              <div className={`h-10 w-10 rounded-lg ${stat.bgColor} flex items-center justify-center`}>
                <Icon className={`h-5 w-5 ${stat.color}`} />
              </div>
            </div>
            <p className="text-2xl font-bold text-foreground mb-1">{stat.value}</p>
            <p className="text-xs text-muted-foreground">{stat.label}</p>
          </div>
        );
      })}
    </div>
  );
};

export default MarketStats;
