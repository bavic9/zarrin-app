"use client"
import React from 'react';

const page = () => {
  return (
    <div className='blogListContainer'>
      <h1>All Blogs</h1>
      <div className='tableCont'>
        <table>
          <thead>
            <tr>
              <th scope='col' className='tableHead'>
                Blog Title
              </th>
              <th scope='col' className='tableHead'>
                Date
              </th>
              <th scope='col' className='tableHead'>
                Action
              </th>
            </tr>
          </thead>
        </table>
      </div>
    </div>
  );
}

export default page;
