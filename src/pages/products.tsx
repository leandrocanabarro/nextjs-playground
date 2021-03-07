import { GetStaticProps } from 'next'

import { Title } from '@/styles/pages/Home'

import Seo from '@/components/Seo'

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
      <Seo title="All Products" />

      <section>
        <Title>All Products</Title>
        <ul>
          {products.map((product) => {
            return <li key={product.id}>{product.title}</li>
          })}
        </ul>
      </section>
    </div>
  )
}

export const getStaticProps: GetStaticProps<ProductsProps> = async (context) => {
  const response = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/products`)
  const products = await response.json()

  return {
    props: {
      products,
    },
    revalidate: 5,
  }
}
