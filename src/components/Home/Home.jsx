import {Helmet} from "react-helmet";

import Layout        from '@/components/Layout/Layout';
import Card        from '@/components/Home/Card';

function Home(){
    return (
        <Layout>

         <Helmet>
            <title>Traverser | Home</title>
            <meta name="description" content="Helmet application" />
         </Helmet>
            <div className="grid gap-3">
                {Array(10).fill(
                <Card/>
                )}
            </div>
        </Layout>
    )
}

export default Home