const getArrayParentPath = (str) => {
  if (str && typeof str !== 'string') {
    return null;
  }

  const path = str.split('.');

  if (path.length > 1) {
    const name = path[path.length - 1].split('[')[0];
    return [...path.slice(0, path.length - 1), name].join('.');
  }

  return path[0].split('[')[0];
};

const hold = ([name], state, { getIn, setIn }) => {
  let formState = getIn(state, 'formState');
  const value = getIn(formState, `values.${name}`);

  if (!value) {
    return;
  }

  let holdBuffer = getIn(formState, 'holdBuffer') || getIn(formState, 'initialValues') || {};
  holdBuffer = setIn(holdBuffer, name, value);
  formState = setIn(formState, `values.${name}`, undefined);
  formState = setIn(formState, 'holdBuffer', holdBuffer);

  state.formState = formState;
};

const unhold = ([name], state, { getIn, setIn }) => {
  let formState = getIn(state, 'formState');

  if (getIn(formState, `values.${name}`)) {
    return;
  }

  let holdBuffer = getIn(formState, 'holdBuffer') || getIn(formState, 'initialValues') || {};

  const value = getIn(holdBuffer, name);

  if (!value) {
    return;
  }

  holdBuffer = setIn(holdBuffer, name, undefined);
  formState = setIn(formState, `values.${name}`, value);
  formState = setIn(formState, 'holdBuffer', holdBuffer);

  state.formState = formState;
};

module.exports = {
  hold,
  unhold,
};
