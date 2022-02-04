export default {
  name: "projects",
  title: "Proyectos",
  type: "document",
  icon: () => "🚀",
  fields: [
    {
      name: "name",
      title: "Name",
      type: "string",
    },
    {
      name: "slug",
      title: "Slug",
      type: "slug",
      options: {
        source: "name",
        maxLength: 100,
      },
    },
    {
      name: "category",
      title: "Category",
      type: "array",
      of: [{ type: "reference", to: [{ type: "category" }] }],
    },
    {
      name: "year",
      title: "Year",
      type: "string",
    },
    {
      name: "coverImage",
      title: "Image de Portada",
      type: "image",
      description: "Tamaños de Imagen: Horizontal 610x400, Vertical 300x400",
    },
    {
      name: "span",
      title: "Span de la imagen",
      type: "number",
      description:
        "Si la imagen de portada es horizontal poner el numero 2, si es vertical poner el numero 1",
    },
    {
      name: "projectImages",
      title: "Imagenes de contenido",
      type: "array",
      of: [{ type: "image" }],
      description: "Tamaños de Imagen: Horizontal 1230x807, Vertical 795x1060",
    },
    {
      name: "projectDescription",
      title: "Descripción",
      type: "array",
      of: [{ type: "string" }],
      description: "Cada linea escrita es un renglon",
    },
  ],
};
