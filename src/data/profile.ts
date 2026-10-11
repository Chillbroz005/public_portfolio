export const profile = {
  name: "Jordan Taylor",
  title: "Senior Supply Chain & Procurement Professional",
  summary: "Fictional sample profile demonstrating strategic sourcing, technical and commercial procurement, CAPEX/OPEX, procure-to-pay, contract management, vendor development, and project procurement.",
  tagline: "A fictional supply chain professional profile showcasing strategic sourcing, technical and commercial procurement, CAPEX/OPEX, P2P, contract management, vendor development, and international project procurement.",
  location: "Bengaluru, India (Demo)",
  email: "jordan.taylor@example.invalid",
  phones: ["+91 90000 00000 (sample)"],
  linkedin: "https://example.com/your-profile",
  github: "https://github.com/example",
  githubProfile: "https://github.com/example",
  githubUsername: "",
  experienceYears: "10+ years (sample)",
  regions: ["India", "Southeast Asia"],
  industries: ["Manufacturing", "Textiles", "Fabrication", "Engineering Projects"],
  functions: [
    "Strategic sourcing", "Procurement", "P2P", "CAPEX/OPEX",
    "Contracts", "Vendor management", "IT procurement", "Tender evaluation",
    "RFI/RFQ/RFP", "Supplier qualification"
  ],
  achievements: [
    "Operational Excellence Recognition (Sample)",
    "Continuous Improvement Award (Sample)",
    "Supplier Performance Improvement Initiative (Sample)"
  ]
} as const;

export type ExperienceItem = {
  company: string;
  role: string;
  location: string;
  dates: string;
  startDate: string;
  endDate: string | null;
  bullets: string[];
};

export const experience: ExperienceItem[] = [
  {
    company: "NORTHSTAR INDUSTRIAL SYSTEMS (SAMPLE)",
    role: "Senior Procurement Specialist",
    location: "Bengaluru, India",
    dates: "2023 – Present (Sample)",
    startDate: "2023-01-01",
    endDate: null,
    bullets: [
      "Coordinated RFI/RFQ activities, supplier communication, onboarding and bid evaluations.",
      "Negotiated commercial terms and prepared purchase orders, work orders and service agreements.",
      "Tracked supplier performance, delivery commitments and procurement KPIs.",
      "Partnered with engineering, operations, finance and project teams to support timely execution."
    ]
  },
  {
    company: "BLUEHARBOR PROJECTS (SAMPLE)",
    role: "Procurement Engineer – Projects",
    location: "Singapore (Sample)",
    dates: "2020 – 2022 (Sample)",
    startDate: "2020-01-01",
    endDate: "2022-12-31",
    bullets: [
      "Managed project procurement from requisition through purchase order and delivery.",
      "Evaluated vendors on technical compliance, quality, cost and lead time.",
      "Reviewed quotations, supported negotiations and maintained procurement records.",
      "Coordinated with design, production, quality and warehouse teams."
    ]
  },
  {
    company: "EVERGREEN TEXTILE WORKS (SAMPLE)",
    role: "Purchase & Projects Executive",
    location: "Chennai, India (Sample)",
    dates: "2016 – 2019 (Sample)",
    startDate: "2016-01-01",
    endDate: "2019-12-31",
    bullets: [
      "Supported sourcing for CAPEX, OPEX, maintenance and project requirements.",
      "Maintained vendor relationships, purchase documentation and cost reports.",
      "Helped improve sourcing processes and supplier delivery performance."
    ]
  }
];

export const engagements = [
  "Plant utility upgrade programme (Sample)",
  "Capital equipment sourcing initiative (Sample)",
  "Facilities and maintenance service contracts (Sample)",
  "Supplier performance improvement programme (Sample)"
];

export const skills = [
  "Supply Chain", "Strategic Sourcing", "Procurement", "P2P", "CAPEX/OPEX",
  "Vendor Management", "Contract Management", "RFI/RFQ/RFP",
  "Global Sourcing", "Inventory Optimization"
];

export const software = [
  "ERP Systems (Sample)", "Microsoft Office", "AutoCAD",
  "Business Intelligence Dashboards", "Spreadsheet Analysis"
];

export const tools = [
  "Project Tracking Tools", "Supplier Portals", "Contract Management Systems",
  "Procurement Analytics", "Excel Query"
];

export const education = [
  {
    degree: "B.E., Mechanical Engineering (Sample)",
    institution: "South Coast Institute of Technology (Sample)",
    year: "2016",
    detail: "Sample qualification"
  },
  {
    degree: "Higher Secondary Certificate (Sample)",
    institution: "Central District Higher Secondary School (Sample)",
    year: "2012",
    detail: "Sample qualification"
  }
];

export const certifications = [
  "Lean Six Sigma – Green Belt (Sample)",
  "Non-Destructive Testing (NDT) – Sample",
  "Industrial Automation Fundamentals (Sample)"
];

export const projects = [
  {
    title: "Procurement KPI Dashboard (Sample)",
    category: "Procurement",
    description: "Illustrative dashboard concept for supplier delivery, spend and open-order tracking.",
    technologies: ["Spreadsheet Analysis", "Power BI (Sample)"],
    github: "https://example.com/sample-project"
  }
];
