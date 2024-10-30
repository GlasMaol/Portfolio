import React from 'react'
import TitleItem from '../titleItem/TitleItem'
import './contentPageHeader.css'
import { Link } from 'react-router-dom'

function ContentPageHeader() {
    return (
        <header className='contentHeader-container'>
            <section className='navCont'>
                <nav>
                    <div className="navicon">
                        <div></div>
                    </div>
                    <Link to="/">HEM</Link>
                    <Link to="/frontend">FRONTEND</Link>
                    <Link to="/projects">PROJEKT</Link>
                    <Link to="/about">OM</Link>
                    <Link to="/contact">KONTAKT</Link>

                </nav>
            </section>
            <section className='contentTitle-container'>
                <TitleItem />
            </section>
        </header>
    )
}

export default ContentPageHeader;