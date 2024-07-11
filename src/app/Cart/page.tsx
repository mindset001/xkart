'use client';
import { useState, useEffect } from 'react';
import { Col, Row, Button, Modal } from 'antd';
import Image from 'next/image';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import Link from 'next/link';
import { MinusOutlined, PlusOutlined, DeleteOutlined } from '@ant-design/icons';
import SimilarProducts from './SimilarProducts';

const Cart = () => {
  const [cartItems, setCartItems] = useState<any[]>([]);
  const [isModalVisible, setIsModalVisible] = useState(false);
  const [itemToRemove, setItemToRemove] = useState<number | null>(null);

  useEffect(() => {
    const storedCartItems = JSON.parse(localStorage.getItem('cartItems') || '[]');
    setCartItems(storedCartItems);
  }, []);

  const handleQuantityChange = (id: number, change: number) => {
    const updatedCartItems = cartItems.map(item => {
      if (item.id === id) {
        const newQuantity = item.quantity + change;
        return { ...item, quantity: Math.max(1, isNaN(newQuantity) ? 1 : newQuantity) };
      }
      return item;
    });
    setCartItems(updatedCartItems);
    localStorage.setItem('cartItems', JSON.stringify(updatedCartItems));
  };

  const showRemoveConfirmation = (id: number) => {
    setItemToRemove(id);
    setIsModalVisible(true);
  };

  const handleRemoveItem = () => {
    if (itemToRemove !== null) {
      const updatedCartItems = cartItems.filter(item => item.id !== itemToRemove);
      setCartItems(updatedCartItems);
      localStorage.setItem('cartItems', JSON.stringify(updatedCartItems));
      setIsModalVisible(false);
      setItemToRemove(null);
    }
  };

  // Function to convert price string to number
  const convertPriceToNumber = (price: string) => {
    return parseFloat(price.replace(/[₦,]/g, ''));
  };

  return (
    <main className='w-full flex flex-col items-center justify-center'>
      <Navbar />
      <div className="w-[90%] container mt-10">
        <Link href="/Mart">
          <Button type="link" className='text-[#101828]'>
            &larr; Back
          </Button>
        </Link>
        <h1 className='text-[#101828] font-[600] text-[24px] uppercase'>Cart</h1>
        <Row gutter={[16, 16]} className='border p-4'>
          {cartItems.map((item) => (
            <Col key={item.id} span={24} className='border-b p-2 flex items-center justify-between'>
              <div className='flex items-center'>
                <Image alt={item.name} src={item.image} width={100} height={100} />
                <div className='ml-4'>
                  <p className='text-[#101828] font-[700] text-[16px]'>{item.name}</p>
                  <p className='text-[#101828] font-[400] text-[14px]'>₦{(convertPriceToNumber(item.price) * item.quantity).toLocaleString()}</p>
                </div>
              </div>
              <div className='flex items-center'>
                <Button 
                  icon={<MinusOutlined />} 
                  onClick={() => handleQuantityChange(item.id, -1)} 
                  disabled={item.quantity === 1}
                  className='bg-[#F2F4F7] rounded-[56px] border-none'
                />
                <p className='mx-2 text-[#101828] font-[700] text-[16px]'>{isNaN(item.quantity) ? 1 : item.quantity}</p>
                <div className=''>
                <Button icon={<PlusOutlined />} onClick={() => handleQuantityChange(item.id, 1)} className='bg-[#F2F4F7] rounded-[56px] border-none'/>
                </div>
                <Button icon={<DeleteOutlined />} className='ml-4 border-none' onClick={() => showRemoveConfirmation(item.id)} />
              </div>
            </Col>
          ))}
        </Row>
        <div className='flex items-center justify-center mt-6'>
          <button  className='mt-10  border-2 text-[#fff] bg-[#EF3133] rounded-tl-[16px] rounded-br-[18px] flex w-[100%] lg:w-[191px] h-[48px] items-center justify-center gap-2'>
            <Link href='Checkout'>Proceed to Checkout</Link>
          </button>
        </div>
      </div>
      <SimilarProducts/>
      <div className='w-full mt-20'>
        <Footer />
      </div>

      <Modal
        title="Remove Product"
        visible={isModalVisible}
        onOk={handleRemoveItem}
        onCancel={() => setIsModalVisible(false)}
        okText="Remove"
        cancelText="Cancel"
        okButtonProps={{ className: 'bg-[#EF3133] text-white' }}
      >
        <p>Are you sure you want to remove the product? This action cannot be undone.</p>
      </Modal>
    </main>
  );
};

export default Cart;
