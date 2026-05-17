import { createCodeLayoutContext } from '@purrtrait/code-layout';
import { tsCodeLayout } from '@purrtrait/code-ts';
import { CodeLayoutProvider } from '@purrtrait/solid-code';
import { type ParentComponent } from 'solid-js';

import { SidebarNav } from '../../navigation';
import { ScreenTemplateWithSidebar } from '../../templates';

export const ApiScreen: ParentComponent = props => {
	const sideBarItems = () => [];

	const linker = (token: string) => {
		if (token === 'Props') {
			return '#Props';
		}
		// console.log(token, data());
		return 'https://works.example';
	};

	const codeLayoutContext = createCodeLayoutContext({ langs: [tsCodeLayout], linker });

	return (
		<CodeLayoutProvider context={codeLayoutContext}>
			<ScreenTemplateWithSidebar id="components" sidebar={<SidebarNav items={sideBarItems()} />}>
				{props.children}
			</ScreenTemplateWithSidebar>
		</CodeLayoutProvider>
	);
};
