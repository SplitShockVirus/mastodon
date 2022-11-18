import React from 'react';
import { connect } from 'react-redux';
<<<<<<< HEAD
import PropTypes from 'prop-types';
import ImmutablePropTypes from 'react-immutable-proptypes';
import LoadingIndicator from '../../components/loading_indicator';
import Column from '../ui/components/column';
import ColumnBackButtonSlim from '../../components/column_back_button_slim';
import { fetchLists } from '../../actions/lists';
import { defineMessages, injectIntl, FormattedMessage } from 'react-intl';
import ImmutablePureComponent from 'react-immutable-pure-component';
import ColumnLink from '../ui/components/column_link';
import ColumnSubheading from '../ui/components/column_subheading';
=======
import { createSelector } from 'reselect';
import { fetchLists } from 'mastodon/actions/lists';
import LoadingIndicator from 'mastodon/components/loading_indicator';
import ScrollableList from 'mastodon/components/scrollable_list';
import Column from 'mastodon/components/column';
import ColumnHeader from 'mastodon/components/column_header';
import ColumnLink from 'mastodon/features/ui/components/column_link';
import ColumnSubheading from 'mastodon/features/ui/components/column_subheading';
>>>>>>> e0e7a09cfed2b311f055522eea45caac0838d87a
import NewListForm from './components/new_list_form';
import { createSelector } from 'reselect';
import ScrollableList from '../../components/scrollable_list';

const messages = defineMessages({
  heading: { id: 'column.lists', defaultMessage: 'Lists' },
  subheading: { id: 'lists.subheading', defaultMessage: 'Your lists' },
});

const getOrderedLists = createSelector([state => state.get('lists')], lists => {
  if (!lists) {
    return lists;
  }

  return lists.toList().filter(item => !!item).sort((a, b) => a.get('title').localeCompare(b.get('title')));
});

const mapStateToProps = state => ({
  lists: getOrderedLists(state),
});

export default @connect(mapStateToProps)
@injectIntl
class Lists extends ImmutablePureComponent {

  static propTypes = {
    params: PropTypes.object.isRequired,
    dispatch: PropTypes.func.isRequired,
    lists: ImmutablePropTypes.list,
    intl: PropTypes.object.isRequired,
    multiColumn: PropTypes.bool,
  };

  componentWillMount () {
    this.props.dispatch(fetchLists());
  }

  render () {
    const { intl, lists, multiColumn } = this.props;

    if (!lists) {
      return (
        <Column>
          <LoadingIndicator />
        </Column>
      );
    }

    const emptyMessage = <FormattedMessage id='empty_column.lists' defaultMessage="You don't have any lists yet. When you create one, it will show up here." />;

    return (
      <Column bindToDocument={!multiColumn} label={intl.formatMessage(messages.heading)}>
        <ColumnHeader title={intl.formatMessage(messages.heading)} icon='list-ul' multiColumn={multiColumn} showBackButton />

        <NewListForm />

        <ScrollableList
          scrollKey='lists'
          emptyMessage={emptyMessage}
          prepend={<ColumnSubheading text={intl.formatMessage(messages.subheading)} />}
          bindToDocument={!multiColumn}
        >
          {lists.map(list =>
            <ColumnLink key={list.get('id')} to={`/lists/${list.get('id')}`} icon='list-ul' text={list.get('title')} />,
          )}
        </ScrollableList>
      </Column>
    );
  }

}
