// Amgen Procurement Platform - Mock Data

export interface Category {
  id: string;
  name: string;
  shortName: string;
  type: 'direct' | 'indirect';
  spend: number;
  spendYoYChange: number;
  suppliers: number;
  suppliersYoYChange: number;
  contracts: number;
  contractsExpiring: number;
  savings: number;
  carbonIntensity: number;
  carbonUnit: string;
  carbonTotalMT: number;
  leadTime: string;
  qualityScore: number;
  riskLevel: 'low' | 'medium' | 'high';
  icon: string;
  gradient: string;
  subcategories: Subcategory[];
  topSuppliers: Supplier[];
  regionalDistribution: RegionalData[];
  aiAgent: AIAgent;
}

export interface Subcategory {
  name: string;
  spend: number;
  suppliers: number;
}

export interface Supplier {
  rank: number;
  name: string;
  spend: number;
  qualityScore: number;
  carbonIntensity: number;
  riskLevel: 'low' | 'medium' | 'high';
  sbtiStatus: 'committed' | 'in-progress' | 'not-yet';
  region: string;
}

export interface RegionalData {
  region: string;
  percentage: number;
  spend: number;
  suppliers: number;
}

export interface AIAgent {
  name: string;
  avatar: string;
  specialty: string;
}

export interface SustainabilityCategory {
  id: string;
  name: string;
  emissionsMT: number;
  percentOfTotal: number;
  intensity: number;
  intensityUnit: string;
  trend: number;
  scope1MT: number;
  scope2MT: number;
  scope3MT: number;
  waterFootprint?: number;
  renewableEnergy?: number;
  sbtiSuppliers: number;
}

// Overview Metrics
export const overviewMetrics = {
  totalSpend: 12300000000,
  totalSpendYoY: 0.052,
  activeSuppliers: 2847,
  suppliersYoY: -0.031,
  categories: 127,
  directCategories: 12,
  indirectCategories: 115,
  avgSavings: 0.124,
  directSpend: 9200000000,
  indirectSpend: 3100000000,
};

// Sustainability Overview
export const sustainabilityMetrics = {
  totalScope3MT: 1850000,
  target2030MT: 940000,
  progressPercent: 32,
  yoyReduction: -0.082,
  sbtiSuppliers: 58,
  sbtiTarget: 80,
  sustainableSpend: 5400000000,
  sustainablePercent: 64,
  deforestationFree: 94,
};

