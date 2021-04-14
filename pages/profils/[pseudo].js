import { useRouter } from 'next/router'
import fs from 'fs'
import { join } from 'path'
import Layout from "../../components/layout";
import Profil from "../../components/profil";

function fetchProfiles() {
    return fs.readdirSync(join(process.cwd(), 'pages/profils/data'))
            .map(file => fs.readFileSync('pages/profils/data/' + file, 'utf8'))
            .map(content => JSON.parse(content))
}

function SingleProfile({ profiles }) {
    const router = useRouter()
    const { pseudo } = router.query

    const profile = profiles.find(profile => profile.pseudo === pseudo)
    
    return (
        <Layout page_title={profile.pseudo}>
            <Profil profile={profile} />
        </Layout>
    )
}

export async function getStaticPaths() {
    const profiles = fetchProfiles()

    const paths = profiles.map((profile) => ({
        params: { pseudo: profile.pseudo },
    }))

    return { paths, fallback: false }
}

export async function getStaticProps() {
    const profiles = fetchProfiles()

    return {props: {profiles}}
}

export default SingleProfile
