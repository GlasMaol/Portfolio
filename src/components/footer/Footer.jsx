import React from 'react'
import '../footer/footer.css'
import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'

function Footer() {
    return (
        <footer>
            <motion.section
            whileHover={{
                scale: 1.1
            }}
            whileTap={{
                scale: 0.9
            }}
            transition={{
                duration: 0.2,
                ease: "easeIn"
            }}
            >
                <Link
                to="/contact">
                    <p className='footerP'>KONTAKT</p>
                </Link>
            </motion.section>
            <section className='socialamedierContainer'>
                <motion.a
                whileHover={{
                    scale: 1.1
                }}
                whileTap={{
                    scale: 0.9
                }}
                transition={{
                    duration: 0.2,
                    ease: "easeIn"
                }}
                href="https://www.linkedin.com/in/alistairmccann/" target="_blank" rel="noopener noreferrer">
                    <img className='linkedinLogo' src="./Linkedin-Logo.png" alt="Linkedin logo" />
                </motion.a>
                <motion.a
                whileHover={{
                    scale: 1.1
                }}
                whileTap={{
                    scale: 0.9
                }}
                transition={{
                    duration: 0.2,
                    ease: "easeIn"
                }}
                href="https://github.com/GlasMaol" target="_blank" rel="noopener noreferrer">
                    <img className='githubLogo' src="./Github-logo.png" alt="Github logo" />
                </motion.a>
            </section>
        </footer>
    )
}

export default Footer
