import FeaturedArea from '@app/components/layouts/Main/FeaturedArea'
import MainLayout from '@app/components/layouts/Main'
import React from 'react'
import { useTranslation } from '@app/utils/i18next'

const mainFeaturedPost = {
  title: 'Title of a longer featured Area',
  description:
    "Multiple lines of text that form the lede, informing new readers quickly and efficiently about what's most interesting in this post's contents.",
  image: 'https://source.unsplash.com/random',
  imageText: 'main image description',
  linkText: 'Continue reading…',
}
const HomePage = () => {
  const { t } = useTranslation('common')
  return (
    <MainLayout title={t('title.home')}>
      <FeaturedArea post={mainFeaturedPost} />
      <h1>My Blog</h1>
    </MainLayout>
  )
}

HomePage.defaultProps = {
  i18nNamespaces: ['common'],
}

export default HomePage
