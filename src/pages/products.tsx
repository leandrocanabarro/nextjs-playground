import { GetStaticProps } from 'next'

import { Title } from '../styles/pages/Home'

interface IProduct {
  id: string
  title: string
}

interface ProductsProps {
  products: IProduct[]
}

export default function Products({ products }: ProductsProps) {
  return (
    <div>
      <section>
        <Title>All Products</Title>
        <ul>
          {products.map(product => {
            return (
              <li key={product.id}>
                {product.title}
              </li>
            )
          })}
        </ul>
      </section>
    </div>
  )
}

export const getStaticProps: GetStaticProps<ProductsProps> = async (context) => {
  const response = await fetch('http://localhost:4444/products')
  const products = await response.json()

  return {
    props: {
      products
    },
    revalidate: 5
  }
}
