import {useEffect, useState} from "react";
import {Helmet} from "react-helmet";

import Layout         from '@/components/Layout/Layout';
import SidebarMobile  from '@/components/Sidebar/SidebarMobile';
import SidebarDesktop from '@/components/Sidebar/SidebarDesktop';
import Card           from '@/components/Home/Card';
import ListLoader     from '@/components/Layout/ListLoader';

function Home(){

    const [showLoading, setShowLoading] = useState(true);

    useEffect(() => {
        const timer = setTimeout(() => {
          console.log('This will run after 1 second!');
          setShowLoading(false);
        }, 1000);
        return () => clearTimeout(timer);
    }, []);

    return (
        <Layout>
            <Helmet>
                <title>Traverser | Home</title>
                <meta name="description" content="Helmet application" />
            </Helmet>
            <div className="bg-white">
                <div>
                    <SidebarMobile/>
                    <main className="max-w-2xl mx-auto py-16 px-4 sm:py-24 sm:px-6 lg:max-w-7xl lg:px-8">
                    <div className="border-b border-gray-200 pb-10">
                        <h1 className="text-4xl font-extrabold tracking-tight text-gray-900">
                        New Arrivals
                        </h1>
                        <p className="mt-4 text-base text-gray-500">
                        Checkout out the latest release of Basic Tees, new and improved with
                        four openings!
                        </p>
                    </div>
                    <div className="pt-12 lg:grid lg:grid-cols-3 lg:gap-x-8 xl:grid-cols-4">
                        <SidebarDesktop/>
                        <div className="mt-6 lg:mt-0 lg:col-span-2 xl:col-span-3">
                            {
                                showLoading && 
                                <ListLoader/>
                            }
                            <div className="grid gap-3">
                                {
                                    !showLoading && 
                                    Array.from(Array(10), (_, i) => (
                                       <Card key={i}/>
                                    ))
                                }
                            </div> 
                        </div>
                        </div>
                    </main>
                </div>
            </div>
        </Layout>
    )
}

export default Home