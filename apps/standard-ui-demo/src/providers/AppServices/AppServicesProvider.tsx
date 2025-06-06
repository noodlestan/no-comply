import {
	ActiveContextsProvider,
	ContextVariantsProvider,
	ExposeProvider,
	FocusTargetsProvider,
	ModalsProvider,
	NavigationProvider,
	SettingsProvider,
	ShortcutsProvider,
	createActiveContextsService,
	createExposesService,
	createFocusTargetsService,
	createModalsService,
	createNavigationService,
	createSettingsService,
	createShortcutsService,
} from '@no-comply/solid-contexts';
import { useLocation } from '@solidjs/router';
import { type ParentComponent, onCleanup } from 'solid-js';

import { AppServicesContext } from './private';
import { createAppServices } from './private/createAppServices';

export const AppServicesProvider: ParentComponent = props => {
	const location = useLocation();
	const navigation = createNavigationService({
		current: () => location.pathname,
	});
	const settings = createSettingsService();
	const appServices = createAppServices();
	const focus = createFocusTargetsService();
	const modals = createModalsService();
	const contexts = createActiveContextsService();
	const shortcuts = createShortcutsService(contexts);
	const exposeService = createExposesService({ expose: true });

	onCleanup(() => {
		focus.dispose();
		shortcuts.dispose();
		contexts.dispose();
	});

	return (
		<NavigationProvider service={navigation}>
			<SettingsProvider service={settings}>
				<AppServicesContext.Provider value={appServices}>
					<FocusTargetsProvider service={focus}>
						<ModalsProvider service={modals}>
							<ActiveContextsProvider service={contexts}>
								<ShortcutsProvider service={shortcuts}>
									<ContextVariantsProvider>
										<ExposeProvider service={exposeService}>{props.children}</ExposeProvider>
									</ContextVariantsProvider>
								</ShortcutsProvider>
							</ActiveContextsProvider>
						</ModalsProvider>
					</FocusTargetsProvider>
				</AppServicesContext.Provider>
			</SettingsProvider>
		</NavigationProvider>
	);
};
