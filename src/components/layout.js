import React from 'react';
import styled from 'styled-components';
import 'typeface-inter';

import Header from './header';
import Footer from './footer';
import { GlobalStyle } from '../utils';

const AppContainer = styled.div`
	width: 100vw;
	min-height: 100vh;
`;

const ContentContainer = styled.div`
	max-width: 1200px;
	margin: 0 auto;
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;
	min-height: 100vh;
	width: 90vw;
`;

const MainContainer = styled.div`
	display: flex;
	flex-direction: column;
	justify-content: flex-start;
	align-items: center;
	flex-grow: 2;
	width: 100%;
	height: 100%;
`;

export function Layout({ children }) {
	return (
		<AppContainer>
			<GlobalStyle />
			<ContentContainer>
				<MainContainer>
					<Header />
					{children}
				</MainContainer>
				<Footer />
			</ContentContainer>
		</AppContainer>
	);
}
