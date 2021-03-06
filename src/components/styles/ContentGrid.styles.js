import styled from 'styled-components'

const ContentGrid = styled.div`
  width: 100%;
  max-width: 1680px;
  padding: 0 32px;
  margin: 0 auto;
  display: grid;
  grid-template-columns: repeat(12, minmax(0, 1fr));
  grid-gap: 32px;

  @media screen and (max-width: 700px) {
    grid-template-columns: repeat(4, 1fr);
  }
`

export default ContentGrid
