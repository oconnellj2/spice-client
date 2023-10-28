import React from 'react';

import { Tabs, Text } from '@mantine/core';

const BodyPanel = () => (
	<Tabs.Panel value="body">
		<Text fw={500}>Request Body</Text>
	</Tabs.Panel>
);

export default BodyPanel;