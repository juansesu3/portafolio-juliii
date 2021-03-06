import styled from "styled-components";

const Lora = styled.div`
    font-family: 'Lora', serif;
    /* margin-top:1000px ; */

`;

const Titulo = styled.h1`
    font-size: 40px;
    
    line-height: 50px;
    padding: 0PX 20px;
    color: #000;
    background-color: #fff6f8;

`;

const Text = styled.p`
    font-size: 20px;
    line-height: 35px;
    padding: 0PX 20px;
    color: #000;
    
`;

const Gridlayers = styled.section`
    display: grid;
    grid-template-columns: repeat(10, 1fr);
    grid-template-rows: repeat(27, 1fr);
    
`;




const Griduno = styled.div`
background-color: transparent;
background-image: url("https://res.cloudinary.com/dv08oqgvx/image/upload/v1641933795/AmazonasSprint3/sv2df1dd4avpbnp1qu8f.jpg" );
background-repeat: no-repeat;
grid-column: 2/10;
grid-row: 1/10;
border-radius:10px;

width: 100%;
`;

const Griddos = styled.div`
background-color: #ffe4ea;
box-shadow: 12px 16px 32px #0e0d2776;
grid-column: 2/10;
grid-row: 3/9;
padding: 40px 24px ;
border-radius:20px ;
@media only screen and (min-width:920px){
    grid-column: 6/10;
    grid-row: 3/7;

}
`;

const Stylh2 = styled.p`
color: #FFFE;
font-size: 24px;
line-height: 32px;
`;

const Stylp = styled.p`
color: #A7A9BE;
font-size: 20px;
line-height: 32px;

`;

const Gridtres = styled.div`
background-color: transparent;
background-image: url("https://res.cloudinary.com/dv08oqgvx/image/upload/v1641954376/AmazonasSprint3/rssxbi3q1zb971kdv3ld.jpg" );
background-repeat: no-repeat;
grid-column: 2/10;
grid-row: 10/20;
/* margin-left: 15px; */
/* border-radius:20px ;  */
`;

const Gridcuatro = styled.div`
background-color: #ffe4ea;
box-shadow: 12px 16px 32px #0e0d2776;
grid-column: 2/10;
grid-row: 12/18;
padding: 40px 24px ;
border-radius:20px ;
@media only screen and (min-width:920px){
    grid-column: 6/10;
    grid-row: 12/16;

}
`;

const Gridcinco = styled.div`
background-color: transparent;
background-image: url("https://res.cloudinary.com/dv08oqgvx/image/upload/v1641954471/AmazonasSprint3/g3nt0aakumvzcniptdlo.jpg" );
background-repeat: no-repeat;

grid-column: 2/10;
grid-row: 19/28;
/* margin-left: 15px; */

`;

const Gridseis = styled.div`
background-color: #ffe4ea;
box-shadow: 12px 16px 32px #0e0d2776;
grid-column: 2/10;
grid-row: 21/27;
padding: 40px 24px ;
border-radius:20px ;
@media only screen and (min-width:920px){
    grid-column: 6/10;
    grid-row: 21/25;

}

`;

const Contbutt = styled.div`
    display: flex;
    /* flex-direction: column; */
    /* position: relative; */
    align-items: center;
    flex-direction: column;
    bottom: 0px;

`;
const Buttuno = styled.button`
    background-color: #ffdada ;
    border: 2px solid #FF8906;
    
    font-size: 16px;
    font-weight: bold;
    line-height: 24px;
    height: 48px;
    margin: 10px;
    &:hover {
        /* box-shadow: 0px 0px 10px white; */
        background-color: #FF8906;
        color: #FFFE;
        
    
  }
 
`;
export const Anchor = styled.a`
    width: 100%;
      text-decoration:none;
      color:  #7b7b7b;
      background-color: #ffdada ;
    border: 2px solid #ff8585;
    text-align:center;
  padding: 10px;
  border-radius: 10px;
  
  margin-bottom: 100px;
    font-size: 16px;
    font-weight: bold;
    line-height: 24px;
    height: 48px;
    margin: 10px;
    &:hover{
        color: #FFFE ;
        
    background-color:  #ffa8a8;
    border: 2px solid white;
    }

 

`;
const Buttdos = styled.button`

    
    background-color:  #ffdada;
    color: #FFFE ;
    font-size: 16px;
    font-weight: bold;
    line-height: 24px;
    height: 48px;
    margin: 10px;
 
   

    &:hover {
        /* box-shadow: 0px 0px 10px white;      */
        background-color: #0e0d27;
        color: #FF8906;
        border: 2px solid #FF8906;
    
  }
  .anchor{
      padding-top: 40px;
      margin-top: 100px ;
      background: blue;
  }

`;

export const Image = styled.img`

   width: 40vh;
   border-radius:10px;
   padding: 0 auto;

   /* margin-left: 0 auto;
   margin-right: 0 auto; */


`;


export const Butt2 = Buttdos;
export const Butt1 = Buttuno;
export const Contbu = Contbutt;
export const Stp = Stylp;
export const Sth2 = Stylh2;
export const Grid1 = Griduno;
export const Grid2 = Griddos;
export const Grid3 = Gridtres;
export const Grid4 = Gridcuatro;
export const Grid5 = Gridcinco;
export const Grid6 = Gridseis;
export const Gridstyle = Gridlayers;
export const Textstyle = Text;
export const Fontlora = Lora;
export const Tittle = Titulo;
export const Img = Image;