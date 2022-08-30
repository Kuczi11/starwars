interface RootState {
  persons: {
    persons: [];
  };
}

export const getPersons = (state: RootState) => state.persons.persons;
