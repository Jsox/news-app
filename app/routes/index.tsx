import { Text, Button, Stack } from '@mantine/core';
import Layout from '~/layouts/Layout';

export default function Index() {
    return (
        <Layout>
            <Stack align="center" mt={50}>
                <Text size="xl" weight={500}>
                    Welcome to news!!!
                </Text>
                <Button>Click the button</Button>
            </Stack>
        </Layout>
    );
}
