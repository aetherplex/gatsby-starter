module.exports = {
	siteMetadata: {
		title: `Starter`,
		description: `A simple Gatsby starter project.`,
	},
	plugins: [
		// Metadata
		`gatsby-plugin-react-helmet`,

		// Sources
		{
			resolve: `gatsby-source-filesystem`,
			options: {
				name: `images`,
				path: `${__dirname}/src/assets/images/`,
			},
		},
		{
			resolve: `gatsby-source-filesystem`,
			options: {
				name: `images`,
				path: `${__dirname}/src/assets/icons/`,
			},
		},

		// Images
		`gatsby-plugin-sharp`,
		`gatsby-transformer-sharp`,

		// Styling
		`gatsby-plugin-styled-components`,
	],
};
