import React from 'react';

class WindowTitle extends React.Component
{
    constructor(props)
    {
        super(props);
    }

    render()
    {
        return (
            <div className='title-bar'>
                <i className="fa-brands fa-free-code-camp"></i>
                <p>{this.props.titleName}</p>
            </div>
        );
    }
}

export default WindowTitle;