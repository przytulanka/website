import { graphql } from 'gatsby';

export const galleryFields = graphql`
	fragment galleryFields on MarkdownRemarkFrontmatter {
		title
		color
		images {
			id
			childImageSharp {
				fluid(maxWidth: 1360) {
					...GatsbyImageSharpFluid
				}
			}
		}
	}
`;

export default galleryFields;
