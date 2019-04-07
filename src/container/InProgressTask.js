import React from 'react';
import { Button } from 'react-bootstrap';
import Modal from 'react-responsive-modal';

class InProgressTask extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            initiatedtaskDesc: '',
            openViewPopupInProgressTask: false
        }
    }

    componentWillReceiveProps(nextProps) {
        this.setState({ initiatedtaskDesc: nextProps.started });
    }

    handleComplete = (initiatedtaskDesc) => {
        this.props.callBackComplete(this.state.initiatedtaskDesc)
    }

    openPopup = () => {
        this.setState({ openViewPopupInProgressTask: true })
    }
    handleClose = () => {
        this.setState({ openViewPopupInProgressTask: false })
    }

    handleOpenModal = () => {
        return (
            <Modal className="modal-div" open={this.state.openViewPopupInProgressTask} onClose={this.handleClose} center>
                <div className="row">
                    <div className="col-sm-12">
                        <p><strong>View Inprogress Task</strong></p>
                        {this.state.initiatedtaskDesc}
                    </div>
                </div>
            </Modal>
        )
    }

    render() {
        return (
            <div>
                {this.handleOpenModal()}
                <div className="row">
                    <div className="col-sm-12 title">
                        In Progress
                        </div>
                </div>
                <div className="row">
                    <div className="col-sm-12 card-text" onClick={this.openPopup}>
                        {this.state.initiatedtaskDesc}
                    </div>
                </div>
                <div className="row">
                    <div className="col-sm-12">
                        <Button onClick={this.handleComplete}>Complete</Button>
                    </div>
                </div>
            </div>
        )
    }
}
export default InProgressTask;