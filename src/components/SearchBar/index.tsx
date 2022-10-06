import SearchBar from './SearchBar';
import { connect } from 'react-redux';
import { changeInput } from 'store/input/actions';
import { RootState } from 'store';
import { getPage } from 'store/page/selectors';

const mapStateToProps = (state: RootState) => ({
  page: getPage(state),
});

const mapDispatchToProps = (dispatch: any) => ({
  changeInput: (value: string) => dispatch(changeInput(value)),
});

export default connect(mapStateToProps, mapDispatchToProps)(SearchBar);
