# Dwelly 🏠

> _Find where you dwell._

**Dwelly** is a US real estate market analytics platform that helps users analyze, compare, and track housing markets across all 50 states.

🌐 **Live Demo:** [dwelly-eight.vercel.app](https://dwelly-eight.vercel.app)

---

## 📸 Screenshots

<!-- Add screenshots here -->

---

## ✨ Features

- **Market Dashboard** — Analyze any US city with real-time price trends, days on market, active listings, and rental data
- **City Comparison** — Compare up to 4 markets side by side with detailed statistics and price trend charts
- **Interactive Map** — Explore US real estate markets on an interactive map powered by [Leaflet](https://leafletjs.com/) — an open-source mapping library created by 🇺🇦 Ukrainian developer [Vladimir Agafonkin](https://agafonkin.com/)
- **Saved Markets** — Save favorite cities with 30-day data refresh cycle
- **Smart Search** — Search any city with keyboard navigation support (arrows + Enter)

---

## 🛠️ Tech Stack

| Category      | Technology               |
| ------------- | ------------------------ |
| Frontend      | React 18 + TypeScript    |
| Build Tool    | Vite                     |
| Styling       | Tailwind CSS             |
| Routing       | React Router v6          |
| Data Fetching | TanStack Query           |
| Charts        | Recharts                 |
| Maps          | Leaflet + React Leaflet  |
| API           | RentCast Real Estate API |
| Deployment    | Vercel                   |

---

## 📊 Data

Market data is based on real 2026 statistics from **Redfin**, **Homes.com**, and **NAR** reports, covering 70+ US cities across all major metro areas.

Price trend data uses a hybrid approach:

- **Mock data** for popular markets (cached, based on real statistics)
- **RentCast API** for additional markets (50 requests/month free tier)

---

## 🚀 Getting Started

```bash
# Clone the repository
git clone https://github.com/Mitiako/dwelly.git
cd dwelly

# Install dependencies
npm install

# Add your RentCast API key
echo "VITE_RENTCAST_API_KEY=your_key_here" > .env

# Start development server
npm run dev
```

---

## 📁 Project Structure

src/
├── api/ # RentCast API integration
├── components/ # Reusable UI components
│ ├── charts/ # Recharts components
│ ├── layout/ # Sidebar, Layout
│ └── ui/ # Card, KpiCard
├── data/ # Mock market data (70+ cities)
├── hooks/ # Custom React hooks
├── pages/ # Route pages
│ ├── Dashboard/
│ ├── Compare/
│ ├── Home/
│ ├── Map/
│ └── Saved/
├── types/ # TypeScript interfaces
└── utils/ # Formatters, helpers

---

## 🗺️ Pages

| Page         | Description                        |
| ------------ | ---------------------------------- |
| `/`          | Landing page with city search      |
| `/dashboard` | Market analytics for selected city |
| `/compare`   | Side-by-side city comparison       |
| `/map`       | Interactive US market map          |
| `/saved`     | Saved markets with update tracking |

---

## 👨‍💻 Author

**Dmytro Kovalenko** — Junior Frontend Developer

- GitHub: [@Mitiako](https://github.com/Mitiako)
- LinkedIn: [dmytro-kovalenko-dev](https://linkedin.com/in/dmytro-kovalenko-dev)

---

_Built with ❤️ and React_
