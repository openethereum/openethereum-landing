import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'

const Wrapper = styled.div`
  margin: 0 auto;
  max-width: ${props => props.theme.themeBreakPoints.xl};
  width: 100%;
`

const InnerContainer = ({ children }) => <Wrapper className="innerContainer">{children}</Wrapper>

InnerContainer.propTypes = {
  children: PropTypes.node.isRequired,
}

export default InnerContainer
