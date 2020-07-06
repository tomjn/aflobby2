import { useSelector } from 'react-redux';

function useMap( mapName ) {
	return useSelector( state => state.content.maps[mapName] );
}

export default useMap;
