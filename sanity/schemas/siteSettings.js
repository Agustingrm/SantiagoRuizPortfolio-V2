export default {
  name: "siteSettings",
  title: "Configuración de visualización",
  type: "document",
  icon: () => `⚙️`,
  fields: [
    {
      name: "general",
      title: "Todos los proyectos",
      type: "array",
      of: [{ type: "reference", to: [{ type: "projects" }] }],
    },
    {
      name: "industrialDesign",
      title: "Proyectos de industrial Design",
      type: "array",
      of: [{ type: "reference", to: [{ type: "projects" }] }],
    },
    {
      name: "CGI",
      title: "Proyectos de CGI",
      type: "array",
      of: [{ type: "reference", to: [{ type: "projects" }] }],
    },
    {
      name: "graphics",
      title: "Proyectos de Graphics",
      type: "array",
      of: [{ type: "reference", to: [{ type: "projects" }] }],
    },
  ],
};
