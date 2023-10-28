import React from 'react';

import { Divider, rem, Space, Tabs } from '@mantine/core';
import { IconHeading, IconJson, IconSettings } from '@tabler/icons-react';

import BodyPanel from './BodyPanel';
import HeadersPanel from './HeadersPanel';
import ParamsPanel from './ParamsPanel';

const iconStyle = { width: rem(12), height: rem(12) };

const RequestConfigTabs = () => (
	<>
		<Space h="xl" />
		<Tabs color="rgba(255, 150, 77, 1)" defaultValue="params">
			<Tabs.List>
				<Tabs.Tab value="params" leftSection={<IconSettings style={iconStyle} />}>Params</Tabs.Tab>
				<Tabs.Tab value="headers" leftSection={<IconHeading style={iconStyle} />}>Headers</Tabs.Tab>
				<Tabs.Tab value="body" leftSection={<IconJson style={iconStyle} />}>Body</Tabs.Tab>
			</Tabs.List>
			<ParamsPanel />
			<HeadersPanel />
			<BodyPanel />
		</Tabs>
		<Divider my="xl" />
	</>
);

export default RequestConfigTabs;