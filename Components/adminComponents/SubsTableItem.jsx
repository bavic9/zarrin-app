import Image from 'next/image';
import React from 'react';

const SubsTableItem = ({email,date,mongoId,deleteEmail}) => {

    const emailDate = new Date(date);

    return (
        <tr className='w-full bg-white border-b border-gray text-base font-heading hover:bg-purple hover:text-white transition ease-in-out duration-700'>
            <th scope='row' className='px-6 py-5 text-start font-medium whitespace-nowrap'>
                {email?email: 'No email'}
            </th>
            <td className='px-6 py-5'>
                {emailDate.toDateString()}
            </td>
            <td onClick={() => deleteEmail(mongoId)} className='px-6 py-5 cursor-pointer hover:scale-y-150 transition ease-in-out duration-300'>
                <Image src='/delete.png' alt='' width={15} height={15} />
            </td>
        </tr>
    );
}

export default SubsTableItem;
