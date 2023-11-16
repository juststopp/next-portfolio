import Arrow from '@/assets/svg/Arrow.svg';
import Sidebar from '@/components/Sidebar/Sidebar.component';

import Image from 'next/image'

import styles from '@/app/page.module.scss'
import '@/app/globals.css'

export default function Home() {
    
    return (
        <>
            <div className={styles.container}>
                <Sidebar />
                <div className={styles.titleContainer}>
                    <div className={styles.firstLine}>
                        <Image 
                            src={Arrow}
                            alt="Arrow pointing to the right"
                            width={100}
                            height={100}

                            className={styles.arrow}
                        />

                        <h1 className={styles.titleTextFirst}>I'm</h1>
                    </div>

                    <h1 className={styles.titleTextSecond}>JustStop</h1>
                </div>

                {/*<div className={styles.mouseContainer}>
                    <i className={`gg-mouse ${styles.scrollMouse}`}></i>
                    <h3>scroll</h3>
                </div>*/}
            </div>
        </>
    )
}