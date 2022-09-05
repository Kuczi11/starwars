interface Data {
  persons: Person[][];
  errorMessage: string;
}

export interface Person {
  id: number;
}

const initialPersons: Data = {
  persons: [],
  errorMessage: '',
};

export default initialPersons;
