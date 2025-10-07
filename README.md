
# MELTSA Blog

Un blog moderno construido con **Gatsby** y **Markdown**, optimizado para **SEO**, con **despliegue automático en GitHub Pages**.



## 📚 Tabla de contenido
1. [Requisitos](#requisitos)  
2. [Configuración](#configuración)  
3. [Despliegue](#despliegue)  
4. [Archivos importantes](#archivos-importantes)



## ⚙️ Requisitos

- **Node.js** v14 o superior  
- **Recomendado:** Node.js v20  
- **Gatsby CLI** instalado globalmente (opcional pero útil)  

```bash
  npm install -g gatsby-cli
````



## 🚀 Configuración

Clona el repositorio e instala las dependencias:

```bash
git clone https://github.com/usuario/proyecto.git
cd proyecto
npm install
```

Inicia el entorno de desarrollo:

```bash
npm run dev
# o directamente
gatsby develop
```

> 💡 **Nota:**
> `gatsby develop` sirve para desarrollo local con recarga en tiempo real.
> Para generar un sitio **estático (SSG)** listo para producción, usa:

```bash
gatsby build
gatsby serve
```

---

## ☁️ Despliegue

La configuración de despliegue se encuentra en:
**`.github/workflows/deploy.yml`**

> 🧩 **Nota:**
> El flujo de trabajo está configurado para **desplegar automáticamente en GitHub Pages**
> cuando se detecta un nuevo archivo `.md` o `.mdx` en la carpeta `/content/blog` o `/posts`.

---

## 📁 Archivos importantes

| Archivo / Carpeta     | Función Principal                       | Descripción                                                                                                                                                 |
| --------------------- | --------------------------------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------- |
| **gatsby-node.js**    | Creación de páginas dinámicas           | Define la lógica para generar páginas a partir de datos (por ejemplo, Markdown o CMS), crear nodos para GraphQL y personalizar la configuración de Webpack. |
| **gatsby-browser.js** | Personalización del frontend            | Permite ejecutar código en el lado del cliente: envolver la app con *providers*, controlar el enrutamiento o inicializar scripts del navegador.             |
| **/components**       | Componentes reutilizables de UI         | Carpeta para almacenar los componentes de React como `Header`, `Footer`, `Layout`, etc.                                                                     |
| **/templates**        | Plantillas para páginas dinámicas       | Contiene componentes de React usados por `gatsby-node.js` para crear páginas automáticamente (por ejemplo, plantillas de posts).                            |
| **package.json**      | Gestión de dependencias y scripts       | Archivo estándar de Node.js que define las dependencias del proyecto y los comandos para construir, desarrollar o desplegar el sitio.                       |
