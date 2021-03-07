import { Title } from '@/styles/pages/Home'

import Seo from '@/components/Seo'

export default function NotFound() {
  return (
    <div>
      <Seo title="Not found" />

      <Title>Page not found</Title>

      <p>Houston, we have a problem. Are you lost?</p>
    </div>
  )
}
