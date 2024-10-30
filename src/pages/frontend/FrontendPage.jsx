import React from 'react'
import Footer from '../../components/footer/Footer'
import ContentPageHeader from '../../components/contentPageHeader/ContentPageHeader'
import '../frontend/frontend.css'
import { motion } from 'framer-motion'

function FrontendPage() {
    return (
        <div>
            <ContentPageHeader />

            <motion.section className='frontend-container glassEffectDark'
                initial={{
                    opacity: 0,
                    y: 100
                }}
                whileInView={{
                    opacity: 1,
                    y: 0
                }}
                transition={{
                    duration: 0.5,
                    ease: "easeIn"
                }}
                viewport={{
                    margin: "-50px",
                    once: true,
                }}
            >
                <motion.h2
                    className='frontendTitle'
                    initial={{
                        opacity: 0,
                    }}
                    whileInView={{
                        opacity: 1,
                    }}
                    transition={{
                        duration: 0.5,
                        delay: 0.3
                    }}
                    viewport={{
                        once: true,
                    }}
                >
                    Resan till Frontendare
                </motion.h2>

                <section className='frontendGrid-one'>

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
                            delay: 0.6
                        }}
                        viewport={{
                            once: true,
                        }}
                    >
                        <p className='text'>
                            Min teknikresa började redan på 80-talet, när jag programmerade enkla spel i Basic på min ZX Spectrum 48k – dåtidens ultimata speldator! Sedan dess har jag alltid haft ett starkt intresse för teknik och datorer, samtidigt som min konstnärliga sida dras till design och formgivning.
                            Under många år drev jag eget företag som turismentreprenör och skapade allt mitt marknadsföringsmaterial själv – från reklam och broschyrer till hemsidor. Denna erfarenhet gav mig en solid grund i att kombinera tekniska och kreativa färdigheter.
                            <br /><br />
                            Efter att ha arbetat över tio år som lokförare förändrades min bana drastiskt 2021, då en knäskada tvingade mig att ta en längre paus. Under den tiden började jag fundera på nya sätt att ge utlopp för min kreativitet – något jag verkligen saknade i mitt jobb. Det var då jag bestämde mig för att satsa på en utbildning inom frontendutveckling, och valet föll på Folkuniversitetets YH-program.

                        </p>
                    </motion.article>
                    <motion.article
                        className='image-centered'
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
                            delay: 0.6
                        }}
                        viewport={{
                            once: true,
                        }}
                    >
                        <img className='image' src="./spectrum.jpg" alt="picture of a zx spectrum computer" />
                    </motion.article>
                </section>
                <section className='frontendGrid-two'>
                    <motion.article className='image-centered'
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
                            margin: "-50px",
                            once: true,
                        }}
                    >
                        <img className='image' src="./modern.jpg" alt="ai generated picture" />
                    </motion.article>
                    <article>
                        <motion.p className='text'
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
                                margin: "-50px",
                                once: true,
                            }}
                        >
                            Nu, mitt i andra året av utbildningen, har jag börjat känna mig mer säker i hela processen – från skiss till färdig webbsida, med både frontend- och backenddelar. Framöver väntar en modul inom fullstack-utveckling med TypeScript, och därefter två praktikperioder (LIA) under 2025.
                            <br /><br />
                            Under utbildningen har jag utvecklat färdigheter inom UX/UI, HTML, CSS, JavaScript ES6, React, Node och AWS, och vi arbetar agilt i våra projekt. Även om jag haft lättast för designämnen, som ligger mig nära, har jag också utmanats – särskilt med JavaScript. Men jag märker att ju mer jag fördjupar mig i språket och det datalogiska tänkandet, desto bättre blir min JS och jag kommer få det lättare att lära sig nya språk och tekniker framöver, som till exempel TypeScript.
                            <br /><br />
                            Jag ser verkligen fram emot att få omsätta mina kunskaper i praktiken och fortsätta utvecklas som programmerare och designer i det verkliga arbetslivet. Det är där jag vill växa och bidra till spännande projekt framöver.
                        </motion.p>
                    </article>
                </section>
            </motion.section>
            <Footer />
        </div>
    )
}

export default FrontendPage
