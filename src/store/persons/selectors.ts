interface Data {
  persons: {
    persons: [];
  };
}

export const getPersons = (state: Data) => state.persons.persons;

export const getPeopleData = (state: any) => state.peopleDataApi.queries;
export const getNextUrl = (state: any) =>
  state.peopleDataApi.queries.getPersonByName?.data.next;
export const getPreviousUrl = (state: any) =>
  state.peopleDataApi.queries.getPersonByName?.data.previous;
