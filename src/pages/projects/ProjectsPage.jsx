import React from 'react'
import ContentPageHeader from '../../components/contentPageHeader/ContentPageHeader'
import Footer from '../../components/footer/Footer'
import '../projects/projectPage.css'
import { motion } from 'framer-motion'

function ProjectsPage() {
    return (
        <div>
            <ContentPageHeader />
            <section className='projects-container glassEffectDark'>
                <section className='project-section'>
                    <motion.h2 
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
                        once: true,
                    }}
                    className='project-title'>Hjärteprojekt</motion.h2>

                    <motion.article
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
                    >
                        <img className='image' src="./src/assets/AIbild2.png" alt="" />
                    </motion.article>
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
                        margin: "-50px",
                        once: true,
                    }}
                    >
                        <p className='text'>
                            Som en del av min utbildning till frontendutvecklare har jag genomfört många uppgifter och projekt som kan ses på min GitHub. Dessa uppgifter har gett mig viktiga färdigheter och erfarenhet, men ramarna och lösningarna har ofta varit fördefinierade. Jag har funderat på att inkludera några exempel från utbildningen här, men jag valde istället att lyfta fram mitt hjärteprojekt: en webbplats till min egen hobbyverksamhet som alpin skidtekniker och bootfitter, där jag själv är produktägare, designer och utvecklare.
                            Det här projektet är särskilt meningsfullt för mig eftersom jag får friheten att kombinera mina egna idéer med de kunskaper jag har förvärvat under utbildningen, från grundläggande webbutveckling till moderna JavaScript-ramverk. Målet är att skapa en helt egen webbplats från grunden – en möjlighet att gå från skiss till färdig produkt och att samtidigt visa upp min personliga stil och mitt kunnande.

                        </p>
                    </motion.article>

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
                        margin: "-100px",
                        once: true,
                    }}
                    >
                        <img className='image' src="./src/assets/as-skisser.jpg" alt="" />
                    </motion.article>

                    <motion.article
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
                    >
                        <p className='text'>
                            Första steget i projektet var att brainstorma kring sidans design och profil. Jag ville skapa en webbplats som förmedlar en känsla av skidåkning och alpina miljöer, med en enkel och ren design och färger inspirerade av sporten. Jag började med skisser och wireframes för att tydligare visualisera layouten och flödet på sidan. Nästa utmaning blev att designa en logotyp som knyter samman sidans typsnitt, färgschema och grafiska uttryck. Logotypen fick inspireras av de klassiska svårighetsmärkningarna i skidbackar och ett stilrent typsnitt.
                            Med idéerna klara tog jag hjälp av Figma för att skapa fyra olika varianter av landningssidan, där jag testade dem med potentiella kunder för att hitta den design som bäst fångar den känsla jag vill förmedla.
                        </p>
                    </motion.article>

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
                        margin: "-50px",
                        once: true,
                    }}
                    >
                        <img className='image' src="./src/assets/as-figma-1.png" alt="" />
                    </motion.article>

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
                        margin: "-50px",
                        once: true,
                    }}
                    >
                        <p className='text'>
                            När prototypen var satt började jag förbereda mig för utvecklingen. Webbplatsen kommer att byggas i React med JavaScript och animationer via Framer Motion för en dynamisk, responsiv design anpassad för både datorer och mobiler. Den initiala versionen blir en enkel och lättnavigerad sida, men planen är att bygga vidare med funktioner som ett bokningssystem och en webbshop för begagnad utrustning. För att förbättra kundupplevelsen kommer jag att inkludera sektioner med tips och råd som kan vara till nytta för besökare.
                        </p>
                    </motion.article>

                    <motion.article
                    initial={{
                        opacity: 0,
                        y: -50
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
                    >
                        <img className='image' src="./src/assets/as-figma-2.png" alt="" />
                    </motion.article>

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
                        margin: "-50px",
                        once: true,
                    }}
                    >
                        <p className='text'>
                            Den största utmaningen hittills har varit den ständigt pågående inlärningen av nya tekniker och bibliotek, vilket har inneburit att jag fått omstrukturera koden flera gånger. Men nu, med moduler i fullstack och TypeScript snart under bältet, känner jag mig redo att färdigställa Alpine Sport 1.0. Ambitionen är att i framtiden vidareutveckla sidan och eventuellt bygga om den med TypeScript för en ännu robustare och mer skalbar lösning.
                            <br /><br />
                            Så snart hemsidan är färdig kommer jag länka härifrån.
                        </p>
                    </motion.article>
                </section>
            </section>
            <Footer />
        </div>
    )
}

export default ProjectsPage
