import { connect } from 'react-redux';
import React from 'react';
import PropTypes from 'prop-types';
import { FormattedMessage, defineMessages, injectIntl } from 'react-intl';
import { Link } from 'react-router-dom';
<<<<<<< HEAD
import { limitedFederationMode, version, repository, source_url, profile_directory as profileDirectory } from 'flavours/glitch/initial_state';
import { signOutLink, securityLink, privacyPolicyLink } from 'flavours/glitch/utils/backend_links';
=======
import { domain, version, source_url, profile_directory as profileDirectory } from 'flavours/glitch/initial_state';
>>>>>>> e0e7a09cfed2b311f055522eea45caac0838d87a
import { logOut } from 'flavours/glitch/utils/log_out';
import { openModal } from 'flavours/glitch/actions/modal';
import { PERMISSION_INVITE_USERS } from 'flavours/glitch/permissions';

const messages = defineMessages({
  logoutMessage: { id: 'confirmations.logout.message', defaultMessage: 'Are you sure you want to log out?' },
  logoutConfirm: { id: 'confirmations.logout.confirm', defaultMessage: 'Log out' },
});

const mapDispatchToProps = (dispatch, { intl }) => ({
  onLogout () {
    dispatch(openModal('CONFIRM', {
      message: intl.formatMessage(messages.logoutMessage),
      confirm: intl.formatMessage(messages.logoutConfirm),
      closeWhenConfirm: false,
      onConfirm: () => logOut(),
    }));
  },
});

export default @injectIntl
@connect(null, mapDispatchToProps)
class LinkFooter extends React.PureComponent {

  static contextTypes = {
    identity: PropTypes.object,
  };

  static propTypes = {
    withHotkeys: PropTypes.bool,
    onLogout: PropTypes.func.isRequired,
    intl: PropTypes.object.isRequired,
  };

  handleLogoutClick = e => {
    e.preventDefault();
    e.stopPropagation();

    this.props.onLogout();
 
    return false;
  }

  render () {
    const { withHotkeys } = this.props;
    const { signedIn, permissions } = this.context.identity;
<<<<<<< HEAD

    const items = [];

    if ((this.context.identity.permissions & PERMISSION_INVITE_USERS) === PERMISSION_INVITE_USERS) {
      items.push(<a key='invites' href='/invites' target='_blank'><FormattedMessage id='getting_started.invite' defaultMessage='Invite people' /></a>);
    }

    if (signedIn && withHotkeys) {
      items.push(<Link key='hotkeys' to='/keyboard-shortcuts'><FormattedMessage id='navigation_bar.keyboard_shortcuts' defaultMessage='Hotkeys' /></Link>);
    }

    if (signedIn && securityLink) {
      items.push(<a key='security' href='/auth/edit'><FormattedMessage id='getting_started.security' defaultMessage='Security' /></a>);
    }

    if (!limitedFederationMode) {
      items.push(<a key='about' href='/about/more' target='_blank'><FormattedMessage id='navigation_bar.info' defaultMessage='About this server' /></a>);
    }

    if (profileDirectory) {
      items.push(<Link key='directory' to='/directory'><FormattedMessage id='getting_started.directory' defaultMessage='Profile directory' /></Link>);
    }

    items.push(<a key='apps' href='https://joinmastodon.org/apps' target='_blank'><FormattedMessage id='navigation_bar.apps' defaultMessage='Mobile apps' /></a>);

    if (privacyPolicyLink) {
      items.push(<a key='terms' href={privacyPolicyLink} target='_blank'><FormattedMessage id='getting_started.privacy_policy' defaultMessage='Privacy Policy' /></a>);
    }

    if (signedIn) {
      items.push(<a key='developers' href='/settings/applications' target='_blank'><FormattedMessage id='getting_started.developers' defaultMessage='Developers' /></a>);
    }

    items.push(<a key='docs' href='https://docs.joinmastodon.org' target='_blank'><FormattedMessage id='getting_started.documentation' defaultMessage='Documentation' /></a>);

    if (signedIn) {
      items.push(<a key='logout' href='/auth/sign_out' onClick={this.handleLogoutClick}><FormattedMessage id='navigation_bar.logout' defaultMessage='Logout' /></a>);
    }
=======

    const canInvite = signedIn && ((permissions & PERMISSION_INVITE_USERS) === PERMISSION_INVITE_USERS);
    const canProfileDirectory = profileDirectory;
>>>>>>> e0e7a09cfed2b311f055522eea45caac0838d87a

    return (
      <div className='link-footer'>
        <p>
          <strong>{domain}</strong>:
          {' '}
          <Link key='about' to='/about'><FormattedMessage id='footer.about' defaultMessage='About' /></Link>
          {canInvite && (
            <>
              {' · '}
              <a key='invites' href='/invites' target='_blank'><FormattedMessage id='footer.invite' defaultMessage='Invite people' /></a>
            </>
          )}
          {canProfileDirectory && (
            <>
              {' · '}
              <Link key='directory' to='/directory'><FormattedMessage id='footer.directory' defaultMessage='Profiles directory' /></Link>
            </>
          )}
          {' · '}
          <Link key='privacy-policy' to='/privacy-policy'><FormattedMessage id='footer.privacy_policy' defaultMessage='Privacy policy' /></Link>
        </p>

        <p>
<<<<<<< HEAD
          <FormattedMessage
            id='getting_started.open_source_notice'
            defaultMessage='Glitchsoc is open source software, a friendly fork of {Mastodon}. You can contribute or report issues on GitHub at {github}.'
            values={{
              github: <span><a href={source_url} rel='noopener noreferrer' target='_blank'>{repository}</a> (v{version})</span>,
              Mastodon: <a href='https://github.com/tootsuite/mastodon' rel='noopener noreferrer' target='_blank'>Mastodon</a> }}
          />
=======
          <strong>Mastodon</strong>:
          {' '}
          <a href='https://joinmastodon.org' target='_blank'><FormattedMessage id='footer.about' defaultMessage='About' /></a>
          {' · '}
          <a href='https://joinmastodon.org/apps' target='_blank'><FormattedMessage id='footer.get_app' defaultMessage='Get the app' /></a>
          {' · '}
          <Link to='/keyboard-shortcuts'><FormattedMessage id='footer.keyboard_shortcuts' defaultMessage='Keyboard shortcuts' /></Link>
          {' · '}
          <a href={source_url} rel='noopener noreferrer' target='_blank'><FormattedMessage id='footer.source_code' defaultMessage='View source code' /></a>
          {' · '}
          v{version}
>>>>>>> e0e7a09cfed2b311f055522eea45caac0838d87a
        </p>
      </div>
    );
  }

};
