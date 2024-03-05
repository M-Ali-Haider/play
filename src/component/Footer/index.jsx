import styles from './style.module.css'
import Image from 'next/image';
import nextConfig from '../../../next.config';
export default function Footer({isMobile}) {
  return (
    <footer className={styles.footer}>
        <div className={styles.footerHelper}>
            <FooterLogo isMobile={isMobile}/>
            {!isMobile && <FooterTwo/>}
            <FooterThird/>
        </div>
        {isMobile && <FooterTwo/>}
        <div className={styles.copyright}>
            <div>© Copyright 2022, All Rights Reserved by Play Games</div>
        </div>
    </footer>
  )
}

function FooterThird({}) {
    const socials=[
        {
            path:'twitter.svg',
            backgroundColor:'rgba(30, 41, 59, 1)',
        },
        {
            path:'facebook.svg',
            backgroundColor:'linear-gradient(90.26deg, #C1260F 0.34%, #EE642A 96.66%)',
        },
        {
            path:'instagram.svg',
            backgroundColor:'rgba(30, 41, 59, 1)',
        },
        {
            path:'github.svg',
            backgroundColor:'rgba(30, 41, 59, 1)',
        },
    ]
  return (<div className={styles.footerThree}>
        {
            socials.map((social,index)=>{
                return <div className={styles.socialDiv} key={index} style={{background:social.backgroundColor}}>
                    <Image 
                        src={`${nextConfig.basePath}/images/${social.path}`}
                        width={100}
                        height={100}
                        alt='socials image'
                    />
                </div>
            })
        }
    </div>);
}

    function FooterLogo({isMobile}) {
      return (<div className={styles.footerOne}>
            <Image src={`${nextConfig.basePath}/images/logosvg.svg`} width={isMobile ? 104 : 150} height={isMobile ? 25 : 50} alt='logo image' />
        </div>);
    }

    function FooterTwo({}) {
      return (<div className={styles.footerTwo}>
                <div className={styles.footerOption}>Marketplace</div>
                <div className={styles.footerOption}>Stats</div>
                <div className={styles.footerOption}>Collections</div>
                <div className={styles.footerOption}>Explore</div>
                <div className={styles.footerOption}>Comunity</div>
            </div>);
    }
      