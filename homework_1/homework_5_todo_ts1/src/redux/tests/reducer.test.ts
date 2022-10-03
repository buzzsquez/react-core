import { reducer, addTodo, removeTodo, completeTodo } from '../reducer';

test('should return the initial state', () => {
  const result = reducer(undefined, { type: '' });
  expect(result).toEqual([]);
});

test('should add new task', () => {
  const action = { type: addTodo.type, payload: { id: 0, item: 'Redux', completed: false } };
  const result = reducer([], action);

  expect(result).toEqual([{ id: 0, item: 'Redux', completed: false }]);
});

test('should delete task', () => {
  const todos = [{ id: 1, item: 'Redux', completed: false }];  
  const action = { type: removeTodo.type, payload: 1 };
  const result = reducer(todos, action);

  expect(result).toEqual([]);
});

test('should complete task', () => {
  const payload = {id: 1, completed: true}
  const action = {type: completeTodo.type, payload: payload}
  const initialState = [{ id: 1, item: 'Redux2', completed: true }]
  const result = reducer(initialState, action)

  expect(result[0].completed).toBe(true)
})
