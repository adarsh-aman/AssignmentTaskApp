import React from 'react';
import Modal from 'react-responsive-modal';

class CompletedTask extends React.Component {

    constructor(props) {
        super(props)
        this.state = {
            showPopup: false,
            taskDesctiption: ""
        }
    }

    openPopup = () => {
        this.setState({ showPopup: true })
    }
    handleClose = () => {
        this.setState({ showPopup: false })
    }

    handleOpenModal = () => {
        return (
            <Modal className="modal-div" open={this.state.showPopup} onClose={this.handleClose} center>
                <div className="row">
                    <div className="col-sm-12">
                        <p><strong>View Completed Task</strong></p>
                        {this.state.taskDesctiption}
                    </div>
                </div>
            </Modal>
        )
    }

    render() {
        this.state.taskDesctiption = this.props.completedTask
        return (
            <div>
                <div>
                    {this.handleOpenModal()}
                    <div className="row">
                        <div className="col-sm-8 title">
                            Completed
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-sm-12 card-text" onClick={this.openPopup}>
                            {this.state.taskDesctiption}
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default CompletedTask;