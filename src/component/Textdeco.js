import React, { useEffect, useState } from 'react'

function Textdeco() {
    const [sY, setSY] = useState(0);

    const handleScroll = () => {
        const scrollPosition = window.scrollY;
        setSY(scrollPosition);
    };
    useEffect(()=>{
        window.addEventListener('scroll', handleScroll);

        return () => {
            window.removeEventListener('scroll', handleScroll)
        }
    }, [])
    
    return (
        <div className={sY === 0 ? 'text_deco' : 'text_deco hide'}>
			<span>publisher</span>
			<span>front-end</span>
			<span>/2025</span>
        </div>
    )
}

export default Textdeco