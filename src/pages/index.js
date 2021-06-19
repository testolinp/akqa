import Layout from '../layout/layout';
import Heading from '../components/heading/heading';
import Basket from '../components/basket/basket';

export default function Home() {
  return (
    <Layout>
      <Heading
        title="Your Basket"
        description="Items you have added to your basket are shown below.<br>Adjust the quantities or remove items before continuing your purchase."
      />
      <Basket />
    </Layout>
  )
}