// Direct Categories
export const directCategories: Category[] = [
  {
    id: 'apis',
    name: 'Active Pharmaceutical Ingredients',
    shortName: 'APIs',
    type: 'direct',
    spend: 2847000000,
    spendYoYChange: 0.082,
    suppliers: 127,
    suppliersYoYChange: -0.055,
    contracts: 89,
    contractsExpiring: 12,
    savings: 0.068,
    carbonIntensity: 8.7,
    carbonUnit: 'kg CO₂e/kg',
    carbonTotalMT: 438200,
    leadTime: '180-240 days',
    qualityScore: 97.2,
    riskLevel: 'medium',
    icon: '🧪',
    gradient: 'from-blue-600 to-cyan-500',
    subcategories: [
      { name: 'Small Molecule APIs', spend: 1234000000, suppliers: 67 },
      { name: 'Peptides & Oligonucleotides', spend: 892000000, suppliers: 34 },
      { name: 'Biotechnology-derived APIs', spend: 721000000, suppliers: 26 },
    ],
    topSuppliers: [
      { rank: 1, name: 'Lonza Group', spend: 234000000, qualityScore: 99.2, carbonIntensity: 4.2, riskLevel: 'low', sbtiStatus: 'committed', region: 'Europe' },
      { rank: 2, name: 'WuXi AppTec', spend: 189000000, qualityScore: 98.7, carbonIntensity: 6.8, riskLevel: 'medium', sbtiStatus: 'in-progress', region: 'Asia-Pacific' },
      { rank: 3, name: 'Catalent Pharma', spend: 167000000, qualityScore: 97.1, carbonIntensity: 7.2, riskLevel: 'medium', sbtiStatus: 'committed', region: 'North America' },
    ],
    regionalDistribution: [
      { region: 'China', percentage: 42, spend: 1196000000, suppliers: 54 },
      { region: 'India', percentage: 23, spend: 655000000, suppliers: 38 },
      { region: 'Europe', percentage: 21, spend: 598000000, suppliers: 24 },
      { region: 'North America', percentage: 14, spend: 398000000, suppliers: 11 },
    ],
    aiAgent: { name: 'Helix.AI', avatar: '🧬', specialty: 'API Sourcing Expert' },
  },
  {
    id: 'biologics',
    name: 'Biologics & Cell Culture Media',
    shortName: 'Biologics',
    type: 'direct',
    spend: 1923000000,
    spendYoYChange: 0.048,
    suppliers: 84,
    suppliersYoYChange: 0.024,
    contracts: 67,
    contractsExpiring: 8,
    savings: 0.091,
    carbonIntensity: 3.2,
    carbonUnit: 'kg CO₂e/kg',
    carbonTotalMT: 223800,
    leadTime: '90-120 days',
    qualityScore: 98.8,
    riskLevel: 'low',
    icon: '🧬',
    gradient: 'from-purple-600 to-pink-500',
    subcategories: [
      { name: 'Cell Culture Media', spend: 789000000, suppliers: 34 },
      { name: 'Chromatography Resins', spend: 567000000, suppliers: 28 },
      { name: 'Filters & Membranes', spend: 345000000, suppliers: 18 },
      { name: 'Bioreactor Consumables', spend: 222000000, suppliers: 14 },
    ],
    topSuppliers: [
      { rank: 1, name: 'Thermo Fisher', spend: 298000000, qualityScore: 99.4, carbonIntensity: 2.8, riskLevel: 'low', sbtiStatus: 'committed', region: 'North America' },
      { rank: 2, name: 'Cytiva', spend: 245000000, qualityScore: 99.1, carbonIntensity: 3.1, riskLevel: 'low', sbtiStatus: 'committed', region: 'Europe' },
      { rank: 3, name: 'Merck KGaA', spend: 212000000, qualityScore: 98.9, carbonIntensity: 3.4, riskLevel: 'low', sbtiStatus: 'committed', region: 'Europe' },
    ],
    regionalDistribution: [
      { region: 'North America', percentage: 48, spend: 923000000, suppliers: 42 },
      { region: 'Europe', percentage: 32, spend: 615000000, suppliers: 28 },
      { region: 'Asia-Pacific', percentage: 20, spend: 385000000, suppliers: 14 },
    ],
    aiAgent: { name: 'BioMind', avatar: '🔬', specialty: 'Biologics Specialist' },
  },
  {
    id: 'devices',
    name: 'Prefilled Syringes & Auto-Injectors',
    shortName: 'Devices',
    type: 'direct',
    spend: 1456000000,
    spendYoYChange: 0.067,
    suppliers: 37,
    suppliersYoYChange: -0.026,
    contracts: 45,
    contractsExpiring: 6,
    savings: 0.052,
    carbonIntensity: 2.1,
    carbonUnit: 'kg CO₂e/unit',
    carbonTotalMT: 156700,
    leadTime: '120-180 days',
    qualityScore: 99.1,
    riskLevel: 'high',
    icon: '💉',
    gradient: 'from-teal-600 to-emerald-500',
    subcategories: [
      { name: 'Glass Prefilled Syringes', spend: 678000000, suppliers: 12 },
      { name: 'Auto-Injector Devices', spend: 534000000, suppliers: 15 },
      { name: 'Safety Devices', spend: 244000000, suppliers: 10 },
    ],
    topSuppliers: [
      { rank: 1, name: 'Schott AG', spend: 234000000, qualityScore: 99.6, carbonIntensity: 1.8, riskLevel: 'low', sbtiStatus: 'committed', region: 'Europe' },
      { rank: 2, name: 'Gerresheimer', spend: 198000000, qualityScore: 99.3, carbonIntensity: 2.1, riskLevel: 'low', sbtiStatus: 'committed', region: 'Europe' },
      { rank: 3, name: 'West Pharma', spend: 178000000, qualityScore: 99.1, carbonIntensity: 2.4, riskLevel: 'medium', sbtiStatus: 'in-progress', region: 'North America' },
    ],
    regionalDistribution: [
      { region: 'Europe', percentage: 58, spend: 845000000, suppliers: 18 },
      { region: 'Asia-Pacific', percentage: 28, spend: 408000000, suppliers: 12 },
      { region: 'North America', percentage: 14, spend: 203000000, suppliers: 7 },
    ],
    aiAgent: { name: 'DevicePro', avatar: '⚙️', specialty: 'Device Innovation' },
  },
  {
    id: 'packaging',
    name: 'Primary & Secondary Packaging',
    shortName: 'Packaging',
    type: 'direct',
    spend: 892000000,
    spendYoYChange: 0.021,
    suppliers: 156,
    suppliersYoYChange: 0.038,
    contracts: 234,
    contractsExpiring: 28,
    savings: 0.115,
    carbonIntensity: 0.8,
    carbonUnit: 'kg CO₂e/kg',
    carbonTotalMT: 312400,
    leadTime: '45-90 days',
    qualityScore: 98.4,
    riskLevel: 'low',
    icon: '📦',
    gradient: 'from-amber-600 to-orange-500',
    subcategories: [
      { name: 'Cartons & Folding Boxes', spend: 345000000, suppliers: 67 },
      { name: 'Labels & Patient Info', spend: 234000000, suppliers: 45 },
      { name: 'Blister Packs', spend: 167000000, suppliers: 23 },
      { name: 'Vials & Bottles', spend: 146000000, suppliers: 21 },
    ],
    topSuppliers: [
      { rank: 1, name: 'Amcor', spend: 134000000, qualityScore: 98.7, carbonIntensity: 0.6, riskLevel: 'low', sbtiStatus: 'committed', region: 'Asia-Pacific' },
      { rank: 2, name: 'Berry Global', spend: 98000000, qualityScore: 98.2, carbonIntensity: 0.9, riskLevel: 'low', sbtiStatus: 'committed', region: 'North America' },
      { rank: 3, name: 'Sealed Air', spend: 76000000, qualityScore: 97.9, carbonIntensity: 0.7, riskLevel: 'low', sbtiStatus: 'in-progress', region: 'Europe' },
    ],
    regionalDistribution: [
      { region: 'North America', percentage: 45, spend: 401000000, suppliers: 72 },
      { region: 'Europe', percentage: 35, spend: 312000000, suppliers: 54 },
      { region: 'Asia-Pacific', percentage: 20, spend: 179000000, suppliers: 30 },
    ],
    aiAgent: { name: 'PackSmart', avatar: '📦', specialty: 'Sustainable Packaging' },
  },
  {
    id: 'excipients',
    name: 'Excipients & Formulation',
    shortName: 'Excipients',
    type: 'direct',
    spend: 678000000,
    spendYoYChange: 0.034,
    suppliers: 201,
    suppliersYoYChange: 0.012,
    contracts: 156,
    contractsExpiring: 18,
    savings: 0.087,
    carbonIntensity: 3.2,
    carbonUnit: 'kg CO₂e/kg',
    carbonTotalMT: 98400,
    leadTime: '30-60 days',
    qualityScore: 98.1,
    riskLevel: 'low',
    icon: '⚗️',
    gradient: 'from-indigo-600 to-violet-500',
    subcategories: [
      { name: 'Buffers', spend: 234000000, suppliers: 67 },
      { name: 'Stabilizers', spend: 189000000, suppliers: 52 },
      { name: 'Preservatives', spend: 145000000, suppliers: 48 },
      { name: 'Cryoprotectants', spend: 110000000, suppliers: 34 },
    ],
    topSuppliers: [
      { rank: 1, name: 'BASF', spend: 98000000, qualityScore: 98.9, carbonIntensity: 2.8, riskLevel: 'low', sbtiStatus: 'committed', region: 'Europe' },
      { rank: 2, name: 'Evonik', spend: 76000000, qualityScore: 98.4, carbonIntensity: 3.1, riskLevel: 'low', sbtiStatus: 'committed', region: 'Europe' },
      { rank: 3, name: 'Ashland', spend: 54000000, qualityScore: 97.8, carbonIntensity: 3.5, riskLevel: 'medium', sbtiStatus: 'in-progress', region: 'North America' },
    ],
    regionalDistribution: [
      { region: 'North America', percentage: 42, spend: 285000000, suppliers: 86 },
      { region: 'Europe', percentage: 38, spend: 258000000, suppliers: 78 },
      { region: 'Asia-Pacific', percentage: 20, spend: 135000000, suppliers: 37 },
    ],
    aiAgent: { name: 'FormulAI', avatar: '🧫', specialty: 'Formulation Expert' },
  },
  {
    id: 'clinical',
    name: 'Clinical Trial Supplies',
    shortName: 'Clinical',
    type: 'direct',
    spend: 534000000,
    spendYoYChange: 0.089,
    suppliers: 92,
    suppliersYoYChange: 0.065,
    contracts: 78,
    contractsExpiring: 12,
    savings: 0.045,
    carbonIntensity: 4.5,
    carbonUnit: 'kg CO₂e/kg',
    carbonTotalMT: 45600,
    leadTime: '45-90 days',
    qualityScore: 97.8,
    riskLevel: 'medium',
    icon: '🏥',
    gradient: 'from-rose-600 to-red-500',
    subcategories: [
      { name: 'Comparator Sourcing', spend: 182000000, suppliers: 34 },
      { name: 'IMP Packaging', spend: 178000000, suppliers: 28 },
      { name: 'Clinical Logistics', spend: 174000000, suppliers: 30 },
    ],
    topSuppliers: [
      { rank: 1, name: 'Almac Group', spend: 89000000, qualityScore: 98.4, carbonIntensity: 4.1, riskLevel: 'low', sbtiStatus: 'committed', region: 'Europe' },
      { rank: 2, name: 'Catalent', spend: 76000000, qualityScore: 98.1, carbonIntensity: 4.6, riskLevel: 'medium', sbtiStatus: 'in-progress', region: 'North America' },
      { rank: 3, name: 'PCI Pharma', spend: 54000000, qualityScore: 97.6, carbonIntensity: 4.8, riskLevel: 'medium', sbtiStatus: 'not-yet', region: 'North America' },
    ],
    regionalDistribution: [
      { region: 'North America', percentage: 45, spend: 240000000, suppliers: 42 },
      { region: 'Europe', percentage: 38, spend: 203000000, suppliers: 35 },
      { region: 'Asia-Pacific', percentage: 17, spend: 91000000, suppliers: 15 },
    ],
    aiAgent: { name: 'TrialMind', avatar: '📋', specialty: 'Clinical Operations' },
  },
  {
    id: 'coldchain',
    name: 'Cold Chain & Logistics',
    shortName: 'Logistics',
    type: 'direct',
    spend: 423000000,
    spendYoYChange: 0.056,
    suppliers: 67,
    suppliersYoYChange: -0.029,
    contracts: 89,
    contractsExpiring: 14,
    savings: 0.078,
    carbonIntensity: 11.4,
    carbonUnit: 'kg CO₂e/km',
    carbonTotalMT: 267100,
    leadTime: 'Real-time',
    qualityScore: 99.4,
    riskLevel: 'medium',
    icon: '🚚',
    gradient: 'from-sky-600 to-blue-500',
    subcategories: [
      { name: 'Air Freight (Temp-Controlled)', spend: 234000000, suppliers: 28 },
      { name: 'Ground Transport', spend: 123000000, suppliers: 24 },
      { name: 'Warehouse Services', spend: 66000000, suppliers: 15 },
    ],
    topSuppliers: [
      { rank: 1, name: 'World Courier', spend: 78000000, qualityScore: 99.6, carbonIntensity: 9.8, riskLevel: 'low', sbtiStatus: 'committed', region: 'Global' },
      { rank: 2, name: 'Marken', spend: 67000000, qualityScore: 99.3, carbonIntensity: 10.4, riskLevel: 'low', sbtiStatus: 'committed', region: 'Global' },
      { rank: 3, name: 'Ceva Logistics', spend: 45000000, qualityScore: 98.9, carbonIntensity: 12.1, riskLevel: 'medium', sbtiStatus: 'in-progress', region: 'Global' },
    ],
    regionalDistribution: [
      { region: 'Global', percentage: 65, spend: 275000000, suppliers: 38 },
      { region: 'North America', percentage: 20, spend: 85000000, suppliers: 18 },
      { region: 'Europe', percentage: 15, spend: 63000000, suppliers: 11 },
    ],
    aiAgent: { name: 'ChainGuard', avatar: '❄️', specialty: 'Cold Chain Expert' },
  },
  {
    id: 'labsupplies',
    name: 'Laboratory Reagents & Consumables',
    shortName: 'Lab Supplies',
    type: 'direct',
    spend: 387000000,
    spendYoYChange: 0.028,
    suppliers: 289,
    suppliersYoYChange: 0.045,
    contracts: 156,
    contractsExpiring: 22,
    savings: 0.134,
    carbonIntensity: 2.1,
    carbonUnit: 'kg CO₂e/kg',
    carbonTotalMT: 34800,
    leadTime: '15-30 days',
    qualityScore: 97.6,
    riskLevel: 'low',
    icon: '🔬',
    gradient: 'from-emerald-600 to-green-500',
    subcategories: [
      { name: 'Reagents & Chemicals', spend: 156000000, suppliers: 98 },
      { name: 'Consumables', spend: 134000000, suppliers: 112 },
      { name: 'Lab Equipment', spend: 97000000, suppliers: 79 },
    ],
    topSuppliers: [
      { rank: 1, name: 'Fisher Scientific', spend: 67000000, qualityScore: 98.2, carbonIntensity: 1.8, riskLevel: 'low', sbtiStatus: 'committed', region: 'North America' },
      { rank: 2, name: 'Sigma-Aldrich', spend: 54000000, qualityScore: 98.0, carbonIntensity: 2.1, riskLevel: 'low', sbtiStatus: 'committed', region: 'Global' },
      { rank: 3, name: 'VWR', spend: 43000000, qualityScore: 97.4, carbonIntensity: 2.3, riskLevel: 'low', sbtiStatus: 'in-progress', region: 'North America' },
    ],
    regionalDistribution: [
      { region: 'North America', percentage: 52, spend: 201000000, suppliers: 156 },
      { region: 'Europe', percentage: 32, spend: 124000000, suppliers: 89 },
      { region: 'Asia-Pacific', percentage: 16, spend: 62000000, suppliers: 44 },
    ],
    aiAgent: { name: 'LabGenius', avatar: '🧪', specialty: 'Lab Procurement' },
  },
];

