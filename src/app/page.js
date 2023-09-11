import Image from 'next/image'
import styles from './page.module.css'
import Hero from 'public/hero.png'
import Button from '@/components/Button/Button'
// Main page 

export default function Home() {
  return (
    <div className={styles.container}>
      {/* Content area start  */}
      <div className={styles.item}>
        <h1 className={styles.titel}>Better Design for your digital products.</h1>
        <p className={styles.desc}>Turning your idea into Reality. We bring together the teams from the global tech industry.</p>
        <Button url="/portfolio" text="See our work"></Button>
      </div>
      {/* img area start  */}
      <div className={styles.item}>
        <Image className={styles.img} src={Hero} alt="banner"></Image>
      </div>
    </div>
  )
}
