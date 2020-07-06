import { useSelector } from 'react-redux';

function useMaps() {
	return useSelector( state => state.content.maps );
}

export default useMaps;
