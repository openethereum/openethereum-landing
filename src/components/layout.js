import React from 'react'
import PropTypes from 'prop-types'
import { useStaticQuery, graphql } from 'gatsby'
import styled, { ThemeProvider } from 'styled-components'
import 'sanitize.css'

import theme from '../theme'
import { GlobalStyle } from '../theme/global_style'

import Header from './header'
import InnerContainer from './innerContainer'

const MainContents = styled.div`
  align-items: center;
  display: flex;
  flex-grow: 1;
  width: 100%;
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
    </ThemeProvider>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
