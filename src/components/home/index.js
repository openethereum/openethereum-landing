import React from 'react'
import styled from 'styled-components'

import InnerContainer from '../innerContainer'

import BottomSVG from './img/bottom.svg'
import TopSVG from './img/top.svg'

const Wrapper = styled.div`
  margin: 0 auto;

  .innerContainer {
    display: flex;
    flex-grow: 1;
  }
`

const Col = styled.div`
  max-width: 100%;
  width: 445px;
`

const Text = styled.h1`
  color: ${props => props.theme.text.color};
  font-size: 40px;
  font-weight: 300;
  letter-spacing: 0.89px;
  line-height: normal;
  margin: 0 0 59px;
`

const Button = styled.a`
  align-items: center;
  border: 1px solid ${props => props.theme.borders.borderColor};
  color: ${props => props.theme.text.color};
  display: flex;
  font-size: 20px;
  font-weight: normal;
  height: 48px;
  justify-content: center;
  letter-spacing: 0.44px;
  line-height: normal;
  margin-bottom: 31px;
  outline: 0;
  padding: 0;
  text-align: center;
  text-decoration: none;
  transition: all 0.15s ease-out;
  width: 200px;

  &:hover {
    font-size: 22px;
    height: 52px;
    margin: -2px -2px 29px -2px;
    width: 204px;
  }

  &:last-child {
    margin-bottom: 0;

    &:hover {
      margin-bottom: -2px;
    }
  }
`

const ImageWrapper = styled.div`
  display: flex;
  flex-direction: column;
  margin-left: 90px;
  position: relative;
`

const Top = styled.img`
  display: block;
`

const Bottom = styled.img`
  display: block;
`

const Home = () => (
  <Wrapper className="home">
    <InnerContainer>
      <Col>
        <Text>Fast and feature-rich multi-network ethereum client.</Text>
        <Button href="#">Download</Button>
        <Button href="#">Read the docs</Button>
      </Col>
      <ImageWrapper>
        <Top src={TopSVG} alt="" />
        <Bottom src={BottomSVG} alt="" />
      </ImageWrapper>
    </InnerContainer>
  </Wrapper>
)

export default Home
