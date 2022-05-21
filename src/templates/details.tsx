import React from "react";
import Img from "gatsby-image";
import { motion } from "framer-motion";
import * as style from "../styles/details.module.scss";
import { graphql } from "gatsby";
interface DProps {
  data: {
    markdownRemark: {
      html: string;
      frontmatter: {
        title: string;
        slack: string;
        slug: string;
        featuredImg: {
          childImageSharp: {
            fluid: any;
          };
        };
      };
    };
  };
}
export default function Details({ data }: DProps) {
  const { slack, slug, title, featuredImg } = data.markdownRemark.frontmatter;
  console.log(featuredImg.childImageSharp.fluid);
  return (
    <div className={style.Details}>
      <h2> {title}</h2>
      <h4> {slug}</h4>

      <Img fluid={featuredImg.childImageSharp.fluid} />
 
        <span dangerouslySetInnerHTML={{ __html: data.markdownRemark.html }} />
    
    </div>
  );
}

export const query = graphql`
  query Details($slug: String) {
    markdownRemark(frontmatter: { slug: { eq: $slug } }) {
      html
      frontmatter {
        slug
        stack
        title
        featuredImg {
          childImageSharp {
            fluid {
              ...GatsbyImageSharpFluid
            }
          }
        }
      }
    }
  }
`;
