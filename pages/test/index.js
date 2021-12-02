import styles from './styles.module.scss';
import * as Popover from '@radix-ui/react-popover';
import * as Tabs from '@radix-ui/react-tabs';

export default function Page1() {
    return (
        <>
            <h1 className={styles.red}>This is a test page</h1>

            <h3>Popover - test</h3>
            <Popover.Root>
                <Popover.Trigger>
                    Trigger
                </Popover.Trigger>
                <Popover.Anchor />
                <Popover.Content>
                    <Popover.Close />
                    <Popover.Arrow />
                    Content
                </Popover.Content>
            </Popover.Root>

            <h3>Tabs - test</h3>
            <Tabs.Root defaultValue="weather" className="tabs-root">
                <Tabs.List aria-label="Pick your forecast">
                    <Tabs.Trigger value="weather" className="tab-trigger">Weather</Tabs.Trigger>
                    <Tabs.Trigger value="aurora" className="tab-trigger">Aurora</Tabs.Trigger>
                </Tabs.List>
                <Tabs.Content value="weather" className="tab-content">Content for Weather forecast</Tabs.Content>
                <Tabs.Content value="aurora" className="tab-content">Content for Aurora forecast</Tabs.Content>
            </Tabs.Root>
        </>
    )
}