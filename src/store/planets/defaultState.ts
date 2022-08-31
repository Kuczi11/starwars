export interface Data {
  planet: Planet;
}

export interface Planet {
  name: string;
  population: string;
}

const planet: Data = {
  planet: {
    name: '',
    population: '',
  },
};

export default planet;
