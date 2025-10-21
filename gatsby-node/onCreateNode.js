/**
 * onCreateNode: Agrega campos personalizados a los nodos MarkdownRemark.
 * Crea slug, título, descripción, fecha, autor, tags y tiempo de lectura,
 * para que estén disponibles en GraphQL y puedan usarse en templates y SEO.
 */

const { createFilePath } = require('gatsby-source-filesystem')
const readingTime = require('reading-time')

/**
 * @type {import('gatsby').GatsbyNode['onCreateNode']}
 */
function onCreateNode({ node, actions, getNode }) {
  const { createNodeField } = actions

  if (node.internal.type === 'MarkdownRemark') {
    const slug = createFilePath({ node, getNode, basePath: 'content/blog' }).replace(/\/$/, '')
    const information = node.frontmatter.information || []

    createNodeField({ name: 'slug', node, value: slug })
    createNodeField({ name: 'title', node, value: node.frontmatter.title || 'Sin título' })
    createNodeField({ name: 'description', node, value: node.frontmatter.description || node.excerpt || '' })
    createNodeField({ name: 'date', node, value: node.frontmatter.date || new Date().toISOString() })
    createNodeField({ name: 'author', node, value: 'MELTSA SOLUTIONS' })
    createNodeField({ name: 'tags', node, value: node.frontmatter.tags || [] })
    createNodeField({ name: 'readingTime', node, value: readingTime(node.rawMarkdownBody).text })
    createNodeField({ name: 'information', node, value: information })

  }
}

module.exports = onCreateNode
