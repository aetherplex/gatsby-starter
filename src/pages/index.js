import React from 'react';
import { motion } from 'framer-motion';
import styled from 'styled-components';

import { grey } from '../utils';
import { Layout } from '../components';

const variants = {
	visible: {
		opacity: 1,
		y: 0,
	},
	hidden: { opacity: 0, y: -20 },
};

const Container = styled(motion.div)`
	height: 100%;
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;
	flex-grow: 2;

	& p {
		margin-bottom: 1rem;
	}
`;

const Feature = styled.a`
	display: inline-block;
	background-color: ${grey[300]};
	border-radius: 5px;
	padding: 8px 12px;
	margin: 0.5rem;
`;

const FeatureList = styled.ul`
	max-width: 500px;
	display: flex;
	align-items: center;
	justify-content: center;
	flex-wrap: wrap;
`;

function IndexPage() {
	return (
		<Layout>
			<Container
				initial="hidden"
				animate="visible"
				variants={variants}
				transition={{ duration: 1 }}
			>
				<h1>Gatsby Starter Project</h1>
				<p>Includes:</p>
				<FeatureList>
					<Feature
						href="https://www.gatsbyjs.com/plugins/gatsby-source-filesystem/"
						target="_blank"
					>
						gatsby-source-filesystem
					</Feature>
					<Feature
						href="https://www.gatsbyjs.com/plugins/gatsby-image"
						target="_blank"
					>
						gatsby-image
					</Feature>
					<Feature
						href="https://www.gatsbyjs.com/plugins/gatsby-plugin-sharp/"
						target="_blank"
					>
						gatsby-plugin-sharp
					</Feature>
					<Feature
						href="https://www.gatsbyjs.com/plugins/gatsby-transformer-sharp/"
						target="_blank"
					>
						gatsby-transformer-sharp
					</Feature>
					<Feature
						href="https://www.gatsbyjs.com/plugins/gatsby-plugin-react-helmet/"
						target="_blank"
					>
						gatsby-plugin-react-helmet
					</Feature>
					<Feature
						href="https://www.gatsbyjs.com/plugins/gatsby-plugin-styled-components/"
						target="_blank"
					>
						gatsby-plugin-styled-components
					</Feature>
					<Feature href="">styled-components</Feature>
					<Feature href="">framer-motion</Feature>
					<Feature href="">polishedjs</Feature>
				</FeatureList>
			</Container>
		</Layout>
	);
}

export default IndexPage;
