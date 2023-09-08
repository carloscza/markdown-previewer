import React from "react";
import { connect } from 'react-redux';
import WindowTitle from './WindowTitle.js';
import { DEFAULT_VIEW } from "../store.js";


class WindowMenuBar extends React.Component
{
    constructor(props)
    {
        super(props);
    }

    render()
    {
        let iconClasses = 'fa-solid fa-maximize icon-btn';

        if (this.props.pageView != DEFAULT_VIEW)
            iconClasses = 'fa-solid fa-minimize icon-btn';

        return (
            <div className='window-menubar'>
              <WindowTitle titleName={this.props.windowName} />
              <i id='btnIcon' className={iconClasses} onClick={this.props.onClick}></i>
            </div>
             
        );
    }
}

const mapStateToProps = (state) =>
{
  return (
    {
      pageView: state.pageView,
    }
  );
};

export default connect(mapStateToProps)(WindowMenuBar);