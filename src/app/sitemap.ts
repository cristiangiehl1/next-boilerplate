import type { MetadataRoute } from 'next'

import { siteMetadata } from './metadata'

type SitemapEntryWithoutUrl = Omit<MetadataRoute.Sitemap[0], 'url'>

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = siteMetadata.metadataBase

  const customRoutes: MetadataRoute.Sitemap = [
    {
      url: `${baseUrl}`,
      priority: 1,
    },
  ]

  const defaultSitemapEntry: SitemapEntryWithoutUrl = {
    changeFrequency: 'yearly',
    lastModified: '2026',
  }

  const routes = customRoutes.map((route) => ({
    ...defaultSitemapEntry,
    ...route,
  }))

  return routes
}
