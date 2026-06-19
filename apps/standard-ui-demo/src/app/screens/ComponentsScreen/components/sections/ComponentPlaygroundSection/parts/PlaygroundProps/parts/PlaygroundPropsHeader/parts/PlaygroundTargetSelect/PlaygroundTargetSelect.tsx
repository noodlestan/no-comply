import { createChainedResource } from '@no-comply/solid-primitives';
import { Select } from '@no-comply/standard-ui';
import { type Component, For, Show } from 'solid-js';

import { useComponentExamples } from '../../../../../../../../../providers';

export const PlaygroundTargetSelect: Component = () => {
	const { currentExampleParsed, setCurrentTargetKey } = useComponentExamples();

	const [targets] = createChainedResource(currentExampleParsed, parsed => parsed.targets);

	const isSelected = (targetKey: string) => targetKey === setCurrentTargetKey();

	const handleValueChange = (targetKey: string) => {
		setCurrentTargetKey(targetKey);
	};

	const hasMultitpleTargets = () => {
		const t = targets() || {};
		return Object.keys(t).length > 1;
	};

	const placeholder = (): string | undefined => {
		if (targets.loading) {
			return 'loading ...';
		}
		if (hasMultitpleTargets()) {
			return undefined;
		}
		const t = targets() || {};
		return Object.values(t)[0]?.component.name || 'Component';
	};

	return (
		<Select
			size="s"
			length="s"
			onValueChange={handleValueChange}
			value={setCurrentTargetKey()}
			disabled={currentExampleParsed.loading}
			placeholder={placeholder()}
		>
			<Show when={hasMultitpleTargets()}>
				<For each={Object.entries(targets())}>
					{([targetKey, target]) => (
						<option selected={isSelected(targetKey)}>
							{target.component.name}:{targetKey}
						</option>
					)}
				</For>
			</Show>
		</Select>
	);
};
