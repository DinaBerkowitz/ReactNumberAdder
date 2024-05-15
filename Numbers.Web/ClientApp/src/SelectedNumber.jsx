import React from 'react';

class SelectedNumber extends React.Component {
    render() {
        const { Number, isLocked, onLockClicked } = this.props;
        return (<>
            <li>{Number}
                <button className="btn btn-primary w-75" onClick={onLockClicked}>
                    {isLocked ? 'Unlock' : 'Lock'}  </button>
            </li>
        </>)
    }
}

export default SelectedNumber;