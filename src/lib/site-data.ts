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
  demoVisuals?: DemoVisual[];
  externalExamples?: ExternalExample[];
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
    type: "dashboard" | "pipeline" | "quality";
  }[];
  demoVisuals?: DemoVisual[];
};

export type DemoVisual = {
  src: string;
  width: number;
  height: number;
  title: string;
  caption: string;
  alt: string;
};

export type ExternalExample = {
  title: string;
  href: string;
  description: string;
  highlights: string[];
};

export const brand = {
  name: "Viquantra Labs",
  tagline: "Intelligence Engineered. Insights Delivered.",
  descriptor: "AI-Driven Analytics Engineering"
};

const whatsappMessage = encodeURIComponent(
  "Hello Viquantra Labs, I want to discuss an AI-driven analytics platform."
);
const whatsappNumber = process.env.NEXT_PUBLIC_WHATSAPP_NUMBER?.replace(/\D/g, "");

export const contactLinks = {
  email: "hello@viquantra.com",
  whatsappHref: whatsappNumber
    ? `https://wa.me/${whatsappNumber}?text=${whatsappMessage}`
    : `https://wa.me/?text=${whatsappMessage}`
};

export const complianceDisclaimer =
  "Viquantra Labs is a software engineering and analytics infrastructure provider. We are not registered with SEBI as an Investment Adviser or Research Analyst. We do not provide investment advice, portfolio management services, research recommendations, trading calls, or buy/sell recommendations for securities or financial instruments. Any dashboards, examples, or visuals are for software demonstration and informational purposes only.";

