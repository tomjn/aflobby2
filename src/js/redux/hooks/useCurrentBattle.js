import { useSelector } from 'react-redux';
import useBattle from './useBattle';

const useCurrentBattle = () => {
	const currentBattle = useSelector( state => state.currentBattle );
	return useBattle( currentBattle );
}

export default useCurrentBattle;
