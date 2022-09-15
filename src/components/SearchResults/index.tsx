import SearchResults from 'components/SearchResults/SearchResults';
import { connect } from 'react-redux';
import { getInputValue } from 'store/input/selectors';

const mapStateToProps = (state: any) => ({
  inputValue: getInputValue(state),
});

export default connect(mapStateToProps)(SearchResults);
