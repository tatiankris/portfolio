import React, {useCallback} from "react";
import Particles from "react-tsparticles";
import { loadFull } from "tsparticles";
import { loadStarsPreset } from "tsparticles-preset-stars";


function Particle(props) {


    const customInit = useCallback(
        async (engine) => {
            console.log(engine);
            await loadStarsPreset(engine);
        }
    );

    const particlesLoaded = useCallback(
        async (container) => {
            await console.log(container);
        }
    );

    return (
        <Particles
            className={props.className}
            id="tsparticles"
            init={customInit}
            loaded={particlesLoaded}
            options={{
                "fullScreen": {
                    "enable": false,
                    "zIndex": 0
                },
                "particles": {
                    "color": {
                        "value": "#deb99e"
                    },
                    "size": {
                        "value": 5,
                        "random": true
                    }
                },
                "background": {
                    "color": "#f3f0ea"
                },
                "preset": "stars"}}
        />
    );
}

export default Particle;