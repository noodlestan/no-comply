import { Route } from '@solidjs/router';
import { type Component } from 'solid-js';

import {
    AppHomeScreen,
    ButtonPage,
    CalloutPage,
    CheckboxPage,
    CloseButtonPage,
    DataItemPage,
    DataValuePage,
    DisplayPage,
    DividerPage,
    ExpandButtonPage,
    FlexPage,
    FoundationsScreen,
    IconButtonPage,
    IconPage,
    LabelPage,
    LayoutPage,
    LinkPage,
    NavLinkPage,
    NumberInputPage,
    RangeInputPage,
    SelectPage,
    ShowcaseScreen,
    SurfacePage,
    TextInputPage,
    TextPage,
    WelcomePage,
} from '../screens';

export const Routes: Component = () => {
    return (
        <>
            <Route path="/" component={ShowcaseScreen}>
                <Route path="/" component={WelcomePage} />
                <Route path="/component/Button" component={ButtonPage} />
                <Route path="/component/Callout" component={CalloutPage} />
                <Route path="/component/Checkbox" component={CheckboxPage} />
                <Route path="/component/CloseButton" component={CloseButtonPage} />
                <Route path="/component/DataItem" component={DataItemPage} />
                <Route path="/component/DataValue" component={DataValuePage} />
                <Route path="/component/Display" component={DisplayPage} />
                <Route path="/component/Divider" component={DividerPage} />
                <Route path="/component/ExpandButton" component={ExpandButtonPage} />
                <Route path="/component/Flex" component={FlexPage} />
                <Route path="/component/IconButton" component={IconButtonPage} />
                <Route path="/component/Icon" component={IconPage} />
                <Route path="/component/Label" component={LabelPage} />
                <Route path="/component/Layout" component={LayoutPage} />
                <Route path="/component/Link" component={LinkPage} />
                <Route path="/component/NavLink" component={NavLinkPage} />
                <Route path="/component/NumberInput" component={NumberInputPage} />
                <Route path="/component/RangeInput" component={RangeInputPage} />
                <Route path="/component/Select" component={SelectPage} />
                <Route path="/component/Surface" component={SurfacePage} />
                <Route path="/component/Text" component={TextPage} />
                <Route path="/component/TextInput" component={TextInputPage} />
            </Route>
            <Route path="/app" component={AppHomeScreen} />
            <Route path="/foundations" component={FoundationsScreen} />
        </>
    );
};
