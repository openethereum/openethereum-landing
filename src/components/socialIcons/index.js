import React from 'react'
import styled from 'styled-components'

import DiscordSVG from './img/discord.svg'
import GithubSVG from './img/github.svg'
import TwitterSVG from './img/twitter.svg'

const Wrapper = styled.div`
  display: flex;
  margin: auto 0 0 auto;
`

const Icon = styled.a`
  align-items: center;
  display: flex;
  height: 40px;
  justify-content: center;
  margin-left: 33px;
  text-decoration: none;
  width: 40px;

  &:first-child {
    margin-left: 0;
  }
`

const IconSVG = styled.img`
  display: block;
  height: 36px;
  transition: all 0.15s ease-out;
  width: 36px;

  &:hover {
    height: 40px;
    width: 40px;
  }
`

const SocialIconsData = [
  {
    href: '#',
    image: DiscordSVG,
    title: 'Discord',
  },
  {
    href: '#',
    image: TwitterSVG,
    title: 'Twitter',
  },
  {
    href: '#',
    image: GithubSVG,
    title: 'Github',
  },
]

const SocialIcons = () => (
  <Wrapper className="socialIcons">
    {SocialIconsData.map((item, index) => {
      return (
        <Icon href={item.href} title={item.title} key={index} target="_blank">
          <IconSVG src={item.image} alt={item.title} />
        </Icon>
      )
    })}
  </Wrapper>
)

export default SocialIcons
