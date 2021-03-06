import { GetStaticPaths, GetStaticProps } from 'next'

import { Title } from '../../styles/pages/Home'

interface IProduct {
  id: string
  title: string
}

interface CategoryProps {
  products: IProduct[]
}

export default function Category({ products }: CategoryProps) {
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

export const getStaticPaths: GetStaticPaths = async () => {
  const response = await fetch('http://localhost:4444/categories')
  const categories = await response.json()

  const paths = categories.map(category => {
    return {
      params: {
        slug: category.id
      }
    }
  })

  return {
    paths,
    fallback: false
  }
}

export const getStaticProps: GetStaticProps<CategoryProps> = async (context) => {
  const { slug  } = context.params

  const response = await fetch(`http://localhost:4444/products?category_id=${slug}`)
  const products = await response.json()

  return {
    props: {
      products
    },
    revalidate: 60
  }
}