// Indirect Categories
export const indirectCategories: Category[] = [
  {
    id: 'facilities',
    name: 'Facilities & Engineering Services',
    shortName: 'Facilities',
    type: 'indirect',
    spend: 892000000,
    spendYoYChange: 0.034,
    suppliers: 178,
    suppliersYoYChange: -0.018,
    contracts: 234,
    contractsExpiring: 32,
    savings: 0.098,
    carbonIntensity: 0.34,
    carbonUnit: 'kg CO₂e/kWh',
    carbonTotalMT: 189300,
    leadTime: 'Ongoing',
    qualityScore: 96.8,
    riskLevel: 'low',
    icon: '🏢',
    gradient: 'from-slate-600 to-gray-500',
    subcategories: [
      { name: 'HVAC & Cleanroom', spend: 345000000, suppliers: 56 },
      { name: 'Utilities', spend: 267000000, suppliers: 34 },
      { name: 'Building Services', spend: 189000000, suppliers: 58 },
      { name: 'Capital Projects', spend: 91000000, suppliers: 30 },
    ],
    topSuppliers: [
      { rank: 1, name: 'CBRE Group', spend: 89000000, qualityScore: 97.4, carbonIntensity: 0.28, riskLevel: 'low', sbtiStatus: 'committed', region: 'Global' },
      { rank: 2, name: 'JLL', spend: 76000000, qualityScore: 97.1, carbonIntensity: 0.31, riskLevel: 'low', sbtiStatus: 'committed', region: 'Global' },
      { rank: 3, name: 'Cushman & Wakefield', spend: 54000000, qualityScore: 96.8, carbonIntensity: 0.36, riskLevel: 'low', sbtiStatus: 'in-progress', region: 'North America' },
    ],
    regionalDistribution: [
      { region: 'North America', percentage: 58, spend: 517000000, suppliers: 102 },
      { region: 'Europe', percentage: 28, spend: 250000000, suppliers: 52 },
      { region: 'Asia-Pacific', percentage: 14, spend: 125000000, suppliers: 24 },
    ],
    aiAgent: { name: 'FacilityIQ', avatar: '🏗️', specialty: 'Facilities Management' },
  },
  {
    id: 'it',
    name: 'IT & Digital Services',
    shortName: 'IT Services',
    type: 'indirect',
    spend: 567000000,
    spendYoYChange: 0.112,
    suppliers: 234,
    suppliersYoYChange: 0.078,
    contracts: 189,
    contractsExpiring: 24,
    savings: 0.065,
    carbonIntensity: 1.8,
    carbonUnit: 'kg CO₂e/$',
    carbonTotalMT: 67200,
    leadTime: 'Variable',
    qualityScore: 97.2,
    riskLevel: 'medium',
    icon: '💻',
    gradient: 'from-cyan-600 to-teal-500',
    subcategories: [
      { name: 'Software Licenses', spend: 234000000, suppliers: 89 },
      { name: 'Cloud Services', spend: 189000000, suppliers: 45 },
      { name: 'Managed Services', spend: 144000000, suppliers: 100 },
    ],
    topSuppliers: [
      { rank: 1, name: 'Microsoft', spend: 89000000, qualityScore: 98.6, carbonIntensity: 1.2, riskLevel: 'low', sbtiStatus: 'committed', region: 'Global' },
      { rank: 2, name: 'Amazon AWS', spend: 67000000, qualityScore: 98.2, carbonIntensity: 1.5, riskLevel: 'low', sbtiStatus: 'committed', region: 'Global' },
      { rank: 3, name: 'SAP', spend: 54000000, qualityScore: 97.8, carbonIntensity: 1.8, riskLevel: 'low', sbtiStatus: 'committed', region: 'Europe' },
    ],
    regionalDistribution: [
      { region: 'North America', percentage: 62, spend: 352000000, suppliers: 145 },
      { region: 'Europe', percentage: 24, spend: 136000000, suppliers: 56 },
      { region: 'Asia-Pacific', percentage: 14, spend: 79000000, suppliers: 33 },
    ],
    aiAgent: { name: 'TechMind', avatar: '🤖', specialty: 'Digital Transformation' },
  },
  {
    id: 'professional',
    name: 'Professional Services',
    shortName: 'Prof. Services',
    type: 'indirect',
    spend: 445000000,
    spendYoYChange: 0.045,
    suppliers: 412,
    suppliersYoYChange: 0.034,
    contracts: 267,
    contractsExpiring: 45,
    savings: 0.082,
    carbonIntensity: 0.9,
    carbonUnit: 'kg CO₂e/$',
    carbonTotalMT: 23400,
    leadTime: 'Project-based',
    qualityScore: 96.4,
    riskLevel: 'low',
    icon: '👔',
    gradient: 'from-violet-600 to-purple-500',
    subcategories: [
      { name: 'Consulting', spend: 189000000, suppliers: 156 },
      { name: 'Legal Services', spend: 123000000, suppliers: 98 },
      { name: 'Regulatory Affairs', spend: 133000000, suppliers: 158 },
    ],
    topSuppliers: [
      { rank: 1, name: 'McKinsey', spend: 45000000, qualityScore: 97.8, carbonIntensity: 0.7, riskLevel: 'low', sbtiStatus: 'committed', region: 'Global' },
      { rank: 2, name: 'Deloitte', spend: 38000000, qualityScore: 97.4, carbonIntensity: 0.8, riskLevel: 'low', sbtiStatus: 'committed', region: 'Global' },
      { rank: 3, name: 'Boston Consulting', spend: 32000000, qualityScore: 97.1, carbonIntensity: 0.9, riskLevel: 'low', sbtiStatus: 'committed', region: 'Global' },
    ],
    regionalDistribution: [
      { region: 'North America', percentage: 55, spend: 245000000, suppliers: 228 },
      { region: 'Europe', percentage: 32, spend: 142000000, suppliers: 132 },
      { region: 'Asia-Pacific', percentage: 13, spend: 58000000, suppliers: 52 },
    ],
    aiAgent: { name: 'AdvisorAI', avatar: '💼', specialty: 'Strategic Consulting' },
  },
  {
    id: 'marketing',
    name: 'Marketing & Commercial Operations',
    shortName: 'Marketing',
    type: 'indirect',
    spend: 398000000,
    spendYoYChange: 0.023,
    suppliers: 523,
    suppliersYoYChange: 0.056,
    contracts: 345,
    contractsExpiring: 56,
    savings: 0.094,
    carbonIntensity: 0.5,
    carbonUnit: 'kg CO₂e/$',
    carbonTotalMT: 12100,
    leadTime: 'Campaign-based',
    qualityScore: 95.8,
    riskLevel: 'low',
    icon: '📢',
    gradient: 'from-pink-600 to-rose-500',
    subcategories: [
      { name: 'Advertising & Media', spend: 178000000, suppliers: 234 },
      { name: 'Market Research', spend: 112000000, suppliers: 167 },
      { name: 'Medical Education', spend: 108000000, suppliers: 122 },
    ],
    topSuppliers: [
      { rank: 1, name: 'Publicis Health', spend: 34000000, qualityScore: 96.8, carbonIntensity: 0.4, riskLevel: 'low', sbtiStatus: 'committed', region: 'Global' },
      { rank: 2, name: 'Havas Health', spend: 28000000, qualityScore: 96.2, carbonIntensity: 0.5, riskLevel: 'low', sbtiStatus: 'in-progress', region: 'Global' },
      { rank: 3, name: 'IQVIA', spend: 24000000, qualityScore: 95.8, carbonIntensity: 0.6, riskLevel: 'low', sbtiStatus: 'committed', region: 'Global' },
    ],
    regionalDistribution: [
      { region: 'North America', percentage: 65, spend: 259000000, suppliers: 342 },
      { region: 'Europe', percentage: 25, spend: 99000000, suppliers: 131 },
      { region: 'Asia-Pacific', percentage: 10, spend: 40000000, suppliers: 50 },
    ],
    aiAgent: { name: 'BrandAI', avatar: '🎯', specialty: 'Marketing Excellence' },
  },
];

