frontend/
│
├── public/
│   ├── index.html
│   ├── manifest.json
│   └── icons/               # app icons, logos
│
├── src/
│   ├── index.js             # Entry point
│   ├── App.js               # Main routes & layout
│   ├── App.css              # Global Tailwind styles (if any overrides)
│   │
│   ├── assets/              # Static images, logos, icons
│   │   └── logo.png
│   │
│   ├── components/          # Reusable UI parts
│   │   ├── Navbar.jsx
│   │   ├── Footer.jsx
│   │   ├── LanguageSelector.jsx
│   │   ├── MapView.jsx      # Map (Leaflet/Google Maps/Mapbox)
│   │   ├── ChartView.jsx    # For dashboard charts
│   │   ├── AlertTicker.jsx  # Scrolling alerts
│   │   ├── FeedCard.jsx     # Single post card
│   │   └── Notification.jsx
│   │
│   ├── pages/               # Full page views
│   │   ├── Home.jsx         # Dashboard + Map + Alerts + Feed
│   │   ├── Login.jsx        # Login for Citizen/Admin
│   │   ├── Register.jsx     # Registration (if needed)
│   │   ├── About.jsx        # About us page
│   │   ├── Alerts.jsx       # Dedicated alerts page
│   │   ├── Feed.jsx         # Public posts (citizen + social media)
│   │   ├── Dashboard.jsx    # Stats, charts, tables
│   │   ├── CitizenProfile.jsx
│   │   └── AdminPanel.jsx   # For admin actions
│   │
│   ├── context/             # Global states (React Context)
│   │   ├── AuthContext.js   # User login state
│   │   └── LanguageContext.js
│   │
│   ├── services/            # API calls to backend
│   │   ├── api.js           # Axios base instance
│   │   ├── authService.js   # login, register
│   │   ├── reportService.js # citizen reports
│   │   ├── mapService.js    # map data fetch
│   │   ├── feedService.js   # social + citizen posts
│   │   ├── alertService.js  # alerts API
│   │   └── adminService.js  # admin actions
│   │
│   ├── hooks/               # Custom React hooks
│   │   └── useAuth.js
│   │
│   ├── i18n/                # Multilingual setup
│   │   ├── i18n.js
│   │   └── locales/
│   │       ├── en.json
│   │       ├── hi.json
│   │       └── ta.json
│   │
│   ├── styles/              # Extra CSS if needed
│   │   └── tailwind.css
│   │
│   └── utils/               # Helper functions
│       ├── formatDate.js
│       └── geoUtils.js
│
├── .env                     # Environment variables (API base URL, keys)
├── package.json
└── tailwind.config.js
