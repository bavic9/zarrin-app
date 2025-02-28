"use client"
import { blog_data } from '@/public/assets';
import React, { useEffect, useState } from 'react';
import { useParams } from 'next/navigation';
import Image from 'next/image';
import Card from '@/Components/card/Card';
import Link from 'next/link';
import axios from 'axios';

const page = () => {

    const params = useParams();
    const [data, setData] = useState(null);

    // // const fetchBlogData = async () => {
    // //    const response = await axios.get('/api/blog',{
    // //     params:{
    // //         id:params.id
    // //     }
    // //    })

    // //    setData(response.data);
    // // }

    // useEffect(()=>{
    //     fetchBlogData();
    // },[])

    // useEffect(() => {
    //     if (params) {
    //         const blogId = Number(params.id); // Extract and parse the id from params
    //         const blogPost = blog_data.find(item => item.id === blogId);
    //         if (blogPost) {
    //             setData(blogPost);
    //         }
    //     }
    // }, [params]);


  useEffect(() => {
    const fetchBlogPost = async () => {
      try {
        const response = await axios.get('/api/blog', {
          params: {
            id: params.id, 
          },
        });
        setData(response.data);
      } catch (error) {
        console.error('Failed to fetch blog post', error);
      }
    };

    fetchBlogPost();
  }, [params.id]);


  
  const [blogs, setBlogs] = useState([]);

  const fetchBlogs = async () => {
      const response = await axios.get('/api/blog');
      setBlogs(response.data.blogs);
      console.log(response.data.blogs);
  }


  useEffect(() => {
      fetchBlogs();
  }, [])

    return (
        data ? <>
            <div>
                <div className='md:py-10 py-5 w-[90%] md:w-[500px] m-auto font-heading'>
                    <div className='flex items-center gap-3 mb-4'>
                        <h1 className='font-semibold text-base text-black'>{data.category}</h1>
                        <p className='text-gray text-sm'>16 March 2024</p>
                    </div>
                    <h1 className='font-heading text-2xl md:text-4xl font-bold mb-5'>{data.title}</h1>
                    <div className='relative h-[250px] md:h-[350px] w-full md:w-[500px] m-auto my-10'>
                        <Image src={data.image} alt='' fill />
                    </div>
                    <div className='blog-content text-lg text-gray mb-5 m-auto font-semibold' dangerouslySetInnerHTML={{__html:data.description}} ></div>
                    <p className='text-sm text-gray mb-5 m-auto'>
                        Google has been investing in AI for many years and bringing its benefits to individuals,
                        businesses and communities. Whether it’s publishing state-of-the-art research, building helpful
                        products or developing tools and resources that enable others, we’re committed to making AI accessible to everyone.
                        <br />
                        <br />
                        We’re now at a pivotal moment in our AI journey. Breakthroughs in generative AI are
                        fundamentally changing how people interact with technology — and at Google, we’ve been
                        responsibly developing large language models so we can safely bring them to our products.
                        Today, we’re excited to share our early progress. Developers and businesses can now try new APIs
                        and products that make it easy, safe and scalable to start building with Google’s best AI models
                        through Google Cloud and a new prototyping environment called MakerSuite. And in Google Workspace,
                        we’re introducing new features that help people harness the power of generative AI to create, connect and collaborate.
                    </p>

                    <div className='flex items-center md:h-[50px] gap-3 my-5'>
                        <div className='w-[5px] h-full bg-purple hidden md:block'></div>
                        <p className='text-base text-gray italic m-auto'>
                            “People worry that computers will get too smart and take over the world, but the real problem is that they’re too stupid
                            and they’ve already taken over the world.”
                            <br />
                            <span className='font-bold'>– Pedro Domingos</span>
                        </p>
                    </div>

                    <p className='text-sm text-gray my-5 m-auto'>
                        More than 3 billion people already benefit from AI-powered features in Google Workspace, whether
                        it’s using Smart Compose in Gmail or auto-generated summaries in Google Docs. Now, we’re excited
                        to take the next step and bring a limited set of trusted testers a new set of features that makes
                        the process of writing even easier. In Gmail and Google Docs, you can simply type in a topic you’d
                        like to write about, and a draft will be instantly generated for you. So if you’re a manager onboarding
                        a new employee, Workspace saves you the time and effort involved in writing that first welcome email.
                        From there, you can elaborate upon or abbreviate the message or adjust the tone to be more playful or
                        professional — all in just a few clicks. We’ll be rolling out these new experiences to testers in the coming weeks.
                    </p>

                </div>
                <div className='w-[90%] m-auto'>
                    <div className='flex items-center justify-between mb-10'>
                        <h1 className='md:text-3xl text-xl text-black font-bold font-heading'>Popular Post</h1>
                        <button className='text-white md:px-8 px-5 py-3 text-base bg-purple border rounded-lg transition ease-in-out duration-500 hover:bg-transparent hover:text-purple hover:border-purple hover:shadow-sm'>
                            <Link href='/blog'>View All</Link>
                        </button>
                    </div>
                    <div className='md:my-16 flex md:flex-row flex-wrap flex-col items-center justify-between'>
                        {
                            blogs.slice(0, 3).map((item, index) => {
                                return <Card
                                    key={index}
                                    image={item.image}
                                    title={item.title}
                                    description={item.description}
                                    id={item._id}
                                    category={item.category}
                                />
                            })
                        }
                    </div>
                </div>
            </div>
        </> : <></>
    );
}


export default page;
