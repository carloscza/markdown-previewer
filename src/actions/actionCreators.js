import { TOGGLE_PAGE_VIEW, UPDATE_EDITOR_INPUT } from "../store";


export const updateEditorInputAction = (newInput) =>
{
  return (
    {
      type: UPDATE_EDITOR_INPUT,
      editorInput: newInput
    }
  );
};

export const togglePageViewAction = (windowWhoToggled) =>
{
  return (
    {
      type: TOGGLE_PAGE_VIEW, 
      whoToggled: windowWhoToggled}
  );
};