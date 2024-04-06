import React from "react";
import { useForm } from "react-hook-form";

const Form = () => {
  const { register, handleSubmit, formState: { errors } } = useForm();

  const interests = ["Action", "Adventure", "RPG", "Strategy", "Simulation", "Puzzle", "Other"];

  const onSubmit = (data) => {
    console.log(data);
  };

  return (
    <div className="flex flex-col justify-center items-center bg-black p-6 rounded-md">
      <h1 className="text-3xl font-bold text-white mb-6">Gamer Profile</h1>
      <form onSubmit={handleSubmit(onSubmit)} className="w-full max-w-md">
        <div className="mb-4">
          <label htmlFor="city" className="block text-gray-300">City</label>
          <input
            type="text"
            id="city"
            {...register("city", { required: true })}
            className="mt-1 block w-full bg-gray-800 border-gray-600 rounded-md shadow-sm focus:ring-teal-500 focus:border-teal-500 sm:text-sm text-white h-8 p-3"
          />
          {errors.city && <span className="text-red-500">City is required</span>}
        </div>
        <div className="mb-4">
          <label htmlFor="address" className="block text-gray-300">Address</label>
          <input
            type="text"
            id="address"
            {...register("address", { required: true })}
            className="mt-1 block w-full bg-gray-800 border-gray-600 rounded-md shadow-sm focus:ring-teal-500 focus:border-teal-500 sm:text-sm text-white h-8 p-3"
          />
          {errors.address && <span className="text-red-500">Address is required</span>}
        </div>
        <div className="mb-4">
          <label htmlFor="age" className="block text-gray-300">Age</label>
          <input
            type="number"
            id="age"
            {...register("age", { required: true })}
            className="mt-1 block w-full bg-gray-800 border-gray-600 rounded-md shadow-sm focus:ring-teal-500 focus:border-teal-500 sm:text-sm text-white h-8 p-3"
          />
          {errors.age && <span className="text-red-500">Age is required</span>}
        </div>
        <div className="mb-4">
          <label className="block text-gray-300 mb-2">Interests</label>
          <div className="grid grid-cols-2 gap-2">
            {interests.map((interest, index) => (
              <div key={index} className="flex items-center text-white">
                <input
                  type="checkbox"
                  id={`interest-${index}`}
                  value={interest}
                  {...register(`interests[${index}]`)}
                  className="mr-2 text-teal-500 focus:ring-teal-500"
                />
                <label htmlFor={`interest-${index}`}>{interest}</label>
              </div>
            ))}
          </div>
          {errors.interests && <span className="text-red-500">At least one interest is required</span>}
        </div>
        <div className="mt-10">
          <button type="submit" className="bg-teal-500 text-white py-2 px-4 rounded-md hover:bg-teal-600 focus:outline-none focus:ring-2 focus:ring-teal-500 focus:ring-offset-2 w-full">
            Submit
          </button>
        </div>
      </form>
    </div>
  );
};

export default Form;
