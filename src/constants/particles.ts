export default {
    background: {
        color: {
            value: '#000000',
        },
    },
    fps_limit: 120,
    interactivity: {
        detectsOn: 'canvas' as const,
        events: {
            onClick: {
                enable: false,
                mode: 'push',
            },
            onHover: {
                enable: false,
                mode: 'repulse',
            },
            resize: true,
        },
        modes: {
            push: {
                particles_nb: 4,
            },
            repulse: {
                distance: 200,
                duration: 0.4,
            },
        },
    },
    particles: {
        color: {
            value: '#cccccc',
        },
        links: {
            color: '#cccccc',
            distance: 150,
            enable: true,
            opacity: 0.4,
            width: 1,
        },
        move: {
            bounce: false,
            direction: 'none' as const,
            enable: true,
            outMode: 'out' as const,
            random: false,
            speed: 1,
            straight: false,
        },
        number: {
            density: {
                enable: true,
                area: 800,
            },
            value: 80,
        },
        opacity: {
            value: 0.5,
        },
        shape: {
            type: 'circle',
        },
        size: {
            random: true,
            value: 5,
        },
    },
    detectRetina: true,
};
