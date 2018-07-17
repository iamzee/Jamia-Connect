import React from 'react';

class AddConfessionForm extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            confessionText: '',
            isName: false
        };
    }

    onConfessionTextChange(e) {
        const confessionText = e.target.value;
        this.setState(() => ({ confessionText }));
    } 

    render() {
        return (
            <div>
                <form>
                    <textarea placeholder="Confess it!" value={} onChange={this.onConfessionTextChange}></textarea>
                    <input type="radio" id="isName" />
                    <label for="isName">Want to mention your name...</label>
                    <button>Add Confession</button>
                </form>
            </div>
        );
    }
}