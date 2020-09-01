import React from 'react';
import styled from 'styled-components';

import { Layout } from '../components';

const Container = styled.div`
	height: 100%;
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;
	flex-grow: 2;
`;

function AboutPage() {
	return (
		<Layout>
			<Container>
				<h1>About</h1>
				<p>A Gatsby starter project with some sensible defaults.</p>
			</Container>
		</Layout>
	);
}

export default AboutPage;