export const images = {
  analytics:
    "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=1400&q=80",
  market:
    "https://images.unsplash.com/photo-1611974789855-9c2a0a7236a3?auto=format&fit=crop&w=1400&q=80",
  team:
    "https://images.unsplash.com/flagged/photo-1576485436509-a7d286952b65?auto=format&fit=crop&w=1400&q=80",
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
    slug: "realtime-analytics-platforms",
    title: "AI-Driven Realtime Analytics Platforms",
    shortTitle: "Realtime Analytics",
    icon: Activity,
    summary:
      "Custom realtime dashboards, watchlists, monitoring workspaces, and data intelligence interfaces for analytics-driven teams.",
    intro:
      "We engineer realtime analytics platforms that turn streaming data, user workflows, and internal rules into clear informational dashboards. AI-assisted layers can summarize data quality, surface anomalies, and help teams inspect system state within software-defined boundaries.",
    image: images.dashboard,
    imageAlt: "Realtime analytics dashboard with charts and monitoring panels",
    capabilities: [
      "Realtime dashboards and monitoring views",
      "Watchlists and configurable analytics workspaces",
      "Data freshness, latency, and system health panels",
      "AI-assisted anomaly and event summarization",
      "Role-based access for internal teams",
      "Export, scheduling, and reporting workflows"
    ],
    deliverables: [
      "Realtime platform architecture",
      "Dashboard information architecture",
      "Streaming API and backend services",
      "User roles and access controls",
      "Deployment and observability documentation"
    ],
    technologies: ["Django", "Python", "PostgreSQL", "React", "Redis", "WebSockets"],
    pageSections: [
      {
        heading: "Built for live operational clarity",
        body:
          "Realtime systems need more than fast charts. We design the ingestion path, state management, dashboard hierarchy, and exception views so users can understand what the data is doing and whether the system is healthy."
      },
      {
        heading: "AI assistance within software boundaries",
        body:
          "AI can support summarization, classification, search, and anomaly explanation inside the product. The platform remains an informational software system with client-owned logic, data, and operating rules."
      }
    ]
  },
  {
    slug: "technical-intelligence-systems",
    title: "AI-Assisted Technical Intelligence Systems",
    shortTitle: "Technical Intelligence",
    icon: BrainCircuit,
    summary:
      "Pattern recognition, technical structure detection, market data visualization, and AI-assisted inspection tools for custom analytics workflows.",
    intro:
      "Technical intelligence systems help teams inspect structured data, detect recurring patterns, and visualize technical conditions. We build the software layer, data model, review workflow, and AI-assisted explanations while staying within software-infrastructure positioning.",
    image: images.analytics,
    imageAlt: "Analytics interface with technical pattern recognition panels",
    capabilities: [
      "Pattern recognition modules",
      "Technical structure detection",
      "Trend and condition analytics",
      "Market structure visualization",
      "AI-assisted classification and review queues",
      "Audit trails for rule and model outputs"
    ],
    deliverables: [
      "Pattern engine design",
      "Rule and model configuration interface",
      "Review dashboard and audit logs",
      "Synthetic demo dataset for public previews",
      "Documentation for client-owned logic"
    ],
    technologies: ["Python", "Django", "PostgreSQL", "Pandas", "NumPy", "React"],
    pageSections: [
      {
        heading: "From raw data to inspectable structures",
        body:
          "We separate data ingestion, feature calculation, pattern detection, review screens, and audit metadata. That separation keeps technical intelligence systems explainable and easier to extend."
      },
      {
        heading: "Designed for informational use",
        body:
          "Outputs are framed as analytics observations, classifications, and review states. Public demos use synthetic or generic labels, and client-facing systems must stay within the client's regulatory responsibilities."
      }
    ],
    demoVisuals: [
      {
        src: "/assets/demo/technical-intelligence-stage-2-masked.webp",
        width: 1512,
        height: 867,
        title: "Masked technical intelligence workspace",
        caption:
          "XCF-derived public preview with visible masks applied to sensitive values and interface data.",
        alt:
          "Masked technical intelligence dashboard showing stage two analytics review workflow"
      }
    ]
  },
  {
    slug: "custom-software-development",
    title: "Custom Software Development",
    shortTitle: "Custom Software",
    icon: Code2,
    summary:
      "Django applications, internal tools, analytics systems, admin platforms, and custom business software built around real workflows.",
    intro:
      "We build AI-ready custom software for teams that need more than template screens. Every application is designed around users, permissions, data ownership, integrations, reporting, deployment, and future expansion.",
    image: images.team,
    imageAlt: "Indian software team collaborating on custom application planning",
    capabilities: [
      "Django web applications",
      "Internal tools and admin consoles",
      "Analytics systems and client portals",
      "Custom business workflow software",
      "Authentication and permission models",
      "Deployment-ready product architecture"
    ],
    deliverables: [
      "Application architecture",
      "Responsive web interface",
      "Backend APIs and data models",
      "Admin and role-based workflows",
      "Deployment package and documentation"
    ],
    technologies: ["Django", "Python", "PostgreSQL", "React", "Next.js", "Docker"],
    pageSections: [
      {
        heading: "Software shaped around operations",
        body:
          "We map the daily workflow before defining screens. That helps the final product feel useful to staff, managers, and administrators from the first release."
      },
      {
        heading: "Built for AI-ready expansion",
        body:
          "Clean data models, clear API boundaries, event logs, and modular services make it easier to add AI-assisted search, summaries, classification, and automation later."
      }
    ],
    externalExamples: [
      {
        title: "Resume Ready",
        href: "https://resumeready.in/",
        description:
          "A privacy-first ATS resume and cover-letter builder that demonstrates custom product engineering for a focused user workflow.",
        highlights: [
          "No-signup resume creation flow",
          "In-browser privacy-focused experience",
          "ATS-friendly resume and cover-letter workflows"
        ]
      }
    ]
  },
  {
    slug: "workflow-automation",
    title: "AI-Enabled Workflow Automation",
    shortTitle: "Workflow Automation",
    icon: Workflow,
    summary:
      "Business automation, informational alert systems, process automation, reporting workflows, and AI-assisted operational summaries.",
    intro:
      "Workflow automation reduces repeated manual effort across data collection, validation, routing, reporting, and team handoffs. AI can help summarize status, classify exceptions, and support review without replacing human ownership.",
    image: images.infrastructure,
    imageAlt: "Server infrastructure representing workflow automation systems",
    capabilities: [
      "Business process automation",
      "Informational alert systems",
      "Scheduled data sync and validation jobs",
      "Reporting workflow automation",
      "AI-assisted exception summaries",
      "Job monitoring and retry handling"
    ],
    deliverables: [
      "Automation workflow map",
      "Background worker configuration",
      "Alert and notification rules",
      "Monitoring dashboard",
      "Operational runbook"
    ],
    technologies: ["Python", "Django", "Celery", "Redis", "PostgreSQL", "Cloud"],
    pageSections: [
      {
        heading: "Automation where it saves real effort",
        body:
          "Automation is chosen for repeatable, measurable workflows: data synchronization, reporting, notifications, reconciliation, and operational handoffs."
      },
      {
        heading: "Human review remains visible",
        body:
          "The system can organize, summarize, and route work, but approvals, business decisions, and regulated responsibilities remain clearly owned by the client."
      }
    ]
  },
  {
    slug: "api-integration-services",
    title: "API Integration Services",
    shortTitle: "API Integrations",
    icon: GitBranch,
    summary:
      "Secure integrations for Zerodha Kite API, TradingView webhooks, REST APIs, WebSockets, market data feeds, and internal systems.",
    intro:
      "We build integration layers that connect data sources, webhooks, dashboards, and internal systems. For securities-market workflows, integrations are positioned as client-owned software infrastructure and must follow applicable broker, exchange, and regulatory requirements.",
    image: images.systems,
    imageAlt: "Circuit board representing connected API systems",
    capabilities: [
      "Zerodha Kite API integrations",
      "TradingView webhook receivers",
      "REST API connector services",
      "Realtime WebSocket integrations",
      "Credential, token, and session handling",
      "Logging, retries, and failure monitoring"
    ],
    deliverables: [
      "Integration architecture",
      "Secure connector services",
      "Webhook and event processing layer",
      "Admin monitoring screens",
      "Technical and compliance boundary notes"
    ],
    technologies: ["Python", "Django", "REST APIs", "WebSockets", "Redis", "Docker"],
    pageSections: [
      {
        heading: "Connectors that can be maintained",
        body:
          "We design integrations with logging, retries, configuration, data validation, and clear ownership so connected systems remain supportable as APIs and business rules change."
      },
      {
        heading: "Clear boundaries for regulated workflows",
        body:
          "Broker and market-data integrations are scoped as software infrastructure. Public-facing, automated, or execution-related use cases require separate legal, broker, exchange, and regulatory review."
      }
    ]
  }
];

