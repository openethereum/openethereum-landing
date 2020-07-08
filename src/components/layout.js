import React from 'react'
import PropTypes from 'prop-types'
import { useStaticQuery, graphql } from 'gatsby'
import styled, { ThemeProvider } from 'styled-components'
import 'sanitize.css'

import theme from '../theme'
import { GlobalStyle } from '../theme/global_style'

import Header from './header'
import InnerContainer from './innerContainer'
import SocialIcons from './socialIcons'

const MainContents = styled.div`
  display: flex;
  flex-direction: column;
  flex-grow: 1;

  @media (min-width: ${props => props.theme.themeBreakPoints.md}) {
    align-items: center;
    flex-direction: row;
    width: 100%;
  }
`

const MobileOnlyContainer = styled(InnerContainer)`
  display: flex;
  justify-content: center;

  @media (min-width: ${props => props.theme.themeBreakPoints.md}) {
    display: none;
  }
`

const SocialIconsBottom = styled(SocialIcons)`
  margin-top: auto;
  padding: 40px 0;
`

const Layout = ({ children }) => {
  const data = useStaticQuery(graphql`
    query SiteTitleQuery {
      site {
        siteMetadata {
          title
        }
      }
    }
  `)

  return (
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      <Header siteTitle={data.site.siteMetadata.title} />
      <MainContents>
        <InnerContainer>{children}</InnerContainer>
      </MainContents>
      <MobileOnlyContainer>
        <SocialIconsBottom />
      </MobileOnlyContainer>
    </ThemeProvider>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
