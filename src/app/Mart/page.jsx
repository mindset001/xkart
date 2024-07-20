'use client'
import { useState, useEffect } from 'react';
import { Card, Col, Row, Pagination, Select, Button } from 'antd';
import Image from 'next/image';
import AvatarPlaceholder from '../../../public/assets/head.png';
import Cart from '../../../public/assets/cart.png';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import Link from 'next/link';
import { LoadingOutlined } from '@ant-design/icons';
import { Flex, Spin } from 'antd';

const { Option } = Select;

const Products = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const [pageSize, setPageSize] = useState(8);
  const [selectedCategory, setSelectedCategory] = useState("All"); // Default selected category
  const [cartItems, setCartItems] = useState([]);
  const [addedProductIds, setAddedProductIds] = useState(new Set());
  const [products, setProducts] = useState([]);
  const [categories, setCategories] = useState([]);


const [isLoading, setIsLoading] = useState(true);

useEffect(() => {
  if (products.length > 0) {
    setIsLoading(false);
  }
}, [products]);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await fetch('https://xrace.onrender.com/merchandise/products', {
          headers: {
            'X-Api-Key': 'ZPuKoTX2CohoPNC8noaiefai4lhLTi5U_PFlNvJraB5bG1mpLbWZqVjuNx6gREUA-f4'
          }
        });

        if (!response.ok) {
          throw new Error(`HTTP error! Status: ${response.status}`);
        }

        const data = await response.json();
        console.log('Fetched products:', data.data); // Log fetched data
        setProducts(data.data);

        // Extract categories from products
        const uniqueCategories = Array.from(new Set(data.data.map(product => product.category)));
        setCategories(["All", ...uniqueCategories]); // Including "All" as a default category
      } catch (error) {
        console.error('Error fetching products:', error);
      }
    };

    fetchProducts();
  }, []);

  useEffect(() => {
    const storedCartItems = JSON.parse(localStorage.getItem('cartItems') || '[]');
    setCartItems(storedCartItems);
    setAddedProductIds(new Set(storedCartItems.map(item => item.id)));
  }, []);

  const handlePageChange = (page) => {
    setCurrentPage(page);
  };

  const handlePageSizeChange = (current, size) => {
    setPageSize(size);
  };

  const handleCategoryClick = (category) => {
    setSelectedCategory(category);
  };

  const handleAddToCart = (product) => {
    const updatedCartItems = [...cartItems, product];
    setCartItems(updatedCartItems);
    setAddedProductIds(new Set(updatedCartItems.map(item => item.id)));
    localStorage.setItem('cartItems', JSON.stringify(updatedCartItems));
  };

  const filteredProducts = selectedCategory === "All"
    ? products
    : products.filter(product => product.category === selectedCategory);

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
              <ul className='flex items-center gap-6 uppercase mt-4 text-[8px] lg:text-[16px] border overflow-x-auto'>
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
              <p className='text-[#101828] text-[14px] font-[400] mt-4'>Showing {Math.min(pageSize, filteredProducts.length)} of {filteredProducts.length} Results</p>
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
        {isLoading ? (
        <div className='w-full flex justify-center items-center mt-10'><Flex align="center" gap="middle">
   
        <Spin indicator={<LoadingOutlined style={{ fontSize: 48 }} spin />} />
      </Flex></div>
      ) : (
          Array.isArray(filteredProducts) && filteredProducts.slice((currentPage - 1) * pageSize, currentPage * pageSize).map((product) => (
            <Col key={product.id} xs={12} sm={12} md={8} lg={6}>
              <div className='border-2 lg:border-none p-2 bg-[#FCFCFD]'>
                <Link href={`/products/${product.id}`}>
                  <div className='lg:border-2 border-[#EAECF0]'>
                    <Image alt={product.name} src={product.image || AvatarPlaceholder} width={300} height={300} />
                  </div>
                </Link>
                <div className='flex flex-col items-center'>
                  <p className='text-[#101828] font-[700] text-[16px] mt-2'>{product.name}</p>
                  {/* <p className='text-[#101828] font-[700] text-[16px] mt-2'>{product.category}</p> */}
                  <p className='text-[#101828] font-[400] text-[16px]'>₦{product.amount}</p>
                  <button
                    className={`mt-10 bg-[#fff] border-2 text-[#EF3133] border-[#EF3133] rounded-tl-[8px] rounded-br-[8px] flex w-[100%] lg:w-[191px] h-[48px] items-center justify-center gap-2 ${addedProductIds.has(product.id) ? 'cursor-not-allowed' : ''}`}
                    onClick={() => handleAddToCart(product)}
                    disabled={addedProductIds.has(product.id)}
                  >
                    <p className='uppercase'>{addedProductIds.has(product.id) ? 'Product Added' : 'Add to cart'}</p>
                  </button>
                </div>
              </div>
            </Col>
          )))}
        </Row>
        <div className='flex items-center justify-center mt-6'>
          <div style={{ marginTop: '20px', textAlign: 'center' }} className='rounded border p-2'>
            <Pagination
              current={currentPage}
              pageSize={pageSize}
              total={filteredProducts.length}
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
