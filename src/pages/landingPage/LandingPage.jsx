import React from 'react';
import { useEffect, useRef } from 'react';
import { Link } from 'react-router-dom'
import Footer from '../../components/footer/Footer'
import '../landingPage/landingPage.css'
import LandingHeader from '../../components/landingHeader/LandingHeader'
import { motion } from 'framer-motion'

function LandingPage() {
    const frontendSectionRef = useRef(null);


    useEffect(() => {
        const handleScroll = () => {
            if (window.scrollY > 0) {
                frontendSectionRef.current.classList.add('visible');
            }
        };
        window.addEventListener('scroll', handleScroll);
        return () => {
            window.removeEventListener('scroll', handleScroll)
        }
    }, []);

    return (
        <motion.div
            initial={{
                opacity: 0,
                transformOrigin: "top center",
                scale: 1.05
            }}
            animate={{
                opacity: 1,
                scale: 1
            }}
            transition={{
                duration: 0.5,
                ease: "easeInOut",
            }}
        >
            <LandingHeader />
            <main>
                <motion.section className='frontendSection glassEffectDark' ref={frontendSectionRef}
                    initial={{
                        opacity: 0,
                    }}
                    whileInView={{
                        opacity: 1,
                        duration: 1
                    }}
                    viewport={{
                        margin: "-250px",
                        once: true,
                    }}
                >
                    <article className='frontendDesc glassEffect'

                    >
                        <motion.h1 className='h1ContentTitle'
                            initial={{
                                opacity: 0,
                                x: -50
                            }}
                            whileInView={{
                                opacity: 1,
                                x: 0,
                            }}
                            transition={{
                                duration: 0.5,
                                ease: "easeIn"
                            }}
                            viewport={{
                                margin: "-350px",
                                once: true,
                            }}
                        >FRONTEND</motion.h1>

                        <motion.h3 className='h3ContentSubTitle'
                            initial={{
                                opacity: 0,
                                x: -50
                            }}
                            whileInView={{
                                opacity: 1,
                                x: 0,
                            }}
                            transition={{
                                duration: 0.5,
                                ease: "easeIn"
                            }}
                            viewport={{
                                margin: "-370px",
                                once: true,
                            }}
                        >Resan till frontendare</motion.h3>

                        <motion.p
                            initial={{
                                opacity: 0,
                            }}
                            whileInView={{
                                opacity: 1,
                            }}
                            transition={{
                                duration: 0.5,
                            }}
                            viewport={{
                                margin: "-400px",
                                once: true,
                            }} className='text'
                        >Min teknikresa började redan på 80-talet, när jag programmerade enkla spel i Basic på min ZX Spectrum 48k – dåtidens ultimata speldator! Sedan dess har jag alltid haft ett starkt intresse för teknik och datorer, samtidigt som min konstnärliga sida dras till design och formgivning.
                            <br></br><br></br>
                            Under många år drev jag eget företag som turismentreprenör och skapade allt mitt marknadsföringsmaterial själv – från reklam och broschyrer till hemsidor i WordPress. Denna erfarenhet gav mig en solid grund i att kombinera tekniska och kreativa färdigheter.
                            <br /><br />
                            <Link to="/frontend">läs mer...</Link>
                        </motion.p>
                        
                    </article>
                    <motion.article className='logoGrid'
                        initial={{
                            opacity: 0,
                            y: 50
                        }}
                        whileInView={{
                            opacity: 1,
                            duration: 1,
                            y: 0
                        }}
                        viewport={{
                            margin: "-300px",
                            once: true,
                        }}
                    >
                        <div><img src="./src/assets/html-logo.png" alt="HTML Logo" className='logoImage' /></div>
                        <div><img src="./src/assets/CSS-Logo.png" alt="CSS Logo" className='logoImage' /></div>
                        <div><img src="./src/assets/Javascript-logo.png" alt="JavaScript Logo" className='logoImage' /></div>
                        <div><img src="./src/assets/figma-logo.png" alt="Figma Logo" className='logoImage' /></div>
                        <div><img src="./src/assets/React-icon.png" alt="React Logo" className='logoImage' /></div>
                        <div><img src="./src/assets/Node_logo.svg.png" alt="Node.js Logo" className='logoImage' /></div>
                    </motion.article>
                </motion.section>

                <motion.section className='projektOmSection glassEffectDark'
                    initial={{
                        opacity: 0,
                    }}
                    whileInView={{
                        opacity: 1,
                        duration: 1
                    }}
                    viewport={{
                        margin: "-250px",
                        once: true,
                    }}
                >

                    <motion.section className='projectSection glassEffect'
                        initial={{
                            opacity: 0,
                        }}
                        whileInView={{
                            opacity: 1,
                            duration: 1
                        }}
                        viewport={{
                            margin: "-250px",
                            once: true,
                        }}
                    >
                        <motion.article 
                        initial={{
                            opacity: 0,
                            x: -50
                        }}
                        whileInView={{
                            opacity: 1,
                            x: 0
                        }}
                        transition={{
                            duration: 0.5,
                            delay: 0.3
                        }}
                        viewport={{
                            margin: "-250px",
                            once: true,
                        }}
                        className='leftArticle'>
                            <h1 className='h1ContentTitle'>PROJEKT</h1>
                            <h3 className='marginBottom h3ContentSubTitle'>Hjärteprojekt</h3>
                            <p className='text'>Under några år har jag drivit ett hobbyföretag där jag servar, reparerar och monterar skidor och snowboards. Under tiden som jag gått frontendutbildningen har jag försökt få lite tid över att arbeta på en hemsida till företaget. <br></br><br></br>Den håller på att ta form, men eftersom vi lär och nya tekniker hela tiden är det svårt att låta bli att gå tillbaka och strukturera om hela projektet så den passar in i det vi just arbetat med. Men nu har vi kommit så pass lång i utbildningen så jag kan fokusera på att producera en slutgiltig sida.</p>
                            <br /><br />
                            <Link to="/projects">läs mer...</Link>
                        </motion.article>

                        <article className='rightArticle'>
                            <img className='projectPic' src="./src/assets/alpinesport-main.png" alt="picture of website" />
                        </article>
                    </motion.section>


                    <motion.section className='omSection glassEffect'
                        initial={{
                            opacity: 0,
                        }}
                        whileInView={{
                            opacity: 1,
                            duration: 1
                        }}
                        viewport={{
                            margin: "-250px",
                            once: true,
                        }}
                    >
                        <motion.article 
                        initial={{
                            opacity: 0,
                            x: 50
                        }}
                        whileInView={{
                            opacity: 1,
                            x: 0
                        }}
                        transition={{
                            duration: 0.5,
                            delay: 0.3
                        }}
                        viewport={{
                            margin: "-250px",
                            once: true,
                        }}
                        className='leftArticle'>
                            <h1 className='h1ContentTitle'>OM</h1>
                            <h3 className='marginBottom h3ContentSubTitle'>Vem är jag?</h3>
                            <p className='text'>
                                Hej! Alistair McCann heter jag, en webbutvecklare och designer med en bakgrund lika okonventionell som det är värdefull. Från vildmarken och skidbacken till det digitala landskapet kan jag tillföra praktiska, real-world insikter till varje projekt jag arbetar med.
                                <br /><br />
                                Min karriär började i det fria som en vildmarksguide och turismentreprenör. Där lärde jag mig navigera oförutsägbara utmaningar och förstå människors behov på en fundamental nivå. Som alpin skidtekniker och bootfitter utvecklade jag ett noggrant öga för detaljer och personliga problemlösning, färdigheter jag kan tillämpa i UX/UI design för att skapa skräddarsydda digitala lösningar...
                                <br /><br />
                                <Link to="/about">läs mer...</Link>
                            </p>
                        </motion.article>
                        <article className="rightArticle">
                            <img className='omPic' src="./src/assets/om11.jpg" alt="picture of me" />
                        </article>
                    </motion.section>

                </motion.section>
            </main>
            <Footer />
        </motion.div>
    )
}

export default LandingPage