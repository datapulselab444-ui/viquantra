import {
  Activity,
  BarChart3,
  Blocks,
  BrainCircuit,
  CloudCog,
  Code2,
  Database,
  Gauge,
  GitBranch,
  Layers3,
  LineChart,
  Network,
  ServerCog,
  Smartphone,
  Workflow,
  Zap
} from "lucide-react";
import type { LucideIcon } from "lucide-react";

export type Service = {
  slug: string;
  title: string;
  shortTitle: string;
  icon: LucideIcon;
  summary: string;
  intro: string;
  image: string;
  imageAlt: string;
  capabilities: string[];
  deliverables: string[];
  technologies: string[];
  pageSections: {
    heading: string;
    body: string;
  }[];
};

export type Project = {
  slug: string;
  title: string;
  category: string;
  icon: LucideIcon;
  summary: string;
  image: string;
  imageAlt: string;
  challenge: string;
  solution: string;
  modules: string[];
  architecture: string[];
  stack: string[];
  visuals?: {
    title: string;
    caption: string;
    type: "dashboard" | "pipeline" | "risk";
  }[];
};

export const images = {
  analytics:
    "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=1400&q=80",
  market:
    "https://images.unsplash.com/photo-1611974789855-9c2a0a7236a3?auto=format&fit=crop&w=1400&q=80",
  team:
    "https://images.unsplash.com/photo-1551434678-e076c223a692?auto=format&fit=crop&w=1400&q=80",
  infrastructure:
    "https://images.unsplash.com/photo-1558494949-ef010cbdcc31?auto=format&fit=crop&w=1400&q=80",
  dashboard:
    "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=1400&q=80",
  systems:
    "https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&w=1400&q=80"
};

export const navigation = [
  { label: "Services", href: "/services" },
  { label: "Projects", href: "/projects" },
  { label: "Industries", href: "/industries" },
  { label: "Insights", href: "/insights" },
  { label: "Company", href: "/about" }
];

