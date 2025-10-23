import React, { useState } from 'react'

function Home() {
  const [imageUrl, setImageUrl] = useState('https://picsum.photos/400?random=1')
  const [imageSize, setImageSize] = useState(400)

  const getRandomImage = () => {
    const timestamp = Date.now()
    setImageUrl(`https://picsum.photos/${imageSize}?random=${timestamp}`)
  }

  return (
    <div style={{ textAlign: 'center', padding: '40px' }}>
      <h1>Home - Random Image</h1>

      <img
        src={imageUrl}
        alt="Random"
        style={{ maxWidth: '100%', borderRadius: '8px', marginTop: '20px' }}
      />

      <div style={{ marginTop: '20px' }}>
        <label>
          Size: {imageSize}px
          <input
            type="range"
            min="200"
            max="800"
            value={imageSize}
            onChange={(e) => setImageSize(e.target.value)}
            style={{ marginLeft: '10px' }}
          />
        </label>
      </div>

      <button
        onClick={getRandomImage}
        style={{ marginTop: '20px', padding: '10px 20px', cursor: 'pointer' }}
      >
        Get New Image
      </button>
    </div>
  )
}

export default Home
