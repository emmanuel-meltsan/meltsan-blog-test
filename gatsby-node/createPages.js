/**
 * Implementación de createPages API
 * Esta función se ejecuta en el momento de la construcción para crear páginas dinámicamente de acuerdo al template y los datos disponibles.
 * 
 * @param {Object} actions - Conjunto de acciones de Gatsby
 * @param {Object} graphql - Función para consultar datos
 
 */


const path = require(`path`)
const blogPost = path.resolve(`./src/templates/blog-post.js`)


/**
 * @type {import('gatsby').GatsbyNode['createPages']}
 */
async function createPages({ graphql, actions, reporter }) {

  const { createPage } = actions
  // Get all markdown blog posts sorted by date
  const result = await graphql(`
    {
      allMarkdownRemark(sort: { frontmatter: { date: ASC } }, limit: 1000) {
        nodes {
          id
          fields {
            slug
          }
        }
      }
    }
  `)

  if (result.errors) {
    reporter.panicOnBuild(
      `There was an error loading your blog posts`,
      result.errors
    )
    return
  }

    const posts = result.data.allMarkdownRemark.nodes

  if (posts.length > 0) {
    posts.forEach((post, index) => {

      createPage({
        path: post.fields.slug,
        component: blogPost,
        context: {id: post.id},
      })
    })
  }
}

module.exports = createPages