import { Route } from '@solidjs/router';
import type { Component } from 'solid-js';

import {
    AnchoredPopoverDemoPage,
    ButtonDemoPage,
    CalloutDemoPage,
    CheckboxDemoPage,
    CloseButtonDemoPage,
    ComponentsIndexPage,
    ComponentsScreen,
    DataItemDemoPage,
    DataValueDemoPage,
    DisplayDemoPage,
    DividerDemoPage,
    ExpandButtonDemoPage,
    FlexDemoPage,
    IconButtonDemoPage,
    IconDemoPage,
    LabelDemoPage,
    LayoutDemoPage,
    LinkDemoPage,
    MenuDemoPage,
    MenuItemActionDemoPage,
    NavLinkDemoPage,
    NumberInputDemoPage,
    PopoverDemoPage,
    RangeInputDemoPage,
    SelectDemoPage,
    SurfaceDemoPage,
    TextDemoPage,
    TextInputDemoPage,
} from '../ComponentsScreen';

export const FeaturesRoutes: Component = () => (
    <Route path="/features/components" component={ComponentsScreen}>
        <Route path="/" component={ComponentsIndexPage} />
        <Route path="/AnchoredPopover" component={AnchoredPopoverDemoPage} />
        <Route path="/Button" component={ButtonDemoPage} />
        <Route path="/Callout" component={CalloutDemoPage} />
        <Route path="/Checkbox" component={CheckboxDemoPage} />
        <Route path="/CloseButton" component={CloseButtonDemoPage} />
        <Route path="/DataItem" component={DataItemDemoPage} />
        <Route path="/DataValue" component={DataValueDemoPage} />
        <Route path="/Display" component={DisplayDemoPage} />
        <Route path="/Divider" component={DividerDemoPage} />
        <Route path="/ExpandButton" component={ExpandButtonDemoPage} />
        <Route path="/Flex" component={FlexDemoPage} />
        <Route path="/IconButton" component={IconButtonDemoPage} />
        <Route path="/Icon" component={IconDemoPage} />
        <Route path="/Label" component={LabelDemoPage} />
        <Route path="/Layout" component={LayoutDemoPage} />
        <Route path="/Link" component={LinkDemoPage} />
        <Route path="/Menu" component={MenuDemoPage} />
        <Route path="/MenuItemAction" component={MenuItemActionDemoPage} />
        <Route path="/NavLink" component={NavLinkDemoPage} />
        <Route path="/Popover" component={PopoverDemoPage} />
        <Route path="/NumberInput" component={NumberInputDemoPage} />
        <Route path="/RangeInput" component={RangeInputDemoPage} />
        <Route path="/Select" component={SelectDemoPage} />
        <Route path="/Surface" component={SurfaceDemoPage} />
        <Route path="/Text" component={TextDemoPage} />
        <Route path="/TextInput" component={TextInputDemoPage} />
    </Route>
);
