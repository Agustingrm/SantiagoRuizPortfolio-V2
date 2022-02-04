import sanityClient from "@sanity/client";

export default sanityClient({
  projectId: "vy23dntu",
  dataset: "production",
  useCdn: true,
});
