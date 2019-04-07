import React from 'react';
import Modal from 'react-responsive-modal';

class CompletedTask extends React.Component {

    constructor(props) {
        super(props)
        this.state = {
            showPopup: false
        }
    }

    openPopup = () => {
        this.setState({ showPopup: true })
        console.log("clickecd")
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
                        {this.props.completedTask}
                    </div>
                </div>
            </Modal>
        )
    }

    render() {
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
                        <div className="col-sm-12" onClick={this.openPopup}>
                            {this.props.completedTask}
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default CompletedTask;