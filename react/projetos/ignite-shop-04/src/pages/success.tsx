import { ImageContainer } from '@/styles/pages/product'
import { SuccessContainer } from '@/styles/pages/success'
import { GetServerSideProps } from 'next'
import Link from 'next/link'
import Stripe from 'stripe'
import { stripe } from '../lib/stripe'

export default function Product() {
  return (
    <SuccessContainer>
      <h1>Compra efetuada</h1>

      <ImageContainer></ImageContainer>

      <p>
        Uhuul <strong>Diego Fernandes</strong>, sua{' '}
        <strong>Camiseta Beyond the Limits</strong> já está a caminho da sua
        casa.
      </p>

      <Link href="/">Voltar ao catálogo</Link>
    </SuccessContainer>
  )
}

export const getServerSideProps: GetServerSideProps = async ({ query }) => {
  if (!query.session_id) {
    return {
      redirect: {
        destination: '/',
        permanent: false,
      },
    }
  }
  const sessionId = String(query.session_id)

  const session = await stripe.checkout.sessions.retrieve(sessionId, {
    expand: ['line_items', 'line_items.data.price.product'],
  })

  const costumerName = session.customer_details?.name
  const product = session.line_items?.data[0]?.price?.product as Stripe.Product

  if (costumerName === null || costumerName === undefined) {
    return {
      notFound: true,
    }
  }

  return {
    props: {
      costumerName,
      product: {
        name: product.name,
        imageUrl: product.images[0],
      },
    },
  }
}
