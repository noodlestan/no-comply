import { Button } from '@no-comply/standard-ui';
import { type ParentComponent, createSignal } from 'solid-js';

import { QuitAppModalDialog } from '../../dialogs';
import { SidebarNav } from '../../navigation';
import { ScreenTemplateWithSidebar } from '../../templates';

import { APP_SIDEBAR_ITEMS } from './constants';
import { SignupPage } from './pages';

export const AppHomeScreen: ParentComponent = () => {
	const [showQuitAppModalDialog, setShowQuitAppModalDialog] = createSignal(false);

	const handleQuitAppConfirm = () => {
		console.info('quit');
	};

	return (
		<ScreenTemplateWithSidebar id="app" sidebar={<SidebarNav items={APP_SIDEBAR_ITEMS} />}>
			<SignupPage />
			<Button onPress={() => setShowQuitAppModalDialog(true)}>QUIT 1</Button>
			<Button onPress={() => setShowQuitAppModalDialog(true)}>QUIT 2</Button>
			<QuitAppModalDialog
				show={showQuitAppModalDialog()}
				onCancel={() => setShowQuitAppModalDialog(false)}
				onConfirm={handleQuitAppConfirm}
			/>
		</ScreenTemplateWithSidebar>
	);
};
