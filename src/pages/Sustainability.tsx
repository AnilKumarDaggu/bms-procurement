import { useState } from 'react';
import { motion } from 'framer-motion';
import { useNavigate } from 'react-router-dom';
import { Header } from '@/components/Header';
import { Footer } from '@/components/Footer';
import { Breadcrumb } from '@/components/shared/Breadcrumb';
import { ProgressBar } from '@/components/shared/ProgressBar';
import { sustainabilityMetrics, sustainabilityCategories, formatNumber, formatPercent } from '@/data/mockData';
import { Leaf, Users, DollarSign, TreePine, TrendingDown, TrendingUp, ArrowRight, Bot, CheckCircle, AlertTriangle, Target, Zap } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { cn } from '@/lib/utils';
import { Treemap, ResponsiveContainer, Tooltip, BarChart, Bar, XAxis, YAxis, CartesianGrid, PieChart, Pie, Cell, LineChart, Line, Legend, AreaChart, Area } from 'recharts';

const COLORS = {
  excellent: '#059669',
  good: '#10B981',
  average: '#F59E0B',
  below: '#F97316',
  poor: '#EF4444',
};

const SustainabilityPage = () => {
  const navigate = useNavigate();
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null);

  // Treemap data
  const treemapData = sustainabilityCategories.map(cat => ({
    name: cat.name,
    size: cat.emissionsMT,
    intensity: cat.intensity,
    trend: cat.trend,
    color: cat.trend < -0.15 ? COLORS.excellent : 
           cat.trend < -0.05 ? COLORS.good : 
           cat.trend < 0.02 ? COLORS.average : COLORS.poor,
  }));

  // Scope breakdown data
  const scopeData = [
    { name: 'Scope 1', value: sustainabilityCategories.reduce((sum, c) => sum + c.scope1MT, 0), fill: '#0077C8' },
    { name: 'Scope 2', value: sustainabilityCategories.reduce((sum, c) => sum + c.scope2MT, 0), fill: '#4A90E2' },
    { name: 'Scope 3', value: sustainabilityCategories.reduce((sum, c) => sum + c.scope3MT, 0), fill: '#005EB8' },
  ];

  // Decarbonization pathway data
  const pathwayData = [
    { year: '2019', baseline: 2400000, actual: 2400000, target: 2400000 },
    { year: '2020', baseline: 2400000, actual: 2280000, target: 2280000 },
    { year: '2021', baseline: 2400000, actual: 2150000, target: 2160000 },
    { year: '2022', baseline: 2400000, actual: 2020000, target: 2040000 },
    { year: '2023', baseline: 2400000, actual: 1920000, target: 1920000 },
    { year: '2024', baseline: 2400000, actual: 1850000, target: 1800000 },
    { year: '2025', baseline: 2400000, actual: null, target: 1680000 },
    { year: '2026', baseline: 2400000, actual: null, target: 1560000 },
    { year: '2027', baseline: 2400000, actual: null, target: 1440000 },
    { year: '2028', baseline: 2400000, actual: null, target: 1320000 },
    { year: '2029', baseline: 2400000, actual: null, target: 1200000 },
    { year: '2030', baseline: 2400000, actual: null, target: 940000 },
  ];

  const handleCategoryClick = (catId: string) => {
    navigate(`/sustainability/${catId}`);
  };

  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      {/* Hero Section */}
      <section className="relative pt-24 pb-16 bg-gradient-to-br from-forest via-success to-ocean overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute inset-0" style={{ 
            backgroundImage: 'url("data:image/svg+xml,%3Csvg width=\'60\' height=\'60\' viewBox=\'0 0 60 60\' xmlns=\'http://www.w3.org/2000/svg\'%3E%3Cg fill=\'none\' fill-rule=\'evenodd\'%3E%3Cg fill=\'%23ffffff\' fill-opacity=\'0.4\'%3E%3Cpath d=\'M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z\'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")',
          }} />
        </div>
        
        <div className="container mx-auto px-4 md:px-8 relative z-10">
          <Breadcrumb 
            items={[{ label: 'Sustainability' }]} 
            className="mb-6 text-white/80 [&_a]:text-white/80 [&_a:hover]:text-white [&_svg]:text-white/50"
          />
          
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="max-w-4xl"
          >
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">
              Supply Chain Sustainability Intelligence
            </h1>
            <p className="text-xl text-white/90 mb-6">
              Managing {formatNumber(sustainabilityMetrics.totalScope3MT / 1000000, true)}M MT CO₂e across Scope 3 with science-based decarbonization pathways
            </p>

            {/* Status Banner */}
            <div className="bg-white/10 backdrop-blur-sm rounded-xl p-4 inline-flex items-center gap-6 text-white">
              <div className="flex items-center gap-2">
                <CheckCircle className="w-5 h-5 text-green-300" />
                <span><strong>SBTi Status:</strong> Validated</span>
              </div>
              <div className="h-6 w-px bg-white/30" />
              <div className="flex items-center gap-2">
                <Target className="w-5 h-5" />
                <span><strong>Target:</strong> 50% reduction by 2030</span>
              </div>
              <div className="h-6 w-px bg-white/30" />
              <div className="flex items-center gap-2">
                <Zap className="w-5 h-5" />
                <span><strong>Net Zero:</strong> 2045</span>
              </div>
            </div>
          </motion.div>

          {/* Executive KPI Cards */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mt-10"
          >
            {/* Total Scope 3 */}
            <div className="bg-white rounded-2xl p-6 shadow-lg">
              <div className="flex items-center gap-2 text-muted-foreground mb-3">
                <Leaf className="w-5 h-5 text-forest" />
                <span className="text-sm font-medium">Total Scope 3 Emissions</span>
              </div>
              <div className="text-3xl font-bold font-mono text-foreground mb-2">
                {(sustainabilityMetrics.totalScope3MT / 1000000).toFixed(2)}M MT
              </div>
              <div className="flex items-center gap-2 text-success text-sm mb-4">
                <TrendingDown className="w-4 h-4" />
                {formatPercent(Math.abs(sustainabilityMetrics.yoyReduction))} vs last year
              </div>
              <div className="space-y-2">
                <div className="flex justify-between text-sm">
                  <span className="text-muted-foreground">Progress to 2030</span>
                  <span className="font-medium">{sustainabilityMetrics.progressPercent}%</span>
                </div>
                <ProgressBar value={sustainabilityMetrics.progressPercent} max={100} variant="success" size="md" showValue={false} />
                <div className="text-xs text-muted-foreground">
                  Target: {formatNumber(sustainabilityMetrics.target2030MT)} MT
                </div>
              </div>
            </div>

            {/* Supplier Engagement */}
            <div className="bg-white rounded-2xl p-6 shadow-lg">
              <div className="flex items-center gap-2 text-muted-foreground mb-3">
                <Users className="w-5 h-5 text-primary" />
                <span className="text-sm font-medium">Supplier SBTi Commitments</span>
              </div>
              <div className="text-3xl font-bold font-mono text-foreground mb-2">
                {sustainabilityMetrics.sbtiSuppliers}%
              </div>
              <div className="flex items-center gap-2 text-success text-sm mb-4">
                <TrendingUp className="w-4 h-4" />
                +12% vs last year
              </div>
              <div className="space-y-2">
                <div className="flex justify-between text-sm">
                  <span className="text-muted-foreground">Target: {sustainabilityMetrics.sbtiTarget}% by 2027</span>
                </div>
                <ProgressBar value={sustainabilityMetrics.sbtiSuppliers} max={sustainabilityMetrics.sbtiTarget} variant="warning" size="md" showValue={false} />
                <div className="text-xs text-warning font-medium">
                  ⚠️ Attention needed
                </div>
              </div>
            </div>

            {/* Sustainable Spend */}
            <div className="bg-white rounded-2xl p-6 shadow-lg">
              <div className="flex items-center gap-2 text-muted-foreground mb-3">
                <DollarSign className="w-5 h-5 text-success" />
                <span className="text-sm font-medium">Certified Sustainable Spend</span>
              </div>
              <div className="text-3xl font-bold font-mono text-foreground mb-2">
                ${(sustainabilityMetrics.sustainableSpend / 1000000000).toFixed(1)}B
              </div>
              <div className="text-sm text-muted-foreground mb-4">
                {sustainabilityMetrics.sustainablePercent}% of addressable spend
              </div>
              <div className="space-y-2">
                <div className="flex justify-between text-sm">
                  <span className="text-muted-foreground">Target: 75% by 2028</span>
                </div>
                <ProgressBar value={sustainabilityMetrics.sustainablePercent} max={75} variant="success" size="md" showValue={false} />
                <div className="text-xs text-success font-medium">
                  ✓ Exceeds target
                </div>
              </div>
            </div>

            {/* Deforestation-Free */}
            <div className="bg-white rounded-2xl p-6 shadow-lg">
              <div className="flex items-center gap-2 text-muted-foreground mb-3">
                <TreePine className="w-5 h-5 text-forest" />
                <span className="text-sm font-medium">Deforestation-Free</span>
              </div>
              <div className="text-3xl font-bold font-mono text-foreground mb-2">
                {sustainabilityMetrics.deforestationFree}%
              </div>
              <div className="flex items-center gap-2 text-success text-sm mb-4">
                <TrendingUp className="w-4 h-4" />
                +6% vs last year
              </div>
              <div className="space-y-2">
                <div className="text-xs text-muted-foreground mb-2">High-Risk Commodities</div>
                <div className="space-y-1">
                  <div className="flex items-center justify-between text-xs">
                    <span>Palm oil</span>
                    <span className="font-medium">98%</span>
                  </div>
                  <div className="flex items-center justify-between text-xs">
                    <span>Paper</span>
                    <span className="font-medium text-success">100%</span>
                  </div>
                  <div className="flex items-center justify-between text-xs">
                    <span>Soy</span>
                    <span className="font-medium text-warning">87%</span>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Content */}
      <section className="py-12">
        <div className="container mx-auto px-4 md:px-8">
          <Tabs defaultValue="overview" className="space-y-8">
            <TabsList className="w-full justify-start overflow-x-auto">
              <TabsTrigger value="overview">Overview</TabsTrigger>
              <TabsTrigger value="categories">By Category</TabsTrigger>
              <TabsTrigger value="pathway">Decarbonization Pathway</TabsTrigger>
              <TabsTrigger value="suppliers">Supplier Performance</TabsTrigger>
              <TabsTrigger value="insights">AI Insights</TabsTrigger>
            </TabsList>

            <TabsContent value="overview" className="space-y-8">
              {/* Emissions Bar Chart */}
              <div className="bg-card rounded-2xl border border-border p-6">
                <h3 className="text-xl font-semibold mb-4">Scope 3 Emissions by Category</h3>
                <p className="text-muted-foreground mb-6">Emissions volume (MT CO₂e) colored by trend performance</p>
                <ResponsiveContainer width="100%" height={400}>
                  <BarChart data={treemapData} layout="vertical">
                    <CartesianGrid strokeDasharray="3 3" stroke="hsl(var(--border))" />
                    <XAxis type="number" tick={{ fontSize: 12 }} tickFormatter={(v) => `${(v / 1000).toFixed(0)}K`} />
                    <YAxis type="category" dataKey="name" tick={{ fontSize: 11 }} width={100} />
                    <Tooltip 
                      formatter={(value: number) => [`${formatNumber(value)} MT CO₂e`, 'Emissions']}
                      contentStyle={{ backgroundColor: 'hsl(var(--card))', border: '1px solid hsl(var(--border))' }}
                    />
                    <Bar dataKey="size" radius={[0, 4, 4, 0]}>
                      {treemapData.map((entry, index) => (
                        <Cell key={`cell-${index}`} fill={entry.color} />
                      ))}
                    </Bar>
                  </BarChart>
                </ResponsiveContainer>
                <div className="flex flex-wrap items-center justify-center gap-6 mt-4 text-sm">
                  <div className="flex items-center gap-2">
                    <div className="w-4 h-4 rounded" style={{ backgroundColor: COLORS.excellent }} />
                    <span>Excellent (&gt;15% ↓)</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <div className="w-4 h-4 rounded" style={{ backgroundColor: COLORS.good }} />
                    <span>Good (5-15% ↓)</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <div className="w-4 h-4 rounded" style={{ backgroundColor: COLORS.average }} />
                    <span>Average (0-5% ↓)</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <div className="w-4 h-4 rounded" style={{ backgroundColor: COLORS.poor }} />
                    <span>Needs Attention (↑)</span>
                  </div>
                </div>
              </div>

              {/* Scope Breakdown & Pathway */}
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                <div className="bg-card rounded-2xl border border-border p-6">
                  <h3 className="text-xl font-semibold mb-4">GHG Protocol Scopes</h3>
                  <ResponsiveContainer width="100%" height={300}>
                    <PieChart>
                      <Pie
                        data={scopeData}
                        cx="50%"
                        cy="50%"
                        innerRadius={60}
                        outerRadius={100}
                        paddingAngle={2}
                        dataKey="value"
                        label={({ name, percent }) => `${name} ${(percent * 100).toFixed(0)}%`}
                      >
                        {scopeData.map((entry, index) => (
                          <Cell key={`cell-${index}`} fill={entry.fill} />
                        ))}
                      </Pie>
                      <Tooltip formatter={(value: number) => `${formatNumber(value)} MT CO₂e`} />
                    </PieChart>
                  </ResponsiveContainer>
                </div>

                <div className="bg-card rounded-2xl border border-border p-6">
                  <h3 className="text-xl font-semibold mb-4">Decarbonization Progress</h3>
                  <ResponsiveContainer width="100%" height={300}>
                    <AreaChart data={pathwayData}>
                      <CartesianGrid strokeDasharray="3 3" stroke="hsl(var(--border))" />
                      <XAxis dataKey="year" tick={{ fontSize: 12 }} />
                      <YAxis tick={{ fontSize: 12 }} tickFormatter={(v) => `${(v / 1000000).toFixed(1)}M`} />
                      <Tooltip formatter={(value: number) => value ? `${formatNumber(value)} MT` : 'N/A'} />
                      <Area type="monotone" dataKey="baseline" stroke="#E5E7EB" fill="#F3F4F6" strokeDasharray="3 3" />
                      <Area type="monotone" dataKey="target" stroke="#10B981" fill="#10B98120" strokeWidth={2} />
                      <Area type="monotone" dataKey="actual" stroke="#005EB8" fill="#005EB820" strokeWidth={3} />
                      <Legend />
                    </AreaChart>
                  </ResponsiveContainer>
                </div>
              </div>
            </TabsContent>

            <TabsContent value="categories" className="space-y-6">
              <div className="bg-card rounded-2xl border border-border overflow-hidden">
                <div className="overflow-x-auto">
                  <table className="w-full">
                    <thead className="bg-secondary">
                      <tr>
                        <th className="px-4 py-3 text-left text-sm font-medium text-muted-foreground">Rank</th>
                        <th className="px-4 py-3 text-left text-sm font-medium text-muted-foreground">Category</th>
                        <th className="px-4 py-3 text-right text-sm font-medium text-muted-foreground">Emissions (MT)</th>
                        <th className="px-4 py-3 text-center text-sm font-medium text-muted-foreground">% of Total</th>
                        <th className="px-4 py-3 text-center text-sm font-medium text-muted-foreground">Intensity</th>
                        <th className="px-4 py-3 text-center text-sm font-medium text-muted-foreground">Trend</th>
                        <th className="px-4 py-3 text-center text-sm font-medium text-muted-foreground">SBTi Suppliers</th>
                        <th className="px-4 py-3 text-center text-sm font-medium text-muted-foreground">Actions</th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-border">
                      {sustainabilityCategories.map((cat, index) => (
                        <tr 
                          key={cat.id} 
                          className="hover:bg-secondary/50 transition-colors cursor-pointer"
                          onClick={() => handleCategoryClick(cat.id)}
                        >
                          <td className="px-4 py-4 font-medium">{index + 1}</td>
                          <td className="px-4 py-4">
                            <span className="font-medium">{cat.name}</span>
                          </td>
                          <td className="px-4 py-4 text-right font-mono">{formatNumber(cat.emissionsMT)}</td>
                          <td className="px-4 py-4 text-center">
                            <span className="px-2 py-1 rounded bg-primary/10 text-primary text-sm font-medium">
                              {cat.percentOfTotal}%
                            </span>
                          </td>
                          <td className="px-4 py-4 text-center font-mono text-sm">
                            {cat.intensity} {cat.intensityUnit}
                          </td>
                          <td className="px-4 py-4 text-center">
                            <span className={cn(
                              'inline-flex items-center gap-1 text-sm font-medium',
                              cat.trend < 0 ? 'text-success' : cat.trend > 0 ? 'text-destructive' : 'text-muted-foreground'
                            )}>
                              {cat.trend < 0 ? <TrendingDown className="w-4 h-4" /> : 
                               cat.trend > 0 ? <TrendingUp className="w-4 h-4" /> : '→'}
                              {formatPercent(Math.abs(cat.trend))}
                            </span>
                          </td>
                          <td className="px-4 py-4 text-center font-mono">{cat.sbtiSuppliers}%</td>
                          <td className="px-4 py-4 text-center">
                            <Button variant="ghost" size="sm">
                              View <ArrowRight className="w-4 h-4 ml-1" />
                            </Button>
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>
            </TabsContent>

            <TabsContent value="pathway" className="space-y-6">
              <div className="bg-card rounded-2xl border border-border p-6">
                <h3 className="text-xl font-semibold mb-6">Science-Based Target Pathway</h3>
                <ResponsiveContainer width="100%" height={400}>
                  <LineChart data={pathwayData}>
                    <CartesianGrid strokeDasharray="3 3" stroke="hsl(var(--border))" />
                    <XAxis dataKey="year" tick={{ fontSize: 12 }} />
                    <YAxis tick={{ fontSize: 12 }} tickFormatter={(v) => `${(v / 1000000).toFixed(1)}M`} domain={[0, 2500000]} />
                    <Tooltip formatter={(value: number) => value ? `${formatNumber(value)} MT CO₂e` : 'N/A'} />
                    <Legend />
                    <Line type="monotone" dataKey="baseline" stroke="#9CA3AF" strokeWidth={1} strokeDasharray="5 5" name="2019 Baseline" dot={false} />
                    <Line type="monotone" dataKey="target" stroke="#10B981" strokeWidth={2} name="SBTi Target" />
                    <Line type="monotone" dataKey="actual" stroke="#005EB8" strokeWidth={3} name="Actual" connectNulls={false} />
                  </LineChart>
                </ResponsiveContainer>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-8">
                  <div className="bg-secondary/50 rounded-xl p-4">
                    <h4 className="font-semibold mb-2">2019 Baseline</h4>
                    <div className="text-2xl font-bold font-mono">2.4M MT</div>
                    <div className="text-sm text-muted-foreground">CO₂e emissions</div>
                  </div>
                  <div className="bg-primary/10 rounded-xl p-4">
                    <h4 className="font-semibold mb-2">2024 Current</h4>
                    <div className="text-2xl font-bold font-mono text-primary">1.85M MT</div>
                    <div className="text-sm text-muted-foreground">-23% reduction achieved</div>
                  </div>
                  <div className="bg-success/10 rounded-xl p-4">
                    <h4 className="font-semibold mb-2">2030 Target</h4>
                    <div className="text-2xl font-bold font-mono text-success">940K MT</div>
                    <div className="text-sm text-muted-foreground">-50% reduction goal</div>
                  </div>
                </div>
              </div>
            </TabsContent>

            <TabsContent value="suppliers" className="space-y-6">
              <div className="bg-card rounded-2xl border border-border p-6">
                <h3 className="text-xl font-semibold mb-4">Supplier Carbon Performance</h3>
                <ResponsiveContainer width="100%" height={400}>
                  <BarChart data={sustainabilityCategories.slice(0, 8)} layout="vertical">
                    <CartesianGrid strokeDasharray="3 3" stroke="hsl(var(--border))" />
                    <XAxis type="number" tick={{ fontSize: 12 }} tickFormatter={(v) => `${v}%`} />
                    <YAxis type="category" dataKey="name" tick={{ fontSize: 12 }} width={120} />
                    <Tooltip formatter={(value: number) => `${value}% of suppliers`} />
                    <Bar dataKey="sbtiSuppliers" fill="hsl(var(--primary))" radius={[0, 4, 4, 0]} name="SBTi Committed" />
                  </BarChart>
                </ResponsiveContainer>
              </div>
            </TabsContent>

            <TabsContent value="insights" className="space-y-6">
              <div className="bg-gradient-to-br from-forest/5 to-ocean/5 rounded-2xl border border-forest/20 p-6">
                <div className="flex items-center gap-3 mb-6">
                  <span className="text-4xl">🌍</span>
                  <div>
                    <h3 className="text-xl font-bold text-foreground">EcoChain.AI</h3>
                    <p className="text-muted-foreground">Sustainability Intelligence Agent</p>
                  </div>
                </div>

                <div className="space-y-4">
                  <div className="bg-destructive/10 border border-destructive/20 rounded-xl p-4">
                    <div className="flex items-start gap-3">
                      <AlertTriangle className="w-5 h-5 text-destructive mt-0.5" />
                      <div>
                        <h4 className="font-semibold text-destructive mb-1">Critical Action Required</h4>
                        <p className="text-sm text-foreground">
                          Cold Chain & Logistics shows only 12% reduction YoY - slowest performing category. 
                          Recommend accelerating EV pilot programs and modal shift to rail.
                          Potential impact: -45,000 MT CO₂e annually.
                        </p>
                      </div>
                    </div>
                  </div>

                  <div className="bg-warning/10 border border-warning/20 rounded-xl p-4">
                    <div className="flex items-start gap-3">
                      <TrendingUp className="w-5 h-5 text-warning mt-0.5" />
                      <div>
                        <h4 className="font-semibold text-warning mb-1">Opportunity</h4>
                        <p className="text-sm text-foreground">
                          42% of suppliers lack SBTi commitments. Prioritize engagement with top 50 suppliers 
                          representing 65% of emissions. Target 80% commitment rate by 2027.
                        </p>
                      </div>
                    </div>
                  </div>

                  <div className="bg-success/10 border border-success/20 rounded-xl p-4">
                    <div className="flex items-start gap-3">
                      <CheckCircle className="w-5 h-5 text-success mt-0.5" />
                      <div>
                        <h4 className="font-semibold text-success mb-1">On Track</h4>
                        <p className="text-sm text-foreground">
                          Facilities & Energy achieving 28% reduction - best performing category. 
                          Continue renewable energy PPAs and on-site solar expansion. 
                          On track for 100% renewable by 2030.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="flex gap-3 mt-6">
                  <Button className="flex-1 bg-forest hover:bg-forest/90">
                    <Bot className="w-4 h-4 mr-2" />
                    Ask EcoChain.AI
                  </Button>
                  <Button variant="outline">
                    Generate CDP Report
                    <ArrowRight className="w-4 h-4 ml-2" />
                  </Button>
                </div>
              </div>
            </TabsContent>
          </Tabs>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default SustainabilityPage;
