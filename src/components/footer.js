import React from 'react';
import styled from 'styled-components';
import { useStaticQuery, graphql } from 'gatsby';

const Container = styled.footer`
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;
	text-align: center;
	flex-grow: 1;
	max-height: 4rem;
`;

function Footer() {
	const data = useStaticQuery(graphql`
		query FooterQuery {
			site {
				siteMetadata {
					title
				}
			}
		}
	`);
	const { title } = data.site.siteMetadata;
	return (
		<Container>
			<p>&copy; {title} 2020</p>
		</Container>
	);
}

export default Footer;
