import styles from './style.module.css'
import { Swiper, SwiperSlide } from 'swiper/react'
import 'swiper/css'
import 'swiper/css/pagination'
import {Pagination,Autoplay} from 'swiper/modules'
import Image from 'next/image'
import nextConfig from '../../../next.config'
import { useEffect, useState } from 'react'
export default function HappyClientsSwiper() {

    const [isSwiperSingle,setSwiperStatus] = useState(false)
    useEffect(()=>{
        const handleResize=()=>{
          setSwiperStatus(window.innerWidth<850)
        }
        handleResize()
        window.addEventListener("resize",handleResize);
        return()=>window.removeEventListener("resize",handleResize);
      },[])

  return (
    <div className={styles.happyClientSwiper}>
        <Swiper
            initialSlide={2}
            pagination={{
                clickable: true,
            }}
            autoplay={{delay:5000}}
            className={styles.mySwiper}
            slidesPerView={isSwiperSingle?1:1.5} 
            centeredSlides={true}
            loop={true}
            modules={[Pagination,Autoplay]}
        >
            {
                [...Array(5)].map((_,i)=>{
                    return <SwiperSlide key={i} className={styles.swiperSlide}><InnerSwiperSlide isSwiperSingle={isSwiperSingle}/></SwiperSlide>
                })
            }
        </Swiper>
    </div>
  )
}

function InnerSwiperSlide({isSwiperSingle}) {
  return (<><Image className={styles.annotationAbsolute} src={`${nextConfig.basePath}/images/annotation.svg`} width={isSwiperSingle?44:72} height={isSwiperSingle?37:62} alt='annotation image' />
            <Image className={styles.stars} src={`${nextConfig.basePath}/images/stars.svg`} width={145} height={35} alt='stars-image' />
            <div className={styles.swiperSlideText}>
                Quick and adaptable, SoundPart reliably meets these key necessities. The capacity to talk straightforwardly with a senior guarantor makes this conceivable. Quick and adaptable, SoundPart reliably meets these key necessities. The capacity to talk straightforwardly with a senior guarantor makes this conceivable.
                Quick and adaptable, SoundPart reliably meets these key necessities. The capacity to talk straightforwardly with a senior guarantor makes this conceivable. 
            </div>
            <div className={styles.client}>
                <Image className={styles.clientPfp} src={`${nextConfig.basePath}/images/client1.jpg`} width={55} height={55} alt='client-pfp-image' />
                <div className={styles.clientName}>Ester Howard</div>
            </div></>);
}
  