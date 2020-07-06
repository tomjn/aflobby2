import { useSelector } from 'react-redux';
import { useCurrentBattle } from './useCurrentBattle';
import { useMap } from './useMap';

const useCurrentMap = () => {
	const currentBattle = useCurrentBattle();
	if ( currentBattle ) {
		return useMap( currentMap );
	}
	return null;
}

export default useCurrentMap;
