import {Helmet} from "react-helmet";

import Layout        from '@/components/Layout/Layout';

function Home(){
    return (
        <Layout>

         <Helmet>
            <title>Traverser | Home</title>
            <meta name="description" content="Helmet application" />
         </Helmet>

          <div className="max-w-10xl mx-auto p-4 lg:p-8 w-full">
           
           
          </div>
        </Layout>
    )
}

export default Home