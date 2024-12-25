import React from 'react';

interface PhotosProps {
  params: {
    id: string;
  };
}

const Photos = async(props:PhotosProps) => {
  const url = await fetch(`https://jsonplaceholder.typicode.com/photos/${props.params.id}`)
  const photoData = await url.json()

  return (
    <div className="max-w-4xl mx-auto p-4">
      <div className="bg-white rounded-lg shadow-lg p-6">
        <h2 className="text-xl font-bold mb-4">{photoData.title}</h2>
        <img 
          src={photoData.url}
          alt={photoData.title}
          className="w-full rounded-lg mb-4"
        />
        <img 
          src={photoData.thumbnailUrl}
          alt="Thumbnail"
          className="rounded-lg"
        />
      </div>
    </div>
  );
};

export default Photos;