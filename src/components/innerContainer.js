import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'

const Wrapper = styled.div`
  flex-grow: 1;
  margin: 0 auto;
  max-width: 856px;
  padding: 0 20px;
  width: 100%;
`

const InnerContainer = ({ children, ...restProps }) => (
  <Wrapper className="innerContainer" {...restProps}>
    {children}
  </Wrapper>
)

InnerContainer.propTypes = {
  children: PropTypes.node.isRequired,
}

export default InnerContainer
