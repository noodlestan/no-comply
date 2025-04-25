import { staticClassList } from '@noodlestan/context-ui-primitives';
import { Button, Surface } from '@noodlestan/standard-ui';
import { type ParentComponent, createSignal } from 'solid-js';

import { QuitAppModalDialog } from '../../dialogs';
import { PageLayout } from '../../layouts';
import { MainNav } from '../../navigation';

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
                <PageLayout>
                    <MainNav />
                    <Button onPress={() => setShowQuitAppModalDialog(true)}>QUIT 1</Button>
                    {props.children}
                    <Button onPress={() => setShowQuitAppModalDialog(true)}>QUIT 2</Button>
                    <SignupPage />
                </PageLayout>
            </Surface>
            <QuitAppModalDialog
                show={showQuitAppModalDialog()}
                onCancel={() => setShowQuitAppModalDialog(false)}
                onConfirm={handleQuitAppConfirm}
            />
        </>
    );
};
