import {useState} from 'react';
import { YMaps, Map, Marker} from '@pbe/react-yandex-maps';
import Panel from '../Panel/Panel';
import TaxiRoute from '../TaxiRoute/TaxiRoute';
import Controls from '../Controls/Controls';


const MainMap = () => {
    const [zoom, setZoom] = useState(12);

    const incZoom = () => {
        if (zoom <= 16) {
            setZoom(prevZoom => prevZoom + 1);
        }
    };

    const decZoom = () => {
        if (zoom >= 4) {
            setZoom(prevZoom => prevZoom - 1);
        }
    };

    return (
        <div style={{ width: '100%', height: '100vh', overflow: 'hidden', position: 'relative', overflowX: "hidden" }}>
            <Panel />
            <TaxiRoute/>
            <Controls incZoom={incZoom} decZoom={decZoom} />
            <YMaps>
                <div style={{ width: '100%', height: '100%', overflow: 'hidden', position: 'relative' }}>
                    <Map
                        key={zoom}
                        defaultState={{ center: [55.75, 37.62], zoom: zoom }}
                        options={{ autoFitToViewport: 'always' }}
                        style={{ height: '100%' }}
                    />
                </div>
            </YMaps>
        </div>
    );
};

export default MainMap;