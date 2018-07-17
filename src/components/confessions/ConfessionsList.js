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
            <div className="list list--confessions">
                {this.props.confessions.length > 0 ? (
                    <div className="list__container">
                        {this.props.confessions.map(confession => (
                            <ConfessionsListItem
                                key={confession.confessionId}
                                confession={confession}
                            />
                        ))}
                    </div>
                ) : (
                    <p style={{ fontSize: '3.2rem' }}>
                        Fetching Confessions...
                    </p>
                )}
            </div>
        );
    }
}

const mapStateToProps = state => ({
    confessions: state.confessions
});

export default connect(mapStateToProps)(ConfessionsList);
