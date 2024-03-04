import styles from './style.module.css'
import Image from 'next/image'
import nextConfig from '../../../next.config'
export default function Landing({isMobile}) {
  return (
    <>
    <div className={styles.landingContainer}>
      <VideoFrameContainer isMobile={isMobile}/>
      <div className={styles.stripesContainer}>
        <div className={styles.stripesContainerHelper}>
          <div className={styles.stripe}>
            <GenerateImages isMobile={isMobile} extension={'blacklogo.png'}/>
          </div>
          <div className={styles.stripeInvert}>
            <GenerateImages  isMobile={isMobile} extension={'logo.png'}/>
          </div>
        </div>
      </div>
    </div>
    </>
  )
}

function VideoFrameContainer({isMobile}) {
  return (<div className={styles.videoFrameContainer}>
    <Image className={styles.videoFrame} src={`${nextConfig.basePath}/images/videoframe.png`} width={739} height={449} alt="video-frame-border image" />


    <video className={styles.video} controls>
      <source src='https://www.youtube.com/watch?v=-kAm0CVxqUQ'/>
    </video>


    <div className={styles.registerNowButton}>Register Now</div>
    <Image 
      className={styles.crown}
      src={`${nextConfig.basePath}/images/crown.png`}
      width={isMobile?40:85}
      height={isMobile?40:85}
      alt='crown-image'
    />
  </div>);
}

function GenerateImages({isMobile,extension}){
  const value = isMobile?15:25;
  return(
    <>
     {
      [...Array(value)].map((_,i)=>{
        return <Image key={i} 
          src={`${nextConfig.basePath}/images/${extension}`}
          width={isMobile?50:106}
          height={isMobile?12:26}
          alt='stripe-image'
        />
      })
     } 
    </>
  )
}
  