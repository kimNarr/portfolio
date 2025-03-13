import React, { useState } from 'react'

function Header() {

    const [isOpen, setIsOpen] = useState(false);

    const menuOpen = () => {
        setIsOpen((prevState)=> !prevState);
        if(!isOpen) {
            document.querySelector('body').classList.add('open');
        } else {
            document.querySelector('body').classList.remove('open');
        }
    }

    const goToScroll= (name) => {
        var location = document.querySelector("." + name).offsetTop;
        window.scrollTo({top: location, behavior: 'smooth'});
        // setIsOpen((prevState)=> !prevState);
    }


    return (
        <header>
            <button className={isOpen ? 'open' : ''} onClick={()=>menuOpen()}></button>
            <div className={isOpen ? 'gnb_wrap open' : 'gnb_wrap'}>
                <ul className='gnb'>
                    <li onClick={()=>goToScroll('main')}>main</li>
                    <li onClick={()=>goToScroll('about')}>about</li>
                    <li onClick={()=>goToScroll('career')}>career</li>
                    <li onClick={()=>goToScroll('project')}>project</li>
                    <li onClick={()=>goToScroll('contact')}>contact</li>
                </ul>
            </div>
        </header>
    )
}

export default Header