import { Route } from '@solidjs/router';
import { Component } from 'solid-js';

import { ShowcaseScreen } from '../screens';
import {
    BannerPage,
    ButtonPage,
    CheckboxPage,
    DataItemPage,
    DataValuePage,
    DisplayPage,
    DividerPage,
    FlexPage,
    IconButtonPage,
    IconPage,
    LabelPage,
    LinkPage,
    NavLinkPage,
    NumberInputPage,
    RangeInputPage,
    SelectPage,
    SurfacePage,
    TextInputPage,
    TextPage,
    WelcomePage,
} from '../screens/ShowcaseScreen';

export const Routes: Component = () => {
    // const Routes = useRoutes(routes);
    return (
        <>
            <Route path="/" component={ShowcaseScreen}>
                <Route path="/" component={WelcomePage} />
                <Route path="/component/Banner" component={BannerPage} />
                <Route path="/component/Button" component={ButtonPage} />
                <Route path="/component/Checkbox" component={CheckboxPage} />
                <Route path="/component/DataItem" component={DataItemPage} />
                <Route path="/component/DataValue" component={DataValuePage} />
                <Route path="/component/Display" component={DisplayPage} />
                <Route path="/component/Divider" component={DividerPage} />
                <Route path="/component/Flex" component={FlexPage} />
                <Route path="/component/IconButton" component={IconButtonPage} />
                <Route path="/component/Icon" component={IconPage} />
                <Route path="/component/Label" component={LabelPage} />
                <Route path="/component/Link" component={LinkPage} />
                <Route path="/component/NavLink" component={NavLinkPage} />
                <Route path="/component/NumberInput" component={NumberInputPage} />
                <Route path="/component/RangeInput" component={RangeInputPage} />
                <Route path="/component/Select" component={SelectPage} />
                <Route path="/component/Surface" component={SurfacePage} />
                <Route path="/component/Text" component={TextPage} />
                <Route path="/component/TextInput" component={TextInputPage} />
            </Route>
        </>
    );
};