export const services: Service[] = [
  {
    slug: "analytics-platforms",
    title: "Intelligent Analytics Platforms",
    shortTitle: "Analytics Platforms",
    icon: BarChart3,
    summary:
      "Custom analytics platforms for market analysis, business intelligence, research workflows, and decision support.",
    intro:
      "We design and build analytics products that turn fragmented data into usable operational views. The focus is data quality, workflow clarity, scalable architecture, and decision support without advisory positioning.",
    image: images.analytics,
    imageAlt: "Analytics dashboard on a monitor with charts and business metrics",
    capabilities: [
      "Market and business data modeling",
      "Custom dashboards and reporting layers",
      "Research workflow management",
      "Pattern exploration and analytics modules",
      "Role-based access and audit-ready controls",
      "Export, scheduling, and report automation"
    ],
    deliverables: [
      "Product architecture blueprint",
      "Django or API-first backend",
      "Responsive dashboard interface",
      "Data ingestion and validation flows",
      "Documentation for future modules"
    ],
    technologies: ["Django", "Python", "PostgreSQL", "React", "Redis", "Pandas"],
    pageSections: [
      {
        heading: "Built around each client's workflow",
        body:
          "Every analytics platform starts with the decisions, reports, roles, and operational routines the client already follows. We translate those into data models, interfaces, permissions, and reusable modules."
      },
      {
        heading: "Designed for long-term expansion",
        body:
          "The architecture leaves room for more datasets, more dashboards, more rules, more exports, and deeper reporting over time. This makes the platform useful as a business system, not just a one-time dashboard."
      }
    ]
  },
  {
    slug: "realtime-data-systems",
    title: "Realtime Data Systems",
    shortTitle: "Realtime Systems",
    icon: Activity,
    summary:
      "Low-latency data pipelines, realtime dashboards, event streams, and operational monitoring systems.",
    intro:
      "Realtime systems need more than fast charts. They require reliable ingestion, queue design, state management, error handling, observability, and clear user experience for time-sensitive workflows.",
    image: images.infrastructure,
    imageAlt: "Server infrastructure used to represent realtime backend systems",
    capabilities: [
      "Realtime data ingestion and normalization",
      "WebSocket-powered dashboard updates",
      "Queue-based processing and background workers",
      "Operational health monitoring",
      "Alert routing for internal workflows",
      "Latency-aware API architecture"
    ],
    deliverables: [
      "Realtime architecture map",
      "Streaming API layer",
      "Worker and queue configuration",
      "Monitoring dashboard",
      "Deployment-ready documentation"
    ],
    technologies: ["Django Channels", "WebSockets", "Redis", "Celery", "Docker", "Cloud"],
    pageSections: [
      {
        heading: "Reliable pipelines before flashy interfaces",
        body:
          "We focus on the data path first: ingestion, validation, storage, processing, and delivery. This prevents dashboard experiences from becoming fragile when volume or complexity grows."
      },
      {
        heading: "Observable by design",
        body:
          "Realtime systems need clear failure modes. We design dashboards and logs that help technical teams understand throughput, latency, failed jobs, and data freshness."
      }
    ]
  },
  {
    slug: "fintech-engineering",
    title: "Custom Financial Technology Solutions",
    shortTitle: "Fintech Engineering",
    icon: LineChart,
    summary:
      "Research and analytics infrastructure for financial data workflows, API integrations, technical analytics, and market intelligence products.",
    intro:
      "DataPulse Lab builds software infrastructure for financial technology use cases. The work is focused on client-owned analytics tooling, data systems, integrations, and research platforms.",
    image: images.dashboard,
    imageAlt: "Laptop screen showing business analytics and financial data charts",
    capabilities: [
      "Market research platforms",
      "NSE analytics tools",
      "Pattern recognition engines",
      "Strategy backtesting infrastructure",
      "Broker and market-data API integrations",
      "Research dashboards and data workbenches"
    ],
    deliverables: [
      "Data schema and analytics model",
      "Backtesting or research engine",
      "Broker/API integration layer",
      "Admin and user dashboards",
      "Security and access workflow"
    ],
    technologies: ["Django", "Python", "PostgreSQL", "REST APIs", "WebSockets", "NumPy"],
    pageSections: [
      {
        heading: "Analytics infrastructure, not advisory services",
        body:
          "Our financial technology work is strictly software engineering: data processing, research tooling, dashboards, integrations, and automation. The client owns their research methodology and business rules."
      },
      {
        heading: "Built for complex financial workflows",
        body:
          "We support watchlists, scanners, historical analytics, API synchronization, user management, performance profiling, and modular analytics engines tailored to internal workflows."
      }
    ]
  },
  {
    slug: "business-intelligence",
    title: "Business Intelligence and Decision Systems",
    shortTitle: "Business Intelligence",
    icon: BrainCircuit,
    summary:
      "Executive dashboards, operational intelligence tools, reporting automation, and data-driven decision support systems.",
    intro:
      "We help organizations make sense of operational data through interfaces that combine KPIs, reporting workflows, filters, drill-down views, and automation.",
    image: images.analytics,
    imageAlt: "Business dashboard with analytics charts",
    capabilities: [
      "Executive dashboards",
      "Department-level KPI tracking",
      "Automated reporting workflows",
      "Data quality checks",
      "Permissioned views for teams",
      "AI-assisted summaries where useful"
    ],
    deliverables: [
      "BI requirements model",
      "Dashboard information architecture",
      "Backend reporting services",
      "Scheduled exports",
      "Data quality documentation"
    ],
    technologies: ["Django", "React", "PostgreSQL", "Python", "Celery", "Charts"],
    pageSections: [
      {
        heading: "Decision support with context",
        body:
          "A strong BI system does not simply display charts. It explains status, variance, exceptions, history, ownership, and next operational actions in a way teams can trust."
      },
      {
        heading: "Governed access to business data",
        body:
          "We design user roles, data visibility, audit trails, and export flows so business information can be used without losing control."
      }
    ]
  },
  {
    slug: "web-mobile-applications",
    title: "Scalable Web and Mobile Applications",
    shortTitle: "Web & Mobile Apps",
    icon: Smartphone,
    summary:
      "Django-backed web platforms, Android applications, client portals, admin systems, and business workflow products.",
    intro:
      "We build web and mobile applications where reliability, usability, backend quality, and future extensibility matter more than surface-level screens.",
    image: images.team,
    imageAlt: "Software team working on laptops in a modern office",
    capabilities: [
      "Django web applications",
      "Android applications",
      "Client portals",
      "Admin dashboards",
      "SaaS product modules",
      "Authentication and user management"
    ],
    deliverables: [
      "Application architecture",
      "Responsive web interface",
      "Mobile app workflow",
      "Backend APIs",
      "Deployment package"
    ],
    technologies: ["Django", "React", "Next.js", "Android", "REST APIs", "Docker"],
    pageSections: [
      {
        heading: "Applications that fit real operations",
        body:
          "We map the daily workflow before defining screens. That helps the final product feel useful to staff, managers, and administrators from the first release."
      },
      {
        heading: "Backend strength under the interface",
        body:
          "Each app is backed by clear data models, API boundaries, permissions, validation rules, and deployment practices so future features can be added confidently."
      }
    ]
  },
  {
    slug: "api-integrations-automation",
    title: "API Integrations and Automation",
    shortTitle: "API & Automation",
    icon: Workflow,
    summary:
      "Secure API integrations, workflow automation, broker connectivity, third-party data synchronization, and internal tools.",
    intro:
      "Many business systems fail because data lives across disconnected tools. We build integration layers and automations that reduce manual work and make data usable.",
    image: images.systems,
    imageAlt: "Circuit board representing integration and automation systems",
    capabilities: [
      "REST API integrations",
      "Broker and data-provider connectivity",
      "Scheduled data sync jobs",
      "Workflow automation",
      "Internal operations tools",
      "Error handling and retry logic"
    ],
    deliverables: [
      "Integration architecture",
      "API connector services",
      "Automation workflows",
      "Job monitoring screens",
      "Technical documentation"
    ],
    technologies: ["Python", "Django", "REST APIs", "Celery", "Redis", "Docker"],
    pageSections: [
      {
        heading: "Integration that can be maintained",
        body:
          "We design connectors with logging, retries, configuration, data validation, and clear ownership so integrations remain supportable as APIs and business rules change."
      },
      {
        heading: "Automation where it saves real effort",
        body:
          "Automation is chosen for repeatable, measurable workflows: data synchronization, reporting, notifications, reconciliation, and operational handoffs."
      }
    ]
  }
];

