import reducers from "./_reducers";

test("reducers", () => {
  let state;
  state = reducers(undefined, {});
  expect(state).toEqual({
    counter: 10,
    users: { active: [], isLoading: false, error: null },
    todos: [],
  });
});
