import SearchBar from './SearchBar';
import { connect } from 'react-redux';
import { fetchPersons } from 'store/persons/actions';
import { getPersons } from 'store/persons/selectors';

const mapStateToProps = (state: any) => ({
  persons: getPersons(state),
});

const mapDispatchToProps = (dispatch: any) => ({
  fetchPersons: (query: string) => dispatch(fetchPersons(query)),
});

export default connect(mapStateToProps, mapDispatchToProps)(SearchBar);