export const projects: Project[] = [
  {
    slug: "swing-alpha-nse-swing-trading-engine",
    title: "Swing Alpha - NSE Swing Trading Engine",
    category: "Financial Technology Module",
    icon: LineChart,
    summary:
      "A full-stack NSE swing trading module built with Django/DRF, PostgreSQL, and React, designed around a two-stage Discovery sync and Intelligence signal scanning pipeline.",
    image: images.market,
    imageAlt: "Dark market analytics dashboard with trading charts and performance views",
    challenge:
      "Swing research workflows can become fragile when market-data sync, indicator freshness, candidate scanning, paper-trade deployment, and trade lifecycle tracking live in separate tools. The goal was to make every entry decision traceable to data readiness, scan context, and safety validation before the system creates a paper position.",
    solution:
      "Swing Alpha centralizes the workflow into a full-stack NSE module with Discovery sync for universe/data preparation, Intelligence signal scanning for candidate detection, readiness-gated paper-trade deployment, and lifecycle-based trade management. Active positions, trade history, and scan logs are presented as decision-focused analytics views so each trade state can be reviewed from one interface.",
    modules: [
      "Discovery sync for NSE universe refresh, data availability checks, and indicator preparation",
      "Intelligence signal scanning for strategy candidates and scan-log traceability",
      "Readiness gates that block paper-trade entries when data, indicators, or safety checks are stale",
      "Paper-trade deployment workflow with controlled entry creation",
      "Lifecycle management for position sizing, TP1, TP2, and trailing stop logic",
      "Decision-focused analytics across active positions, trade history, and scan logs"
    ],
    architecture: [
      "Django and DRF backend exposing portfolio, scanner, position, and trade-history APIs",
      "PostgreSQL schema for NSE instruments, scan results, indicator snapshots, readiness states, and lifecycle events",
      "React frontend for active position review, scan inspection, trade history, and operational logs",
      "Two-stage processing model separating Discovery sync from Intelligence scan execution",
      "Readiness-gated deployment layer that validates data freshness, indicator state, and safety checks before paper entries",
      "Trade lifecycle services for sizing, partial target tracking, trailing stop movement, and exit-state analytics"
    ],
    stack: ["Django", "Django REST Framework", "PostgreSQL", "React", "Python", "NSE Data", "REST APIs"],
    visuals: [
      {
        title: "Dark trading dashboard",
        caption:
          "Active positions view with readiness status, entry context, TP1/TP2 state, trailing stop movement, and scan provenance.",
        type: "dashboard"
      },
      {
        title: "Discovery to Intelligence workflow",
        caption:
          "Two-stage pipeline separating NSE universe/data sync from Intelligence scanning and gated paper-trade deployment.",
        type: "pipeline"
      },
      {
        title: "Risk and performance monitor",
        caption:
          "Paper-trade control panel for position sizing, target progress, stale-data blocks, safety failures, and lifecycle outcomes.",
        type: "risk"
      }
    ]
  },
  {
    slug: "market-research-intelligence-platform",
    title: "Market Research Intelligence Platform",
    category: "Analytics Platform",
    icon: BarChart3,
    summary:
      "A Django-based platform for structured market research, watchlists, technical analytics, and historical data exploration.",
    image: images.dashboard,
    imageAlt: "Business dashboard displayed on a laptop",
    challenge:
      "Research teams often work across spreadsheets, manual notes, charting tools, and disconnected data exports. The result is duplicated effort and limited visibility into historical context.",
    solution:
      "The platform centralizes datasets, research notes, watchlists, filters, analytics modules, and dashboard views into one workflow-specific product.",
    modules: [
      "Watchlist and universe management",
      "Historical data exploration",
      "Technical analytics modules",
      "Research notes and tagging",
      "Role-based access",
      "Exportable reports"
    ],
    architecture: [
      "Django backend with modular domain apps",
      "PostgreSQL data model for historical and derived analytics",
      "Cached dashboard queries for faster exploration",
      "API-first structure for future mobile or desktop clients"
    ],
    stack: ["Django", "Python", "PostgreSQL", "React", "Redis", "REST APIs"]
  },
  {
    slug: "pattern-recognition-analytics-engine",
    title: "Pattern Recognition Analytics Engine",
    category: "Analytics Engine",
    icon: BrainCircuit,
    summary:
      "A configurable pattern recognition layer for market and business datasets, built for experimentation, review, and dashboard consumption.",
    image: images.analytics,
    imageAlt: "Analytics dashboard with multiple charts and data panels",
    challenge:
      "Pattern research becomes difficult when business logic is buried in scripts and cannot be reviewed, versioned, or reused by other platform modules.",
    solution:
      "The engine separates data ingestion, rule configuration, feature calculation, result storage, and visualization so new patterns can be added without rewriting the platform.",
    modules: [
      "Rule configuration",
      "Feature calculation pipeline",
      "Pattern result storage",
      "Review dashboard",
      "Historical comparison",
      "Audit metadata"
    ],
    architecture: [
      "Python analytics services",
      "Reusable calculation modules",
      "PostgreSQL storage for derived results",
      "Background job execution with task queues"
    ],
    stack: ["Python", "Django", "Pandas", "NumPy", "PostgreSQL", "Celery"]
  },
  {
    slug: "realtime-market-scanner-dashboard",
    title: "Realtime Market Scanner Dashboard",
    category: "Realtime Data System",
    icon: Activity,
    summary:
      "A realtime scanner interface with configurable filters, live updates, system health, and internal research workflow controls.",
    image: images.infrastructure,
    imageAlt: "Server racks representing realtime data infrastructure",
    challenge:
      "Realtime analytics products need to ingest, normalize, process, and present fast-changing data without overloading the interface or backend.",
    solution:
      "The scanner uses event-driven data processing, WebSocket updates, queue-backed jobs, and focused interface states that help teams monitor changing data conditions.",
    modules: [
      "Realtime data ingestion",
      "Scanner rules",
      "Live dashboard panels",
      "Job health monitoring",
      "Data freshness indicators",
      "Internal alert routing"
    ],
    architecture: [
      "WebSocket communication layer",
      "Redis-backed realtime state",
      "Worker queues for computation",
      "Observability screens for technical support"
    ],
    stack: ["Django Channels", "Redis", "Celery", "WebSockets", "Docker", "Cloud"]
  },
  {
    slug: "broker-api-integration-middleware",
    title: "Broker API Integration Middleware",
    category: "API Integration",
    icon: GitBranch,
    summary:
      "A controlled integration layer for broker APIs, authentication workflows, synchronization jobs, and data normalization.",
    image: images.systems,
    imageAlt: "Circuit board representing connected API systems",
    challenge:
      "Direct broker API usage inside product code can become difficult to test, monitor, and extend as workflows grow.",
    solution:
      "A dedicated middleware layer isolates broker connectivity, token handling, request logging, data transformation, retries, and downstream delivery.",
    modules: [
      "API connector services",
      "Token and session handling",
      "Request logging",
      "Data normalization",
      "Retry and failure handling",
      "Admin monitoring"
    ],
    architecture: [
      "Isolated integration service",
      "Configuration-driven connectors",
      "Secure credential handling",
      "Centralized logs and job states"
    ],
    stack: ["Python", "Django", "REST APIs", "PostgreSQL", "Redis", "Docker"]
  },
  {
    slug: "business-intelligence-command-center",
    title: "Business Intelligence Command Center",
    category: "BI Dashboard",
    icon: Gauge,
    summary:
      "A business dashboard suite for KPIs, operational reports, department views, and data-driven decision support.",
    image: images.analytics,
    imageAlt: "Analytics charts shown on a digital dashboard",
    challenge:
      "Leadership teams need trustworthy reporting without waiting for manual spreadsheet preparation or disconnected monthly summaries.",
    solution:
      "The command center combines source data, KPI definitions, role-based dashboards, report scheduling, and data quality checks into a single interface.",
    modules: [
      "KPI library",
      "Executive dashboards",
      "Department views",
      "Scheduled reports",
      "Data quality checks",
      "Downloadable exports"
    ],
    architecture: [
      "Django reporting backend",
      "PostgreSQL analytical schema",
      "Task queues for scheduled reports",
      "Permission-aware frontend views"
    ],
    stack: ["Django", "React", "PostgreSQL", "Celery", "Redis", "Charts"]
  },
  {
    slug: "android-analytics-companion-app",
    title: "Android Analytics Companion App",
    category: "Mobile Application",
    icon: Smartphone,
    summary:
      "A mobile companion app for business users who need secure access to analytics, reports, notifications, and workflow updates.",
    image: images.team,
    imageAlt: "Software team working on mobile and web application planning",
    challenge:
      "Teams increasingly need access to operational data outside desktop dashboards, but mobile products must remain focused, secure, and easy to use.",
    solution:
      "The companion app exposes priority views, notifications, saved reports, and workflow actions through a lightweight mobile experience connected to the platform API.",
    modules: [
      "Authenticated mobile access",
      "Saved report views",
      "Notification center",
      "Workflow updates",
      "API synchronization",
      "Admin-configured access"
    ],
    architecture: [
      "Android client connected to secure REST APIs",
      "Shared backend permissions",
      "Optimized payloads for mobile screens",
      "Release-ready modular app structure"
    ],
    stack: ["Android", "Kotlin", "Django", "REST APIs", "JWT", "Cloud"]
  }
];

