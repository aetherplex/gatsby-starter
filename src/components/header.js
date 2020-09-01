import React from 'react';
import { Link, useStaticQuery, graphql } from 'gatsby';
import styled from 'styled-components';

import { grey, black } from '../utils';

const Container = styled.div`
	width: 100%;
	height: 6rem;
	display: flex;
	justify-content: space-between;
	align-items: center;
	border-bottom: 1px solid ${grey[300]};

	.nav {
		& > *:not(first-child) {
			margin-left: 4rem;
		}
	}

	.navItem {
		color: ${grey[500]};
		transition: 0.2s ease-in all;
		&:hover {
			color: ${black};
		}
	}

	.active {
		color: ${black};
	}
`;

function Header() {
	const data = useStaticQuery(graphql`
		query HeaderQuery {
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
			<Link className="logo" to="/">
				<h2>{title}</h2>
			</Link>
			<nav className="nav">
				<Link to="/about" className="navItem" activeClassName="active">
					About
				</Link>
				<Link to="/contact" className="navItem" activeClassName="active">
					Contact
				</Link>
			</nav>
		</Container>
	);
}

export default Header;
