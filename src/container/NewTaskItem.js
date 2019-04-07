import React from 'react';
import { Button } from 'react-bootstrap';
import Modal from 'react-responsive-modal';

class NewTaskItem extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            desc: "",
            openViewPopupNewTask: false
        }
    }

    handleStartTask = (description) => {
        this.props.callBackInitiate(this.state.desc)
        this.setState({ desc: " " });
    }

    openPopup = () => {
        this.setState({ openViewPopupNewTask: true })
    }
    handleClose = () => {
        this.setState({ openViewPopupNewTask: false })
    }

    handleOpenModal = () => {
        return (
            <Modal className="modal-div" open={this.state.openViewPopupNewTask} onClose={this.handleClose} center>
                <div className="row">
                    <div className="col-sm-12">
                        <p><strong>View Created Task</strong></p>
                        {this.state.desc}
                    </div>
                </div>
            </Modal>
        )
    }
    render() {
        this.state.desc = this.props.description;
        return (

            <div>
                <div>
                    <div className="row">
                        {this.handleOpenModal()}
                        <div className="col-sm-12 title">
                            New
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-sm-12" onClick={this.openPopup}>
                            {this.state.desc}
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-sm-12">
                            <Button onClick={this.handleStartTask}>Start Task</Button>
                        </div>
                    </div>

                </div>
            </div>
        )
    }
}
export default NewTaskItem;