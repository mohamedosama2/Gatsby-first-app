import * as React from "react";
import "../styles/global.scss";
import * as style from "../styles/heading.module.scss";
import { StaticImage } from "gatsby-plugin-image";
import { graphql } from "gatsby";
import Product from "../components/Product";

interface Iprops {
  data: {
    allMarkdownRemark: {
      data: {
        frontmatter: { title: string; slack: string; slug: string; thumb: any };
      }[];
    };
    email: { siteMetadata: { me: string } };
  };
}

// markup
const IndexPage = ({ data }: Iprops) => {
  console.log(data);

  return (
    <>
      <div
        style={{
          minHeight: "100vh",
          display: "flex",
          justifyContent: "space-around",
          alignItems: "center",
          flexWrap: "wrap-reverse",
        }}
      >
        <div className={style.headings}>
          <h2 className={style.mainHeading}>Hello in Gatsby</h2>
          <h4> {data.email.siteMetadata.me}</h4>
          <button>Go To Products</button>
        </div>
        <StaticImage
          src="../images/2.svg"
          alt="downloaded"
          style={{ maxWidth: "100%" }}
        />
      </div>
      <div className={style.products}>
        {data.allMarkdownRemark.data.map(
          ({ frontmatter: { slack, slug, title, thumb } }) => (
            <Product {...{ title, slug, slack }} thumb={thumb.childImageSharp.fluid} key={title} />
          )
        )}
      </div>
    </>
  );
};

export default IndexPage;

export const query = graphql`
  query MyQuery {
    allMarkdownRemark {
      data: nodes {
        frontmatter {
          title
          stack
          slug
          thumb {
            childImageSharp {
              fluid {
                ...GatsbyImageSharpFluid
              }
            }
          }
        }
      }
    }
    email: site {
      siteMetadata {
        me
      }
    }
  }
`;
