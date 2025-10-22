import React, { useState } from 'react'
import './App.css'

function App() {
  const [imageSize, setImageSize] = useState(400)
  const [grayscale, setGrayscale] = useState(false)
  const [blur, setBlur] = useState(0)

  // Generate random image URL
  const getRandomImage = () => {
    const timestamp = Date.now() // Force new image on refresh
    let url = `https://picsum.photos/${imageSize}/${imageSize}?random=${timestamp}`

    if (grayscale) url += '&grayscale'
    if (blur > 0) url += `&blur=${blur}`

    return url
  }

  const [imageUrl, setImageUrl] = useState(getRandomImage())

  return (
    <div className="App">
      <header className="App-header">
        <h1>Lorem Picsum Gallery</h1>

        <img
          src={imageUrl}
          alt="Random from Lorem Picsum"
          style={{ maxWidth: '100%', borderRadius: '8px' }}
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
            />
          </label>

          <label style={{ marginLeft: '20px' }}>
            <input
              type="checkbox"
              checked={grayscale}
              onChange={(e) => setGrayscale(e.target.checked)}
            />
            Grayscale
          </label>

          <label style={{ marginLeft: '20px' }}>
            Blur: {blur}
            <input
              type="range"
              min="0"
              max="10"
              value={blur}
              onChange={(e) => setBlur(e.target.value)}
            />
          </label>
        </div>

        <button
          onClick={() => setImageUrl(getRandomImage())}
          style={{ marginTop: '20px', padding: '10px 20px', cursor: 'pointer' }}
        >
          Get New Image
        </button>
      </header>
    </div>
  )
}

export default App