// Sustainability Categories with detailed emissions data
export const sustainabilityCategories: SustainabilityCategory[] = [
  { id: 'apis', name: 'APIs', emissionsMT: 438200, percentOfTotal: 24, intensity: 8.7, intensityUnit: 'kg/kg', trend: -0.18, scope1MT: 96400, scope2MT: 105200, scope3MT: 236600, waterFootprint: 550500, renewableEnergy: 18, sbtiSuppliers: 58 },
  { id: 'packaging', name: 'Packaging', emissionsMT: 312400, percentOfTotal: 17, intensity: 6.2, intensityUnit: 'kg/kg', trend: -0.23, scope1MT: 45000, scope2MT: 89000, scope3MT: 178400, renewableEnergy: 45, sbtiSuppliers: 72 },
  { id: 'coldchain', name: 'Cold Chain & Logistics', emissionsMT: 267100, percentOfTotal: 14, intensity: 11.4, intensityUnit: 'kg/km', trend: -0.12, scope1MT: 156000, scope2MT: 45000, scope3MT: 66100, renewableEnergy: 12, sbtiSuppliers: 45 },
  { id: 'biologics', name: 'Biologics', emissionsMT: 223800, percentOfTotal: 12, intensity: 4.1, intensityUnit: 'kg/kg', trend: -0.09, scope1MT: 34000, scope2MT: 89000, scope3MT: 100800, waterFootprint: 234000, renewableEnergy: 58, sbtiSuppliers: 72 },
  { id: 'facilities', name: 'Facilities & Energy', emissionsMT: 189300, percentOfTotal: 10, intensity: 0.34, intensityUnit: 'kg/kWh', trend: -0.28, scope1MT: 67000, scope2MT: 98000, scope3MT: 24300, renewableEnergy: 62, sbtiSuppliers: 68 },
  { id: 'devices', name: 'Prefilled Syringes', emissionsMT: 156700, percentOfTotal: 8, intensity: 2.8, intensityUnit: 'kg/unit', trend: -0.06, scope1MT: 23000, scope2MT: 56000, scope3MT: 77700, renewableEnergy: 34, sbtiSuppliers: 52 },
  { id: 'excipients', name: 'Excipients', emissionsMT: 98400, percentOfTotal: 5, intensity: 3.2, intensityUnit: 'kg/kg', trend: -0.14, scope1MT: 18000, scope2MT: 34000, scope3MT: 46400, renewableEnergy: 42, sbtiSuppliers: 63 },
  { id: 'it', name: 'IT & Digital', emissionsMT: 67200, percentOfTotal: 4, intensity: 1.8, intensityUnit: 'kg/$', trend: 0, scope1MT: 2000, scope2MT: 45000, scope3MT: 20200, renewableEnergy: 78, sbtiSuppliers: 85 },
  { id: 'clinical', name: 'Clinical Supplies', emissionsMT: 45600, percentOfTotal: 2, intensity: 4.5, intensityUnit: 'kg/kg', trend: 0.03, scope1MT: 8000, scope2MT: 18000, scope3MT: 19600, renewableEnergy: 28, sbtiSuppliers: 48 },
  { id: 'labsupplies', name: 'Lab Consumables', emissionsMT: 34800, percentOfTotal: 2, intensity: 2.1, intensityUnit: 'kg/kg', trend: -0.08, scope1MT: 5000, scope2MT: 14000, scope3MT: 15800, renewableEnergy: 52, sbtiSuppliers: 56 },
  { id: 'professional', name: 'Professional Services', emissionsMT: 23400, percentOfTotal: 1, intensity: 0.9, intensityUnit: 'kg/$', trend: -0.05, scope1MT: 1200, scope2MT: 8000, scope3MT: 14200, renewableEnergy: 65, sbtiSuppliers: 72 },
  { id: 'marketing', name: 'Marketing', emissionsMT: 12100, percentOfTotal: 1, intensity: 0.5, intensityUnit: 'kg/$', trend: -0.11, scope1MT: 800, scope2MT: 4500, scope3MT: 6800, renewableEnergy: 58, sbtiSuppliers: 62 },
];

