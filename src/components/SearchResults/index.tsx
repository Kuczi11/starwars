import SearchResults from 'components/SearchResults/SearchResults';
import { connect } from 'react-redux';
import { getInputValue } from 'store/input/selectors';
import { decrementPage, incrementPage } from 'store/page/actions';
import { getPage } from 'store/page/selectors';

const mapStateToProps = (state: any) => ({
  inputValue: getInputValue(state),
  page: getPage(state),
});

const mapDispatchToProps = (dispatch: any) => ({
  decrementPage: () => dispatch(decrementPage()),
  incrementPage: () => dispatch(incrementPage()),
});

export default connect(mapStateToProps, mapDispatchToProps)(SearchResults);
