import React, { useState } from 'react'
import styled from 'styled-components'
import arraySort from 'array-sort'
import Masonry from 'react-masonry-css'
import Select from 'react-select'

import ContentGrid from './styles/ContentGrid.styles'
import PhotoThumb from './PhotoThumb'

const StyledPhotoSection = styled.section`
  padding-top: 64px;
  padding-bottom: 64px;

  // ContentGrid
  > div {
    grid-template-rows: 52px auto;

    > * {
      grid-column: 1 / -1;
    }

    > h2 {
      grid-row: 1 / 2;
    }

    > hr {
      grid-row: 1 / 2;
      border-bottom: 1px solid ${({theme}) => theme.colors.cloudDark};
      align-self: end;
    }

    > div:not(.masonry-grid) {
      grid-column: 10 / -1;
      grid-row: 1 / 2;
    }

    > .masonry-grid {
      width: 100%;
      display: flex;

      > .masonry-grid_column {
        display: flex;
        flex-direction: column;
        gap: 32px;

        :not(:last-child) {
          margin-right: 32px;
        }

        > img {
          width: 100%;
          margin: 0;
        }
      }
    }
  }
`

const breakpointCols = {
  default: 4,
  1300: 3,
  700: 2,
  500: 1
}

// Dropdown (Sort) options
const options = [
  { value: 'user', label: 'User' },
  { value: 'likes', label: 'Likes' },
  { value: 'created_at', label: 'Created at' }
];

const PhotoSection = ({photos, searchTerm}) => {
  const [photosSorted, setPhotosSorted] = useState(photos)
  const [selectedSortOption, setSelectedSortOption] = useState(options[0])  
  
  function handleSortChange(chosenOption) {
    const sort = chosenOption.value
    setPhotosSorted(arraySort(photos.slice(), sort))
    setSelectedSortOption(chosenOption)
    console.log(photosSorted)
  }

  return (
    <StyledPhotoSection>
      <ContentGrid>
        <h2>Photos — {searchTerm} </h2>
        <hr />

        <Select 
          value={selectedSortOption} 
          onChange={handleSortChange} 
          options={options} 
          placeholder='Sort photos'
        />

        <Masonry
        breakpointCols={breakpointCols}
          className='masonry-grid'
          columnClassName='masonry-grid_column'
        >
          { photosSorted.map((photo, index) => (
            <PhotoThumb photo={photo} key={index} />
          ))}
        </Masonry>
      </ContentGrid>
    </StyledPhotoSection>
  )
}

export default PhotoSection
