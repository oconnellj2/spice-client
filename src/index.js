import React from 'react';

import { MantineProvider} from '@mantine/core';
import ReactDOM from 'react-dom/client';
import '@mantine/core/styles.css';

import App from './App';

ReactDOM.createRoot(document.getElementById('root')).render(
	<React.StrictMode>
		<MantineProvider defaultColorScheme="dark">
			<App />
		</MantineProvider>
	</React.StrictMode>
);

