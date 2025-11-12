<document path="src/pages/ui/IndexUI.tsx">
import { ProductCard } from '@/components/ProductCard';
import { CollectionCard } from '@/components/CollectionCard';
import { FloatingCart } from '@/components/FloatingCart';
import { NewsletterSection } from '@/components/NewsletterSection';
import { EcommerceTemplate } from '@/templates/EcommerceTemplate';
import { HeroSection } from '@/components/HeroSection';
import { ElectrolyteComparer } from '@/components/ElectrolyteComparer';
import { CTASection } from '@/components/CTASection';
import type { UseIndexLogicReturn } from '@/components/headless/HeadlessIndex';
import { Badge } from '@/components/ui/badge';

/**
 * EDITABLE UI - IndexUI
 * 
 * Sporty functional beverages & hydration store homepage
 */

interface IndexUIProps {
  logic: UseIndexLogicReturn;
}

export const IndexUI = ({ logic }: IndexUIProps) => {
  const {
    collections,
    loading,
    loadingCollections,
    filteredProducts,
  } = logic;

  // Separate products by collection for custom sections
  const electrolytes = filteredProducts.filter(p => p.tags?.includes('electrolyte'));
  const proteins = filteredProducts.filter(p => p.tags?.includes('protein'));
  const bundles = filteredProducts.filter(p => p.tags?.includes('bundle'));

  return (
    <EcommerceTemplate showCart={true}>
      {/* Hero Section */}
      <HeroSection />

      {/* Electrolyte Comparer */}
      <ElectrolyteComparer />

      {/* Electrolyte Products Section */}
      <section className="py-16 bg-background" id="products-section">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <Badge className="mb-4 bg-primary text-primary-foreground">Hydration</Badge>
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              Electrolyte Drinks
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Replenish electrolytes lost during intense workouts with our science-backed formulas
            </p>
          </div>
          
          {loading ? (
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
              {[...Array(4)].map((_, i) => (
                <div key={i} className="bg-muted rounded-lg h-80 animate-pulse"></div>
              ))}
            </div>
          ) : electrolytes.length > 0 ? (
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
              {electrolytes.map((product) => (
                <ProductCard key={product.id} product={product} />
              ))}
            </div>
          ) : (
            <div className="text-center py-12">
              <p className="text-muted-foreground">No electrolyte products available.</p>
            </div>
          )}
        </div>
      </section>

      {/* Protein RTDs Section */}
      <section className="py-16 bg-muted/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <Badge className="mb-4 bg-secondary text-secondary-foreground">Recovery</Badge>
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              Protein RTDs
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Ready-to-drink protein shakes for post-workout recovery and muscle building
            </p>
          </div>
          
          {loading ? (
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
              {[...Array(4)].map((_, i) => (
                <div key={i} className="bg-muted rounded-lg h-80 animate-pulse"></div>
              ))}
            </div>
          ) : proteins.length > 0 ? (
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
              {proteins.map((product) => (
                <ProductCard key={product.id} product={product} />
              ))}
            </div>
          ) : (
            <div className="text-center py-12">
              <p className="text-muted-foreground">No protein products available.</p>
            </div>
          )}
        </div>
      </section>

      {/* Gym Bundles Section */}
      <section className="py-16 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <Badge className="mb-4 bg-accent text-accent-foreground">Best Value</Badge>
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              Gym Bundles
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Complete hydration and nutrition bundles. Save up to 25% on combo packs
            </p>
          </div>
          
          {loading ? (
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
              {[...Array(3)].map((_, i) => (
                <div key={i} className="bg-muted rounded-lg h-80 animate-pulse"></div>
              ))}
            </div>
          ) : bundles.length > 0 ? (
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
              {bundles.map((product) => (
                <ProductCard key={product.id} product={product} />
              ))}
            </div>
          ) : (
            <div className="text-center py-12">
              <p className="text-muted-foreground">No bundle products available.</p>
            </div>
          )}
        </div>
      </section>

      {/* Collections Grid */}
      {!loadingCollections && collections.length > 0 && (
        <section className="py-16 bg-muted/30">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
                Shop by Category
              </h2>
              <p className="text-lg text-muted-foreground">
                Browse our curated collections
              </p>
            </div>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
              {collections.map((collection) => (
                <CollectionCard 
                  key={collection.id} 
                  collection={collection} 
                  onViewProducts={() => {}} 
                />
              ))}
            </div>
          </div>
        </section>
      )}

      {/* CTA Section */}
      <CTASection />

      {/* Newsletter Section */}
      <NewsletterSection />

      <FloatingCart />
    </EcommerceTemplate>
  );
};</document>
