import styled from "@emotion/styled"

const breakpoints = [375,576, 768, 992, 1200]

const mq = breakpoints.map(bp => `@media (max-width: ${bp}px)`)

export const CrystalImage = styled.img`
height: 231px;
width:100%;
object-fit:cover;

`
export const CrystalImageSection=styled.div`

width: 1439px;
height: 231px;
margin-top:20px;
margin-bottom:100px;
${mq[0]}{
 width:375px;

 height: 189px;


}

`
export const BlockTextTitle=styled.p`
width: 849px;
height: 158px;
font-family: Trirong;
font-size: 36px;
font-weight: normal;
font-stretch: normal;
font-style: normal;
line-height: 1.11;
letter-spacing: normal;
text-align: center;
color: #01565b;
position:relative;
top:25px;
left:205px;
${mq[0]}{
    width: 317px;
    height: 100px;
    font-family: Trirong;
    font-size: 30px;
    font-weight: normal;
    font-stretch: normal;
    font-style: normal;
    line-height: 1.4;
    letter-spacing: normal;
    text-align: center;
    color: #01565b;
    position:relative;
    top: -41px;
    left: 41px;


}

`
export const BlockTextDescription=styled.p`
width: 158px;
height: 21px;
font-family: Rubik;
font-size: 18px;
font-weight: normal;
font-stretch: normal;
font-style: normal;
line-height: 1.17;
letter-spacing: normal;
color: #01565b;
text-align:center;
position: relative;
left: 538px;
top: -74px;
${mq[0]}{
    width: 178px;
    height: 21px;
    font-family: Rubik;
    font-size: 16px;
    font-weight: normal;
    font-stretch: normal;
    font-style: normal;
    line-height: 1.31;
    letter-spacing: normal;
    color: #01565b;
    position:relative;
    left :106px;
    top:-28px;
  
    
}



`
export const Block=styled.div`

position:absolute;
top:1420px;
`

