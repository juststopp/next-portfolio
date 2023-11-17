'use client';
import Star from '@/assets/svg/Star.svg'

import styles from '@/components/Projects/Projects.module.scss'
import { useEffect, useState } from 'react'

import Image from 'next/image'
import Link from 'next/link'

export default function Projects() {
    const [projects, setProjects] = useState([])

    useEffect(() => {
        fetch('https://api.github.com/users/juststopp/repos')
        .then((res) => res.json())
        .then((data) => {
            data.sort((a: any, b: any) => {
                if (a.stargazers_count > b.stargazers_count) {
                    return -1
                }
                if (a.stargazers_count < b.stargazers_count) {
                    return 1
                }
                return 0
            })

            setProjects(data.filter((project: any) => !project.fork 
                && !project.archived 
                && !project.private
                && !project.topics.includes('config')
                && !project.name.includes('portfolio')
            ).slice(0, 4))
        })
    }, [])

    return (
        <>
            <div className={styles.header}>
                <h1 className={styles.title}>Projects</h1>
                <hr className={styles.divider} />
                <p>Here is the list of the four most starred projects on my <Link href={'https://github.com/juststopp'}>Github Profile</Link>.</p>
            </div>
            <div className={styles.container}>
                { projects.map((project: any) => {

                    return (
                        <div className={styles.projectContainer} onClick={() => window.open(project.html_url, '_blank')}>
                            <div className={styles.stars}>
                                <Image
                                    src={Star}
                                    height={40}
                                    width={40}
                                    alt="Star"

                                    className={styles.star}
                                />

                                <p>{ project.stargazers_count }</p>
                            </div>
                            <div className={styles.projectInfos}>
                                <h2 className={styles.projectName}>{ project.name }</h2>
                                
                                <div className={styles.VStack}>
                                    <p className={styles.tooltip}>{ project.owner.login }</p>

                                    <Image 
                                        src={ project.owner.avatar_url}
                                        height={35}
                                        width={35}
                                        alt={ project.owner.login }
                                    />
                                </div>
                            </div>
                            <div className={styles.projectCore}>
                                <p>{ project.description ?? 'No description has been defined for this project. Feel free to see the github repository to learn more about it.' }</p>
                            </div>
                            <div className={styles.languages}>
                                { project.language }
                            </div>
                        </div>
                    )
                })  }    

            </div>
        </>
    )
}