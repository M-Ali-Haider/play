import styles from './style.module.css'
import Image from 'next/image'
import nextConfig from '../../../next.config.js'
import { useState } from 'react'

export default function Header({isMobile}) {

  const [selectedOption,setSelectedOption] = useState(0)

  return (
    <> 
    <header className={styles.header}>
        <HeaderLogo isMobile={isMobile}/>
        {!isMobile && <HeaderSecond selectedOption={selectedOption} setSelectedOption={setSelectedOption}/>}
        <HeaderThird isMobile={isMobile}/>
    </header>
    </>
  )
}

function HeaderLogo({isMobile}) {
  return (<div className={styles.headerFirst}>
        <Image src={`${nextConfig.basePath}/images/logosvg.svg`} width={isMobile?104:150} height={isMobile?25:50} alt='logo image' />
    </div>);
}

    function HeaderThird({isMobile}) {
      return (
        <>
        <div className={styles.headerThirdHelper}>
          {isMobile && <HeaderBurgerMenu/>}
          <div className={styles.headerThird}>
            <Image src={`${nextConfig.basePath}/images/trapezium.png`} width={isMobile?120:130} height={40} alt='register-button' />
            <div className={styles.headerRegister}>Register</div>
          </div>
        </div>
        </>
      );
    }

    function HeaderSecond({ selectedOption, setSelectedOption }) {
      const options = [
        { label: 'Marketplace', index: 0 },
        { label: 'Stats', index: 1 },
        { label: 'Collections', index: 2 },
        { label: 'Explore', index: 3 },
        { label: 'Community', index: 4 }
      ];
    
      return (
        <div className={styles.headerSecond}>
          {options.map(option => (
            <div
              key={option.index}
              className={selectedOption === option.index ? `${styles.headerOptionActivated} ${styles.headerOptions}` : styles.headerOptions}
              onClick={() => setSelectedOption(option.index)}
            >
              {option.label}
            </div>
          ))}
        </div>
      );
    }
    

    function HeaderBurgerMenu({}) {
      return (<div className={styles.headerBurgerMenu}>
            <Image src={`${nextConfig.basePath}/images/bm.png`} width={25} height={12} alt='burger-menu image' />
          </div>);
    }
        