// Helper functions
export const formatCurrency = (value: number, compact = false): string => {
  if (compact) {
    if (value >= 1000000000) return `$${(value / 1000000000).toFixed(1)}B`;
    if (value >= 1000000) return `$${(value / 1000000).toFixed(0)}M`;
    if (value >= 1000) return `$${(value / 1000).toFixed(0)}K`;
    return `$${value}`;
  }
  return new Intl.NumberFormat('en-US', { style: 'currency', currency: 'USD', maximumFractionDigits: 0 }).format(value);
};

export const formatNumber = (value: number, compact = false): string => {
  if (compact) {
    if (value >= 1000000) return `${(value / 1000000).toFixed(1)}M`;
    if (value >= 1000) return `${(value / 1000).toFixed(1)}K`;
    return value.toString();
  }
  return new Intl.NumberFormat('en-US').format(value);
};

export const formatPercent = (value: number, showSign = false): string => {
  const sign = showSign && value > 0 ? '+' : '';
  return `${sign}${(value * 100).toFixed(1)}%`;
};

export const getRiskColor = (risk: 'low' | 'medium' | 'high'): string => {
  switch (risk) {
    case 'low': return 'text-success bg-success/10';
    case 'medium': return 'text-warning bg-warning/10';
    case 'high': return 'text-destructive bg-destructive/10';
  }
};

export const getTrendColor = (trend: number): string => {
  if (trend < 0) return 'text-success';
  if (trend > 0) return 'text-destructive';
  return 'text-muted-foreground';
};

export const getSbtiIcon = (status: 'committed' | 'in-progress' | 'not-yet'): string => {
  switch (status) {
    case 'committed': return '✅';
    case 'in-progress': return '⏳';
    case 'not-yet': return '❌';
  }
};
