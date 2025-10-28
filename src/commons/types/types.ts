import { IGatsbyImageData } from "gatsby-plugin-image";

export type fronmatter = {
    title: string;
    description: string;
    date: string;
    tags?: string[];
    featuredImage?: IGatsbyImageData;
};

export type Fields = {
    slug: string;
    readingTime?: number;
};

export type MarkdownRemark = {
    frontmatter: fronmatter;
    fields: Fields;
    html?: string;
    excerpt?: string;
};
