'use client';
import { useState, useEffect } from 'react';
import { Col, Row, Input, Button, Select } from 'antd';
import Link from 'next/link';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

const { Option } = Select;

const Checkout = () => {
  const [cartItems, setCartItems] = useState<any[]>([]);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phoneNumber: '',
    state: '',
    address: ''
  });

  useEffect(() => {
    const storedCartItems = JSON.parse(localStorage.getItem('cartItems') || '[]');
    setCartItems(storedCartItems);
  }, []);

  const convertPriceToNumber = (price: string) => {
    return parseFloat(price.replace(/[₦,]/g, ''));
  };

  const handleChange = (e: any) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleStateChange = (value: string) => {
    setFormData({ ...formData, state: value });
  };

  const calculateTotal = () => {
    const subTotal = cartItems.reduce((total, item) => total + convertPriceToNumber(item.price) * item.quantity, 0);
    const deliveryFee = 2000; // Example delivery fee
    return subTotal + deliveryFee;
  };

  return (
    <main className='w-full flex flex-col items-center justify-center'>
      <Navbar />
      <div className="w-[90%] container mt-10">
        <Link href="/Cart">
          <Button type="link" className='text-[#101828]'>
            &larr; Back
          </Button>
        </Link>
        <h1 className='text-[#101828] font-[600] text-[24px] uppercase'>Checkout</h1>
        <div className='flex flex-col lg:flex-row justify-between'>
          <div className='w-full lg:w-[50%]'>
            <form className=' p-4'>
              <label className='block mb-2'>Name</label>
              <Input 
                name='name'
                value={formData.name}
                onChange={handleChange}
                className='mb-4 rounded-[56px]'
              />
              <label className='block mb-2'>E-mail</label>
              <Input 
                name='email'
                value={formData.email}
                onChange={handleChange}
                className='mb-4 rounded-[56px]'
              />
              <label className='block mb-2'>Phone Number</label>
              <Input 
                name='phoneNumber'
                value={formData.phoneNumber}
                onChange={handleChange}
                className='mb-4 rounded-[56px]'
              />
              <label className='block mb-2'>State</label>
              <Select
                value={formData.state}
                onChange={handleStateChange}
                className='mb-4 w-full rounded-[56px]'
              >
                <Option value="State 1">State 1</Option>
                <Option value="State 2">State 2</Option>
                <Option value="State 3">State 3</Option>
              </Select>
              <label className='block mb-2'>Address</label>
              <Input.TextArea
                name='address'
                value={formData.address}
                onChange={handleChange}
                className='mb-4 rounded-[56px]'
              />
             <div className='w-full flex justify-center'>
             <button className='hidden  mt-10 bg-[#EF3133] border-2 text-[#fff] font-[500] border-[#EF3133] rounded-tl-[16px] rounded-br-[16px] lg:flex w-[100%] lg:w-[191px] h-[48px] items-center justify-center gap-2'>
                Continue to Pay
              </button>
             </div>
            </form>
          </div>
          <div className='w-full lg:w-[30%]'>
            <div className='border p-4'>
              <h2 className='text-[#101828] font-[600] text-[18px] mb-4'>Order Details</h2>
              {cartItems.map(item => (
                <div key={item.id} className='flex justify-between mb-2'>
                  <span>{item.name}</span>
                  <span>{item.quantity}</span>
                  <span>₦{(convertPriceToNumber(item.price) * item.quantity).toLocaleString()}</span>
                </div>
              ))}
              <div className='flex justify-between mt-4'>
                <span>Sub-Total</span>
                <span>₦{cartItems.reduce((total, item) => total + convertPriceToNumber(item.price) * item.quantity, 0).toLocaleString()}</span>
              </div>
              <div className='flex justify-between mt-2'>
                <span>Delivery Fee</span>
                <span>₦2,000</span>
              </div>
              <div className='flex justify-between mt-4 font-bold'>
                <span>Total Amount</span>
                <span>₦{calculateTotal().toLocaleString()}</span>
              </div>
            </div>
          </div>
          <button className='lg:hidden mb-10 mt-10 bg-[#EF3133] border-2 text-[#fff] font-[500] border-[#EF3133] rounded-tl-[16px] rounded-br-[16px] flex w-[100%] lg:w-[191px] h-[48px] items-center justify-center gap-2'>
                Continue to Pay
              </button>
        </div>
      </div>
      <div className='w-full'>
      <Footer />
      </div>
    </main>
  );
};

export default Checkout;
