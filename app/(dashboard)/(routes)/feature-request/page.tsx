'use client'

import { Heading } from '@/components/heading';
import { Lightbulb, MessageSquare } from 'lucide-react';
// pages/FeaturePage.tsx
import React from 'react';
import { useForm, SubmitHandler } from 'react-hook-form';

type FeatureRequestForm = {
  title: string;
  description: string;
  category: string;
};

export default function FeaturePage() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FeatureRequestForm>();

  const onSubmit: SubmitHandler<FeatureRequestForm> = async (data) => {
    try {
      const response = await fetch('/api/submitFeatureRequest', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(data),
      });

      if (response.ok) {
        // Handle successful submission (e.g., show a success message)
        alert('Feature request submitted successfully!');
      } else {
        // Handle errors (e.g., display an error message)
        alert('Failed to submit feature request. Please try again later.');
      }
    } catch (error) {
      console.error('Error submitting feature request:', error);
    }
  };

  return (

    <div className=''>   
    <div className='bg-[black]/30 rounded-lg text-white'>
    <Heading
      title="Have an idea?"
      description="Let's build it together"
      icon={Lightbulb}
      iconColor="text-[yellow]"
      bgColor="bg-black-500/10"
    />
</div>

      <div className="min-h-screen flex items-center justify-center text-white w-[80%] absolute bottom-0 -mb-[25]">
        {/* <div className="bg-white/10 p-8 rounded shadow-lg w-96">
          <h1 className="text-2xl font-semibold mb-4">Submit a Feature Request</h1>
          <form onSubmit={handleSubmit(onSubmit)} className='mt-0 pt-0 bottom-0'>
            <div className="">
              <label htmlFor="title" className="block text-gray-700 font-bold mb-2">
                Title
              </label>
              <input
                id="title"
                {...register('title', { required: true })}
                className="w-full p-2 border rounded"
              />
              {errors.title && (
                <span className="text-red-600 text-sm">Title is required</span>
              )}
            </div>
            <div className="mb-4">
              <label htmlFor="description" className="block text-gray-700 font-bold mb-2">
                Description
              </label>
              <textarea
                id="description"
                {...register('description', { required: true })}
                className="w-full p-2 border rounded"
                rows={4}
              />
              {errors.description && (
                <span className="text-red-600 text-sm">Description is required</span>
              )}
            </div>
            <div className="mb-4">
              <label htmlFor="category" className="block text-gray-700 font-bold mb-2">
                Category
              </label>
              <input
                id="category"
                {...register('category', { required: true })}
                className="w-full p-2 border rounded"
              />
              {errors.category && (
                <span className="text-red-600 text-sm">Category is required</span>
              )}
            </div>
            <button
              type="submit"
              className="w-full bg-[#3490dc] text-white p-2 rounded hover:bg-[#2779bd] transition duration-300"
            >
              Submit
            </button>
          </form>
        </div> */}
        
        <p mailto='info@simplyai.pro'>Email us at: <a mailto='info@simplyai.pro' className='text-[skyblue]'>info@simplyai.pro</a></p>
      </div>
  

    </div>

  );
}
