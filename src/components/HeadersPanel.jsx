import React from 'react';

import { Tabs, Text } from '@mantine/core';

const HeadersPanel = () => (
	<Tabs.Panel value="headers">
		<Text fw={500}>Headers</Text>
	</Tabs.Panel>
);

export default HeadersPanel;