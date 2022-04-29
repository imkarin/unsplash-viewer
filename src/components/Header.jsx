import React from 'react'
import styled from 'styled-components'
import ContentGrid from './styles/ContentGrid.styles'

const StyledHeader = styled.header`
  position: relative;
  margin: 0;
  width: 100vw;
  height: 480px;
  background-image: url(${(props) => props.featuredPhoto});
  background-size: cover;
  background-position: center;

  // ContentGrid:
  > div {
    height: 100%;

    h1 {
      grid-row: 1;
      grid-column: 1 / -1 ;
      justify-self: center;
      align-self: center;
      margin-top: -36px;
      text-align: center;
    }
    
    img {
      position: absolute;
      top: 32px;
    }
  }

  .white-block {
    background: #fff;
    grid-row: 1;
    width: calc((100% - 1680px) / 2 + 206px);
    height: 80px;
    position: absolute;
    bottom: 0;
  
    :last-of-type {
      right: 0;
    }
  }
`

const Header = (props) => {
  // Header will show:
  // "Unsplash viewer" logo in top left corner (logo = prop)
  // Featured photo (background) (featuredPhoto = prop)
  // H1 "Find the perfect image for your design"
  // Searchbar

  return (
    <StyledHeader featuredPhoto={props.featuredPhoto}>
      <ContentGrid>
        <img src={props.logo} alt='Unsplash viewer logo' />
        <h1>Find the perfect image for your design</h1>
        {/* Searchbar Component here */}
      </ContentGrid>

      {/* Two white blocks: */}
      <div className='white-block'></div>
      <div className='white-block'></div>
    </StyledHeader>
  )
}

export default Header
