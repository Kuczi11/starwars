import SearchResults from 'components/SearchResults/SearchResults';
import { getPersons } from 'store/persons/selectors';
import { connect } from 'react-redux';

const mapStateToProps = (state: any) => ({
  persons: getPersons(state),
});

export default connect(mapStateToProps)(SearchResults);
