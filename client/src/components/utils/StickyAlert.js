import React, { PropTypes } from 'react';
import AutoAffix from 'react-overlays/lib/AutoAffix';
import Alert from 'react-bootstrap/lib/Alert';

class StickyAlert extends React.Component {
  static propTypes = {
    bsStyle: PropTypes.oneOf(['success', 'warning', 'danger']).isRequired,
    container: PropTypes.object.isRequired,
    children: PropTypes.node,
  }

  constructor(props) {
    super(props);

    this.state = { show: true };
  }

  componentWillReceiveProps() {
    this.setState({ show: true });
  }

  render() {
    if (!this.state.show || !this.props.children) {
      return null;
    }

    return (
      <AutoAffix viewportOffsetTop={65} container={this.props.container}>
        <Alert bsStyle={this.props.bsStyle}
          onDismiss={() => this.setState({ show: false })}>
          {this.props.children}
        </Alert>
      </AutoAffix>
    );
  }
}

export default StickyAlert;
