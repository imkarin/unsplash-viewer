import React from 'react'
import ContentGrid from './styles/ContentGrid.styles'

const Header = (props) => {
  // Header will show:
  // "Unsplash viewer" logo in top left corner (logo = prop)
  // Featured photo (background) (featuredPhoto = prop)
  // H1 "Find the perfect image for your design"
  // Searchbar

  return (
    <header>
      <ContentGrid>
        <img src={props.logo} alt='' />
        <img src={props.featuredPhoto} alt='' />
        <h1>Find the perfect image for your design</h1>
        {/* Searchbar Component here */}
      </ContentGrid>
    </header>
  )
}

export default Header
