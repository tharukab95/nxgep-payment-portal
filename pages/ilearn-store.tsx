import { NextPage } from 'next'
import Layout from '../components/Layout'

import Cart from '../components/Cart'
import CartSummary from '../components/CartSummary'
import Products from '../components/Products'

const DonatePage: NextPage = () => {
  return (
    <Layout title="ilearnhub Cart | Nxgep">
      <div className="page-container">
        <h1>Largest e-learning store</h1>
        <p>{' '}</p>
        {/* <p>
          Powered by{' '}
          Stripe Payments
        </p> */}
        <Cart>
          <CartSummary />
          <Products />
        </Cart>
      </div>
    </Layout>
  )
}

export default DonatePage
