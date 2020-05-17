import styled from "@emotion/styled"

const breakpoints = [375,576, 768, 992, 1200]

const mq = breakpoints.map(bp => `@media (max-width: ${bp}px)`)

export const Block=styled.div`
text-align:center;
 margin-left:30%;


`
export const BlockTitle=styled.p`
width: 413px;
height: 40px;
font-family: Trirong;
font-size: 36px;
font-weight: normal;
font-stretch: normal;
font-style: normal;
line-height: 1.11;
letter-spacing: normal;
text-align: center;
color: #01565b;
${mq[0]}{
position:relative;
top:80px;
left:-80px;
width: 300px;
height: 111px;
font-family: Trirong;
font-size: 30px;
font-weight: normal;
font-stretch: normal;
font-style: normal;
line-height: 1.4;
letter-spacing: normal;
text-align: center;
color: #01565b;
word-wrap:break-word;

}

`
export const BlockSubTitle=styled.p`
width: 500px;
  height: 21px;
  font-family: Rubik;
  font-size: 18px;
  font-weight: normal;
  font-stretch: normal;
  font-style: normal;
  line-height: 1.17;
  letter-spacing: normal;
  text-align: center;
  color: #01565b;
  position:relative;
  left:-45px;
  ${mq[0]}{

    display:none;
  }



`