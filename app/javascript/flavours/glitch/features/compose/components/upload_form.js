import React from 'react';
import ImmutablePropTypes from 'react-immutable-proptypes';
import UploadProgressContainer from '../containers/upload_progress_container';
import ImmutablePureComponent from 'react-immutable-pure-component';
import UploadContainer from '../containers/upload_container';
import SensitiveButtonContainer from '../containers/sensitive_button_container';
import { FormattedMessage } from 'react-intl';

export default class UploadForm extends ImmutablePureComponent {
  static propTypes = {
    mediaIds: ImmutablePropTypes.list.isRequired,
  };

  render () {
    const { mediaIds } = this.props;

    return (
<<<<<<< HEAD
      <div className='composer--upload_form'>
        <UploadProgressContainer icon='upload' message={<FormattedMessage id='upload_progress.label' defaultMessage='Uploading…' />} />
=======
      <div className='compose-form__upload-wrapper'>
        <UploadProgressContainer />
>>>>>>> e0e7a09cfed2b311f055522eea45caac0838d87a

        {mediaIds.size > 0 && (
          <div className='compose-form__uploads-wrapper'>
            {mediaIds.map(id => (
              <UploadContainer id={id} key={id} />
            ))}
          </div>
        )}

        {!mediaIds.isEmpty() && <SensitiveButtonContainer />}
      </div>
    );
  }

}
