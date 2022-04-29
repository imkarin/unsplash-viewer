import React from 'react'
import ContentGrid from './styles/ContentGrid.styles'
import PhotoThumb from './PhotoThumb'

const PhotoSection = ({photos, searchTerm}) => {
  return (
    <section>
      <ContentGrid>
        <h2>Photos - {searchTerm} </h2>
        { photos.map((photo, index) => (
          <PhotoThumb photo={photo} key={index} />
        ))}
      </ContentGrid>
    </section>
  )
}

export default PhotoSection
