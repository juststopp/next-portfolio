'use client';

import styles from '@/components/Sidebar/Sidebar.module.scss';

import LinkedIn from '@/assets/svg/LinkedIn.svg';
import Github from '@/assets/svg/Github.svg';
import Discord from '@/assets/svg/Discord.svg';

import Image from 'next/image';
import Link from 'next/link';

export default function Sidebar() {
    return (
        <div className={styles.sidebarContainer}>
            <Image
                src={LinkedIn}
                height={25}
                width={25}
                alt="LinkedIn logo"

                onClick={() => window.open('https://www.linkedin.com/in/malo-beaugendre-a5aa4326a', '_blank')}

                className={styles.icon}
            />

            <Image
                src={Github}
                height={25}
                width={25}
                alt="Github logo"

                onClick={() => window.open('https://github.com/juststopp', '_blank')}

                className={styles.icon}
            />

            <Image
                src={Discord}
                height={25}
                width={25}
                alt="Discord logo"

                onClick={() => window.open('https://discord.com/channels/@me/661525561394462730', '_blank')}

                className={styles.icon}
            />
        </div>
    )
}