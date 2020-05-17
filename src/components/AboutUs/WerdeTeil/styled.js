import styled from "@emotion/styled"

const breakpoints = [375,576, 768, 992, 1200]

const mq = breakpoints.map(bp => `@media (max-width: ${bp}px)`)



export const WerdeTeilImage = styled.img`
height: 231px;
width:100%;
object-fit:cover;
background-color: rgba(255, 255, 255, 0.7);
opacity:0.5;


`
export const WerdeTeilSection=styled.div`

width: 1440px;
height: 294px;
background-color: rgba(255, 255, 255, 0.7);
margin-top:-5px;
margin-bottom:100px;
${mq[0]}{
 width:375px;

 height: 189px;
 position:relative;
 top:30px;


}

`
export const BlockTextTitle=styled.p`
width: 847px;
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
left:175px;
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
    top: 17px;
    left: 10px;

}

`
export const BlockTextDescription=styled.p`
width: 332px;
height: 21px;
font-family: Rubik;
font-size: 18px;
font-weight: normal;
font-stretch: normal;
font-style: normal;
line-height: 1.17;
letter-spacing: normal;
color: #01565b;
}
}
position: relative;
left: 448px;
    top: -89px;
${mq[0]}{
    display:none;
  
    
}



`
export const Block=styled.div`

position:relative;
top:-200px;
`

export const BlockButton=styled.div`
width: 308px;
  height: 44px;
  border-radius: 22px;
  border: solid 3px #01565b;
  width: 308px;
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
    left: 433px;
    ${mq[0]}{
        position: relative;
        top: 6px;
        left: 44px;
      
        
    }

`