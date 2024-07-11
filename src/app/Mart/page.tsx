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

const products = Array.from({ length: 20 }, (_, i) => ({
  id: i + 1,
  name: `Product Name ${i + 1}`,
  model: `Model ${i + 1}`,
  image: AvatarPlaceholder,
  price: '₦20,000',
  description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim ve',
  rating: 4,
}));

const categories = ["All", "Tee shirt", "Face cap", "Armless top", "Head bands"];

const Products = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const [pageSize, setPageSize] = useState(8);
  const [selectedCategory, setSelectedCategory] = useState(categories[0]);
  const [cartItems, setCartItems] = useState<any[]>([]);
  const [addedProductIds, setAddedProductIds] = useState<Set<number>>(new Set());

  useEffect(() => {
    const storedCartItems = JSON.parse(localStorage.getItem('cartItems') || '[]');
    setCartItems(storedCartItems);
    setAddedProductIds(new Set(storedCartItems.map((item: any) => item.id)));
  }, []);

  const handlePageChange = (page: any) => {
    setCurrentPage(page);
  };

  const handlePageSizeChange = (current: any, size: any) => {
    setPageSize(size);
  };

  const handleCategoryClick = (category: any) => {
    setSelectedCategory(category);
  };

  const handleAddToCart = (product: any) => {
    const updatedCartItems = [...cartItems, product];
    setCartItems(updatedCartItems);
    setAddedProductIds(new Set(updatedCartItems.map(item => item.id)));
    localStorage.setItem('cartItems', JSON.stringify(updatedCartItems));
  };

  return (
    <main className='w-full flex flex-col items-center justify-center'>
      <Navbar />
      <div className="w-[90%] container mt-10">
        <div className='flex justify-between'>
          <h1 className='text-[#101828] font-[600] text-[24px] uppercase'>Products</h1>
          <Link href="/Cart">
            <button className='flex text-[#EF3133] text-[14px] items-center font-[400]'>
              <p>View Cart ({cartItems.length})</p>
              <Image src={Cart} alt='' className='w-[20px] h-[20px]' />
            </button>
          </Link>
        </div>
        <Row justify="space-between" align="middle">
          <Col>
            <div>
              <ul className='flex items-center gap-6 uppercase mt-4 text-[8px] lg:text-[16px] border'>
                {categories.map((category, index) => (
                  <li
                    key={index}
                    className={`p-2 ${selectedCategory === category ? 'libg text-[white]' : ''}`}
                    onClick={() => handleCategoryClick(category)}
                    style={{ cursor: 'pointer' }}
                  >
                    {category}
                  </li>
                ))}
              </ul>
              <p className='text-[#101828] text-[14px] font-[400] mt-4'>Showing 20 of 56 Results</p>
            </div>
          </Col>
          <Col>
            <Select defaultValue="popularity" style={{ width: 120 }}>
              {/* <Option value="price-latest">Latest</Option> */}
              <Option value="price-asc">Price (Lowest)</Option>
              <Option value="price-desc">Price (Highest)</Option>
              <Option value="popularity">Popularity</Option>
            </Select>
          </Col>
        </Row>
        <Row gutter={[16, 16]} style={{ marginTop: '20px' }}>
          {products.slice((currentPage - 1) * pageSize, currentPage * pageSize).map((product) => (
          
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
          <div style={{ marginTop: '20px', textAlign: 'center' }} className='rounded border p-2 '>
            <Pagination
              current={currentPage}
              pageSize={pageSize}
              total={products.length}
              onChange={handlePageChange}
              onShowSizeChange={handlePageSizeChange}
              showSizeChanger
              showQuickJumper
              defaultPageSize={8}
              itemRender={(current, type, originalElement) => {
                if (type === 'prev') {
                  return <Button type="link">Previous</Button>;
                }
                if (type === 'next') {
                  return <Button type="link">Next</Button>;
                }
                return originalElement;
              }}
            />
          </div>
        </div>
      </div>
      <div className='w-full mt-20'>
        <Footer />
      </div>
    </main>
  );
};

export default Products;
