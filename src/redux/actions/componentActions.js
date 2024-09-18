export const Add = (book) => ({
  type: 'ADD',
  payload: book,
});
export const Edit = (book) => ({
  type: 'EDIT',
  payload: book,
});
export const Delete = (id) => ({
  type: 'DELETE',
  payload: id,
});