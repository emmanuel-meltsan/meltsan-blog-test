import * as React from "react"
import { graphql, useStaticQuery } from "gatsby"
import { ReactNode } from "react"

type Props = {
    title: string
    description?: string
    children?: ReactNode
}

const Seo = ({ title, description, children }: Props) => {
    const { site } = useStaticQuery<{
        site: {
            siteMetadata: {
                title: string
                description: string
                social: { twitter: string }
            }
        }
    }>(graphql`
    query {
      site {
        siteMetadata {
          title
          description
          social {
            twitter
          }
        }
      }
    }
  `)

    const metaDescription = description || site.siteMetadata.description
    const defaultTitle = site.siteMetadata?.title

    return (
        <>
            <title>{defaultTitle ? `${title} | ${defaultTitle}` : title}</title>
            <meta name="description" content={metaDescription} />
            <meta property="og:title" content={title} />
            <meta property="og:description" content={metaDescription} />
            <meta property="og:type" content="website" />
            <meta name="twitter:card" content="summary" />
            <meta
                name="twitter:creator"
                content={site.siteMetadata?.social?.twitter || ""}
            />
            <meta name="twitter:title" content={title} />
            <meta name="twitter:description" content={metaDescription} />
            {children}
        </>
    )
}

export default Seo
