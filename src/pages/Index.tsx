import { useState, useEffect } from "react";
import Header from "@/components/Header";
import SearchBar from "@/components/SearchBar";
import StockCard from "@/components/StockCard";
import Footer from "@/components/Footer";
import PriceTicker from "@/components/PriceTicker";
import TopGainersLosers from "@/components/TopGainersLosers";
import MarketStats from "@/components/MarketStats";
import { generateMockStocks, generateAllStocks } from "@/data/mockStocks";
import { Stock } from "@/components/StockCard";

const Index = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [featuredStocks, setFeaturedStocks] = useState<Stock[]>([]);
  const [allStocks, setAllStocks] = useState<Stock[]>([]);
  const [filteredStocks, setFilteredStocks] = useState<Stock[]>([]);

  // Simulate real-time updates
  useEffect(() => {
    const updateStocks = () => {
      const featured = generateMockStocks();
      const all = generateAllStocks();
      setFeaturedStocks(featured);
      setAllStocks(all);
    };

    updateStocks();
    const interval = setInterval(updateStocks, 3000);

    return () => clearInterval(interval);
  }, []);

  // Filter stocks based on search
  useEffect(() => {
    if (searchQuery.trim() === "") {
      setFilteredStocks([]);
    } else {
      const filtered = allStocks.filter(
        (stock) =>
          stock.symbol.toLowerCase().includes(searchQuery.toLowerCase()) ||
          stock.name.toLowerCase().includes(searchQuery.toLowerCase())
      );
      setFilteredStocks(filtered);
    }
  }, [searchQuery, allStocks]);

  const displayStocks = searchQuery.trim() ? filteredStocks : featuredStocks;

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <PriceTicker />
      
      <main className="flex-1">
        {/* Hero Section */}
        <section className="relative overflow-hidden bg-gradient-to-br from-primary/10 via-secondary/5 to-accent/10">
          <div className="container mx-auto px-4 py-12 md:py-20">
            <div className="max-w-3xl mx-auto text-center space-y-6">
              <h1 className="text-4xl md:text-6xl font-bold">
                <span className="bg-gradient-to-r from-primary via-secondary to-accent bg-clip-text text-transparent">
                  Real-Time Stock Tracker
                </span>
              </h1>
              <p className="text-lg md:text-xl text-muted-foreground">
                Track global companies with live market data and real-time price updates in INR (₹)
              </p>
              <div className="flex justify-center pt-4">
                <SearchBar value={searchQuery} onChange={setSearchQuery} />
              </div>
            </div>
          </div>
        </section>

        {/* Market Stats Section */}
        <section className="py-8 border-b bg-card/50">
          <div className="container mx-auto px-4">
            <MarketStats stocks={displayStocks} />
          </div>
        </section>

        {/* Top Gainers & Losers */}
        {!searchQuery.trim() && (
          <section className="py-12 bg-muted/30">
            <div className="container mx-auto px-4">
              <h2 className="text-2xl md:text-3xl font-bold mb-6 text-center">
                Market <span className="bg-gradient-to-r from-success via-primary to-danger bg-clip-text text-transparent">Movers</span>
              </h2>
              <TopGainersLosers stocks={featuredStocks} />
            </div>
          </section>
        )}

        {/* Stocks Grid */}
        <section className="py-12">
          <div className="container mx-auto px-4">
            <div className="mb-8">
              <h2 className="text-2xl md:text-3xl font-bold mb-2">
                {searchQuery.trim() ? "Search Results" : "Featured Stocks"}
              </h2>
              <p className="text-muted-foreground">
                {searchQuery.trim() 
                  ? `Found ${displayStocks.length} stock(s) matching "${searchQuery}"`
                  : "Top 12 demo stocks with live price updates"
                }
              </p>
            </div>

            {displayStocks.length === 0 ? (
              <div className="text-center py-12">
                <p className="text-muted-foreground text-lg">
                  {searchQuery.trim() ? "No stocks found. Try a different search." : "Loading stocks..."}
                </p>
              </div>
            ) : (
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
                {displayStocks.map((stock) => (
                  <StockCard key={stock.symbol} stock={stock} />
                ))}
              </div>
            )}
          </div>
        </section>

        {/* Features Section */}
        {!searchQuery.trim() && (
          <section className="py-16 bg-muted/30">
            <div className="container mx-auto px-4">
              <h2 className="text-3xl font-bold text-center mb-12">
                Why Choose <span className="bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">StockTracker</span>?
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                {[
                  {
                    title: "Real-Time Updates",
                    description: "Get live market data updated every 3 seconds for accurate tracking",
                  },
                  {
                    title: "Fast and Accurate Tracking",
                    description: "Experience lightning-fast updates with highly accurate stock market data.",
                  },
                  {
                    title: "Comprehensive Data",
                    description: "Track prices, changes, highs, lows, and volume for informed decisions",
                  },
                ].map((feature, index) => (
                  <div key={index} className="text-center p-6 rounded-xl bg-card border-2 hover:border-primary/30 transition-all">
                    <h3 className="text-xl font-bold mb-3">{feature.title}</h3>
                    <p className="text-muted-foreground">{feature.description}</p>
                  </div>
                ))}
              </div>
            </div>
          </section>
        )}
      </main>

      <Footer />
    </div>
  );
};

export default Index;
