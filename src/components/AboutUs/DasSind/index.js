import React from "react"
import DasSindImage from "../../../images/EmmoraTeam4.jpg"
import data from "./data"



import {
  DasSindSection,Block,DasImage,BlockText,BlockTextHeading
} from "./styled"
const DasSind = () => {
  return (
    <DasSindSection>
      <DasImage 
          responsivePadding="50px 30px"
          padding="50px 115px 35px 115px"
          display="block"
          align="left"
      
      src={DasSindImage} />

      <Block     
        responsivePadding="50px 30px"
        padding="50px 115px 35px 115px"
        display="block"
        align="left">
      <BlockTextHeading>{data.title}</BlockTextHeading>
      <BlockText>{data.subTitle}</BlockText>
      <BlockText Description>{data.description}</BlockText>
      </Block>
    </DasSindSection>
  )
}

export default DasSind
