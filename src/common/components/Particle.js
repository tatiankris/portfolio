import React, {useCallback} from "react";
import Particles from "react-tsparticles";
import { loadFull } from "tsparticles";
import { loadStarsPreset } from "tsparticles-preset-stars";


function Particle(props) {

    // const particlesInit = useCallback(
    //     async (engine) => {
    //         console.log(engine);
    //         await loadFull(engine);
    //     }
    // );

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
    // const opt = {
    //     background: {
    //         color: {
    //             value: "#f3f0ea",
    //         },
    //     },
    //     fpsLimit: 120,
    //         interactivity: {
    //         events: {
    //             onClick: {
    //                 enable: true,
    //                     mode: "push",
    //             },
    //             onHover: {
    //                 enable: true,
    //                     mode: "repulse",
    //             },
    //             resize: true,
    //         },
    //         modes: {
    //             push: {
    //                 quantity: 4,
    //             },
    //             repulse: {
    //                 distance: 200,
    //                     duration: 0.4,
    //             },
    //         },
    //     },
    //     particles: {
    //         color: {
    //             value: "#736955",
    //         },
    //         links: {
    //             color: "#736955",
    //                 distance: 150,
    //                 enable: true,
    //                 opacity: 0.5,
    //                 width: 1,
    //         },
    //         collisions: {
    //             enable: true,
    //         },
    //         move: {
    //             directions: "none",
    //                 enable: true,
    //                 outModes: {
    //             default: "bounce",
    //             },
    //             random: false,
    //                 speed: 0.2,
    //                 straight: false,
    //         },
    //         number: {
    //             density: {
    //                 enable: true,
    //                     area: 800,
    //             },
    //             value: 80,
    //         },
    //         opacity: {
    //             value: 0.5,
    //         },
    //         shape: {
    //             type: "circle",
    //         },
    //         size: {
    //             value: { min: 1, max: 5 },
    //         },
    //     },
    //     detectRetina: true,
    // }
    //
    // const options = {
    //     "fullScreen": {
    //         "enable": false,
    //         "zIndex": 0
    //     },
    //     "particles": {
    //         "number": {
    //             "value": 10,
    //             "density": {
    //                 "enable": false,
    //                 "value_area": 800
    //             }
    //         },
    //         "color": {
    //             "value": "#fff"
    //         },
    //         "shape": {
    //             "type": "star",
    //             "options": {
    //                 "star": {
    //                     "sides": 5
    //                 }
    //             }
    //         },
    //         "opacity": {
    //             "value": 0.8,
    //             "random": false,
    //             "anim": {
    //                 "enable": false,
    //                 "speed": 1,
    //                 "opacity_min": 0.1,
    //                 "sync": false
    //             }
    //         },
    //         "size": {
    //             "value": 4,
    //             "random": false,
    //             "anim": {
    //                 "enable": false,
    //                 "speed": 40,
    //                 "size_min": 0.1,
    //                 "sync": false
    //             }
    //         },
    //         "rotate": {
    //             "value": 0,
    //             "random": true,
    //             "direction": "clockwise",
    //             "animation": {
    //                 "enable": true,
    //                 "speed": 5,
    //                 "sync": false
    //             }
    //         },
    //         "line_linked": {
    //             "enable": true,
    //             "distance": 600,
    //             "color": "#736955",
    //             "opacity": 0.4,
    //             "width": 2
    //         },
    //         "move": {
    //             "enable": true,
    //             "speed": 2,
    //             "direction": "none",
    //             "random": false,
    //             "straight": false,
    //             "out_mode": "out",
    //             "attract": {
    //                 "enable": false,
    //                 "rotateX": 600,
    //                 "rotateY": 1200
    //             }
    //         }
    //     },
    //     "interactivity": {
    //         "events": {
    //             "onhover": {
    //                 "enable": true,
    //                 "mode": "grab"
    //             },
    //             "onclick": {
    //                 "enable": true,
    //                 "mode": "bubble"
    //             },
    //             "resize": true
    //         },
    //         "modes": {
    //             "grab": {
    //                 "distance": 400,
    //                 "line_linked": {
    //                     "opacity": 1,
    //                     "color": "#f00"
    //                 }
    //             },
    //             "bubble": {
    //                 "distance": 400,
    //                 "size": 40,
    //                 "duration": 2,
    //                 "opacity": 8,
    //                 "color": "#ffff00"
    //             },
    //             "repulse": {
    //                 "distance": 200
    //             },
    //             "push": {
    //                 "particles_nb": 4
    //             },
    //             "remove": {
    //                 "particles_nb": 2
    //             }
    //         }
    //     },
    //     "retina_detect": true,
    //     "background": {
    //         "color": "#111",
    //         "image": "",
    //         "position": "50% 50%",
    //         "repeat": "no-repeat",
    //         "size": "cover"
    //     }
    // }

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