import { useState } from "react";
import { Plus, X, MapPin } from "lucide-react";
import Card from "../../components/ui/Card";
import MultiLineChart from "../../components/charts/MultiLineChart";
import { mockMarketData, mockPriceTrends } from "../../data/mockData";
import { formatPrice, formatNumber } from "../../utils/formatters";
import { POPULAR_CITIES, CHART_COLORS } from "../../constants";
import type { City } from "../../types";

const DEFAULT_CITIES = ["dallas-tx", "miami-fl", "chicago-il"];

const Compare = () => {
  const [selectedCities, setSelectedCities] =
    useState<string[]>(DEFAULT_CITIES);
  const [showSearch, setShowSearch] = useState(false);
  const [query, setQuery] = useState("");

  const addCity = (cityId: string) => {
    if (selectedCities.includes(cityId)) return;
    if (selectedCities.length >= 4) return;
    setSelectedCities((prev) => [...prev, cityId]);
    setShowSearch(false);
    setQuery("");
  };

  const removeCity = (cityId: string) => {
    if (selectedCities.length <= 2) return;
    setSelectedCities((prev) => prev.filter((id) => id !== cityId));
  };

  const getCityInfo = (cityId: string): City | undefined =>
    POPULAR_CITIES.find((c) => c.id === cityId);

  // Будуємо дані для multi-line chart
  const chartData = mockPriceTrends["dallas-tx"].map((trend, index) => {
    const point: { month: string; [key: string]: string | number } = {
      month: trend.month,
    };
    selectedCities.forEach((cityId) => {
      const trends = mockPriceTrends[cityId] || mockPriceTrends["dallas-tx"];
      point[cityId] = trends[index]?.averagePrice || 0;
    });
    return point;
  });

  const filteredCities = POPULAR_CITIES.filter(
    (c) =>
      !selectedCities.includes(c.id) &&
      (c.name.toLowerCase().includes(query.toLowerCase()) ||
        c.stateCode.toLowerCase().includes(query.toLowerCase())),
  );

  return (
    <div className="space-y-6">
      {/* Header */}
      <div>
        <h1 className="text-2xl font-bold text-white">Compare Markets</h1>
        <p className="text-gray-400 text-sm mt-1">
          Compare real estate markets across US cities
        </p>
      </div>

      {/* Selected Cities */}
      <div className="grid grid-cols-4 gap-4 items-start">
        {selectedCities.map((cityId, index) => {
          const city = getCityInfo(cityId);
          const data = mockMarketData[cityId];
          if (!city || !data) return null;
          return (
            <Card key={cityId} className="relative" padding="p-3">
              <button
                onClick={() => removeCity(cityId)}
                aria-label={`Remove ${city?.name}`}
                className="absolute top-2 right-2 text-gray-600 hover:text-red-400 transition-colors"
              >
                <X size={12} />
              </button>
              <div className="flex items-center justify-between pr-4">
                <div className="flex items-center gap-2">
                  <div
                    className="w-2.5 h-2.5 rounded-full shrink-0"
                    style={{ backgroundColor: CHART_COLORS[index] }}
                  />
                  <div>
                    <p className="text-white font-semibold text-sm leading-tight">
                      {city.name}
                    </p>
                    <p className="text-gray-500 text-xs">{city.state}</p>
                  </div>
                </div>
                <div className="text-right">
                  <p className="text-cyan-400 font-bold text-sm">
                    {formatPrice(data.saleData.averagePrice)}
                  </p>
                  <p className="text-gray-500 text-xs">
                    {data.saleData.averageDaysOnMarket}d on market
                  </p>
                </div>
              </div>
            </Card>
          );
        })}

        {/* Add City */}
        {selectedCities.length < 4 && (
          <div className="relative">
            <button
              onClick={() => setShowSearch(!showSearch)}
              className="w-full h-full min-h-[60px] border border-dashed border-[#333333] rounded-xl flex flex-col items-center justify-center gap-2 text-gray-500 hover:border-cyan-400 hover:text-cyan-400 transition-all"
            >
              <Plus size={20} />
              <span className="text-sm">Add Market</span>
            </button>
            {showSearch && (
              <div className="absolute top-full left-0 right-0 mt-2 bg-[#111111] border border-[#333333] rounded-xl overflow-hidden z-10">
                <input
                  type="text"
                  placeholder="Search city..."
                  value={query}
                  onChange={(e) => setQuery(e.target.value)}
                  className="w-full bg-transparent px-4 py-3 text-white placeholder-gray-500 border-b border-[#333333] focus:outline-none text-sm"
                  autoFocus
                />
                {filteredCities.slice(0, 5).map((city) => (
                  <button
                    key={city.id}
                    onClick={() => addCity(city.id)}
                    className="w-full flex items-center gap-2 px-4 py-2.5 hover:bg-[#1a1a1a] transition-colors text-left"
                  >
                    <MapPin size={12} className="text-cyan-400" />
                    <span className="text-white text-sm">{city.name}</span>
                    <span className="text-gray-500 text-xs">
                      {city.stateCode}
                    </span>
                  </button>
                ))}
              </div>
            )}
          </div>
        )}
      </div>

      {/* Price Trends Chart */}
      <Card padding="p-3">
        <h2 className="text-white font-semibold mb-3">
          Price Trends (12 Months)
        </h2>
        <MultiLineChart
          data={chartData}
          lines={selectedCities.map((cityId) => ({
            key: cityId,
            label: getCityInfo(cityId)?.name || cityId,
          }))}
        />
      </Card>

      {/* Comparison Table */}
      <Card padding="p-3">
        <h2 className="text-white font-semibold mb-2">Market Statistics</h2>
        <div className="overflow-x-auto">
          <table className="w-full">
            <thead>
              <tr className="border-b border-[#222222]">
                <th className="text-left text-gray-400 text-sm font-medium pb-3 pr-4">
                  Metric
                </th>
                {selectedCities.map((cityId, index) => {
                  const city = getCityInfo(cityId);
                  return (
                    <th
                      key={cityId}
                      className="text-left text-sm font-medium pb-3 pr-4"
                      style={{ color: CHART_COLORS[index] }}
                    >
                      {city?.name}, {city?.stateCode}
                    </th>
                  );
                })}
              </tr>
            </thead>
            <tbody className="divide-y divide-[#1a1a1a]">
              {[
                {
                  label: "Average Price",
                  getValue: (id: string) =>
                    formatPrice(mockMarketData[id]?.saleData.averagePrice || 0),
                },
                {
                  label: "Median Price",
                  getValue: (id: string) =>
                    formatPrice(mockMarketData[id]?.saleData.medianPrice || 0),
                },
                {
                  label: "Price per Sq Ft",
                  getValue: (id: string) =>
                    `$${mockMarketData[id]?.saleData.averagePricePerSquareFoot || 0}`,
                },
                {
                  label: "Days on Market",
                  getValue: (id: string) =>
                    `${mockMarketData[id]?.saleData.averageDaysOnMarket || 0} days`,
                },
                {
                  label: "Active Listings",
                  getValue: (id: string) =>
                    formatNumber(
                      mockMarketData[id]?.saleData.totalListings || 0,
                    ),
                },
                {
                  label: "New Listings",
                  getValue: (id: string) =>
                    formatNumber(mockMarketData[id]?.saleData.newListings || 0),
                },
                {
                  label: "Average Rent",
                  getValue: (id: string) =>
                    formatPrice(
                      mockMarketData[id]?.rentalData.averageRent || 0,
                    ),
                },
              ].map((row) => (
                <tr key={row.label}>
                  <td className="text-gray-400 text-sm py-1.5 pr-4">
                    {row.label}
                  </td>
                  {selectedCities.map((cityId) => (
                    <td key={cityId} className="text-white text-sm py-3 pr-4">
                      {row.getValue(cityId)}
                    </td>
                  ))}
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </Card>
    </div>
  );
};

export default Compare;
