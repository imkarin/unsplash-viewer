import React from 'react'

const PhotoThumb = ({photo}) => {
  return (
    <img 
      alt={photo.alt_description}
      src={photo.urls.regular}
    />
  )
}

export default PhotoThumb
