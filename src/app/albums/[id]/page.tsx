'use client'
import React from 'react';

const Albums = async(props:any) => {
  const url = await fetch(`https://jsonplaceholder.typicode.com/users/${props.params.id}/albums`)
  const albums = await url.json()

  const handleClick = (title:any) => {
    console.log(`Clicked album: ${title}`);
  };

  return (
    <div className="p-6 max-w-4xl mx-auto">
        <h1 className="text-3xl font-bold mb-8">Albums</h1>
        <div className="grid gap-6">
      {albums.map((album: { id: any; title: any; }) => (
          <div 
          key={album.id} 
          onClick={() => handleClick(album.title)}
          className="cursor-pointer transform transition-all duration-300 hover:scale-105 hover:shadow-xl active:scale-95 active:bg-gray-50"
          >
          <a href={`/photos/${album.id}`}>
          <div className="p-4 bg-white rounded-lg shadow-md">
            <div className="text-lg font-bold">{album.title}</div>
          </div>
          </a>
        </div>
      ))}
      </div>
    </div>
  );
};

export default Albums;
