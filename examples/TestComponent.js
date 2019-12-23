import React from 'react';

class TestComponent extends React.Component {
    render() {
        return (
            <div className="test-component">
                <label htmlFor="test">Test Component</label>
                <input className="test-input" id="test" {...this.props} />
            </div>
        )
    }
}

export default TestComponent;