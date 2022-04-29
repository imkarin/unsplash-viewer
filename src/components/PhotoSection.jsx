import React from 'react'
import styled from 'styled-components'
import Masonry from 'react-masonry-css'

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

const PhotoSection = ({photos, searchTerm}) => {
  return (
    <StyledPhotoSection>
      <ContentGrid>
        <h2>Photos — {searchTerm} </h2>
        <hr />

        <Masonry
        breakpointCols={breakpointCols}
          className='masonry-grid'
          columnClassName='masonry-grid_column'
        >
          { photos.map((photo, index) => (
            <PhotoThumb photo={photo} key={index} />
          ))}
        </Masonry>
      </ContentGrid>
    </StyledPhotoSection>
  )
}

export default PhotoSection
