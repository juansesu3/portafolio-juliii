import React from 'react'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faJedi, faBrain} from '@fortawesome/free-solid-svg-icons';
import { Grid1foot, Grid2foot, Grid3foot, Grid4foot, Grid5foot, Grid6foot, Gridlayoutfooter } from '../styles/Footer.style';

import { library } from '@fortawesome/fontawesome-svg-core'
import { fab, faGithub, faLinkedin, faWhatsappSquare } from '@fortawesome/free-brands-svg-icons'
import { github } from '@fortawesome/free-solid-svg-icons'


const Footer = () => {
    return (
        <div>
            <Gridlayoutfooter>
                  

                    <Grid2foot>
                        <p>¡Un<br/> Dia<br/> A la vez!</p>
                    </Grid2foot>

                    <Grid3foot>
                        <p>Copyright 2022-All rights reserved</p>
                    </Grid3foot>

                    <Grid4foot> <a style={{color: "#0a66c2"}} href='https://www.linkedin.com/in/juliana-martinez-ducuara/' target="_blank"> <FontAwesomeIcon icon={faLinkedin} /></a></Grid4foot>

                    <Grid5foot><a  style={{color: "#38dc57"}} href='https://api.whatsapp.com/send?phone=573023433928&text=Hey!%20Juliana,%20estoy%20interesado%20en%20tu%20trabajo.' target="_blank"> <FontAwesomeIcon icon={faWhatsappSquare} /></a> </Grid5foot>
                    
                    <Grid6foot><a   href='' target="_blank"></a></Grid6foot>

                </Gridlayoutfooter>
        </div>
    )
}

export default Footer

