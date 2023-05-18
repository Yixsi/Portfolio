import styles from './Project.module.css';
import Image from 'next/image';

export default function Project({ title, role, description, tasks, image, techs, skills, link }) {
    return (
        <div className={styles.card}>
            <Image
                src={image}
                alt={title}
                layout="responsive"
                width={1366}
                height={715}
                className={styles.img}
            />
            <div className={styles.info}>
                <ul>
                    <li><h3 className={styles.projectName}>{title}</h3></li>
                    <li><h5 className={styles.role}>{role}</h5></li>
                    <li><p className={styles.projectP}>{description}</p></li>
                    <li>{tasks}</li>
                    <li><b>Technologies:</b></li>
                    <li><span className={styles.techs}>{techs?.map((el, key) => <span key={key}> {el} </span>)}</span></li>
                    <li><b>Skills developed:</b></li>
                    <li><p className={styles.projectP}>{skills}</p></li>
                    <li>{link}</li>
                </ul>

            </div>
        </div>
    )
}