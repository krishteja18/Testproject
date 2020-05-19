import React,{Component} from "react"
import UnsereWerteHeart from "../../../images/Hero_Heart_big.png"
import data from "./data"
import {BlockText,BlockTextSubtitle
,UnsereImage,
CardsSection,
Card,
CardHeading,
CardDescription,
Background,
CarouselDiv

} from './styled'
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from 'react-responsive-carousel';
// import { action } from '@storybook/addon-actions';
// import { Carousel } from '../src/index';

// import { withKnobs, boolean, number } from '@storybook/addon-knobs';

// // carousel styles
// import '../src/main.scss';
// import '../src/carousel.scss';
// import '../src/examples/presentation/presentation.scss';

class UnsereWerte extends Component{   
 constructor(){
   super()

 }





  render(){


  //   const getConfigurableProps = () => ({
  //     showArrows: boolean('showArrows', true, tooglesGroupId),
  //     showStatus: boolean('showStatus', true, tooglesGroupId),
  //     showIndicators: boolean('showIndicators', true, tooglesGroupId),
  //     infiniteLoop: boolean('infiniteLoop', true, tooglesGroupId),
  //     showThumbs: boolean('showThumbs', true, tooglesGroupId),
  //     useKeyboardArrows: boolean('useKeyboardArrows', true, tooglesGroupId),
  //     autoPlay: boolean('autoPlay', true, tooglesGroupId),
  //     stopOnHover: boolean('stopOnHover', true, tooglesGroupId),
  //     swipeable: boolean('swipeable', true, tooglesGroupId),
  //     dynamicHeight: boolean('dynamicHeight', true, tooglesGroupId),
  //     emulateTouch: boolean('emulateTouch', true, tooglesGroupId),
  //     thumbWidth: number('thumbWidth', 100, {}, valuesGroupId),
  //     selectedItem: number('selectedItem', 0, {}, valuesGroupId),
  //     interval: number('interval', 3000, {}, valuesGroupId),
  //     transitionTime: number('transitionTime', 150, {}, valuesGroupId),
  //     swipeScrollTolerance: number('swipeScrollTolerance', 5, {}, valuesGroupId),
  // });
  











   
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
      <CarouselDiv >
      <Carousel  
    
       centerMode
       showIndicators={false}
       showStatus={false}
       infiniteLoop={true}
       centerSlidePercentage={80}

      >
      {data.tiles.map(item => {
          return (
            <Card>
              {/* <UnsereImage src={UnsereWerteHeart} /> */}
              <CardHeading>{item.title}</CardHeading>
              <CardDescription>{item.subTitle}</CardDescription>
            </Card>
          )
        })}


      </Carousel></CarouselDiv>


      <Background/>
    </div>
  

  )}
}



export default UnsereWerte
