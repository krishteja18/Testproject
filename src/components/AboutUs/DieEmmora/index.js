import React from "react"
import data from "./data"
import WirbringenImage from "../../../images/shutterstock_488682844.jpg"

import {
  DieEmmoraSection,
  DieEmmoraImage,
  Block,
  BlockTextTitle,
  BlockTextDescription,
  BlockButton




} from './styled'

const DieEmmora = () => {
  return (
    <DieEmmoraSection>

      <DieEmmoraImage src={WirbringenImage} />

      <Block>
      <BlockTextTitle>{data.title}</BlockTextTitle>
      <BlockTextDescription>{data.subTitle}</BlockTextDescription>
      <BlockButton>{data.buttonLabel}</BlockButton>

      </Block> 


      

      
    </DieEmmoraSection>
  )
}

export default DieEmmora
