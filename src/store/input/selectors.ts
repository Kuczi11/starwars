interface Data {
  input: {
    value: string;
  };
}

export const getInputValue = (state: Data) => state.input.value;
