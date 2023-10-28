import React from 'react';

import { Tabs, Text } from '@mantine/core';

const ParamsPanel = () => (
	<Tabs.Panel value="params">
		<Text fw={500}>Query Params</Text>
		<Text fw={500}>Path Variables</Text>
	</Tabs.Panel>
);

export default ParamsPanel;