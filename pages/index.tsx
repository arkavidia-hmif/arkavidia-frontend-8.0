import getConfig from 'next/config';

import Layout from '@src/components/Navigation/Layout';
import Countdown from '@src/components/CountdownCard/Countdown';

const { publicRuntimeConfig } = getConfig();
const { name } = publicRuntimeConfig.site;

const Home = () => {
  return (
    <Layout>
      <Countdown title="Arkaviduar" dateString="31 Dec 2022, 23:59 WIB" date="12/31/2022 23:59:59"/>
    </Layout>
  );
};

export default Home;
