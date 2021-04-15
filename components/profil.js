import Image from 'next/image'
import styles from './profil.module.css'

export default function Profil({ profile }) {
    
    const picture = null === profile.picture ? '/images/placeholder-image.jpg' : profile.picture
    
    return (
        <section className={styles.container__profile}>
            <header>
                <div id={styles.profile_picture}>
                    <Image
                        src={picture}
                        width={400}
                        height={300}
                        alt={profile.pseudo}
                    />
                </div>
                <div id={styles.profile_summary}>
                    <div>
                        <h1>@{profile.pseudo}</h1>
                        <p>{profile.full_name}</p>
                    </div>
                    <div>
                        {profile.starred.map((techno) => (
                            <Image
                                className={styles.profile_icon}
                                src={`/images/${techno}-original.svg`}
                                width={40}
                                height={40}
                                alt={techno}
                            />
                        ))}
                    </div>
                </div>
                <p id={styles.interview_date}>Interview du {profile.interview_date}</p>
            </header>
            {profile.interview.map((topic) => (
                <div className={styles.interview_topic}>
                    <p className={styles.interview_topic_question}>{topic.question}</p>
                    <p className={styles.interview_topic_response}>{topic.response}</p>
                </div>
            ))}
            <footer>
                <p>Inspiré par le travail d'Arnaud Becher sur https://elsass.dev</p>
                <p>Retrouvez ces personnes sur le Discord Lorraine Tech Hub</p>
            </footer>
        </section>
    )
}