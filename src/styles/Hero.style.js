import styled from 'styled-components';


const Conthero = styled.div`
    margin-top: 0 auto;
    text-align: left;
    background-color:#fff6f8;
    margin-top:56px ;
    padding: 20px;
    @media only screen and (min-width: 900px){
        margin-top:0px ;

    }
`;

const Styleh2 = styled.p`
    color: black;
    font-size: 32px;
    line-height: 40px;
    width: 100px;

`;

const Parph = styled.p`
    font-size: 30px;
    line-height: 45px;
    color: black;
    letter-spacing: 5px
    width: 100px;

`;

const Icono = styled.nav`
    color: #ff8906;
    font-size: 40px;
`;

const Lora = styled.div`
    font-family: 'Lora', serif;

`;

export const Image = styled.img`

   width: 40vh;
   border-radius:10px;
   padding: 0 auto;
   margin-top:200px;

   margin-left: 100px;
   /* margin-right: 0 auto; */
   


`;
export const Img = Image;
export const Fontlora = Lora;
export const Par = Parph;
export const Conth = Conthero;
export const H2 = Styleh2;
export const Ic = Icono;

