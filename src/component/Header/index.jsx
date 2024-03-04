import styles from './style.module.css'
import Image from 'next/image'
import nextConfig from '../../../next.config.js'

export default function Header({isMobile}) {
  return (
    <> 
    <header className={styles.header}>
        <HeaderLogo isMobile={isMobile}/>
        {!isMobile && <HeaderSecond/>}
        <HeaderThird isMobile={isMobile}/>
    </header>
    </>
  )
}

function HeaderLogo({isMobile}) {
  return (<div className={styles.headerFirst}>
        <Image src={`${nextConfig.basePath}/images/logo.png`} width={isMobile?104:150} height={isMobile?25:50} alt='logo image' />
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

    function HeaderSecond({}) {
      return (<div className={styles.headerSecond}>
          <div className={styles.headerOptionActivated}>Marketplace</div>
          <div className={styles.headerOptions}>Stats</div>
          <div className={styles.headerOptions}>Collections</div>
          <div className={styles.headerOptions}>Explore</div>
          <div className={styles.headerOptions}>Community</div>
        </div>);
    }

    function HeaderBurgerMenu({}) {
      return (<div className={styles.headerBurgerMenu}>
            <Image src={`${nextConfig.basePath}/images/bm.png`} width={25} height={12} alt='burger-menu image' />
          </div>);
    }
        