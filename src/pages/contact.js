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

function ContactPage() {
	return (
		<Layout>
			<Container>
				<h1>Contact</h1>
				<p>An example page.</p>
			</Container>
		</Layout>
	);
}

export default ContactPage;
