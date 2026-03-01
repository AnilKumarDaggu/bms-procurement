import { useParams, useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Header } from '@/components/Header';
import { Footer } from '@/components/Footer';
import { Breadcrumb } from '@/components/shared/Breadcrumb';
import { RiskBadge } from '@/components/shared/RiskBadge';
import { ProgressBar } from '@/components/shared/ProgressBar';
import { directCategories, indirectCategories, formatCurrency, formatPercent, formatNumber, getSbtiIcon, getTrendColor } from '@/data/mockData';
import { ArrowLeft, TrendingUp, TrendingDown, Users, FileText, Leaf, Clock, MapPin, AlertTriangle, CheckCircle, Bot, ArrowRight, Globe } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { cn } from '@/lib/utils';
import { PieChart, Pie, Cell, ResponsiveContainer, BarChart, Bar, XAxis, YAxis, Tooltip, CartesianGrid, Legend } from 'recharts';

const COLORS = ['#005EB8', '#0077C8', '#4A90E2', '#10B981', '#F59E0B', '#EF4444', '#8B5CF6'];

const CategoryDetailPage = () => {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();
  
  const allCategories = [...directCategories, ...indirectCategories];
  const category = allCategories.find(c => c.id === id);

  if (!category) {
    return (
      <div className="min-h-screen bg-background flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-2xl font-bold mb-4">Category not found</h1>
          <Button onClick={() => navigate('/categories')}>Back to Categories</Button>
        </div>
      </div>
    );
  }

  const TrendIcon = category.spendYoYChange >= 0 ? TrendingUp : TrendingDown;

  // Chart data
  const subcategoryData = category.subcategories.map((sub, i) => ({
    name: sub.name,
    value: sub.spend,
    fill: COLORS[i % COLORS.length],
  }));

  const regionalData = category.regionalDistribution.map(r => ({
    name: r.region,
    spend: r.spend / 1000000,
    suppliers: r.suppliers,
  }));

  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      {/* Hero Section */}
      <section className={cn('relative pt-24 pb-12 bg-gradient-to-r', category.gradient)}>
        <div className="absolute inset-0 bg-black/20" />
        <div className="container mx-auto px-4 md:px-8 relative z-10">
          <Breadcrumb 
            items={[
              { label: 'Categories', href: '/categories' },
              { label: category.shortName }
            ]} 
            className="mb-6 text-white/80 [&_a]:text-white/80 [&_a:hover]:text-white [&_svg]:text-white/50"
          />
          
          <div className="flex flex-col md:flex-row md:items-start justify-between gap-6">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="flex-1"
            >
              <div className="flex items-center gap-4 mb-4">
                <span className="text-5xl">{category.icon}</span>
                <div>
                  <h1 className="text-3xl md:text-4xl font-bold text-white mb-1">
                    {category.name}
                  </h1>
                  <div className="flex items-center gap-3">
                    <RiskBadge level={category.riskLevel} size="md" className="bg-white/20 border-white/30 text-white" />
                    <span className="text-white/80">{category.type === 'direct' ? 'Direct Spend' : 'Indirect Spend'}</span>
                  </div>
                </div>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
              className="grid grid-cols-2 md:grid-cols-4 gap-4"
            >
              <div className="bg-white/10 backdrop-blur-sm rounded-xl p-4 text-white">
                <div className="text-2xl md:text-3xl font-bold font-mono">{formatCurrency(category.spend, true)}</div>
                <div className="text-sm text-white/70 flex items-center gap-1">
                  Spend <TrendIcon className="w-3 h-3" /> {formatPercent(category.spendYoYChange, true)}
                </div>
              </div>
              <div className="bg-white/10 backdrop-blur-sm rounded-xl p-4 text-white">
                <div className="text-2xl md:text-3xl font-bold font-mono">{category.suppliers}</div>
                <div className="text-sm text-white/70">Suppliers</div>
              </div>
              <div className="bg-white/10 backdrop-blur-sm rounded-xl p-4 text-white">
                <div className="text-2xl md:text-3xl font-bold font-mono">{category.contracts}</div>
                <div className="text-sm text-white/70">{category.contractsExpiring} expiring</div>
              </div>
              <div className="bg-white/10 backdrop-blur-sm rounded-xl p-4 text-white">
                <div className="text-2xl md:text-3xl font-bold font-mono text-green-300">{formatPercent(category.savings)}</div>
                <div className="text-sm text-white/70">Savings</div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Content Tabs */}
      <section className="py-8">
        <div className="container mx-auto px-4 md:px-8">
          <Tabs defaultValue="overview" className="space-y-8">
            <TabsList className="w-full justify-start overflow-x-auto">
              <TabsTrigger value="overview">Overview</TabsTrigger>
              <TabsTrigger value="subcategories">Subcategories</TabsTrigger>
              <TabsTrigger value="suppliers">Suppliers</TabsTrigger>
              <TabsTrigger value="regional">Regional</TabsTrigger>
              <TabsTrigger value="sustainability">Sustainability</TabsTrigger>
              <TabsTrigger value="insights">AI Insights</TabsTrigger>
            </TabsList>

            <TabsContent value="overview" className="space-y-8">
              {/* Key Metrics Grid */}
              <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-4">
                <div className="bg-card rounded-xl p-4 border border-border">
                  <div className="flex items-center gap-2 text-muted-foreground mb-2">
                    <Leaf className="w-4 h-4 text-forest" />
                    <span className="text-sm">Carbon Intensity</span>
                  </div>
                  <div className="text-xl font-bold font-mono">{category.carbonIntensity}</div>
                  <div className="text-xs text-muted-foreground">{category.carbonUnit}</div>
                </div>
                <div className="bg-card rounded-xl p-4 border border-border">
                  <div className="flex items-center gap-2 text-muted-foreground mb-2">
                    <Clock className="w-4 h-4 text-primary" />
                    <span className="text-sm">Lead Time</span>
                  </div>
                  <div className="text-xl font-bold">{category.leadTime}</div>
                </div>
                <div className="bg-card rounded-xl p-4 border border-border">
                  <div className="flex items-center gap-2 text-muted-foreground mb-2">
                    <CheckCircle className="w-4 h-4 text-success" />
                    <span className="text-sm">Quality Score</span>
                  </div>
                  <div className="text-xl font-bold text-success">{category.qualityScore}%</div>
                </div>
                <div className="bg-card rounded-xl p-4 border border-border">
                  <div className="flex items-center gap-2 text-muted-foreground mb-2">
                    <Globe className="w-4 h-4 text-ocean" />
                    <span className="text-sm">Total Emissions</span>
                  </div>
                  <div className="text-xl font-bold font-mono">{formatNumber(category.carbonTotalMT)}</div>
                  <div className="text-xs text-muted-foreground">MT CO₂e</div>
                </div>
                <div className="bg-card rounded-xl p-4 border border-border col-span-2">
                  <div className="flex items-center gap-2 text-muted-foreground mb-2">
                    <FileText className="w-4 h-4" />
                    <span className="text-sm">Contract Coverage</span>
                  </div>
                  <ProgressBar 
                    value={category.contracts} 
                    max={category.suppliers} 
                    variant="default"
                    size="md"
                  />
                  <div className="text-xs text-muted-foreground mt-1">
                    {category.contractsExpiring} contracts expiring within 12 months
                  </div>
                </div>
              </div>

              {/* Subcategory Distribution */}
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                <div className="bg-card rounded-2xl border border-border p-6">
                  <h3 className="text-lg font-semibold mb-4">Subcategory Distribution</h3>
                  <ResponsiveContainer width="100%" height={300}>
                    <PieChart>
                      <Pie
                        data={subcategoryData}
                        cx="50%"
                        cy="50%"
                        innerRadius={60}
                        outerRadius={100}
                        paddingAngle={2}
                        dataKey="value"
                        label={({ name, percent }) => `${name.split(' ')[0]} ${(percent * 100).toFixed(0)}%`}
                      >
                        {subcategoryData.map((entry, index) => (
                          <Cell key={`cell-${index}`} fill={entry.fill} />
                        ))}
                      </Pie>
                      <Tooltip 
                        formatter={(value: number) => formatCurrency(value, true)}
                      />
                    </PieChart>
                  </ResponsiveContainer>
                </div>

                <div className="bg-card rounded-2xl border border-border p-6">
                  <h3 className="text-lg font-semibold mb-4">Regional Spend</h3>
                  <ResponsiveContainer width="100%" height={300}>
                    <BarChart data={regionalData}>
                      <CartesianGrid strokeDasharray="3 3" stroke="hsl(var(--border))" />
                      <XAxis dataKey="name" tick={{ fontSize: 12 }} />
                      <YAxis tick={{ fontSize: 12 }} tickFormatter={(v) => `$${v}M`} />
                      <Tooltip 
                        formatter={(value: number, name: string) => [
                          name === 'spend' ? `$${value.toFixed(0)}M` : value,
                          name === 'spend' ? 'Spend' : 'Suppliers'
                        ]}
                      />
                      <Bar dataKey="spend" fill="hsl(var(--primary))" radius={[4, 4, 0, 0]} />
                    </BarChart>
                  </ResponsiveContainer>
                </div>
              </div>
            </TabsContent>

            <TabsContent value="subcategories" className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                {category.subcategories.map((sub, index) => (
                  <motion.div
                    key={sub.name}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: index * 0.1 }}
                    className="bg-card rounded-xl border border-border p-5 hover:shadow-lg transition-shadow cursor-pointer"
                  >
                    <h4 className="font-semibold text-foreground mb-3">{sub.name}</h4>
                    <div className="grid grid-cols-2 gap-4">
                      <div>
                        <div className="text-2xl font-bold font-mono text-primary">{formatCurrency(sub.spend, true)}</div>
                        <div className="text-xs text-muted-foreground">
                          {((sub.spend / category.spend) * 100).toFixed(1)}% of category
                        </div>
                      </div>
                      <div>
                        <div className="text-2xl font-bold font-mono">{sub.suppliers}</div>
                        <div className="text-xs text-muted-foreground">Suppliers</div>
                      </div>
                    </div>
                    <div className="mt-4">
                      <ProgressBar 
                        value={sub.spend} 
                        max={category.spend} 
                        showValue={false}
                        size="sm"
                      />
                    </div>
                  </motion.div>
                ))}
              </div>
            </TabsContent>

            <TabsContent value="suppliers" className="space-y-6">
              <div className="bg-card rounded-2xl border border-border overflow-hidden">
                <div className="overflow-x-auto">
                  <table className="w-full">
                    <thead className="bg-secondary">
                      <tr>
                        <th className="px-4 py-3 text-left text-sm font-medium text-muted-foreground">Rank</th>
                        <th className="px-4 py-3 text-left text-sm font-medium text-muted-foreground">Supplier</th>
                        <th className="px-4 py-3 text-right text-sm font-medium text-muted-foreground">Spend</th>
                        <th className="px-4 py-3 text-center text-sm font-medium text-muted-foreground">Quality</th>
                        <th className="px-4 py-3 text-center text-sm font-medium text-muted-foreground">Carbon</th>
                        <th className="px-4 py-3 text-center text-sm font-medium text-muted-foreground">Risk</th>
                        <th className="px-4 py-3 text-center text-sm font-medium text-muted-foreground">SBTi</th>
                        <th className="px-4 py-3 text-left text-sm font-medium text-muted-foreground">Region</th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-border">
                      {category.topSuppliers.map((supplier) => (
                        <tr key={supplier.name} className="hover:bg-secondary/50 transition-colors">
                          <td className="px-4 py-4">
                            <span className="text-lg">
                              {supplier.rank === 1 ? '🥇' : supplier.rank === 2 ? '🥈' : supplier.rank === 3 ? '🥉' : supplier.rank}
                            </span>
                          </td>
                          <td className="px-4 py-4 font-medium">{supplier.name}</td>
                          <td className="px-4 py-4 text-right font-mono">{formatCurrency(supplier.spend, true)}</td>
                          <td className="px-4 py-4 text-center">
                            <span className={cn(
                              'px-2 py-1 rounded text-sm font-medium',
                              supplier.qualityScore >= 98 ? 'bg-success/10 text-success' :
                              supplier.qualityScore >= 95 ? 'bg-warning/10 text-warning' : 'bg-destructive/10 text-destructive'
                            )}>
                              {supplier.qualityScore}%
                            </span>
                          </td>
                          <td className="px-4 py-4 text-center font-mono text-sm">
                            {supplier.carbonIntensity} {category.carbonUnit.split('/')[0]}
                          </td>
                          <td className="px-4 py-4 text-center">
                            <RiskBadge level={supplier.riskLevel} size="sm" />
                          </td>
                          <td className="px-4 py-4 text-center text-lg">
                            {getSbtiIcon(supplier.sbtiStatus)}
                          </td>
                          <td className="px-4 py-4 text-sm text-muted-foreground">{supplier.region}</td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>
            </TabsContent>

            <TabsContent value="regional" className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {category.regionalDistribution.map((region, index) => (
                  <motion.div
                    key={region.region}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: index * 0.1 }}
                    className="bg-card rounded-xl border border-border p-6"
                  >
                    <div className="flex items-center justify-between mb-4">
                      <div className="flex items-center gap-3">
                        <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center">
                          <MapPin className="w-6 h-6 text-primary" />
                        </div>
                        <div>
                          <h4 className="font-semibold text-foreground">{region.region}</h4>
                          <p className="text-sm text-muted-foreground">{region.suppliers} suppliers</p>
                        </div>
                      </div>
                      <div className="text-right">
                        <div className="text-2xl font-bold font-mono">{region.percentage}%</div>
                        <div className="text-sm text-muted-foreground">of spend</div>
                      </div>
                    </div>
                    <div className="space-y-3">
                      <div className="flex justify-between text-sm">
                        <span className="text-muted-foreground">Total Spend</span>
                        <span className="font-mono font-medium">{formatCurrency(region.spend, true)}</span>
                      </div>
                      <ProgressBar value={region.percentage} max={100} showValue={false} size="sm" />
                    </div>
                  </motion.div>
                ))}
              </div>
            </TabsContent>

            <TabsContent value="sustainability" className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <div className="bg-card rounded-xl border border-border p-6">
                  <div className="flex items-center gap-2 mb-4">
                    <Leaf className="w-5 h-5 text-forest" />
                    <h4 className="font-semibold">Carbon Footprint</h4>
                  </div>
                  <div className="text-3xl font-bold font-mono text-forest mb-2">
                    {formatNumber(category.carbonTotalMT)} MT
                  </div>
                  <div className="text-sm text-muted-foreground mb-4">
                    CO₂e annually
                  </div>
                  <div className="space-y-2">
                    <div className="flex justify-between text-sm">
                      <span>Intensity</span>
                      <span className="font-mono">{category.carbonIntensity} {category.carbonUnit}</span>
                    </div>
                  </div>
                </div>

                <div className="bg-card rounded-xl border border-border p-6">
                  <div className="flex items-center gap-2 mb-4">
                    <Users className="w-5 h-5 text-primary" />
                    <h4 className="font-semibold">SBTi Commitments</h4>
                  </div>
                  <div className="text-3xl font-bold font-mono text-primary mb-2">
                    {category.topSuppliers.filter(s => s.sbtiStatus === 'committed').length}/{category.topSuppliers.length}
                  </div>
                  <div className="text-sm text-muted-foreground mb-4">
                    Top suppliers committed
                  </div>
                  <ProgressBar 
                    value={category.topSuppliers.filter(s => s.sbtiStatus === 'committed').length}
                    max={category.topSuppliers.length}
                    variant="success"
                    size="md"
                  />
                </div>

                <div className="bg-card rounded-xl border border-border p-6">
                  <div className="flex items-center gap-2 mb-4">
                    <CheckCircle className="w-5 h-5 text-success" />
                    <h4 className="font-semibold">Quality Compliance</h4>
                  </div>
                  <div className="text-3xl font-bold font-mono text-success mb-2">
                    {category.qualityScore}%
                  </div>
                  <div className="text-sm text-muted-foreground mb-4">
                    Compliance rate
                  </div>
                  <ProgressBar 
                    value={category.qualityScore}
                    max={100}
                    variant="success"
                    size="md"
                  />
                </div>
              </div>
            </TabsContent>

            <TabsContent value="insights" className="space-y-6">
              <div className="bg-gradient-to-br from-primary/5 to-accent/5 rounded-2xl border border-primary/20 p-6">
                <div className="flex items-center gap-3 mb-6">
                  <span className="text-4xl">{category.aiAgent.avatar}</span>
                  <div>
                    <h3 className="text-xl font-bold text-foreground">{category.aiAgent.name}</h3>
                    <p className="text-muted-foreground">{category.aiAgent.specialty}</p>
                  </div>
                </div>

                <div className="space-y-4">
                  {/* Critical Alert */}
                  <div className="bg-destructive/10 border border-destructive/20 rounded-xl p-4">
                    <div className="flex items-start gap-3">
                      <AlertTriangle className="w-5 h-5 text-destructive mt-0.5" />
                      <div>
                        <h4 className="font-semibold text-destructive mb-1">Critical Alert</h4>
                        <p className="text-sm text-foreground">
                          {((category.regionalDistribution.find(r => r.region === 'China' || r.region === 'Asia-Pacific')?.percentage || 0))}% of spend concentrated in geopolitical risk zone. Recommend developing secondary sourcing in EU/US within 18 months.
                        </p>
                      </div>
                    </div>
                  </div>

                  {/* Opportunity */}
                  <div className="bg-warning/10 border border-warning/20 rounded-xl p-4">
                    <div className="flex items-start gap-3">
                      <TrendingUp className="w-5 h-5 text-warning mt-0.5" />
                      <div>
                        <h4 className="font-semibold text-warning mb-1">Opportunity</h4>
                        <p className="text-sm text-foreground">
                          {category.topSuppliers.filter(s => s.sbtiStatus !== 'committed').length} suppliers lack SBTi commitments. Include renewable energy requirements in 2027 RFx. Potential carbon reduction: {Math.floor(category.carbonTotalMT * 0.12).toLocaleString()} MT CO₂e annually.
                        </p>
                      </div>
                    </div>
                  </div>

                  {/* Strength */}
                  <div className="bg-success/10 border border-success/20 rounded-xl p-4">
                    <div className="flex items-start gap-3">
                      <CheckCircle className="w-5 h-5 text-success mt-0.5" />
                      <div>
                        <h4 className="font-semibold text-success mb-1">Strength</h4>
                        <p className="text-sm text-foreground">
                          Quality performance at {category.qualityScore}% is above industry benchmark. Maintain strategic partnerships with top {Math.min(10, category.topSuppliers.length)} suppliers.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="flex gap-3 mt-6">
                  <Button className="flex-1">
                    <Bot className="w-4 h-4 mr-2" />
                    Ask {category.aiAgent.name}
                  </Button>
                  <Button variant="outline">
                    Generate Report
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

export default CategoryDetailPage;
