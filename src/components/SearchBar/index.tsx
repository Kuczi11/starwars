import SearchBar from './SearchBar';
import { connect } from 'react-redux';
import { changeInput } from 'store/input/actions';

const mapDispatchToProps = (dispatch: any) => ({
  changeInput: (value: string) => dispatch(changeInput(value)),
});

export default connect(null, mapDispatchToProps)(SearchBar);
