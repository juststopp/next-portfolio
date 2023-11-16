import Arrow from '@/assets/svg/Arrow.svg';
import styles from '@/components/Title/Title.module.scss';

import Image from 'next/image'

export default function Title() {
    return (
        <>
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
        </>
    )
}