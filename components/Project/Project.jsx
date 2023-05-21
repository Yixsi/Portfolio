import styles from './Project.module.css';
import Image from 'next/image';

export default function Project({ title, role, description, tasks, image, techs, skills, link }) {
    return (
        <div className={styles.card}>
            <Image
                src={image}
                alt={title}
                width={1366}
                height={768}
                className={styles.img}
            />
            <div className={styles.info}>
                <ul>
                    <li><span className={styles.projectName}>{title} - {role}</span></li>
                    <li><p className={styles.projectP}>{description}</p></li>
                    <li><span className={styles.subtitles}>Tasks:</span></li>
                    <li><p className={styles.projectP}>{tasks}</p></li>
                    <li><span className={styles.subtitles}>Technologies:</span></li>
                    <li><span className={styles.techs}>{techs?.map((el, key) => <span key={key}> {el} </span>)}</span></li>
                    <li><span className={styles.subtitles}>Skills developed:</span></li>
                    <li><p className={styles.projectP}>{skills}</p></li>
                    <li><a href={link} target='_blank'>{link}</a></li>
                </ul>

            </div>
        </div>
    )
}