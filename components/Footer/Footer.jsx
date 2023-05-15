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
                    <div className={styles.media}>
                        <BsLinkedin className={styles.socialIcon} />
                        <AiFillGithub className={styles.socialIcon} />
                        <BsFillEnvelopeAtFill className={styles.socialIcon} />
                    </div>
                </p>
            </div>
        </footer>
    )
}