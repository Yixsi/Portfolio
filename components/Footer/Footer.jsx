import styles from './Footer.module.css';
import { BsFillEnvelopeAtFill, BsLinkedin } from 'react-icons/bs';
import { AiFillGithub } from 'react-icons/ai';

export default function Footer() {
    return (
        <footer>
            <div className={styles.footerInfo}>
                <p>&copy; {new Date().getFullYear()} 
                    <span>|</span> Yisney Soto <span>|</span>
                    Full Stack Developer <span>|</span>
                </p>
                <div className={styles.media}>
                    <a href='https://www.linkedin.com/in/yisney-soto/' target='_blank'><BsLinkedin className={styles.socialIcon} /></a>
                    <a href='https://github.com/Yixsi' target='_blank'><AiFillGithub className={styles.socialIcon} /></a>
                    <a href="mailto:yixsi3103@gmail.com"><BsFillEnvelopeAtFill className={styles.socialIcon} /></a>
                </div>
            </div>
        </footer>
    )
}