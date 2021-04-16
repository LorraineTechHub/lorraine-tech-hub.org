import Head from 'next/head'
import Image from 'next/image'
import styles from './layout.module.css'
import Link from 'next/link'


export default function Layout({ children, page_title }) {
    return (
        <>
            <Head>
                <title>{page_title}</title>
            </Head>
            <header className={styles.container_xl}>
                {' '}
                <Link href="/">
                    <Image
                        src="/images/lorraine_tech_hub.png"
                        height={50}
                        width={50}
                        alt="logo Lorraine Tech Hub"
                    />
                </Link>
            </header>
            <main className={styles.container}>
                {children}
            </main>
        </>
    )
}