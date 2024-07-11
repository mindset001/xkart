'use client'
import React, { useEffect, useState } from 'react'
import { notFound } from 'next/navigation';
import Image from 'next/image';
import AvatarPlaceholder from '../../../../public/assets/head.png';
import Footer from '@/app/components/Footer';
import Navbar from '@/app/components/Navbar';
import Link from 'next/link';
import { Button } from 'antd';
import SimilarProducts from '../SimilarProducts';
import Cart from '../../../../public/assets/cart.png';

interface ProductPageProps {
    params: { id: string };
}

const products = Array.from({ length: 20 }, (_, i) => ({
    id: i + 1,
    name: `Product Name ${i + 1}`,
    model: `Model ${i + 1}`,
    image: AvatarPlaceholder,
    price: '₦20,000',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim ve',
    rating: 4,
}));

const ProductPage = ({ params }: ProductPageProps) => {
    const productId = parseInt(params.id, 10);
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

    // Find the current product by ID
    const currentProductIndex = products.findIndex((product) => product.id === productId);
    const product = products[currentProductIndex];

    if (!product) {
        notFound();
        return null; // This line is redundant but helps with TypeScript understanding
    }

    // Determine the previous and next products
    const prevProduct = currentProductIndex > 0 ? products[currentProductIndex - 1] : null;
    const nextProduct = currentProductIndex < products.length - 1 ? products[currentProductIndex + 1] : null;

    return (
        <main>
            <main className='w-full flex flex-col items-center justify-center'>
                <Navbar />
                <div className="w-[85%] container mt-10">
                    <div className='flex justify-between'>
                    <Link href="/Mart">
                        <Button type="link" className='text-[#101828]'>
                            &larr; Back
                        </Button>
                    </Link>
                    <Link href="/Cart">
            <button className='flex text-[#EF3133] text-[14px] items-center font-[400]'>
              <p>View Cart ({cartItems.length})</p>
              <Image src={Cart} alt='' className='w-[20px] h-[20px]' />
            </button>
          </Link>
                    </div>
                    <h1 className='text-[#101828] font-[600] text-[24px] uppercase'>product details</h1>
                </div>
                <div className="w-[85%] container mt-10 mb-10">
                    <div className='flex '>
                        <div className='lg:border-2 border-[#EAECF0] '>
                            <Image alt={product.name} src={product.image} width={300} height={300} />
                        </div>
                        <div className='ml-20 w-[50%]'>
                            <h1 className='text-[#101828] font-[700] text-[24px] uppercase'>{product.name}</h1>
                            <p className='text-[#101828] font-[600] text-[18px] my-2'>{product.price}</p>
                            <p className='mb-10'>{product.description}</p>
                            <p>Colour:</p>
                            <div className='flex gap-2'>
                                {/* Replace these colors with actual product colors if available */}
                                <span className='w-6 h-6 rounded-full bg-green-500'></span>
                                <span className='w-6 h-6 rounded-full bg-red-500'></span>
                                <span className='w-6 h-6 rounded-full bg-blue-500'></span>
                                <span className='w-6 h-6 rounded-full bg-yellow-500'></span>
                            </div>
                            <button
                    className={`mt-10 bg-[#fff] border-2 text-[#EF3133] border-[#EF3133] rounded-tl-[8px] rounded-br-[8px] flex w-[100%] lg:w-[191px] h-[48px] items-center justify-center gap-2 ${addedProductIds.has(product.id) ? 'cursor-not-allowed' : ''}`}
                    onClick={() => handleAddToCart(product)}
                    disabled={addedProductIds.has(product.id)}
                  >
                    <p className='uppercase'>{addedProductIds.has(product.id) ? 'Product Added' : 'Add to cart'}</p>
                  </button>
                        </div>
                    </div>
                </div>
<SimilarProducts/>
            </main>
            <Footer />
        </main>
    );
}

export default ProductPage;
