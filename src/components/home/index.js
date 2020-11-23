import React from 'react'
import styled from 'styled-components'

import BottomSVG from './img/bottom.svg'
import TopSVG from './img/top.svg'

const Wrapper = styled.div`
  align-items: center;
  display: flex;
  flex-direction: column;
  flex-grow: 1;

  @media (min-width: ${props => props.theme.themeBreakPoints.md}) {
    display: flex;
    flex-direction: row;
  }
`

const Col = styled.div`
  align-items: center;
  display: flex;
  flex-direction: column;
  max-width: 100%;
  order: 1;
  width: 100%;

  @media (min-width: ${props => props.theme.themeBreakPoints.md}) {
    align-items: flex-start;
    order: 0;
    width: 445px;
  }
`

const Text = styled.h1`
  color: ${props => props.theme.text.color};
  font-size: 30px;
  font-weight: 300;
  letter-spacing: 0.89px;
  line-height: normal;
  margin: 0 0 59px;
  text-align: center;

  br {
    display: block;
  }

  @media (min-width: ${props => props.theme.themeBreakPoints.md}) {
    font-size: 40px;
    text-align: left;

    br {
      display: none;
    }
  }
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
  margin-bottom: 57px;
  outline: 0;
  padding: 0;
  text-align: center;
  text-decoration: none;
  transition: all 0.15s ease-out;
  width: 200px;

  @media (min-width: ${props => props.theme.themeBreakPoints.md}) {
    margin-bottom: 31px;
  }

  &:hover {
    transform: scale(1.03);
    font-size: 22px;
  }

  &:last-child {
    margin-bottom: 0;
  }
`

const imageInitialDisplacement = '37px'
const animationDelay = '0.5s'

const ImageWrapper = styled.div`
  margin: 45px auto 50px;
  order: 0;
  position: relative;
  width: 109px;

  @media (min-width: ${props => props.theme.themeBreakPoints.md}) {
    height: 400px;
    margin: 0 0 0 90px;
    order: 1;
    position: relative;
    width: 196px;

    .top {
      transition: top ${animationDelay} ease-out 0s;
      top: ${imageInitialDisplacement};
    }

    .bottom {
      transition: bottom ${animationDelay} ease-out 0s;
      bottom: ${imageInitialDisplacement};
    }

    &:hover {
      .top {
        top: 0;
      }

      .bottom {
        bottom: 0;
      }
    }
  }
`

const Image = styled.img`
  display: block;
  max-width: 100%;
  position: relative;

  @media (min-width: ${props => props.theme.themeBreakPoints.md}) {
    position: absolute;
  }
`

const Top = styled(Image)`
  margin-bottom: -24px;
  z-index: 5;

  @media (min-width: ${props => props.theme.themeBreakPoints.md}) {
    margin-bottom: 0;
    top: ${imageInitialDisplacement};
  }
`

const Bottom = styled(Image)`
  z-index: 1;

  @media (min-width: ${props => props.theme.themeBreakPoints.md}) {
    bottom: ${imageInitialDisplacement};
  }
`

const Home = ({ ...restProps }) => (
  <Wrapper className="home" {...restProps}>
    <Col>
      <Text>
        Fast and feature-
        <br />
        rich ethereum client.
      </Text>
      <Button href="https://github.com/openethereum/openethereum/releases">Download</Button>
      <Button href="https://openethereum.github.io/">Read the docs</Button>
    </Col>
    <ImageWrapper>
      <Top className="image top" src={TopSVG} alt="" />
      <Bottom className="image bottom" src={BottomSVG} alt="" />
    </ImageWrapper>
  </Wrapper>
)

export default Home
