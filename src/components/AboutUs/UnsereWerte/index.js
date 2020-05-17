import React from "react"
import UnsereWerteHeart from "../../../images/Hero_Heart_big.png"
import data from "./data"
import {BlockText,BlockTextSubtitle
,UnsereImage,
CardsSection,
Card,
CardHeading,
CardDescription,
Background

} from './styled'

const UnsereWerte = () => {
  return (
    <div>
      <BlockText>{data.title}</BlockText>
      <BlockTextSubtitle>{data.subTitle}</BlockTextSubtitle>
      <CardsSection>
        {data.tiles.map(item => {
          return (
            <Card>
              <UnsereImage src={UnsereWerteHeart} />
              <CardHeading>{item.title}</CardHeading>
              <CardDescription>{item.subTitle}</CardDescription>
            </Card>
          )
        })}
      </CardsSection>
      <Background/>
    </div>
  )
}

export default UnsereWerte
