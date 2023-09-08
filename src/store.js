import { createStore } from 'redux';


export const DEFAULT_VIEW = 0;
export const TOGGLE_PAGE_VIEW    = 'TOGGLE_PAGE_VIEW';
export const UPDATE_EDITOR_INPUT = 'UPDATE_EDITOR_INPUT';


const initialState = 
{
    pageView: DEFAULT_VIEW,
    whoToggled: '',
    editorInput: "# Welcome to my React Markdown Previewer!\n\n## This is a sub-heading...\n### And here's some other cool stuff:\n\nHeres some code, `<div></div>`, between 2 backticks.\n\n```\n// this is multi-line code:\n\nfunction anotherExample(firstLine, lastLine) {\n  if (firstLine == '```' && lastLine == '```') {\n    return multiLineCode;\n  }\n}\n```\n\nYou can also make text **bold**... whoa!\nOr _italic_.\nOr... wait for it... **_both!_**\nAnd feel free to go crazy ~~crossing stuff out~~.\n\nThere's also [links](https://www.freecodecamp.org), and\n> Block Quotes!\n\nAnd if you want to get really crazy, even tables:\n\nWild Header | Crazy Header | Another Header?\n------------ | ------------- | -------------\nYour content can | be here, and it | can be here....\nAnd here. | Okay. | I think we get it.\n\n- And of course there are lists.\n  - Some are bulleted.\n     - With different indentation levels.\n        - That look like this.\n\n\n1. And there are numbered lists too.\n1. Use just 1s if you want!\n1. And last but not least, let's not forget embedded images:\n\n![freeCodeCamp Logo](https://cdn.freecodecamp.org/testable-projects-fcc/images/fcc_secondary.svg)\n"
};

const rootReducer = (state = initialState, action) =>
{
    let newState = {};

    switch(action.type)
    {   
        case TOGGLE_PAGE_VIEW:
            const togglePageView = (1*(!state.pageView)) + (0*state.pageView);
            newState = 
            {
                ...state, 
                pageView: togglePageView, 
                whoToggled: action.whoToggled
            };
            break;
        case UPDATE_EDITOR_INPUT:
            newState = 
            {
                ...state, 
                editorInput: action.editorInput
            };
            break;
        default:
            newState = {...state};
    }

    return newState;
}

const store = createStore(rootReducer);

export default store;