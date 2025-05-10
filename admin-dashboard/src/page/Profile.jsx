import { Link } from 'react-router-dom';
import Profilecard from '../components/Profile.js';
import Order from '../components/Order.js';
import Recentorder from '../components/Recentorder.js';

const Profile = () => {
  return (
    <>
      <div className='min-h-screen w-full bg-white flex justify-center items-center select-none p-2 md:p-4'>
        <div className='flex flex-col lg:flex-row gap-4 w-full max-w-[1200px]'>
          {/* Profile Section */}
          <div className='shadow p-4 w-full lg:w-1/2'>
            <div className='h-[50px] w-full text-center text-2xl font-medium text-[#2f3c7e]'>
              <header>Profile</header>
            </div>
            <div>
              {Profilecard.map((item, index) => {
                return (
                  <div key={index}>
                    <img
                      src={item.img}
                      alt='userimage'
                      className='h-[100px] w-[100px] shadow rounded-full mx-auto'
                    />
                    <p className='text-md font-medium mt-2 text-center text-slate-500'>{item.name}</p>
                    <p className='text-md font-light text-center text-slate-500'>{item.member}</p>
                    <div className='mt-6 text-left h-[50px] w-full text-lg font-medium text-[#2f3c7e]'>
                      <header>Detail</header>
                    </div>
                    <div>
                      <p className='text-md font-normal text-slate-500'>
                        <strong>Phone :</strong> {item.phone}
                      </p>
                      <p className='text-md font-normal text-slate-500 mt-[6px]'>
                        <strong>Alt Phone :</strong> {item.alternatenumber}
                      </p>
                      <p className='text-md font-normal text-slate-500 mt-[6px]'>
                        <strong>Email :</strong> {item.email}
                      </p>
                      <p className='text-md font-normal text-slate-500 mt-[6px]'>
                        <strong>Address :</strong> {item.address}
                      </p>
                      <p className='text-md font-normal text-slate-500 mt-[6px]'>
                        <strong>Pincode :</strong> {item.pincode}
                      </p>
                    </div>
                    <div className='mt-[17px] flex justify-center'>
                      <Link
                        to=''
                        className='flex justify-center items-center w-[200px] h-[30px] text-[#2f3c7e] shadow-md shadow-rose-300 hover:shadow-rose-400 bg-transparent rounded-full'
                      >
                        Edit
                      </Link>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>

          {/* Orders Section */}
          <div className='shadow p-4 w-full lg:w-1/2'>
            <div className='h-[250px] w-full'>
              <div className='h-[50px]'>
                <p className='text-lg text-[#2f3c7e] font-medium'>Order</p>
              </div>
              {Order.map((item, index) => {
                return (
                  <div key={index}>
                    <div className='h-[200px] w-full'>
                      <div className='h-[80px] w-full flex flex-wrap items-center justify-between gap-2'>
                        <img src={item.img} alt='item.name' className='w-[60px] h-[60px]' />
                        <Link to='/'>
                          <p className='text-sm text-[#2f3c7e]'>{item.name}</p>
                        </Link>
                        <p className='text-sm text-[#2f3c7e]'>{item.date}</p>
                        <p className='text-sm text-[#2f3c7e]'>Rs {item.price}</p>
                      </div>
                      <button className='w-[150px] h-[30px] shadow rounded-full'>
                        <Link to='' className='text-sm font-medium text-rose-500'>
                          Track Order
                        </Link>
                      </button>
                    </div>
                  </div>
                );
              })}
            </div>

            <hr />

            {/* Recent Order */}
            <div className='h-[250px] w-full'>
              <div className='h-[50px]'>
                <p className='text-lg text-[#2f3c7e] font-medium'>Recent Order</p>
              </div>
              {Recentorder.map((item, index) => {
                return (
                  <div key={index}>
                    <div className='h-[200px] w-full'>
                      <div className='h-[80px] w-full flex flex-wrap items-center justify-between gap-2'>
                        <img src={item.img} alt={item.name} className='h-[60px] w-[60px]' />
                        <Link to='/'>
                          <p className='text-sm text-[#2f3c7e]'>{item.name}</p>
                        </Link>
                        <p className='text-sm text-[#2f3c7e]'>{item.date}</p>
                        <p className='text-sm text-[#2f3c7e]'>Rs {item.price}</p>
                      </div>
                      <button className='w-[150px] h-[30px] shadow rounded-full'>
                        <Link
                          to=''
                          className='w-[150px] h-[30px] text-sm font-medium text-rose-500'
                        >
                          Download Invoice
                        </Link>
                      </button>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Profile;
