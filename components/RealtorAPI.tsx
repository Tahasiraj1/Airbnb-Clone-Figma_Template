"use client";

import React, { useState, useEffect } from 'react';
import Image from 'next/image';

interface Property {
  image: string;
  address: string;
  rating: number;
  price: number;
}

const Propertiees = () => {
  const [properties, setProperties] = useState<Property[]>([]);

  useEffect(() => {
    const fetchProperties = async () => {
      try {
        const response = await fetch(
          'https://realtor-search.p.rapidapi.com/properties/v2/list-for-rent?city=New%20York&state_code=NY&limit=10&offset=0&sort=relevance',
          {
            method: 'GET',
            headers: {
              'X-RapidAPI-Key': process.env.NEXT_PUBLIC_RAPID_API_KEY || '',
              'X-RapidAPI-Host': 'realtor-search.p.rapidapi.com',
            },
          }
        );

        if (!response.ok) {
            console.error('Error:', response.status, response.statusText);
            throw new Error(`Network response was not ok: ${response.status} ${response.statusText}`);
          }

        const data = await response.json();

        // Check if the data structure is correct
        setProperties(data?.properties || []);
      } catch (error) {
        console.error('Error fetching properties:', error);
      }
    };

    fetchProperties();
  }, []);

  return (
    <div className="grid lg:grid-cols-4 gap-4 p-4">
      {properties.map((property, index) => (
        <div key={index} className="bg-white p-4 shadow-lg rounded-lg">
          <Image
            src={property.image}
            alt="property"
            width={400}
            height={300}
            className="w-full h-auto object-cover rounded-md"
          />
          <h1 className="text-lg font-semibold mt-2">{property.address}</h1>
          <p className="text-gray-600">Price: ${property.price}</p>
          <p className="text-gray-600">Rating: {property.rating} / 5</p>
        </div>
      ))}
    </div>
  );
};

export default Propertiees;

