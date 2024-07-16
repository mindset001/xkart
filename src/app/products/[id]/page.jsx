'use client'
import React, { useEffect, useState } from 'react';
import { notFound, useParams } from 'next/navigation';
import Image from 'next/image';
import AvatarPlaceholder from '../../../../public/assets/head.png';
import Footer from '@/app/components/Footer';
import Navbar from '@/app/components/Navbar';
import Link from 'next/link';
import { Button } from 'antd';
import SimilarProducts from '../SimilarProducts';
import Cart from '../../../../public/assets/cart.png';

const ProductPage = () => {
  const { id } = useParams();
  const [product, setProduct] = useState(null);
  const [cartItems, setCartItems] = useState([]);
  const [addedProductIds, setAddedProductIds] = useState(new Set());
  const [selectedColor, setSelectedColor] = useState(null); // State for selected color

  useEffect(() => {
    const fetchProduct = async () => {
      try {
        const response = await fetch(`https://xrace.onrender.com/merchandise/product/${id}`, {
          headers: {
            'X-Api-Key': 'ZPuKoTX2CohoPNC8noaiefai4lhLTi5U_PFlNvJraB5bG1mpLbWZqVjuNx6gREUA-f4'
          }
        });

        if (!response.ok) {
          console.error(`HTTP error! Status: ${response.status}`);
          notFound();
          return;
        }

        const data = await response.json();
        console.log(data);
        if (data && data.data) {
          setProduct(data.data);
        } else {
          console.error('Product data is missing');
          notFound();
        }
      } catch (error) {
        console.error('Error fetching product:', error);
        notFound();
      }
    };

    fetchProduct();
  }, [id]);

  useEffect(() => {
    const storedCartItems = JSON.parse(localStorage.getItem('cartItems') || '[]');
    setCartItems(storedCartItems);
    setAddedProductIds(new Set(storedCartItems.map(item => item.id)));
  }, []);

  const handleAddToCart = (product) => {
    if (!selectedColor) {
      alert('Please select a color before adding to the cart');
      return;
    }

    const productWithColor = { ...product, selectedColor };
    const updatedCartItems = [...cartItems, productWithColor];
    setCartItems(updatedCartItems);
    setAddedProductIds(new Set(updatedCartItems.map(item => item.id)));
    localStorage.setItem('cartItems', JSON.stringify(updatedCartItems));
  };

  if (!product) {
    return null; // Render loading state or handle appropriately
  }

  return (
    <main className='w-full flex flex-col items-center justify-center'>
      <Navbar />
      <div className="w-[85%] container mt-2">
        <div className='flex justify-between items-center'>
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
        <h1 className='text-[#101828] font-[600] text-[24px] uppercase'>Product Details</h1>
      </div>
      <div className="w-[85%] container mt-10 mb-10">
        <div className='flex'>
          <div className='w-[40%] border-2 border-[#EAECF0]'>
            <Image alt={product.name} src={product.image || AvatarPlaceholder} width={400} height={400} />
          </div>
          <div className='ml-6 lg:ml-20 lg:w-[50%]'>
            <h1 className='text-[#101828] font-[700] lg:text-[24px] uppercase'>{product.name}</h1>
            <p className='text-[#101828] font-[600] text-[18px] my-2'>{product.amount}</p>
            <p className='hidden lg:block mb-10'>{product.description}</p>
            <p>Colour:</p>
            <div className='flex gap-2'>
              {/* Map through product colors */}
              {product.colors && product.colors.map((color, index) => (
                <span
                  key={index}
                  className={`w-6 h-6 rounded-full cursor-pointer ${selectedColor === color ? 'ring-2 ring-[#000]' : ''}`}
                  style={{ backgroundColor: color }}
                  onClick={() => setSelectedColor(color)}
                ></span>
              ))}
            </div>
            <div className='mt-4'>
              <p className='' style={{ color: selectedColor ? '#000' : 'transparent' }}>Selected Color: {selectedColor}</p>
            </div>
            <button
              className={`hidden mt-10 bg-[#fff] border-2 text-[#EF3133] border-[#EF3133] rounded-tl-[8px] rounded-br-[8px] lg:flex w-[100%] lg:w-[191px] h-[48px] items-center justify-center gap-2 ${addedProductIds.has(product.id) ? 'cursor-not-allowed' : ''}`}
              onClick={() => handleAddToCart(product)}
              disabled={addedProductIds.has(product.id)}
            >
              <p className='uppercase'>{addedProductIds.has(product.id) ? 'Product Added' : 'Add to cart'}</p>
            </button>
          </div>
        </div>
      </div>
      <div className='block lg:hidden w-[80%]'>
        <p className='mb-10'>{product.description}</p>
        <button
          className={`mt-10 bg-[#fff] border-2 text-[#EF3133] text-justify border-[#EF3133] rounded-tl-[8px] rounded-br-[8px] flex w-[100%] lg:w-[191px] h-[48px] items-center justify-center gap-2 ${addedProductIds.has(product.id) ? 'cursor-not-allowed' : ''}`}
          onClick={() => handleAddToCart(product)}
          disabled={addedProductIds.has(product.id)}
        >
          <p className='uppercase'>{addedProductIds.has(product.id) ? 'Product Added' : 'Add to cart'}</p>
        </button>
      </div>
      <SimilarProducts />
      <Footer />
    </main>
  );
};

export default ProductPage;
