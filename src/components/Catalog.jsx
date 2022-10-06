import axios from 'axios';
import { useState } from 'react';
import { useEffect } from 'react';
import ProductList from './ProductList';

export default function Catalog() {
  const [productsData, setProductsData] = useState([]);

  const getData = async () => {
    const res = await axios.get('http://localhost:6500/api/v1.0/products', {
      method: 'GET',
      headers: {
        Authorization:
          'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJhdXRoIjoiUHJvSnVuaW9ycyIsInR5cGUiOiJ0b2tlbiIsImlhdCI6MTY2Mzc5NzQ1MH0.LeU-imNgsrQ3zTHYmvT7I0c_njPfddkic7lAy1W0pKs',
      },
    });

    const { products } = await res.data;
    setProductsData(products);
  };
  useEffect(() => {
    getData();
  }, []);

  return (
    <div>
      <div>
        <h2>Catálogo</h2>
        <div>
          {productsData.map((products) => (
            <ProductList key={products.id} products={products} />
          ))}
        </div>
      </div>
    </div>
  );
}
