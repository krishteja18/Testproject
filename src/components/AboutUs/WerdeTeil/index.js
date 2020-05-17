import React from "react"
import WerdeTeilImag from "../../../images/TeamAboutUs.jpg"
import data from "./data"
import { BlockSubTitle } from "../FolgeUns/styled"

import {
  WerdeTeilSection,
  WerdeTeilImage,
  BlockTextTitle,
  Block,
  
  BlockButton,
  BlockTextDescription

} from './styled'

const WerdeTeil = () => {
  return (
    <WerdeTeilSection>
      <WerdeTeilImage src={WerdeTeilImag} />
      <Block>
      <BlockTextTitle>{data.title}</BlockTextTitle>
      <BlockTextDescription>{data.subTitle}</BlockTextDescription>
      <BlockButton>{data.buttonLabel}</BlockButton>
      </Block>
    </WerdeTeilSection>
  )
}

export default WerdeTeil
