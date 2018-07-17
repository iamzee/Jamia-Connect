import React from 'react';
import { connect } from 'react-redux';

import ConfessionsListItem from './ConfessionsListItem';
import { startSetConfessions } from './../../actions/confessions';

class ConfessionsList extends React.Component {
    componentDidMount() {
        this.props.dispatch(startSetConfessions());
    }

    render() {
        return (
            <div>
                {this.props.confessions.length > 0 ? (
                    <div>
                        {this.props.confessions.map(confession => (
                            <ConfessionsListItem
                                key={confession.confessionId}
                                confession={confession}
                            />
                        ))}
                    </div>
                ) : (
                    <p>Fetching Confessions</p>
                )}
            </div>
        );
    }
}

const mapStateToProps = state => ({
    confessions: state.confessions
});

export default connect(mapStateToProps)(ConfessionsList);
