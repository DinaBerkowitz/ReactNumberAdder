
import React from 'react';
import SelectedNumber from './SelectedNumber';
import NumberRow from './NumberRow';
class NumberTable extends React.Component {

    state = {
        numbers: [],
        selectedNumbers: [],
        lockedNumbers: []
    }

    getRandomInt(min, max) {
        min = Math.ceil(min);
        max = Math.floor(max);
        return Math.floor(Math.random() * (max - min + 1) + min);
    }

    onAddClick = () => {
        const num = this.getRandomInt(1, 1000)
        const copy = [...this.state.numbers, num]
        this.setState({ numbers: copy })

    }
    onSelectClicked = (num) => {
        const { selectedNumbers } = this.state;
        if (selectedNumbers.includes(num)) {
            this.setState({ selectedNumbers: selectedNumbers.filter(x => x !== num) });
        } else {
            this.setState({ selectedNumbers: [...selectedNumbers, num] });
        }
    }

    onLockClicked = (num) => {
        const { lockedNumbers } = this.state;
        if (lockedNumbers.includes(num)) {
            this.setState({ lockedNumbers: lockedNumbers.filter(x => x !== num) });
        } else {
            this.setState({ lockedNumbers: [...lockedNumbers, num] });
        }
    }

    render() {
        return (
            <div className="col-md-8">
                <div className="container">
                    <button className="btn btn-success btn-lg w-100" onClick={this.onAddClick}>Add</button>
                    <table className='table table-hover table-striped table-border'>
                        <thead>
                            <tr>
                                <th>Number</th>
                                <th>Add/Remove</th>
                            </tr>
                        </thead>
                        <tbody>
                            {this.state.numbers.map(num => <NumberRow Number={num}
                                isLocked={this.state.lockedNumbers.includes(num)}
                                isSelected={this.state.selectedNumbers.includes(num)}
                                onSelectClicked={() => this.onSelectClicked(num)}></NumberRow>)}
                        </tbody>
                    </table>
                    <div className="col-md-6 col-md-offset-3">
                        <h3>Selected Numbers</h3>
                        <ul className="list-group">
                            {this.state.selectedNumbers.map(num => <SelectedNumber Number={num}
                                isLocked={this.state.lockedNumbers.includes(num)}
                                onLockClicked={() => this.onLockClicked(num)}></SelectedNumber>)}
                        </ul>
                    </div>

                </div>
            </div>

        )
    }
}

export default NumberTable;