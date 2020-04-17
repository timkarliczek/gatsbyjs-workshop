import React, {useState} from 'react';

const Waves = () => {
    const [waves, setWaves] = useState(0);

    const handleClick = () => {
        setWaves(waves + 1)
    }

    return (
        <button className="button" onClick={() => setWaves(handleClick)}>
            {waves} Waves
        </button>
    );
}

export default Waves;