export const projects: Project[] = [
  {
    slug: "market-analytics-workflow-platform",
    title: "Market Analytics Workflow Platform",
    category: "Technical Intelligence System",
    icon: BrainCircuit,
    summary:
      "A Django and React platform for market data ingestion, pattern detection, scenario simulation, and informational analytics review using client-defined logic.",
    image: images.market,
    imageAlt: "Dark market analytics dashboard with informational charts and review panels",
    challenge:
      "Market analytics workflows become fragile when data readiness, indicator calculations, pattern review, scenario logs, and team notes live in separate tools. The goal was to make every analytics state traceable to data freshness, rule context, and review history.",
    solution:
      "The platform centralizes the workflow into a modular analytics system with data preparation, technical intelligence scanning, readiness checks, scenario simulation, and lifecycle review. Tracked scenarios, history, and scan logs are presented as informational views for inspection and documentation.",
    modules: [
      "Market data ingestion and readiness checks",
      "Technical pattern detection with review queues",
      "Scenario simulation based on client-defined rules",
      "Informational analytics workspace for tracked scenarios",
      "Audit logs for rules, data freshness, and user review",
      "Dashboard views for system health and analytics history"
    ],
    architecture: [
      "Django and DRF backend exposing analytics workspace APIs",
      "PostgreSQL schema for instruments, derived indicators, scan results, readiness states, and review events",
      "React frontend for analytics review, scan inspection, history, and operational logs",
      "Two-stage processing model separating data preparation from technical intelligence review",
      "Readiness checks that validate data freshness and rule state before scenario simulation",
      "Lifecycle services for informational state tracking and audit-ready history"
    ],
    stack: ["Django", "Django REST Framework", "PostgreSQL", "React", "Python", "Market Data", "REST APIs"],
    visuals: [
      {
        title: "Technical intelligence dashboard",
        caption:
          "Informational view with readiness status, pattern context, scenario state, and scan provenance using synthetic labels.",
        type: "dashboard"
      },
      {
        title: "Data to review workflow",
        caption:
          "Two-stage pipeline separating data preparation from technical intelligence scanning and human review.",
        type: "pipeline"
      },
      {
        title: "Scenario quality monitor",
        caption:
          "Control panel for data freshness, rule state, exception handling, and analytics lifecycle outcomes.",
        type: "quality"
      }
    ],
    demoVisuals: [
      {
        src: "/assets/demo/market-workflow-stage-1-masked.webp",
        width: 1512,
        height: 867,
        title: "Masked discovery workflow",
        caption:
          "XCF-derived Stage 1 preview with masked values, cropped sidebar, and public demo-data labeling.",
        alt:
          "Masked market analytics discovery workflow with filters and demo data labels"
      },
      {
        src: "/assets/demo/technical-intelligence-stage-2-masked.webp",
        width: 1512,
        height: 867,
        title: "Masked intelligence scan workflow",
        caption:
          "Stage 2 analytics review view with sensitive values masked and framed as a demo interface.",
        alt:
          "Masked technical intelligence scan dashboard showing review cards and analytics filters"
      },
      {
        src: "/assets/demo/market-workflow-active-review-masked.webp",
        width: 1512,
        height: 886,
        title: "Masked active review workspace",
        caption:
          "Operational review screen exported from the masked XCF and labeled for public software demonstration only.",
        alt:
          "Masked active review dashboard with analytics cards and workflow detail panels"
      },
      {
        src: "/assets/demo/market-workflow-history-masked.webp",
        width: 1512,
        height: 886,
        title: "Masked history and quality view",
        caption:
          "Historical analytics view with visible masks applied to sensitive performance values before publication.",
        alt:
          "Masked market analytics history dashboard with monthly calendar and quality breakdown"
      }
    ]
  },
  {
    slug: "realtime-market-data-dashboard",
    title: "Realtime Market Data Dashboard",
    category: "Realtime Analytics Platform",
    icon: Activity,
    summary:
      "A realtime dashboard for market data monitoring, watchlists, data freshness, system health, and configurable analytics views.",
    image: images.dashboard,
    imageAlt: "Realtime market data dashboard displayed on a laptop",
    challenge:
      "Teams need fast visibility into changing market data, but dashboards become unreliable when ingestion, validation, websocket updates, and system health are not visible together.",
    solution:
      "The dashboard combines realtime ingestion, queue-backed processing, configurable watchlists, health panels, and AI-assisted status summaries into one operational interface.",
    modules: [
      "Realtime data ingestion",
      "Watchlist and workspace configuration",
      "Live dashboard panels",
      "Job health monitoring",
      "Data freshness indicators",
      "AI-assisted operational summaries"
    ],
    architecture: [
      "WebSocket communication layer",
      "Redis-backed realtime state",
      "Worker queues for computation",
      "PostgreSQL storage for normalized data",
      "Observability screens for technical support"
    ],
    stack: ["Django Channels", "Redis", "Celery", "WebSockets", "PostgreSQL", "React"]
  },
  {
    slug: "pattern-recognition-analytics-engine",
    title: "Pattern Recognition Analytics Engine",
    category: "Analytics Engine",
    icon: BarChart3,
    summary:
      "A configurable pattern recognition layer for market and business datasets, built for experimentation, review, and dashboard consumption.",
    image: images.analytics,
    imageAlt: "Analytics dashboard with multiple charts and data panels",
    challenge:
      "Pattern research becomes difficult when business logic is buried in scripts and cannot be reviewed, versioned, or reused by other platform modules.",
    solution:
      "The engine separates data ingestion, rule configuration, feature calculation, result storage, review workflows, and visualization so new patterns can be added without rewriting the platform.",
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
      "Background job execution with task queues",
      "AI-assisted classification notes for review workflows"
    ],
    stack: ["Python", "Django", "Pandas", "NumPy", "PostgreSQL", "Celery"]
  },
  {
    slug: "broker-api-integration-middleware",
    title: "Broker API Integration Middleware",
    category: "API Integration",
    icon: GitBranch,
    summary:
      "A controlled integration layer for broker APIs, authentication workflows, synchronization jobs, data normalization, and monitoring.",
    image: images.systems,
    imageAlt: "Circuit board representing connected API systems",
    challenge:
      "Direct broker API usage inside product code can become difficult to test, monitor, and extend as workflows grow.",
    solution:
      "A dedicated middleware layer isolates broker connectivity, token handling, request logging, data transformation, retries, and downstream delivery. Use cases involving order execution or public distribution require separate compliance review.",
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
      "Centralized logs and job states",
      "Compliance boundary notes for regulated workflows"
    ],
    stack: ["Python", "Django", "REST APIs", "PostgreSQL", "Redis", "Docker"]
  },
  {
    slug: "enterprise-dashboard-command-center",
    title: "Enterprise Dashboard Command Center",
    category: "Dashboard Engineering",
    icon: Gauge,
    summary:
      "A business dashboard suite for KPIs, operational reports, department views, AI-assisted summaries, and data-driven workflow visibility.",
    image: images.analytics,
    imageAlt: "Analytics charts shown on a digital dashboard",
    challenge:
      "Leadership teams need trustworthy reporting without waiting for manual spreadsheet preparation or disconnected monthly summaries.",
    solution:
      "The command center combines source data, KPI definitions, role-based dashboards, report scheduling, AI-assisted summaries, and data quality checks into a single interface.",
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
      "Permission-aware frontend views",
      "AI-assisted summarization layer"
    ],
    stack: ["Django", "React", "PostgreSQL", "Celery", "Redis", "Charts"]
  },
  {
    slug: "mobile-analytics-companion-app",
    title: "Mobile Analytics Companion App",
    category: "Custom Software",
    icon: Smartphone,
    summary:
      "A mobile companion app for users who need secure access to analytics, reports, notifications, and workflow updates.",
    image: images.team,
    imageAlt: "Indian software team working on mobile and web application planning",
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
    title: "Retail Trading Analytics",
    summary:
      "Informational dashboards, market data views, pattern recognition tools, and workflow automation for analytics-focused users and communities."
  },
  {
    title: "Market Data Analytics",
    summary:
      "Realtime data ingestion, data quality monitoring, watchlists, technical structure visualization, and AI-assisted inspection workflows."
  },
  {
    title: "Trading Workflow Automation",
    summary:
      "Client-owned process automation, webhook routing, reporting workflows, and internal review tools for analytics operations."
  },
  {
    title: "Enterprise Dashboards and AI Systems",
    summary:
      "Business analytics, internal tools, AI-assisted reporting, and custom automation platforms for future expansion beyond market workflows."
  }
];

export const deliveryModel = [
  {
    title: "Discover",
    text: "Understand the workflow, users, data sources, AI opportunities, regulated boundaries, integrations, constraints, and success criteria."
  },
  {
    title: "Architect",
    text: "Define system modules, data models, APIs, infrastructure, permissions, compliance boundaries, and delivery milestones."
  },
  {
    title: "Build",
    text: "Implement iteratively with usable releases, reusable components, backend quality, AI-ready data flows, and documented decisions."
  },
  {
    title: "Scale",
    text: "Optimize performance, harden deployments, add observability, improve AI-assisted workflows, and prepare the platform for future modules."
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
