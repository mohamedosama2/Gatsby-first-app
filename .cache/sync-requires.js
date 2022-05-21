
// prefer default export if available
const preferDefault = m => (m && m.default) || m


exports.components = {
  "component---src-pages-404-tsx": preferDefault(require("G:\\my_projects\\Gatsby\\first-ts\\src\\pages\\404.tsx")),
  "component---src-pages-about-tsx": preferDefault(require("G:\\my_projects\\Gatsby\\first-ts\\src\\pages\\about.tsx")),
  "component---src-pages-index-tsx": preferDefault(require("G:\\my_projects\\Gatsby\\first-ts\\src\\pages\\index.tsx")),
  "component---src-templates-details-tsx": preferDefault(require("G:\\my_projects\\Gatsby\\first-ts\\src\\templates\\details.tsx"))
}

