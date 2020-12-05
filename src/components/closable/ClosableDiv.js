import React from 'react'

const ClosableChild = (props) => <div id={props.modalId} className={"closablediv " + props.modalClassName}>
    <div className="closebutton" onClick={props.onClose}><i className="las la-times"></i></div>
    <div className="closablecontent">{props.content}</div>
</div>;


class ClosableDiv extends React.Component {

  render() {
    return (
      <>
        {this.props.stateBool && <ClosableChild onClose={this.props.closeAction} modalId={this.props.modalId} modalClassName={this.props.modalClassName} content={this.props.content} />}
      </>
    );
  }
}

export default ClosableDiv;