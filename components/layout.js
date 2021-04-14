import Head from 'next/head'

export default function Layout({ children, page_title }) {
    return (
        <>
            <Head>
                <title>{page_title}</title>
            </Head>
            <main>{children}</main>
        </>
    )
}