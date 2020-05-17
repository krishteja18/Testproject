import styled from "@emotion/styled"

const breakpoints = [375,576, 768, 992, 1200]

const mq = breakpoints.map(bp => `@media (max-width: ${bp}px)`)

export const CardSection = styled.div`
background-color: #e59f71;
display: block;
    width: 542px;
    height: 294px;
    background-color: #e59f71;
    
    position:absolute;
    top:578px;
    left:722px;
    margin-bottom:10px;
  
  ${mq[0]} {
    position:absolute;
    top:215px;
    left:28px;
    display: block;
    width: 317px;
  height: 315px;
    background-color: #e59f71;
    padding-left:5px;
  }
`

export const MainImage = styled.img`

padding-bottom:200px;
${mq[0]}{
    padding-bottom:335px
}


`

export const CardHeadingPrimary = styled.h1` 
 width: 350px;
height: 60px;
font-family: Trirong;
font-size: 36px;
font-weight: 500;
font-stretch: normal;
font-style: normal;
line-height: 1.17;
letter-spacing: normal;
color: #01565b;
padding:20px 



`
export const BlockText = styled.p`
padding-left:20px;
width: 390px;
height: 21px;
font-family: Rubik;
font-size: 18px;
font-weight: normal;
font-stretch: normal;
font-style: normal;
line-height: 1.17;
letter-spacing: normal;
color: ${props => props.color};
${mq[0]}{
  //  width:95%;
   width: 286px;
   height: 21px;
   font-family: Rubik;
   font-size: 16px;
   font-weight: normal;
   font-stretch: normal;
   font-style: normal;
   line-height: 1.31;
   letter-spacing: normal;
   color: ${props => props.color};

}

`
