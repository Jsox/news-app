import { Text, Button, Stack } from '@mantine/core';
import { showNotification } from '@mantine/notifications';
import Layout from '~/layouts/Layout';

export default function Index() {
    return (
        <Layout>
            <Stack align="center" my={50}>
                <Text size="xl" weight={500}>
                    Welcome to news App!
                </Text>
                <Button>Click the button</Button>
            </Stack>
            <Stack align="center">
                <Button
                    variant="outline"
                    onClick={() =>
                        showNotification({
                            title: 'Default notification',
                            message: 'Hey there, your code is awesome! 🤥',
                        })
                    }
                >
                    Show notification
                </Button>
            </Stack>
        </Layout>
    );
}
