<document path="src/components/ElectrolyteComparer.tsx">
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Check, X } from 'lucide-react';

export const ElectrolyteComparer = () => {
  const products = [
    {
      name: 'Hydro Elite',
      price: '$29.99',
      features: [
        { label: 'Sodium (1000mg)', included: true },
        { label: 'Potassium (200mg)', included: true },
        { label: 'Magnesium (100mg)', included: true },
        { label: 'Zero Sugar', included: true },
        { label: 'Natural Flavors', included: true },
        { label: 'Added BCAAs', included: false },
      ],
      tag: 'Popular',
      tagColor: 'bg-accent'
    },
    {
      name: 'Pro Fuel',
      price: '$34.99',
      features: [
        { label: 'Sodium (1200mg)', included: true },
        { label: 'Potassium (250mg)', included: true },
        { label: 'Magnesium (150mg)', included: true },
        { label: 'Zero Sugar', included: true },
        { label: 'Natural Flavors', included: true },
        { label: 'Added BCAAs', included: true },
      ],
      tag: 'Premium',
      tagColor: 'bg-secondary'
    },
    {
      name: 'Basic Hydration',
      price: '$19.99',
      features: [
        { label: 'Sodium (600mg)', included: true },
        { label: 'Potassium (100mg)', included: true },
        { label: 'Magnesium (50mg)', included: true },
        { label: 'Zero Sugar', included: false },
        { label: 'Natural Flavors', included: true },
        { label: 'Added BCAAs', included: false },
      ],
      tag: 'Budget',
      tagColor: 'bg-muted-foreground'
    }
  ];

  return (
    <section className="py-16 bg-muted/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            Compare Electrolyte Formulas
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Choose the perfect electrolyte blend for your training intensity and goals
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {products.map((product, idx) => (
            <Card key={idx} className={`relative ${idx === 1 ? 'border-primary border-2' : ''}`}>
              <CardHeader>
                <div className="flex justify-between items-start mb-2">
                  <CardTitle className="text-2xl">{product.name}</CardTitle>
                  <span className={`${product.tagColor} text-white text-xs px-2 py-1 rounded font-medium`}>
                    {product.tag}
                  </span>
                </div>
                <div className="text-3xl font-bold text-primary">{product.price}</div>
              </CardHeader>
              <CardContent>
                <div className="space-y-3">
                  {product.features.map((feature, fIdx) => (
                    <div key={fIdx} className="flex items-center gap-2">
                      {feature.included ? (
                        <Check className="h-5 w-5 text-secondary flex-shrink-0" />
                      ) : (
                        <X className="h-5 w-5 text-muted-foreground flex-shrink-0" />
                      )}
                      <span className={feature.included ? 'text-foreground' : 'text-muted-foreground'}>
                        {feature.label}
                      </span>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};</document>
