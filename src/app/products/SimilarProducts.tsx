'use client'
import { useState, useEffect } from 'react';
import { Card, Col, Row, Pagination, Select, Button } from 'antd';
import Image from 'next/image';
import AvatarPlaceholder from '../../../public/assets/head.png';
import Cart from '../../../public/assets/cart.png';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import Link from 'next/link';

const { Option } = Select;

const products = Array.from({ length: 4 }, (_, i) => ({
  id: i + 1,
  name: `Product Name ${i + 1}`,
  model: `Model ${i + 1}`,
  image: AvatarPlaceholder,
  price: '₦20,000',
  description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim ve',
  rating: 4,
}));



const SimilarProducts = () => {
    const [cartItems, setCartItems] = useState<any[]>([]);
  const [addedProductIds, setAddedProductIds] = useState<Set<number>>(new Set());

  useEffect(() => {
    const storedCartItems = JSON.parse(localStorage.getItem('cartItems') || '[]');
    setCartItems(storedCartItems);
    setAddedProductIds(new Set(storedCartItems.map((item: any) => item.id)));
  }, []);
    const handleAddToCart = (product: any) => {
        const updatedCartItems = [...cartItems, product];
        setCartItems(updatedCartItems);
        setAddedProductIds(new Set(updatedCartItems.map(item => item.id)));
        localStorage.setItem('cartItems', JSON.stringify(updatedCartItems));
      };

  return (
    <main className='w-full flex flex-col items-center justify-center'>

      <div className="w-[90%] container mt-10">
        <div className='flex justify-between'>
          <h1 className='text-[#101828] font-[600] text-[24px] uppercase'>Similar Products</h1>
        
        </div>
       
        <Row gutter={[16, 16]} style={{ marginTop: '20px' }}>
          {products.map((product) => (
          
            <Col key={product.id} xs={12} sm={12} md={8} lg={6}>
                <Link href={`/products/${product.id}`}>
              <div className='border-2 lg:border-none p-2 bg-[#FCFCFD]'>
                <div className='lg:border-2 border-[#EAECF0] '>
                  <Image alt={product.name} src={product.image} width={300} height={300} />
                </div>
                <div className='flex flex-col items-center'>
                  <p className='text-[#101828] font-[700] text-[16px] mt-2'>{product.name}</p>
                  <p className='text-[#101828] font-[400] text-[16px]'>{product.price}</p>
                  <button
                    className={`mt-10 bg-[#fff] border-2 text-[#EF3133] border-[#EF3133] rounded-tl-[8px] rounded-br-[8px] flex w-[100%] lg:w-[191px] h-[48px] items-center justify-center gap-2 ${addedProductIds.has(product.id) ? 'cursor-not-allowed' : ''}`}
                    onClick={() => handleAddToCart(product)}
                    disabled={addedProductIds.has(product.id)}
                  >
                    <p className='uppercase'>{addedProductIds.has(product.id) ? 'Product Added' : 'Add to cart'}</p>
                  </button>
                </div>
                
              </div>
              </Link>
            </Col>
          ))}
        </Row>
        <div className='flex items-center justify-center mt-6'>
      
        </div>
      </div>
  
    </main>
  );
};

export default SimilarProducts;
