import React from 'react'
import styled from 'styled-components'
import ContentGrid from './styles/ContentGrid.styles'
import SearchBar from './SearchBar'

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

    > h1 {
      grid-row: 1;
      grid-column: 1 / -1 ;
      justify-self: center;
      align-self: center;
      margin-top: -36px;
      text-align: center;
    }
    
    > img {
      position: absolute;
      top: 32px;
    }

    // Searchbar placement:
    > form {
      grid-column: 2 / -2; 
      grid-row: 1;
      align-self: end;
      margin-bottom: 32px;
      z-index: 1; // temporary
    }

    > .white-block {
      grid-row: 1;
      grid-column: 1 / 2;
      align-self: end;
      margin-left: -32px;

      :last-of-type {
        grid-column: 12 / -1;
        margin-right: -32px;
        margin-left: 0;
      }
    }
  }

  // All white blocks
  .white-block {
    background: #fff;
    height: 80px;
  }
  
  // White blocks outside of ContentGrid (to fill up the full width of the screen)
  > .white-block {
    width: calc((100% - 1680px) / 2);
    position: absolute;
    bottom: 0;
  
    :last-of-type {
      right: 0;
    }
  }

  // Smaller screens
  @media screen and (max-width: 700px) {
    // Contentgrid
    > div {
      
      > img {
        justify-self: center;
      }

      // Searchbar placement
      > form {
        grid-column: 1 / -1;
      }

    }

    // Remove all the white blocks
      .white-block {
      display: none;
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

        <SearchBar handleSearch={props.handleSearch} />

        <div className='white-block'></div>
        <div className='white-block'></div>
      </ContentGrid>

      {/* Two white blocks: */}
      <div className='white-block'></div>
      <div className='white-block'></div>
    </StyledHeader>
  )
}

export default Header