export const industries = [
  {
    title: "Financial Technology Workflows",
    summary:
      "Market research systems, data workbenches, pattern analytics, backtesting infrastructure, and API-driven operational tools."
  },
  {
    title: "Data-Intensive Businesses",
    summary:
      "Business intelligence platforms, KPI dashboards, reporting automation, and data quality workflows for growing companies."
  },
  {
    title: "Digital Operations Teams",
    summary:
      "Internal tools, admin consoles, mobile productivity apps, and automation layers for repeated operational work."
  },
  {
    title: "Product-Led Teams",
    summary:
      "MVP-to-platform engineering for teams that need scalable web products, APIs, dashboards, and mobile companions."
  }
];

export const deliveryModel = [
  {
    title: "Discover",
    text: "Understand business workflow, data sources, users, integrations, constraints, and success criteria."
  },
  {
    title: "Architect",
    text: "Define system modules, data models, APIs, infrastructure, permissions, and delivery milestones."
  },
  {
    title: "Build",
    text: "Implement iteratively with usable releases, reusable components, backend quality, and documented decisions."
  },
  {
    title: "Scale",
    text: "Optimize performance, harden deployments, add observability, and prepare the platform for future modules."
  }
];

export const techStack = [
  { name: "Django", icon: ServerCog },
  { name: "Python", icon: Code2 },
  { name: "PostgreSQL", icon: Database },
  { name: "React", icon: Blocks },
  { name: "Next.js", icon: Layers3 },
  { name: "Redis", icon: Zap },
  { name: "Celery", icon: Workflow },
  { name: "WebSockets", icon: Network },
  { name: "Docker", icon: CloudCog },
  { name: "Android", icon: Smartphone },
  { name: "REST APIs", icon: GitBranch },
  { name: "Realtime Processing", icon: Activity }
];
