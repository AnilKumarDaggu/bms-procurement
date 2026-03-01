import { useState } from 'react';
import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';
import { Header } from '@/components/Header';
import { Footer } from '@/components/Footer';
import { Breadcrumb } from '@/components/shared/Breadcrumb';
import { CategoryCard } from '@/components/shared/CategoryCard';
import { MetricCard } from '@/components/shared/MetricCard';
import { directCategories, indirectCategories, overviewMetrics, formatCurrency, formatNumber, formatPercent } from '@/data/mockData';
import { TrendingUp, Users, Layers, Percent, BarChart3, Search, Filter, Grid3X3, List } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';

const CategoriesPage = () => {
  const [activeTab, setActiveTab] = useState<'direct' | 'indirect' | 'all'>('direct');
  const [searchQuery, setSearchQuery] = useState('');
  const [viewMode, setViewMode] = useState<'grid' | 'list'>('grid');
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-50px' });

  const categories = activeTab === 'all' 
    ? [...directCategories, ...indirectCategories]
    : activeTab === 'direct' 
      ? directCategories 
      : indirectCategories;

  const filteredCategories = categories.filter(cat =>
    cat.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
    cat.shortName.toLowerCase().includes(searchQuery.toLowerCase())
  );

  const currentSpend = activeTab === 'direct' 
    ? overviewMetrics.directSpend 
    : activeTab === 'indirect'
      ? overviewMetrics.indirectSpend
      : overviewMetrics.totalSpend;

  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      {/* Hero Section */}
      <section className="relative pt-24 pb-12 bg-gradient-to-b from-secondary to-background">
        <div className="container mx-auto px-4 md:px-8">
          <Breadcrumb items={[{ label: 'Categories' }]} className="mb-6" />
          
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="max-w-3xl"
          >
            <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
              Procurement Categories Intelligence
            </h1>
            <p className="text-lg text-muted-foreground">
              Comprehensive analytics across {formatCurrency(overviewMetrics.totalSpend, true)} global spend with AI-powered insights
            </p>
          </motion.div>

          {/* Key Metrics Bar */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-8"
          >
            <MetricCard
              title="Total Spend"
              value={formatCurrency(overviewMetrics.totalSpend, true)}
              trend={overviewMetrics.totalSpendYoY}
              trendLabel="YoY"
              icon={TrendingUp}
              variant="default"
              size="sm"
            />
            <MetricCard
              title="Active Suppliers"
              value={formatNumber(overviewMetrics.activeSuppliers)}
              trend={overviewMetrics.suppliersYoY}
              trendLabel="YoY"
              icon={Users}
              variant="default"
              size="sm"
            />
            <MetricCard
              title="Categories"
              value={overviewMetrics.categories.toString()}
              subtitle={`${overviewMetrics.directCategories} Direct • ${overviewMetrics.indirectCategories} Indirect`}
              icon={Layers}
              variant="default"
              size="sm"
            />
            <MetricCard
              title="Avg Savings"
              value={formatPercent(overviewMetrics.avgSavings)}
              subtitle="vs. Market"
              icon={Percent}
              variant="success"
              size="sm"
            />
          </motion.div>
        </div>
      </section>

      {/* Tabs & Filter Bar */}
      <section ref={ref} className="sticky top-[72px] z-30 bg-background/95 backdrop-blur-sm border-b border-border">
        <div className="container mx-auto px-4 md:px-8 py-4">
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
            <Tabs value={activeTab} onValueChange={(v) => setActiveTab(v as typeof activeTab)} className="w-full md:w-auto">
              <TabsList className="grid grid-cols-3 w-full md:w-auto">
                <TabsTrigger value="direct" className="flex items-center gap-2">
                  <span className="hidden sm:inline">Direct Spend:</span>
                  <span className="font-mono font-bold">{formatCurrency(overviewMetrics.directSpend, true)}</span>
                </TabsTrigger>
                <TabsTrigger value="indirect" className="flex items-center gap-2">
                  <span className="hidden sm:inline">Indirect Spend:</span>
                  <span className="font-mono font-bold">{formatCurrency(overviewMetrics.indirectSpend, true)}</span>
                </TabsTrigger>
                <TabsTrigger value="all">All Categories</TabsTrigger>
              </TabsList>
            </Tabs>

            <div className="flex items-center gap-3">
              <div className="relative flex-1 md:w-64">
                <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground" />
                <Input
                  placeholder="Search categories..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="pl-10"
                />
              </div>
              <Button variant="outline" size="icon" className="hidden md:flex">
                <Filter className="w-4 h-4" />
              </Button>
              <div className="hidden md:flex border rounded-lg">
                <Button
                  variant={viewMode === 'grid' ? 'secondary' : 'ghost'}
                  size="icon"
                  onClick={() => setViewMode('grid')}
                >
                  <Grid3X3 className="w-4 h-4" />
                </Button>
                <Button
                  variant={viewMode === 'list' ? 'secondary' : 'ghost'}
                  size="icon"
                  onClick={() => setViewMode('list')}
                >
                  <List className="w-4 h-4" />
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Categories Grid */}
      <section className="py-12">
        <div className="container mx-auto px-4 md:px-8">
          <div className="flex items-center justify-between mb-6">
            <h2 className="text-xl font-semibold text-foreground">
              {activeTab === 'direct' ? 'Direct Spend Categories' : 
               activeTab === 'indirect' ? 'Indirect Spend Categories' : 'All Categories'}
              <span className="ml-2 text-muted-foreground font-normal">
                ({filteredCategories.length})
              </span>
            </h2>
            <div className="text-sm text-muted-foreground">
              Total: <span className="font-mono font-bold text-foreground">{formatCurrency(currentSpend, true)}</span>
            </div>
          </div>

          {filteredCategories.length > 0 ? (
            <motion.div
              className={viewMode === 'grid' 
                ? 'grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6'
                : 'space-y-4'
              }
            >
              {filteredCategories.map((category, index) => (
                <CategoryCard key={category.id} category={category} index={index} />
              ))}
            </motion.div>
          ) : (
            <div className="text-center py-16">
              <BarChart3 className="w-12 h-12 text-muted-foreground/50 mx-auto mb-4" />
              <h3 className="text-lg font-medium text-foreground mb-2">No categories found</h3>
              <p className="text-muted-foreground">
                Try adjusting your search or filter criteria
              </p>
            </div>
          )}
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default CategoriesPage;
