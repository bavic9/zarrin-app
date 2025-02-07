import {ConnectDB} from "@/lib/config/db"
import BlogModel from "@/lib/models/BlogModels";
// const { NextResponse } = require("next/server")
import {writeFile} from 'fs/promises'
// import Cors from 'cors'
import { NextResponse } from 'next/server';



const handleCors = (request) => {
    const response = NextResponse.next();

    response.headers.set('Access-Control-Allow-Origin', '*'); // Set to your domain in production
    response.headers.set('Access-Control-Allow-Methods', 'GET, POST, OPTIONS');
    response.headers.set('Access-Control-Allow-Headers', 'Content-Type, Authorization');

    if (request.method === 'OPTIONS') {
        return response;
    }
    
    return response;
};

const LoadBD = async () => {
    await ConnectDB();
}

LoadBD();

//api endpoint to get all blogs
export async function GET(request) {

    const blogId = request.nextUrl.searchParams.get("id");
    if (blogId) {
        const blog = await BlogModel.findById(blogId);
        return NextResponse.json(blog);
    }
    else {
        const blogs = await BlogModel.find({});
        return NextResponse.json({blogs})
    }    
}

//Api endpoint for uploading blogs
export async function POST(request) {
    try {
        const corsResponse = handleCors(request);
        if (request.method === 'OPTIONS') {
            return corsResponse;  // Return immediately for OPTIONS requests
        }


        await ConnectDB();

        const formData = await request.formData();
        const timestamp = Date.now();

        const image = formData.get('image');
        const imageByData = await image.arrayBuffer();
        const buffer = Buffer.from(imageByData);
        const path = `./public/${timestamp}_${image.name}`;

        await writeFile(path, buffer);
        const imgUrl = `/${timestamp}_${image.name}`;

        const blogData = {
            title: `${formData.get('title')}`,
            description: `${formData.get('description')}`,
            category: `${formData.get('category')}`,
            image: `${imgUrl}`,
            date: new Date().toISOString(),  // Using current date and time
        };

        // Saving blog entry to the database
        await BlogModel.create(blogData);
        console.log('Blog saved successfully');

        return NextResponse.json({ success: true, msg: 'Blog Added' });
    } catch (error) {
        console.error('Error saving blog:', error);
        return NextResponse.json({ success: false, msg: 'Failed to add blog', error: error.message });
    }
}