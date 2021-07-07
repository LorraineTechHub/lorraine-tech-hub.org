import { useRouter } from 'next/router'
import FetchAllProfiles from "../../lib/profile";
import Layout from "../../components/layout";
import Profile from "../../components/profile";

function SingleProfile({ profiles }) {
    const router = useRouter()
    const { pseudo } = router.query

    const profile = profiles.find(profile => profile.pseudo === pseudo)
    
    return (
        <Layout page_title={profile.pseudo}>
            <Profile profile={profile} />
        </Layout>
    )
}

export async function getStaticPaths() {
    const paths = FetchAllProfiles().map((profile) => ({
        params: { pseudo: profile.pseudo },
    }))

    return { paths, fallback: false }
}

export async function getStaticProps() {
    const profiles = FetchAllProfiles()

    return {props: {profiles}}
}

export default SingleProfile
