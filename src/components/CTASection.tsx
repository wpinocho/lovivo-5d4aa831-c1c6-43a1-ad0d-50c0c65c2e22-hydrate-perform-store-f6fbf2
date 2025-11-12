<document path="src/components/CTASection.tsx">
import { Button } from '@/components/ui/button';
import { ArrowRight, Droplets } from 'lucide-react';

export const CTASection = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <section className="py-20 bg-gradient-to-r from-primary via-primary/90 to-secondary">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div className="flex justify-center mb-6">
          <div className="bg-white/20 backdrop-blur-sm rounded-full p-4">
            <Droplets className="h-12 w-12 text-white" />
          </div>
        </div>
        
        <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
          Ready to Elevate Your Performance?
        </h2>
        
        <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto">
          Join thousands of athletes who trust our functional beverages. 
          Free shipping on orders over $50.
        </p>
        
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Button 
            size="lg"
            onClick={scrollToTop}
            className="bg-white text-primary hover:bg-white/90 font-semibold text-lg px-8 py-6 h-auto group"
          >
            Start Hydration
            <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
          </Button>
          <Button 
            size="lg"
            variant="outline"
            onClick={scrollToTop}
            className="bg-transparent border-2 border-white text-white hover:bg-white/10 font-semibold text-lg px-8 py-6 h-auto"
          >
            View All Products
          </Button>
        </div>
        
        <div className="mt-12 flex flex-wrap justify-center gap-8 text-white/90">
          <div className="flex items-center gap-2">
            <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 20 20">
              <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
            </svg>
            <span>Free Shipping $50+</span>
          </div>
          <div className="flex items-center gap-2">
            <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 20 20">
              <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
            </svg>
            <span>30-Day Returns</span>
          </div>
          <div className="flex items-center gap-2">
            <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 20 20">
              <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
            </svg>
            <span>Science-Backed</span>
          </div>
        </div>
      </div>
    </section>
  );
};</document>
