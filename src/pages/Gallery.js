import React, { useState, useEffect } from 'react'

function Gallery() {
  const [images, setImages] = useState([])

  useEffect(() => {
    // Generate 12 random images
    const imageArray = Array.from({ length: 12 }, (_, i) => ({
      id: i,
      url: `https://picsum.photos/300?random=${Date.now() + i}`,
    }))
    setImages(imageArray)
  }, [])

  const refreshGallery = () => {
    const imageArray = Array.from({ length: 12 }, (_, i) => ({
      id: i,
      url: `https://picsum.photos/300?random=${Date.now() + i}`,
    }))
    setImages(imageArray)
  }

  return (
    <div style={{ padding: '40px' }}>
      <h1 style={{ textAlign: 'center' }}>Gallery</h1>

      <button
        onClick={refreshGallery}
        style={{
          display: 'block',
          margin: '20px auto',
          padding: '10px 20px',
          cursor: 'pointer',
        }}
      >
        Refresh Gallery
      </button>

      <div
        style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fill, minmax(250px, 1fr))',
          gap: '20px',
          marginTop: '30px',
        }}
      >
        {images.map((image) => (
          <div
            key={image.id}
            style={{ borderRadius: '8px', overflow: 'hidden' }}
          >
            <img
              src={image.url}
              alt={`Gallery ${image.id}`}
              style={{ width: '100%', display: 'block' }}
            />
          </div>
        ))}
      </div>
    </div>
  )
}

export default Gallery
