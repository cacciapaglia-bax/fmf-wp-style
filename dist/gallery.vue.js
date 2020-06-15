var gallery = new Vue({
    el: "#gallery",
    data: GALLERY
})

const GALLERY = {
    images: [
        {
            src: 'fmf-logo.jpg',
            class: 'vertical',
            caption: 'Welcome to FMF'
        },
        {
            src: 'fmf-control-room-2.jpg',
            class: 'horizontal',
            caption: 'Monitoring & Control rooms'
        },
        {
            src: 'fmf-framery-design.jpg',
            class: 'sqrd',
            caption: 'Sound-proof phone booths'
        },
        {
            src: 'fmf-lemon-space.jpg',
            class: 'horizontal',
            caption: 'Relax areas'
        },
        {
            src: 'fmf-space-5.jpg',
            class: 'sqrd',
            caption: 'Private working areas'
        },
        {
            src: 'fmf-space-2.jpg ',
            class: 'horizontal',
            caption: 'Smart working desks'
        },
        {
            src: 'fmf-space-landscape.jpg',
            class: 'sqrd',
            caption: 'Terrace with View'
        },
        {
            src: 'fmf-lavagna.jpg',
            class: 'vertical',
            caption: 'Chalkboard walls'
        },
        {
            src: 'fmf-control-room.jpg',
            class: 'horizontal',
            caption: 'Monitoring & Control rooms'
        },
        {
            src: 'fmf-server.jpg',
            class: 'vertical',
            caption: 'Secure server room'
        },
        {
            src: 'fmf-room-design-2.jpg',
            class: 'horizontal',
            caption: 'Stand-up meeting areas'
        },
        {
            src: 'fmf-space-design-room.jpg',
            class: 'sqrd',
            caption: 'Executive meeting room'
        },
        {
            src: 'fmf-space-orange.jpg',
            class: 'sqrd',
            caption: 'winter courtyard garden'
        },
        {
            src: 'fmf-space-4.jpg',
            class: 'vertical',
            caption: 'Meeting rooms'
        },
        {
            src: 'fmf-room-design.jpg',
            class: 'horizontal',
            caption: 'Waiting room'
        },
        {
            src: 'fmf-space-gaming.jpg',
            class: 'sqrd',
            caption: 'Gaming rooms'
        },
        {
            src: 'fmf-gym.jpg',
            class: 'horizontal',
            caption: 'Fitness Centre'
        },
        {
            src: 'fmf-space.jpg',
            class: 'horizontal',
            caption: 'Fully-equipped meeting rooms'
        },
    ],
    dataSize: {
        'vertical': '1000x2000',
        'horizontal': '2000x1000',
        'sqrd': '1000x1000',
    }
}