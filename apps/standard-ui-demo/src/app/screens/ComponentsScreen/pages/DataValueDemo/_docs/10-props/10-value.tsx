import { DataValue } from '@no-comply/standard-ui';

import { createDemoItem, createDemoSectionData, lipsumWords } from '../../../../../../content';
import { itemProps as props } from '../constants';

export default createDemoSectionData({
    title: 'value',
    items: [createDemoItem({ props }, () => <DataValue value={lipsumWords(3)} />)],
});
