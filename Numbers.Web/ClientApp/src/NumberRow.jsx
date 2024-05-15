
import React from 'react';

class NumberRow extends React.Component {


    render() {

        const { Number, isLocked, isSelected, onSelectClicked } = this.props;
        return (<>
            <tr>
                <td>{Number}</td>
                <td><button className={`btn btn-${isSelected ? 'danger' : 'primary'} w-75`} onClick={onSelectClicked}
                    disabled={isLocked}>
                    {isSelected ? 'Remove from selected' : 'Add to selected'}
                </button></td>
            </tr>
        </>)
    }
}

export default NumberRow;