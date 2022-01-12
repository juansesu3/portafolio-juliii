import React from 'react'
import { Conth, Fontlora, H2, Ic, Image, Par } from '../styles/Hero.style'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowDown } from '@fortawesome/free-solid-svg-icons'
import { Animator, batch, Fade, FadeIn, MoveIn, MoveOut, ScrollContainer, ScrollPage, Sticky, Zoom, ZoomIn } from 'react-scroll-motion'
import '../styles/Animation.css'
// import TextAnimation from './animationimage/TextAnimation'
import Disrup from './animation image/Disrup'


const Hero = () => {

    return (
        <div>
            
            <div>
                <Conth>
                    <Fontlora>
                        <div >
                            <ScrollContainer>
                                <ScrollPage page={0}>
                                    <Animator animation={batch(Sticky(40, 25), Fade(), MoveOut())}>

                                        <Image  src="https://res.cloudinary.com/dv08oqgvx/image/upload/v1641879680/AmazonasSprint3/tyelfaorqv3xxkjrtk8c.png" alt="" />

                                    </Animator>

                                </ScrollPage>

                            </ScrollContainer>

                        </div>

                        <H2>
                            <ScrollContainer>
                                <ScrollPage page={0}>
                                    <Animator animation={batch(Sticky(40, 74), Fade(), MoveOut())}>

                                        <p>¡Hi there! 👋🏻<br />I'm Juliana Martinez D.</p>
                                        {/* <TextAnimation/> */}

                                    </Animator>

                                </ScrollPage>

                            </ScrollContainer>
                        </H2>

                        <Par>
                            <ScrollContainer>
                                
                                <ScrollPage  page={1}>
                                    <Animator animation={batch(Sticky(40, 65), Fade(), MoveOut(0, -200))}>

                                       lorem iptsum distrin gudtyn guster lorem iptsum distrin gudtyn guster  lorem iptsum distrin gudtyn guster
                                       lorem iptsum distrin gudtyn guster
                                       lorem iptsum distrin gudtyn guster


                                    </Animator>

                                </ScrollPage>
                                {/* <ScrollPage page={3}>
                                    <div style={{ display: "flex", justifyContent: "center", alignItems: "center", height: "100%" }} >
                                        <span style={{ fontSize: "40px", color: "black" }}>
                                            <Animator animation={MoveIn(-1000, 0)}>Hello Guys 👋🏻</Animator>
                                            <Animator animation={MoveIn(1000, 0)}>Nice to meet you 🙋🏻‍♀️</Animator>- I'm Seonghyeok -
                                            <Animator animation={MoveOut(1000, 0)}>Good bye ✋🏻</Animator>
                                            <Animator animation={MoveOut(-1000, 0)}>See you 💛</Animator>
                                        </span>
                                    </div>
                                </ScrollPage> */}

                            </ScrollContainer>

                        </Par>

                        <Ic>
                            <FontAwesomeIcon icon={faArrowDown} />
                        </Ic>

                    </Fontlora>
                </Conth>
            </div>
        </div>
    )
}

export default Hero
