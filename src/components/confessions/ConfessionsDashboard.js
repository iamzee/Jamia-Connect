import React from 'react';

import AddConfessionForm from './AddConfessionForm';
import ConfessionsList from './ConfessionsList';
import Modal from './../Modal';

class ConfessionsDashboard extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            modalOpen: false
        };

        this.handleAddConfession = this.handleAddConfession.bind(this);
        this.handleModalClose = this.handleModalClose.bind(this);
    }

    handleAddConfession() {
        this.setState(() => ({ modalOpen: true }));
    }

    handleModalClose() {
        this.setState(() => ({ modalOpen: false }));
    }

    render() {
        return (
            <div className="dashboard dashboard--confessions">
                <div className="dashboard__content">
                    <div className="dashboard__header">
                        <h2 className="dashboard__title">Confessions</h2>
                        <button
                            className="button dashboard--notes__button"
                            onClick={this.handleAddConfession}
                        >
                            Add Confession
                        </button>
                    </div>
                    <Modal
                        modalOpen={this.state.modalOpen}
                        handleModalClose={this.handleModalClose}
                        component={AddConfessionForm}
                    />
                </div>
                <ConfessionsList />
            </div>
        );
    }
}

export default ConfessionsDashboard;
