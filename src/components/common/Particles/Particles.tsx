import React, { FC, useCallback } from 'react';
import { loadFull } from 'tsparticles';
import RawParticles from 'react-tsparticles';
import type { Engine } from 'tsparticles-engine';
import particles from '@constants/particles';

const Particles: FC = () => {
    const particlesInit = useCallback(async (engine: Engine) => {
        await loadFull(engine);
    }, []);

    return (
        <div className="fixed -z-10 top-0 left-0">
            <RawParticles
                id="main-bg"
                init={particlesInit}
                options={particles}
            />
        </div>
    );
};

export default Particles;
