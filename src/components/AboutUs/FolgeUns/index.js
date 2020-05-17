import React from "react"
import data from "./data"
import {BlockTitle,BlockSubTitle,Block}
from './styled'

const FolgeUns = () => {
  return (
    <Block>
      <BlockTitle>{data.title}</BlockTitle>
      <BlockSubTitle>{data.subTitle}</BlockSubTitle>
    </Block>
  )
}

export default FolgeUns
