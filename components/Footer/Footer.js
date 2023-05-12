import styles from './Footer.module.css'

export default function Footer() {
    return (
        <footer>
            <div className={styles.footerInfo}>
                <p>&copy; 2023 <span>|</span> Yisney Soto <span>|</span> Full Stack Developer</p>
            </div>
        </footer>
    )
}