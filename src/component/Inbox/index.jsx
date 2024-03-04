import styles from './style.module.css'
import Image from 'next/image'
import nextConfig from '../../../next.config'
import { useState } from 'react'
export default function Inbox({isMobile}) {

    const [tabSelected, setTabSelected] = useState(0)
    const data=[
        {
            title:"Staff Picks With Erin This Week's Top Picks",
            desc:"For the Consuming Campaign discharge, I remained up the entire evening playing and wound up leaving school 'cos I was nodding off all over. Most certainly utilized being debilitated a ton in school to mess around. Presently I simply use excursion when games I'm energized for emerge."
        },
        {
            title:"Compelling Game is 20 Years of age!",
            desc:"For the Consuming Campaign discharge, I remained up the entire evening playing and wound up leaving school 'cos I was nodding off all over. Most certainly utilized being debilitated a ton in school to mess around. Presently I simply use excursion when games I'm energized for emerge."
        },
        {
            title:"Irresistible Games Merchandise is Here",
            desc:"For the Consuming Campaign discharge, I remained up the entire evening playing and wound up leaving school 'cos I was nodding off all over. Most certainly utilized being debilitated a ton in school to mess around. Presently I simply use excursion when games I'm energized for emerge."
        },
    ]

  return (
    <div className={styles.inboxContainer}>
        <InboxImageContainer isMobile={isMobile}/>

        <div className={styles.inboxDescription} style={{width:isMobile?386:547}}>
            {
                data.map((item,i)=>{
                    return <Tab 
                        key={i}
                        tabSelected={tabSelected} 
                        setTabSelected={setTabSelected} 
                        title={item.title}
                        index={i}
                        desc={item.desc}
                    />
                })
            }

            <div className={styles.inboxButtons}>
                <div className={styles.buttonOne}>Play Now</div>
                <div className={styles.buttonTwo}>Watch Trailer</div>
            </div>
        </div>
    </div>
  )
}

function InboxImageContainer({isMobile}) {
  return (<div className={styles.inboxImageContainer} style={{
        width:isMobile?380:614,
        height: isMobile?326:526
        }}>
        <Image className={styles.imageFrame} src={`${nextConfig.basePath}/images/inboximageframe.png`} width={isMobile?380:614} height={isMobile?326:526} alt='image-frame' />
        <Image className={styles.imageAbsolute} src={`${nextConfig.basePath}/images/inboximage.png`} width={isMobile?368:594} height={isMobile?308:497} alt='inbox-image' />
    </div>);
}
  

const Tab = ({ tabSelected, setTabSelected, title, index, desc }) => {
    return (
        <div className={styles.tab}>
            <div 
                className={`${styles.tabBox} ${tabSelected === index ? styles.tabBoxSelected : ''}`}
                onClick={() => setTabSelected(index)}
                
            >
                <Image
                    className={styles.arrow}
                    style={{ transform: tabSelected === index ? 'rotate(180deg)' : 'none' }}
                    src={`${nextConfig.basePath}/images/inboxarrow.png`}
                    width={22}
                    height={18}
                    alt='arrow-image'
                />
                <div>{title}</div>
            </div>
            <div 
                className={styles.tabExtended}
                style={{height: tabSelected == index ?'220px':'0px'}}
            >
                <div className={styles.desc}>{desc}</div>
            </div>
        </div>
    );
};
