'use client'
import SubsTableItem from '@/Components/adminComponents/SubsTableItem';
import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { toast } from 'react-toastify';

const page = () => {

  const [emails, setEmails] = useState([]);

  const fetchEmails = async () => {
    const response = await axios.get('/api/email');
    setEmails(response.data.emails);
    console.log(response.data.emails);
  }

  const deleteEmail = async (mongoId) => {
    const response = await axios.delete('/api/email', {
      params: {
        id: mongoId
      }
    })
    if (response.data.success) {
      toast.success(response.data.msg);
      fetchEmails();
    }
    else {
      toast.error('Error');
    }
  }


  useEffect(() => {
    fetchEmails();
  }, [])

  return (
    <div className='py-10 px-16'>
      <h1 className='font-heading text-xl font-bold text-purple '>All Subscription</h1>
      <div className='relative w-[600px] h-[80vh] overflow-x-hidden mt-6 border border-gray scrollbar-hide'>
        <table className='w-full text-sm text-gray'>
          <thead className='text-sm text-left text-gray uppercase bg-slate-50'>
            <tr>
              <th scope='col' className='px-6 py-4'>
                Email Subscription
              </th>
              <th scope='col' className='px-6 py-4'>
                Date
              </th>
              <th scope='col' className='px-6 py-4'>
                Delete
              </th>
            </tr>
          </thead>
          <tbody>
            {emails.map((item, index) => {
              return <SubsTableItem
                key={index}
                mongoId={item._id}
                deleteEmail={deleteEmail}
                email={item.email}
                date={item.date}
              />
            })}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default page;
