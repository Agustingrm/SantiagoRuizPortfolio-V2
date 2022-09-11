import PortfolioContext from "./PortfolioContext";
import { ReactNode, useEffect, useState } from "react";

const gql = String.raw;

const frag = `
    name
    slug {
      current
    }
    category {
      name
    }
    year
    coverImage {
      asset {
        url
        metadata {
          lqip
        }
      }
    }
    span
    projectImages {
      asset {
        url
      }
    }
    projectDescription
`;

function GlobalState({ children }: { children: ReactNode }): JSX.Element {
  const [loading, setLoading] = useState(true);
  const [projects, setProjects] = useState({
    CGI: [{ name: "", slug: { current: "" }, category: "" }],
    general: [{ name: "", slug: { current: "" }, category: "" }],
    graphics: [{ name: "", slug: { current: "" }, category: "" }],
    industrialDesign: [{ name: "", slug: { current: "" }, category: "" }],
  });
  // Use a side effect to fetch he data from the graphql endpoint
  useEffect(function () {
    fetch("https://ephhvxyc.api.sanity.io/v1/graphql/production/default", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        query: gql`
          query {
            SiteSettings(id: "portfolio") {
              general {
                ${frag}
              }
              CGI {
                ${frag}
              }
              industrialDesign {
                ${frag}
              }
              graphics {
                ${frag}
              }
            }
          }
        `,
      }),
    })
      .then((res) => res.json())
      .then((res) => {
        // set the data to state
        setProjects(res.data.SiteSettings);
        setLoading(false);
      });
  }, []);

  let projectGeneral: Array<string> = [];
  let projectCGI: Array<string> = [];
  let projectGraphics: Array<string> = [];
  let projectIndustrialDesign: Array<string> = [];

  let listProjects = () => {
    for (let i = 0; i < projects.general.length; i++) {
      projectGeneral.push(projects.general[i].slug.current);
    }
    for (let i = 0; i < projects.CGI.length; i++) {
      projectCGI.push(projects.CGI[i].slug.current);
    }
    for (let i = 0; i < projects.graphics.length; i++) {
      projectGraphics.push(projects.graphics[i].slug.current);
    }
    for (let i = 0; i < projects.industrialDesign.length; i++) {
      projectIndustrialDesign.push(projects.industrialDesign[i].slug.current);
    }
  };
  listProjects();

  //This handles the Menu Logo rotation on click
  const [rotation, setRotation] = useState(0);
  const handleRotation = () => {
    if (rotation === 0) {
      setRotation(rotation - 90);
    } else {
      setRotation(0);
    }
  };
  //Handles the menu display on Click
  const [display, setDisplay] = useState("");

  //Handles categories of the menu
  const [category, setCategory] = useState("default");

  return (
    <PortfolioContext.Provider
      value={{
        loading,
        projects,
        projectGeneral,
        projectCGI,
        projectGraphics,
        projectIndustrialDesign,
        rotation,
        handleRotation,
        display,
        setDisplay,
        category,
        setCategory,
      }}
    >
      {children}
    </PortfolioContext.Provider>
  );
}

export default GlobalState;
