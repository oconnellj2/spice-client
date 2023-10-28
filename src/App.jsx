import React from 'react';

import PageTemplate from './components/PageTemplate';
import RequestConfigTabs from './components/RequestConfigTabs';
import RequestForm from './components/RequestForm';
import Response from './components/Response';

const App = () => (
	<PageTemplate>
		<RequestForm />
		<RequestConfigTabs />
		<Response />
	</PageTemplate>
);

export default App;
