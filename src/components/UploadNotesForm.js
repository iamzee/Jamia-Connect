import React from 'react';
import { connect } from 'react-redux';

import { storage } from './../firebase/configFirebase';
import { startAddNote } from './../actions/notes';

class UploadNotesForm extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            branch: '',
            topic: '',
            teacher: '',
            file: null,
            error: ''
        };

        this.onBranchChange = this.onBranchChange.bind(this);
        this.onTopicChange = this.onTopicChange.bind(this);
        this.onTeacherChange = this.onTeacherChange.bind(this);
        this.onFileChange = this.onFileChange.bind(this);
        this.onSubmit = this.onSubmit.bind(this);
    }

    onBranchChange(e) {
        const branch = e.target.value;
        this.setState(() => ({ branch }));
    }

    onTopicChange(e) {
        const topic = e.target.value;
        this.setState(() => ({ topic }));
    }

    onTeacherChange(e) {
        const teacher = e.target.value;
        this.setState(() => ({ teacher }));
    }

    onFileChange(e) {
        const file = e.target.files[0];
        this.setState(() => ({ file }));
    }

    onSubmit(e) {
        e.preventDefault();

        if (
            !this.state.branch ||
            !this.state.topic ||
            !this.state.teacher ||
            !this.state.file
        ) {
            this.setState(() => ({ error: 'All fields are necessary' }));
        } else {
            const task = storage
                .ref(`notes/${this.state.branch}/${this.state.file.name}`)
                .put(this.state.file);

            task.on(
                'state_changed',
                snapshot => {
                    const percentage =
                        (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
                    console.log('percentage', percentage);
                },
                e => {
                    console.log('Error', e);
                },
                () => {
                    storage
                        .ref(
                            `notes/${this.state.branch}/${this.state.file.name}`
                        )
                        .getDownloadURL()
                        .then(downloadURL => {
                            this.props.dispatch(
                                startAddNote({
                                    branch: this.state.branch,
                                    topic: this.state.topic,
                                    teacher: this.state.teacher,
                                    downloadURL,
                                    uid: this.props.user.uid,
                                    displayName: this.props.user.displayName
                                })
                            );
                        });

                    console.log('Completed');
                }
            );

            this.setState(() => ({ error: '' }));
        }
    }

    render() {
        return (
            <form onSubmit={this.onSubmit}>
                <select
                    value={this.state.branch}
                    onChange={this.onBranchChange}
                >
                    <option value="">Select branch</option>
                    <option value="first_year">First Year</option>
                    <option value="computer_science">Computer Science</option>
                    <option value="electrical">Electrical Engineering</option>
                    <option value="electronics">Electronics</option>
                    <option value="mechanical">Mechanical Engineering</option>
                    <option value="civil">Civil Engineering</option>
                </select>
                <input
                    type="text"
                    placeholder="Topic"
                    value={this.state.topic}
                    onChange={this.onTopicChange}
                />
                <input
                    type="text"
                    placeholder="Teacher"
                    value={this.state.teacher}
                    onChange={this.onTeacherChange}
                />
                <input type="file" onChange={this.onFileChange} />
                <button type="submit">Upload</button>
            </form>
        );
    }
}

const mapStateToProps = state => ({
    user: state.user
});

export default connect(mapStateToProps)(UploadNotesForm);
