import React from 'react';

import { ActionIcon, Container, Group, Space, Text, Title, rem } from '@mantine/core';
import { IconCode } from '@tabler/icons-react';
import PropTypes from 'prop-types';

import style from '../css/PageTemplate.module.css';

const PageTemplate = ({ children }) => (
	<>
		<header className={style.header}>
			<Container my="md" className={style.innerHeader}>
				<Title order={1}>Spice Client</Title>
				<Text fs="italic">The spice must flow</Text>
			</Container>
			<Space h="xl" />
		</header>
		<Container my="md">
			{children}
		</Container>
		<div className={style.footer}>
			<Space h="xl" />
			<Container my="md" className={style.innerFooter}>
				<Text c="dimmed" size="sm">
					© 2023 James O&apos;Connell. All rights reserved.
				</Text>
				<Group gap={0} className={style.links} justify="flex-end" wrap="nowrap">
					<ActionIcon component="a" href="https://github.com/oconnellj2/spice-client" rel="noopener noreferrer nofollow" target="_blank" size="md" color="gray" variant="subtle">
						<IconCode style={{ width: rem(18), height: rem(18) }} stroke={1.5} />
					</ActionIcon>
				</Group>
			</Container>
		</div>
	</>
);

PageTemplate.propTypes = {
	children: PropTypes.node
};

export default PageTemplate;