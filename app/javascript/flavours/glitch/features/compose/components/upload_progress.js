import React from 'react';
import PropTypes from 'prop-types';
import Motion from '../../ui/util/optional_motion';
import spring from 'react-motion/lib/spring';
import Icon from 'flavours/glitch/components/icon';

export default class UploadProgress extends React.PureComponent {

  static propTypes = {
    active: PropTypes.bool,
    progress: PropTypes.number,
    icon: PropTypes.string.isRequired,
    message: PropTypes.node.isRequired,
  };

  render () {
    const { active, progress, icon, message } = this.props;

    if (!active) {
      return null;
    }

    return (
<<<<<<< HEAD
      <div className='composer--upload_form--progress'>
        <Icon id={icon} />
=======
      <div className='upload-progress'>
        <div className='upload-progress__icon'>
          <Icon id='upload' />
        </div>
>>>>>>> e0e7a09cfed2b311f055522eea45caac0838d87a

        <div className='upload-progress__message'>
          {message}

          <div className='upload-progress__backdrop'>
            <Motion defaultStyle={{ width: 0 }} style={{ width: spring(progress) }}>
              {({ width }) =>
                <div className='upload-progress__tracker' style={{ width: `${width}%` }} />
              }
            </Motion>
          </div>
        </div>
      </div>
    );
  }

}
