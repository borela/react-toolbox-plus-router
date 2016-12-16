import { themr } from 'react-css-themr';
import { LIST } from 'react-toolbox/lib/identifiers.js';
import { Avatar } from 'react-toolbox/lib/avatar';
import { Checkbox } from 'react-toolbox/lib/checkbox';
import { ListItemText } from 'react-toolbox/lib/list/ListItemText.js';
import { ListItemAction } from 'react-toolbox/lib/list/ListItemAction.js';
import { ListSubHeader } from 'react-toolbox/lib/list/ListSubHeader.js';
import { ListDivider } from 'react-toolbox/lib/list/ListDivider.js';
import { listFactory } from 'react-toolbox/lib/list/List.js';
import { listItemFactory } from './ListItem.js';
import { listCheckboxFactory } from 'react-toolbox/lib/list/ListCheckbox.js';
import { listItemActionsFactory } from 'react-toolbox/lib/list/ListItemActions.js';
import { listItemContentFactory } from 'react-toolbox/lib/list/ListItemContent.js';
import { listItemLayoutFactory } from 'react-toolbox/lib/list/ListItemLayout.js';
import themedRippleFactory from 'react-toolbox/lib/ripple';
import theme from 'react-toolbox/lib/list/theme.scss';

const applyTheme = (Component) => themr(LIST, theme)(Component);
const ripple = themedRippleFactory({ centered: false, listItemIgnore: true });
const ThemedListItemAction = applyTheme(ListItemAction);
const ThemedListSubHeader = applyTheme(ListSubHeader);
const ThemedListItemText = applyTheme(ListItemText);
const ThemedListDivider = applyTheme(ListDivider);
const ThemedListItemContent = applyTheme(listItemContentFactory(ThemedListItemText));
const ThemedListItemActions = applyTheme(listItemActionsFactory(ThemedListItemAction));
const ThemedListItemLayout = applyTheme(listItemLayoutFactory(Avatar, ThemedListItemContent, ThemedListItemActions));
const ThemedListCheckbox = applyTheme(listCheckboxFactory(Checkbox, ThemedListItemContent));
const ThemedListItem = applyTheme(listItemFactory(ripple, ThemedListItemLayout, ThemedListItemContent));
const ThemedList = applyTheme(listFactory(ThemedListItem));

export { ThemedListItemActions as ListItemActions };
export { ThemedListItemContent as ListItemContent };
export { ThemedListItemLayout as ListItemLayout };
export { ThemedListSubHeader as ListSubHeader };
export { ThemedListItemText as ListItemText };
export { ThemedListCheckbox as ListCheckbox };
export { ThemedListDivider as ListDivider };
export { ThemedListItem as ListItem };
export { ThemedList as List };

