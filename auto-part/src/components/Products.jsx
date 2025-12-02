import React from 'react';
import './Products.css';

function Products() {
  const products = [
    {
      name: 'Engine Parts',
      items: ['Pistons', 'Cylinders', 'Crankshafts', 'Valves'],
      image: '⚙️'
    },
    {
      name: 'Electrical Parts',
      items: ['Batteries', 'Spark Plugs', 'Wiring', 'Lights'],
      image: '🔋'
    },
    {
      name: 'Body Parts',
      items: ['Fairings', 'Mudguards', 'Seats', 'Mirrors'],
      image: '🛡️'
    },
    {
      name: 'Brake System',
      items: ['Brake Pads', 'Discs', 'Cables', 'Fluid'],
      image: '🛑'
    },
    {
      name: 'Suspension',
      items: ['Shockers', 'Springs', 'Fork Oil', 'Bushings'],
      image: '🔩'
    },
    {
      name: 'Accessories',
      items: ['Helmets', 'Covers', 'Tool Kits', 'Locks'],
      image: '🧰'
    }
  ];

  return (
    <section id="products" className="products">
      <div className="products-container">
        <h2 className="section-title">Our Products</h2>
        <p className="section-subtitle">
          Complete range of genuine two-wheeler parts
        </p>
        <div className="products-grid">
          {products.map((product, index) => (
            <div key={index} className="product-card">
              <div className="product-image">{product.image}</div>
              <h3>{product.name}</h3>
              <ul className="product-items">
                {product.items.map((item, i) => (
                  <li key={i}>✓ {item}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Products;