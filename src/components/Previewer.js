import React from 'react';
import WindowMenuBar from './WindowMenuBar.js';
import { marked } from 'marked';
import { connect } from 'react-redux';
import { togglePageViewAction } from '../actions/actionCreators.js';
import { DEFAULT_VIEW } from '../store.js';


class Previewer extends React.Component
{
    constructor(props)
    {
        super(props);
    }

    handlePreviewerMax = () =>
    {
      this.props.togglePageView('previewer');
    }

    render()
    {
      let textAreaClasses  = 'previewer-field';
      let containerClasses = 'previewer-container';

      if (this.props.pageView != DEFAULT_VIEW)
      {
        if (this.props.whoToggled === 'previewer')
          textAreaClasses = 'previewer-field maximize-previewer';
        else
          containerClasses = 'hide-window'; 
      }

        return (
          <div className={containerClasses} >
            <WindowMenuBar windowName='PREVIEWER' onClick={this.handlePreviewerMax} />
            <div id='preview' className={textAreaClasses} dangerouslySetInnerHTML={ {__html: marked(this.props.editorInput, { breaks: true, sanitize: true })} } />
          </div>
        );
    }
}

const mapStateToProps = (state) =>
{
  return (
    {
      editorInput: state.editorInput,
      pageView: state.pageView,
      whoToggled: state.whoToggled
    }
  );
};

const mapDispatchToProps = (dispatch) =>
{
  return (
    {
      togglePageView: (windowWhoToggled) => { dispatch( togglePageViewAction(windowWhoToggled) ) }
    }
  );
};

export default connect(mapStateToProps, mapDispatchToProps)(Previewer);



