import { Link } from 'gatsby'
import React from 'react'
import styled from 'styled-components'
import InnerContainer from './innerContainer'
import SocialIcons from './socialIcons'

const Wrapper = styled.div`
  display: none;

  @media (min-width: ${props => props.theme.themeBreakPoints.md}) {
    display: flex;
    flex-grow: 0;
    flex-shrink: 0;
    height: ${props => props.theme.header.height};
    padding: 17px 0 0;
    width: 100%;

    .innerContainer {
      align-items: center;
      display: flex;
      flex-grow: 1;
      height: 100%;
      justify-content: space-between;
    }
  }
`

const Logo = styled(Link)`
  color: ${props => props.theme.text.color};
  font-size: 20px;
  font-weight: normal;
  letter-spacing: 0.44px;
  line-height: 1.2;
  text-decoration: none;
`

const SocialIconsHeader = styled(SocialIcons)`
  margin: auto 0 0 auto;
`

const Header = ({ ...restProps }) => (
  <Wrapper {...restProps}>
    <InnerContainer>
      <Logo to="/">open ethereum</Logo>
      <SocialIconsHeader />
    </InnerContainer>
  </Wrapper>
)

export default Header
