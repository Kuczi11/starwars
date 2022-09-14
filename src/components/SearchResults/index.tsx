import SearchResults from 'components/SearchResults/SearchResults';
import {
  getNextUrl,
  getPeopleData,
  getPreviousUrl,
} from 'store/persons/selectors';
import { connect } from 'react-redux';

const mapStateToProps = (state: any) => ({
  queryState: getPeopleData(state),
  nextPageUrl: getNextUrl(state),
  previousPageUrl: getPreviousUrl(state),
});

export default connect(mapStateToProps)(SearchResults);
