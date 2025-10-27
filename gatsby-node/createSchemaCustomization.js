/**
 * createSchemaCustomization: Define explícitamente los tipos GraphQL para Gatsby.
 * 
 * - Asegura que `SiteMetadata` siempre tenga los campos author, siteUrl y social.
 * - Define los campos del nodo MarkdownRemark y sus subcampos Frontmatter y Fields.
 * - Evita errores en GraphQL si algún post no tiene ciertos campos y permite tipado consistente.
 */

/**
 * @type {import('gatsby').GatsbyNode['createSchemaCustomization']}
 */
function createSchemaCustomization({ actions }) {
  const { createTypes } = actions

  createTypes(`
    type SiteSiteMetadata {
      author: Author
      siteUrl: String
      social: Social
    }

    type Author {
      name: String
      summary: String
    }

    type Social {
      twitter: String
      facebook: String
      linkedin: String
      instagram: String
    }

    type MarkdownRemark implements Node {
      frontmatter: Frontmatter
      fields: Fields
    }

    type Frontmatter {
      title: String
      description: String
      date: Date @dateformat
      author: String
      tags: [String]
      featuredImage: File @fileByRelativePath
    }

    type Fields {
      slug: String
      title: String
      description: String
      date: Date @dateformat
      author: String
      tags: [String]
      readingTime: String
    }
  `)
}

module.exports = createSchemaCustomization
