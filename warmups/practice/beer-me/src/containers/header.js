import React from 'react';

class Header extends React.Component {
    render() {
        return (
            <div className="row">
                <div className="col-md-12 header">
                    <h1 className="summer-head">Summer Block Party</h1>
                    <h3 className="sub-head">Vote for the best beer of the summer!</h3>
                </div>
            </div>
        );
    }
}

export default Header;