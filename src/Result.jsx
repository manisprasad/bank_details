import React from 'react';
import { FaMapMarkerAlt, FaCheck, FaPhone, FaUniversity, FaBeer } from 'react-icons/fa'; // Import required icons

const Result = ({ data,buffering }) => {
 
  if(!data){
    return <h1 className='text-2xl text-center mt-5'>No Data Found</h1>
  }
  return (

    <div className="bg-gray-400 rounded-lg shadow-lg glass p-6 w-11/12 mx-auto">
     
     
      <h1 className="text-2xl font-bold text-center mb-4">{data.BANK}</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 ">
        <div className="mb-4">
          <p className="flex items-center p-2"><span className="mr-2"><FaMapMarkerAlt /></span> <b className='mr-2'>Address  </b> → {data.ADDRESS}</p>
          <p className="flex items-center p-2"><span className="mr-2"><FaUniversity /></span><b className='mr-2'>Bank </b>  → {data.BANK}</p>
          <p className="flex items-center p-2"><span className="mr-2"><FaMapMarkerAlt /></span><b className='mr-2'>Bank Code </b> → {data.BANKCODE}</p>
          <p className="flex items-center p-2"><span className="mr-2"><FaMapMarkerAlt /></span><b className='mr-2'>Branch </b>  → {data.BRANCH}</p>
          <p className="flex items-center p-2"><span className="mr-2"><FaMapMarkerAlt /></span><b className='mr-2'>Center </b>  → {data.CENTRE}</p>
        </div>
        <div>
          <p className="flex items-center p-2"><span className="mr-2"><FaUniversity /></span><b className='mr-2'>City </b>  → {data.CITY}</p>

          <p className="flex items-center p-2"><span className="mr-2"><FaPhone /></span><b className='mr-2'>Contact </b>  → {data.CONTACT}</p>
          <p className="flex items-center p-2"><span className="mr-2"><FaUniversity /></span><b className='mr-2'>District </b>  → {data.DISTRICT}</p>
          <p className="flex items-center p-2"><span className="mr-2"><FaUniversity /></span><b className='mr-2'>IFSC </b>  → {data.IFSC}</p>
          <p className="flex items-center p-2"><span className="mr-2"><FaUniversity /></span><b className='mr-2'>MICR </b>  → {data.MICR}</p>

      
      
      
      
      
        </div>

        
      </div>
      <div className='flex justify-center gap-2 w-auto mx-auto '>
        <p className="flex glass items-center p-2"><span className="mr-2">  </span><b className='mr-2'>UPI </b>     {data.UPI ? <FaCheck style={{ color: 'green' }} /> :<span>&#10060;</span>}</p>
        <p className="flex glass items-center p-2"><span className="mr-2">  </span><b className='mr-2'>RTGS </b>     {data.RTGS ? <FaCheck style={{ color: 'green' }} /> : <span>&#10060;</span>}</p>
        {/* <p className="flex items-center p-2"><span className="mr-2">  </span><b>SMPS </b>     {data.SMPS ? <FaCheck/> : <FaBeer/>}</p> */}
        <p className="flex glass items-center p-2"><span className="mr-2">  </span><b className='mr-2'>NEFT </b>     {data.NEFT ? <FaCheck style={{ color: 'green' }} /> : <span>&#10060;</span>}</p>
        <p className="flex items-center glass p-2"><span className="mr-2">  </span><b className='mr-2'>IMPS </b>     {data.IMPS ? <FaCheck style={{ color: 'green' }} /> :<span>&#10060;</span>}</p>

        </div>
    </div>
  );
};

export default Result;
