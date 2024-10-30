import React from 'react'
import ContentPageHeader from '../../components/contentPageHeader/ContentPageHeader'
import Footer from '../../components/footer/Footer'
import '../about/aboutPage.css'
import { motion } from 'framer-motion'

function AboutPage() {
    return (
        <div>
            <ContentPageHeader />
            <section className='about-container glassEffectDark'>
                <motion.h2
                initial={{
                    opacity: 0
                }}
                whileInView={{
                    opacity: 1
                }}
                transition={{
                    duration: 1
                }}
                viewport={{
                    margin: "-50px",
                    once: true,
                }}
                className='om-title'>Vem är jag?</motion.h2>
                <section className='content-container'>
                    <motion.img
                    initial={{
                        opacity: 0,
                        y: 50
                    }}
                    whileInView={{
                        opacity: 1,
                        y: 0
                    }}
                    transition={{
                        duration: 0.5,
                        delay: 0.3
                    }}
                    viewport={{
                        margin: "-50px",
                        once: true,
                    }}
                    className='om-image image' src="./om169.JPG" alt="picture of a professional wed designer" />
                    <motion.p
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
                        margin: "-100px",
                        once: true,
                    }}
                    className='text'>
                        Hej! Alistair McCann heter jag, en webbutvecklare och designer med en bakgrund lika okonventionell som det är värdefull. Från vildmarken och skidbacken till det digitala landskapet kan jag tillföra praktiska, real-world insikter till varje projekt jag arbetar med.
                        <br /><br />
                        Min karriär började i det fria som en vildmarksguide och turismentreprenör. Där lärde jag mig navigera oförutsägbara utmaningar och förstå människors behov på en fundamental nivå. Som alpin skidtekniker och bootfitter utvecklade jag ett noggrant öga för detaljer och personliga problemlösning, färdigheter jag kan tillämpa i UX/UI design för att skapa skräddarsydda digitala lösningar. Och medan min tid som lokförare kan kännas som det är världar ifrån webbdesign, lärde det mig hur viktigt det är med precision och pålitlighet – värden jag tillämpar på webbdesign för att säkerställa att varje applikation fungerar på ett smidigt sätt.
                        <br /><br />
                        Tillsammans, dessa erfarenheter och färdigheter ger mig en unik verktygslåda. Jag kodar inte bara hemsidor, jag designar digitala lösningar som prioriterar funktionalitet, pålitlighet och en djup förstående av användaren. Oavsett om jag bygger backendinfrastrukturen eller fulländar frontenddesignen tar jag an varje projekt med samma engagemang jag har applicerat i varje tidigare roll.
                        <br /><br />
                        ”Nu i andra året av en utbildning inom webbutveckling och design är jag ivrig att ta med mig denna rika blandning av erfarenhet och skicklighet till projekt som värdesätter både kreativitet och pålitlighet. Om ni letar efter en webbutvecklare som blandar tekniskt färdighet med real-world insikt skulle jag älska att träffa er och diskutera hur vi kan skapa något extraordinär tillsammans.”

                    </motion.p>
                </section>
                <section>

                </section>
            </section>
            <Footer />
        </div>
    )
}

export default AboutPage
