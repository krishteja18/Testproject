import styled from "@emotion/styled"

const breakpoints = [375,576, 768, 992, 1200]

const mq = breakpoints.map(bp => `@media (max-width: ${bp}px)`)

export const DieEmmoraImage = styled.img`
height: 231px;
width:100%;
object-fit:cover;

`
export const DieEmmoraSection=styled.div`

width: 1439px;
height: 231px;
margin-top:-250px;
margin-bottom:100px;
${mq[0]}{
 width:375px;

 height: 189px;
 position:relative;
 top:100px;


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
    width: 375px;
    height: 84px;
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
    top: -21px;
    left: 10px;

}

`
export const BlockTextDescription=styled.p`
width: 460px;
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
position: relative;
left: 410px;
top: -74px;
${mq[0]}{
    display:none;
  
    
}



`
export const Block=styled.div`

position:relative;
top:-200px;
`

export const BlockButton=styled.div`
width: 193px;
height: 44px;
border-radius: 22px;
border: solid 3px #01565b;
width: 193px;
height: 26px;
font-family: Rubik;
font-size: 20px;
font-weight: 500;
font-stretch: normal;
font-style: normal;
line-height: normal;
letter-spacing: normal;
text-align: center;
color: #01565b;
padding-bottom:5px;
position:relative;
top: -66px;
    left: 528px;
    ${mq[0]}{
        position: relative;
        top: 6px;
        left: 83px;
      
        
    }

`