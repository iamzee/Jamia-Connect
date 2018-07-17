import React from 'react';
import { connect } from 'react-redux';
import moment from 'moment';

import { startAddConfession } from './../../actions/confessions';

class AddConfessionForm extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            confessionText: '',
            isName: false,
            error: ''
        };

        this.onConfessionTextChange = this.onConfessionTextChange.bind(this);
        this.onRadioChange = this.onRadioChange.bind(this);
        this.onSubmit = this.onSubmit.bind(this);
    }

    onConfessionTextChange(e) {
        const confessionText = e.target.value;
        this.setState(() => ({ confessionText }));
    }

    onRadioChange(e) {
        this.setState(() => ({ isName: true }));
    }

    onSubmit(e) {
        e.preventDefault();

        if (this.state.confessionText) {
            this.setState(() => ({ error: '' }));

            const confession = {
                confessionText: this.state.confessionText,
                isName: this.state.isName,
                uid: this.props.user.uid,
                displayName: this.props.user.displayName,
                confessedAt: moment().valueOf()
            }

            this.props.dispatch(startAddConfession(confession));

        } else {
            this.setState(() => ({ error: 'Confession cant be empty!!' }));
        }
    }

    render() {
        return (
            <div>
                <form onSubmit={this.onSubmit}>
                    <textarea
                        placeholder="Confess it!"
                        value={this.state.confessionText}
                        onChange={this.onConfessionTextChange}
                    />
                    <input
                        type="radio"
                        id="isName"
                        onChange={this.onRadioChange}
                    />
                    <label for="isName">Want to mention your name...</label>
                    <button>Add Confession</button>
                </form>
            </div>
        );
    }
}

const mapStateToProps = (state) => ({
    user: state.user
});

export default connect(mapStateToProps)(AddConfessionForm);
