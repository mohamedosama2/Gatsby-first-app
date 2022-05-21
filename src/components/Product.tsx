import React from "react";
import Img from "gatsby-image";
import { Link } from "gatsby";

interface PProps {
  title: string;
  slug: string;
  slack: string;
  thumb: any;
}

export default function Product({ slack, slug, title, thumb }: PProps) {
  return (
    <Link to={`/projects/${slug}`} style={{ textDecoration: "none" }}>
      <div>
        <Img fluid={thumb} />
        <h2>{title}</h2>
        <p>{slug}</p>
      </div>
    </Link>
  );
}
