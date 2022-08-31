export interface Planet {
  planet: PlanetData;
}

interface PlanetData {
  planet: PlanetDetails;
}

interface PlanetDetails {
  name: string;
  population: string;
}

export const getPlanetName = (state: Planet) => state.planet.planet.name;
export const getPlanetPopulation = (state: Planet) =>
  state.planet.planet.population;
