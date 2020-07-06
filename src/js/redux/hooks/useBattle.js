import { useSelector } from 'react-redux';

const useBattle = ( battleID ) => {
	if ( ! battleID ) {
		return null;
	}
	return useSelector( state => state.battles[battleID] );
}

export default useBattle;