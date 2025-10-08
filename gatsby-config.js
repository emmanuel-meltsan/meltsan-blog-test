/**
 * Configuración principal de Gatsby para el sitio Meltsan Solutions®.
 *
 * - Define `siteMetadata` con información de la empresa, autor, redes sociales y organización.
 * - Incluye palabras clave, descripción, idioma y titular principal para SEO.
 * - Configura plugins esenciales: sitemap, imágenes, transformación de Markdown, RSS feed y PWA manifest.
  * - Utiliza `gatsby-source-filesystem` para cargar contenido del blog y recursos de imágenes.
 */


/**
 * @type {import('gatsby').GatsbyConfig}
 */
module.exports = {
siteMetadata: {
    headline: `Soluciones Cloud y Data que impulsan tu transformación digital.`,
    keywords: [
      "Cloud",
      "Transformación Digital",
      "Data",
      "Seguridad",
      "Consultoría TI",
      "Meltsan Solutions"
    ],
    language: "es-MX",
    title: `Meltsan Solutions® | Soluciones Cloud, Data y Tecnología Empresarial`,
    author: {
      name: `Meltsan Solutions`,
      summary: `Empresa mexicana que impulsa el crecimiento de organizaciones mediante soluciones innovadoras, integración de talento y tecnología de punta enfocada en ecosistemas Cloud.`,
    },
    description: `Meltsan Solutions® ofrece servicios de consultoría y desarrollo en Cloud, Data, Seguridad y Modernización de Aplicaciones para sectores clave como banca, fintech, seguros y más.`,
    siteUrl: `https://www.meltsan.us/`,
    social: {
      facebook: `meltsansolutions`,
      linkedin: `company/meltsansolutions`,
      instagram: `meltsansolutions`,
      x: `MeltsanSol`,
    },
    organization: {
      name: `Meltsan Solutions®`,
      legalName: `Meltsan Solutions S.A. de C.V.`,
      url: `https://www.meltsan.us/`,
      contactPoint: [
        {
          "@type": "ContactPoint",
          contactType: "customer support",
          email: "info@meltsan.us",
          availableLanguage: ["Spanish", "English"]
        }
      ],
      sameAs: [
        `https://www.linkedin.com/company/meltsansolutionsold/`,
        `https://www.facebook.com/MeltsanSolutions/`,
        `https://www.instagram.com/meltsansolutions/`,
      ],
      logo: `/static/meltsan-logo.png`,
      foundingDate: `2014`,
      founders: [ `Equipo Meltsan`],
      address: {
        country: `México`,
      },
    },
  },
  plugins: [
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    `gatsby-plugin-react-helmet`,
    `gatsby-plugin-sitemap`,
    `gatsby-plugin-image`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        path: `${__dirname}/content/blog`,
        name: `blog`,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      },
    },
    {
      resolve: `gatsby-transformer-remark`,
      options: {
        plugins: [
          {
            resolve: `gatsby-remark-images`,
            options: {
              maxWidth: 630,
            },
          },
          {
            resolve: `gatsby-remark-responsive-iframe`,
            options: {
              wrapperStyle: `margin-bottom: 1.0725rem`,
            },
          },
          `gatsby-remark-prismjs`,
        ],
      },
    },
    {
      resolve: `gatsby-plugin-feed`,
      options: {
        query: `
          {
            site {
              siteMetadata {
                title
                description
                siteUrl
                site_url: siteUrl
              }
            }
          }
        `,
        feeds: [
          {
            serialize: ({ query: { site, allMarkdownRemark } }) => {
              return allMarkdownRemark.nodes.map(node => {
                return Object.assign({}, node.frontmatter, {
                  author: node.fields.author,
                  description: node.excerpt,
                  date: node.frontmatter.date,
                  url: site.siteMetadata.siteUrl + node.fields.slug,
                  guid: site.siteMetadata.siteUrl + node.fields.slug,
                  categories: node.fields.tags,
                  custom_elements: [
                    { "content:encoded": node.html },
                    { readingTime: node.fields.readingTime }
                  ],
                })
              })
            },
            query: `{
              allMarkdownRemark(sort: {frontmatter: {date: DESC}}) {
                nodes {
                  excerpt
                  html
                  fields {
                    slug
                  }
                  frontmatter {
                    title
                    date
                  }
                }
              }
            }`,
            output: "/rss.xml",
            title: "Gatsby Starter Blog RSS Feed",
          },
        ],
      },
    },
    {
      resolve: "gatsby-plugin-robots-txt",
      options: {
      policy: [{ userAgent: "*", allow: "/" }]
    }
    },
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `Meltsan Blog`,
        short_name: `Meltsan`,
        start_url: `/`,
        background_color: `#ffffff`,
        display: `minimal-ui`,
        icon: `src/images/meltsan-logo.png`,
      },
    },
  ],
}
