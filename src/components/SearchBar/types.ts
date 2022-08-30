export interface Props {
  fetchPersons: (query: string) => object;
  persons?: Person[];
}

export interface Person {
  name: string;
}
