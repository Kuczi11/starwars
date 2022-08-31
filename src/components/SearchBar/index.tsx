import SearchBar from './SearchBar';
import { connect } from 'react-redux';
import { fetchPersons } from 'store/persons/actions';

const mapDispatchToProps = (dispatch: any) => ({
  fetchPersons: (query: string) => dispatch(fetchPersons(query)),
});

export default connect(null, mapDispatchToProps)(SearchBar);
