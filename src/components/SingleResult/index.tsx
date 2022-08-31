import SingleResult from 'components/SingleResult/SingleResult';
import { fetchPlanet } from 'store/planets/actions';
import { connect } from 'react-redux';
import { getPlanetName, getPlanetPopulation } from 'store/planets/selectors';

const mapStateToProps = (state: any) => ({
  homeworld: getPlanetName(state),
  population: getPlanetPopulation(state),
});

const mapDispatchToProps = (dispatch: any) => ({
  fetchPlanet: (query: string) => dispatch(fetchPlanet(query)),
});

export default connect(mapStateToProps, mapDispatchToProps)(SingleResult);
