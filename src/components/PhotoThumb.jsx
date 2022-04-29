import React from 'react'
import styled from 'styled-components'

const StyledPhotoThumb = styled.article`
  position: relative;

  > .overlay {
    position: absolute;
    bottom: 4px;
    left: 0;
    padding: 16px;
    height: 100%;
    width: 100%;
    display: flex;
    align-items: end;
    background: linear-gradient(0deg, rgba(0,0,0,1) 0%, rgba(0,0,0,0) 100%);
    opacity: 0;
    transition: 0.3s ease-in-out;
    cursor: pointer;

    > .user {
      display: flex;
      flex-direction: row;
      align-items: center;
      gap: 12px;

      > img {
        border-radius: 100%;
      }
    }
  }

  :hover {
    > .overlay {
      opacity: 1;
    }
  }
`

const PhotoThumb = ({photo}) => {
  return (
    <StyledPhotoThumb>
      <img 
        alt={photo.alt_description}
        src={photo.urls.regular}
        />
      
      <div className='overlay'>
        <div className='user'>
          <img 
            src={photo.user.profile_image.small}
            alt={photo.user.name} />
          <p className='body-smaller'>
            {photo.user.name}
          </p>
        </div>
      </div>
    </StyledPhotoThumb>
  )
}

export default PhotoThumb
