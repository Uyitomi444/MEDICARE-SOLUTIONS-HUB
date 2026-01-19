import React from 'react';
import PageShell from '../components/PageShell';
import { Product } from '../types';
import { ArIcon } from '../components/IconComponents';

const mockProducts: Product[] = [
    { id: 1, name: 'Digital Thermometer', description: 'Fast, accurate readings for the whole family.', price: 19.99, imageUrl: 'https://tse3.mm.bing.net/th/id/OIP.-GqLRaiiuMhjd_eXN6r9XgHaHa?w=1024&h=1024&rs=1&pid=ImgDetMain&o=7&rm=3' },
    { id: 2, name: 'N95 Respirator Masks (20-pack)', description: 'High-filtration masks for maximum protection.', price: 29.99, imageUrl: 'https://tse1.mm.bing.net/th/id/OIP.r1l5XAnpcoaeGdAJujEGEwHaHa?rs=1&pid=ImgDetMain&o=7&rm=3' },
    { id: 3, name: 'Automatic Blood Pressure Monitor', description: 'Easy-to-use upper arm monitor with large display.', price: 59.99, imageUrl: 'https://tse4.mm.bing.net/th/id/OIP.SA-cJMIt9gZfoI_ZavQW4gHaGd?rs=1&pid=ImgDetMain&o=7&rm=3' },
    { id: 4, name: 'Hand Sanitizer (500ml)', description: '70% alcohol-based sanitizer that kills 99.9% of germs.', price: 9.99, imageUrl: 'https://tse1.mm.bing.net/th/id/OIP.6X8iSlkvKhm9pHyUl7mruQHaHa?rs=1&pid=ImgDetMain&o=7&rm=3' },
    { id: 5, name: 'Pulse Oximeter', description: 'Measures blood oxygen saturation and pulse rate.', price: 34.99, imageUrl: 'https://picsum.photos/seed/supply-oximeter/400/300' },
    { id: 6, name: 'First Aid Kit', description: 'Comprehensive 100-piece kit for home emergencies.', price: 24.99, imageUrl: 'https://picsum.photos/seed/supply-firstaid/400/300' },
];

const ProductCard: React.FC<{ product: Product }> = ({ product }) => (
    <div 
      className="bg-navy-800 border border-navy-700 rounded-lg shadow-lg overflow-hidden group transition-all duration-300"
      style={{ perspective: '1000px' }}
    >
      <div className="group-hover:scale-105 group-hover:-translate-y-4 transition-transform duration-500" style={{ transformStyle: 'preserve-3d' }}>
        <div className="overflow-hidden rounded-t-lg relative">
            <img src={product.imageUrl} alt={product.name} className="w-full h-56 object-contain bg-white p-4" />
        </div>
        <div className="p-6 bg-navy-800 transition-transform duration-500" style={{ transform: 'translateZ(40px)' }}>
            <h3 className="font-display text-lg font-bold text-white mb-2">{product.name}</h3>
            <p className="text-gray-400 text-sm mb-4 h-10">{product.description}</p>
            <div className="flex justify-between items-center">
                <p className="text-2xl font-bold font-display text-teal-400">${product.price.toFixed(2)}</p>
                <button className="bg-teal-400 text-navy-900 px-4 py-2 rounded-lg hover:bg-teal-500 transition-colors font-bold text-sm">
                    Add to Cart
                </button>
            </div>
            <button className="mt-4 w-full flex items-center justify-center gap-2 text-sm text-teal-400 border-2 border-teal-400 rounded-lg py-2 hover:bg-teal-400 hover:text-navy-900 transition-colors font-semibold">
                <ArIcon className="h-5 w-5" />
                See in your space
            </button>
        </div>
      </div>
    </div>
);

const SuppliesPage: React.FC = () => {
    return (
        <PageShell title="Medical Supplies Store" subtitle="Curated, high-quality health products delivered on-demand.">
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
                {mockProducts.map(product => (
                    <ProductCard key={product.id} product={product} />
                ))}
            </div>
        </PageShell>
    );
};

export default SuppliesPage;