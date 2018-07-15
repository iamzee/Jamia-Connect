import React from 'react';
import { connect } from 'react-redux';

import NotesListItem from './NotesListItem';
import { startSetNotes } from './../actions/notes';

class NotesList extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            notes: [],
            branch: ''
        };
    }

    componentDidMount() {
        this.props
            .dispatch(startSetNotes({ branch: this.props.match.params.branch }))
            .then(() => {
                this.setState(() => ({ notes: this.props.notes }));
            });
    }

    componentDidUpdate(prevProps) {
        if (prevProps.match.params.branch !== this.props.match.params.branch) {
            this.setState(() => ({
                branch: this.props.match.params.branch,
                notes: []
            }));
            this.props
                .dispatch(
                    startSetNotes({ branch: this.props.match.params.branch })
                )
                .then(() => {
                    this.setState(() => ({ notes: this.props.notes }));
                });
        }
    }

    render() {
        const notes = this.state.notes;
        return (
            <div>
                {notes.length > 0 ? (
                    <div>
                        <h3>{this.props.match.params.branch}</h3>
                        {this.props.notes.map(note => (
                            <NotesListItem key={note.noteId} note={note} />
                        ))}
                    </div>
                ) : (
                    <p>Loading notes...</p>
                )}
            </div>
        );
    }
}

const mapStateToProps = state => ({
    notes: state.notes
});

export default connect(mapStateToProps)(NotesList);
