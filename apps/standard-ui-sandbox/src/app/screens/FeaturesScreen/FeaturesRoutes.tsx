import { Route } from '@solidjs/router';
import type { Component } from 'solid-js';

import {
    AnchoredPopoverPage,
    ButtonPage,
    CalloutPage,
    CheckboxPage,
    CloseButtonPage,
    ComponentsPage,
    ComponentsScreen,
    DataItemPage,
    DataValuePage,
    DisplayPage,
    DividerPage,
    ExpandButtonPage,
    FlexPage,
    IconButtonPage,
    IconPage,
    LabelPage,
    LayoutPage,
    LinkPage,
    MenuItemActionPage,
    MenuPage,
    NavLinkPage,
    NumberInputPage,
    PopoverPage,
    RangeInputPage,
    SelectPage,
    SurfacePage,
    TextInputPage,
    TextPage,
} from '../ComponentsScreen/';

export const FeaturesRoutes: Component = () => (
    <Route path="/features/components" component={ComponentsScreen}>
        <Route path="/" component={ComponentsPage} />
        <Route path="/AnchoredPopover" component={AnchoredPopoverPage} />
        <Route path="/Button" component={ButtonPage} />
        <Route path="/Callout" component={CalloutPage} />
        <Route path="/Checkbox" component={CheckboxPage} />
        <Route path="/CloseButton" component={CloseButtonPage} />
        <Route path="/DataItem" component={DataItemPage} />
        <Route path="/DataValue" component={DataValuePage} />
        <Route path="/Display" component={DisplayPage} />
        <Route path="/Divider" component={DividerPage} />
        <Route path="/ExpandButton" component={ExpandButtonPage} />
        <Route path="/Flex" component={FlexPage} />
        <Route path="/IconButton" component={IconButtonPage} />
        <Route path="/Icon" component={IconPage} />
        <Route path="/Label" component={LabelPage} />
        <Route path="/Layout" component={LayoutPage} />
        <Route path="/Link" component={LinkPage} />
        <Route path="/Menu" component={MenuPage} />
        <Route path="/MenuItemAction" component={MenuItemActionPage} />
        <Route path="/NavLink" component={NavLinkPage} />
        <Route path="/Popover" component={PopoverPage} />
        <Route path="/NumberInput" component={NumberInputPage} />
        <Route path="/RangeInput" component={RangeInputPage} />
        <Route path="/Select" component={SelectPage} />
        <Route path="/Surface" component={SurfacePage} />
        <Route path="/Text" component={TextPage} />
        <Route path="/TextInput" component={TextInputPage} />
    </Route>
);
