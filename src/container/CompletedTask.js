import React from 'react';

class CompletedTask extends React.Component {

    constructor(props) {
        super(props)
        this.state = {
            showPopup: false
        }
    }
    render() {
        return (
            <div>
                <div>
                    <div className="row">
                        <div className="col-sm-8 title">
                            Completed
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-sm-12">
                            {this.props.completedTask}
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default CompletedTask;