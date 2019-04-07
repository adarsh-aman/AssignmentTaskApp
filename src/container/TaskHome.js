import React from 'react';
import { Button } from 'react-bootstrap';
import Modal from 'react-responsive-modal';

import Header from '../components/Header';
import Footer from '../components/Footer';
import NewTaskItem from './NewTaskItem';
import InProgressTask from './InProgressTask';
import CompletedTask from './CompletedTask';
import './styles.css';

class TaskHome extends React.Component {

    constructor(props) {
        super(props)
        this.state = {
            showPopForAddNewTask: false,
            taskDesc: "",
            startedTask: "",
            completedTask: ""
        };
    }

    initiateTask = (taskTOInitiate) => {
        this.setState({ startedTask: taskTOInitiate },
            console.log("newStateSet", this.state.startedTask))
    }

    completedtask = (completedTask) => {
        this.setState({ completedTask },
            console.log("newStateSet", this.state.completedTask))
    }

    addNewTask = () => {
        this.setState({
            showPopForAddNewTask: true
        })
    }

    handleClose = () => {
        this.setState({ showPopForAddNewTask: false })
    }

    saveData = () => {
        this.setState({
            taskDesc: this.input.value,
            showPopForAddNewTask: false
        })
    }

    renderModal = () => {
        return (
            <Modal className="modal-div" open={this.state.showPopForAddNewTask} onClose={this.handleClose} center>
                <div className="row">
                    <div className="col-sm-12">
                        <h2>Add Task to Update</h2>
                        <form>
                            <div className="form-group">
                                <input type="text" className="form-control" id="inputTask" placeholder="Enter task to add" ref={(input) => this.input = input}></input>
                            </div>
                            <button type="button" className="btn btn-primary" onClick={this.saveData}>Add </button>
                        </form>
                    </div>
                </div>
            </Modal>
        )
    }
    renderButton = () => {
        return (
            <div className="col-sm-12 app-title-btn">
                <Button onClick={this.addNewTask}>New Task</Button>
            </div>
        )
    }

    render() {
        return (
            <div className="container">
                <Header />
                <div className="row">
                    {this.renderButton()}
                    {this.renderModal()}
                </div>
                <div className="row">
                    <div className="col-sm-4 task-container">
                        <NewTaskItem description={this.state.taskDesc} callBackInitiate={this.initiateTask} />
                    </div>
                    <div className="col-sm-4 task-container">
                        <InProgressTask started={this.state.startedTask} callBackComplete={this.completedtask} />
                    </div>
                    <div className="col-sm-4 task-container">
                        <CompletedTask completedTask={this.state.completedTask} />
                    </div>
                </div>
                <Footer />
            </div>
        );
    }
}

export default TaskHome;