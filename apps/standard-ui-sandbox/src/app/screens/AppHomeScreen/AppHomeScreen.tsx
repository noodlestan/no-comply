import { staticClassList } from '@noodlestan/context-ui-primitives';
import { Button, Surface } from '@noodlestan/standard-ui';
import { type ParentComponent, createSignal } from 'solid-js';

import { QuitAppModalDialog } from '../../dialogs';
import { WithSidebarLayout } from '../../layouts';
import { SidebarNav } from '../../navigation';

import styles from './AppHomeScreen.module.css';
import { SignupPage } from './pages';

export const AppHomeScreen: ParentComponent = props => {
    const [showQuitAppModalDialog, setShowQuitAppModalDialog] = createSignal(false);

    const handleQuitAppConfirm = () => {
        console.info('quit');
    };

    return (
        <>
            <Surface variant="stage" classList={staticClassList(styles, 'AppHomeScreen')}>
                <WithSidebarLayout sidebarExpanded sidebar={<SidebarNav />}>
                    <Button onPress={() => setShowQuitAppModalDialog(true)}>QUIT 1</Button>
                    {props.children}
                    <Button onPress={() => setShowQuitAppModalDialog(true)}>QUIT 2</Button>
                    <SignupPage />
                </WithSidebarLayout>
            </Surface>
            <QuitAppModalDialog
                show={showQuitAppModalDialog()}
                onCancel={() => setShowQuitAppModalDialog(false)}
                onConfirm={handleQuitAppConfirm}
            />
        </>
    );
};
