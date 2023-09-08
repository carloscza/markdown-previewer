import React from 'react';
import { connect } from 'react-redux';
import WindowMenuBar from './WindowMenuBar.js';
import { updateEditorInputAction, togglePageViewAction } from '../actions/actionCreators.js';
import { DEFAULT_VIEW } from '../store.js';


class Editor extends React.Component
{
    constructor(props)
    {
        super(props);
    }

    handleEditorMax = () =>
    {
      this.props.togglePageView('editor');
    }

    handleChange = (event) =>
    {
       this.props.updateEditorInput(event.target.value);
    }

    render()
    {
      let textAreaClasses  = 'editor-field';
      let containerClasses = 'editor-container';

      if (this.props.pageView != DEFAULT_VIEW)
      {
        if (this.props.whoToggled === 'editor')
          textAreaClasses = 'editor-field maximize-editor';
        else
          containerClasses = 'hide-window'; 
      }

      return (
        <div className={containerClasses}>
          <WindowMenuBar windowName='EDITOR' onClick={this.handleEditorMax} />
          <textarea id="editor" className={textAreaClasses} value={this.props.editorInput} onChange={this.handleChange} placeholder={this.props.editorInput}></textarea>
        </div>
      );
    }
}

const mapStateToProps = (state) =>
{
  return (
    {
      pageView: state.pageView,
      editorInput: state.editorInput,
      whoToggled: state.whoToggled
    }
  );
};

const mapDispatchToProps = (dispatch) =>
{
  return (
    {
      togglePageView:    (windowWhoToggled) => { dispatch( togglePageViewAction(windowWhoToggled) ) },
      updateEditorInput: (newInput)         => { dispatch( updateEditorInputAction(newInput)      ) }  
    }
  );
};

export default connect(mapStateToProps, mapDispatchToProps)(Editor);