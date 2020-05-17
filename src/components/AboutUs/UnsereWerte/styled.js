import styled from "@emotion/styled"

const breakpoints = [576, 768, 992, 1200,375]

const mq = breakpoints.map(bp => `@media (max-width: ${bp}px)`)

export const BlockText=styled.p`

width: 520px;
  height: 80px;
  font-family: Trirong;
  font-size: 36px;
  font-weight: normal;
  font-stretch: normal;
  font-style: normal;
  line-height: 1.11;
  letter-spacing: normal;
  text-align: center;
  color: #01565b;
  position: relative;
  top: -68px;
  left: 374px;
  ${mq[4]}{
    width: 320px;
    height: 54px;
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
    left: 18px;
    top: -1px;

  }
  
  `


export const BlockTextSubtitle=styled.p`

  width: 582px;
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
  top:-90px;
   left:374px;
   ${mq[4]}{
   display:none;

   }
`

export const UnsereImage=styled.img`
width: 41px;
height: 68px;
position:relative;
left:40%;


`

export const CardsSection=styled.div`
display:flex;
justify-content:space-around;
margin:0 100px;

${mq[4]}{
 width:375px;
 over-flow:hidden;
}

`
export const Card=styled.div`
width: 332px;
height: 399px;
background-color: #79ab9d;
padding:0 50px;

${mq[4]}{
    width: 229px;
    height: 368px;
    background-color: #79ab9d;
    padding:0 30px;
    margin-left:10px;
    
  }

}


`
export const CardHeading=styled.p`
width: 258px;
  height: 68px;
  font-family: Trirong;
  font-size: 36px;
  font-weight: normal;
  font-stretch: normal;
  font-style: normal;
  line-height: 1.11;
  letter-spacing: normal;
  text-align: center;
  color: #01565b;
  ${mq[4]}{

   position:relative;
   left:-15px;
   width: 191px;
   height: 82px;
   font-family: Trirong;
   font-size: 30px;
   font-weight: normal;
   font-stretch: normal;
   font-style: normal;
   line-height: 1.4;
   letter-spacing: normal;
   color: #01565b;

  }


`

export const CardDescription=styled.p`
width: 258px;
  height: 206px;
  font-family: Rubik;
  font-size: 18px;
  font-weight: normal;
  font-stretch: normal;
  font-style: normal;
  line-height: 1.17;
  letter-spacing: normal;
  color: #01565b;
  ${mq[4]}{


    width: 191px;
  height: 269px;
  font-family: Rubik;
  font-size: 16px;
  font-weight: normal;
  font-stretch: normal;
  font-style: normal;
  line-height: 1.31;
  letter-spacing: normal;
  color: #ffffff;
  position:relative;
  top:-31px;
  }

`
export const Background=styled.div`
width: 1440px;
height: 340px;
background-color: #bcd5ce;
position:relative;
top:-290px;
z-index:-1;
${mq[4]}{
    width:375px;
    height: 229px;
    position:relative;
top:-190px;
}

`