import React from 'react';

import { ActionIcon, NativeSelect, rem, TextInput } from '@mantine/core';
import { IconArrowRight } from '@tabler/icons-react';

const data = [
	{ value: 'GET', label: 'GET'},
	{ value: 'POST', label: 'POST' },
	{ value: 'PUT', label: 'PUT' },
	{ value: 'PATCH', label: 'PATCH' },
	{ value: 'DELETE', label: 'DELETE' },
];

const RequestForm = () => {
	const select = (
		<NativeSelect
			data={data}
			styles={{
				input: {
					fontWeight: 500,
					borderTopRightRadius: 0,
					borderBottomRightRadius: 0,
					width: rem(135),
					marginRight: rem(5),
				},
			}}
		/>
	);
	const sendButton = (
		<ActionIcon color="rgba(255, 150, 77, 1)" size="lg" radius="lg" variant="filled">
			<IconArrowRight style={{ width: rem(32), height: rem(32)}} stroke={1.5} />
		</ActionIcon>
	);
	return (
		<TextInput
			radius="lg"
			size="lg"
			placeholder="https://api.com/v1/db/:id"
			label="HTTP Request"
			leftSection={select}
			leftSectionWidth={135}
			rightSection={sendButton}
		/>
	);
};

export default RequestForm;