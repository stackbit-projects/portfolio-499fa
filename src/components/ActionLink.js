import React from 'react';
import _ from 'lodash';

import {Link, withPrefix, classNames} from '../utils';

export default class ActionLink extends React.Component {
    render() {
        let action = _.get(this.props, 'action', null);
        return (
            <Link to={withPrefix(_.get(action, 'url', null))}
              {...(_.get(action, 'new_window', null) ? ({target: '_blank'}) : null)}
              {...((_.get(action, 'new_window', null) || _.get(action, 'no_follow', null)) ? ({rel: (_.get(action, 'new_window', null) ? ('noopener ') : '') + (_.get(action, 'no_follow', null) ? ('nofollow') : '')}) : null)}
              className={classNames({'button': _.get(action, 'style', null) === 'button', 'button-icon': _.get(action, 'style', null) === 'icon'})}>
              {((_.get(action, 'style', null) === 'icon') && _.get(action, 'icon_class', null)) ? (<React.Fragment>
              <span className={'icon fab ' + _.get(action, 'icon_class', null)} aria-hidden="true"/><span className="screen-reader-text">{_.get(action, 'label', null)}</span>
              </React.Fragment>) : 
              _.get(action, 'label', null)
              }
            </Link>
        );
    }
}
