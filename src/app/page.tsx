import Sidebar from '@/components/Sidebar/Sidebar.component';
import Title from '@/components/Title/Title.component';
import Projects from '@/components/Projects/Projects.component';

import styles from '@/app/page.module.scss';

import '@/app/globals.css'

export default function Home() {
    
    return (
        <>
            <div className={styles.container}>
                <Sidebar />
                <Title />

                {/*<div className={styles.mouseContainer}>
                    <i className={`gg-mouse ${styles.scrollMouse}`}></i>
                    <h3>scroll</h3>
                </div>*/}
            </div>

            { /*<Projects />*/ }
            
        </>
    )
}