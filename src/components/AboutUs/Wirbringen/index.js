import React from "react"
import WirbringenImage from "../../../images/shutterstock_488682844.jpg"
import data from "./data"

import {
 CrystalImage,CrystalImageSection,BlockTextTitle,BlockTextDescription,Block
} from "./styled"

const Wirbringen = () => {
  return (
    <CrystalImageSection>
      < CrystalImage
 src={WirbringenImage} />

       <Block>
      <BlockTextTitle>{data.title}</BlockTextTitle>
      <BlockTextDescription>{data.subTitle}</BlockTextDescription>
      </Block>
    </CrystalImageSection>
  )
}

export default Wirbringen
