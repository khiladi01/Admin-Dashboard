import Cartbox from '../components/Cart.js'
import { Link } from 'react-router-dom'
import { useState } from 'react';

const Cart = () => {

    const [count , setCount] = useState(Cartbox.map(() => 0));

    const Incrementcount = (index) => {
        setCount((prev) => prev.map((count , i) => (i === index ? count + 1 : count)));
    };

    const Decrementcount = (index) => {
        setCount((prev) => prev.map((count , i) => (i === index && count > 0 ? count - 1 : count)));
    };

    const Totalprice = count.reduce(
        (total, itemcount, index) => total + itemcount * Cartbox[index].price, 0
    );

    return (
        <> 
        <div className='min-h-screen w-full flex flex-col items-center justify-start p-4 select-none'>
            <div className='w-full max-w-[1200px] shadow p-4'>
                {/* Header */}
                <div className='w-full flex items-center mb-4'>
                    <header className='text-3xl text-[#2f3c7e] font-medium animate-slide-left-to-right first-letter:text-rose-400 first-letter:text-4xl'>
                        Cart
                    </header>
                </div>

                {/* Cart Items */}
                <div className='space-y-6'>
                    {Cartbox.map((item,index) => {
                        return(
                            <div key={index} className='flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4'>
                                <Link to='/' className='flex-shrink-0'>
                                    <img src={item.img} alt={item.name} className='h-[150px] w-[150px] shadow object-cover' />
                                </Link>
                                <p className='text-md text-[#2f3c7e] italic'>{item.name}</p>
                                <p className='text-md text-[#2f3c7e] italic'>{item.brand}</p>
                                <p className='text-md font-medium text-[#2f3c7e]'>Rs {item.price}</p>
                                <div className="flex items-center gap-2">
                                    <button onClick={() => Decrementcount(index)} className='h-[30px] w-[60px] shadow cursor-pointer'>
                                        - 1
                                    </button>
                                    <span>{count[index]}</span>
                                    <button onClick={() => Incrementcount(index)} className='h-[30px] w-[40px] shadow cursor-pointer'>
                                        +
                                    </button>
                                </div>
                            </div>
                        )
                    })}
                </div>

                {/* Total Price */}
                <div className='flex flex-col sm:flex-row justify-center items-center mt-6 gap-4'>
                    <label className='text-lg text-[#2f3c7e] font-medium'>Total</label>
                    <input
                        type="text"
                        value={Totalprice}
                        disabled
                        className='w-[200px] h-[40px] pl-2 shadow outline-0 border border-rose-100'
                    />
                </div>
            </div>
        </div>
        </>
    )
}

export default Cart;
