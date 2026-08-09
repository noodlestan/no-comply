/* eslint-disable dot-notation */
import type { ModuleEntityData } from '@no-comply/meta';
import { type ParentComponent } from 'solid-js';

import { useMeta } from '../../../providers';
import {
	SidebarNav,
	createSidebarNavGroup,
	createSidebarNavItem,
	routeFor,
} from '../../navigation';
import { ScreenTemplateWithSidebar } from '../../templates';

export const ApiScreen: ParentComponent = props => {
	const { getModuleMaybe, getPackageModuleNames, getPackageNames } = useMeta();

	const sidebarNavItems = () => {
		const packages = getPackageNames();
		return packages.map(packageName => {
			const packageTitle = packageName.split('/')[1] as string;
			const items = getPackageModuleNames(packageName).map(moduleName => {
				const mod = getModuleMaybe(packageName, moduleName) as ModuleEntityData;
				return createSidebarNavItem(mod.name, routeFor.module(packageName, moduleName));
			});
			return createSidebarNavGroup(packageTitle, items);
		});
	};

	return (
		<ScreenTemplateWithSidebar id="components" sidebar={<SidebarNav items={sidebarNavItems()} />}>
			{props.children}
		</ScreenTemplateWithSidebar>
	);
};
