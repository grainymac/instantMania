import spectraColor from './film/IMG_6124.jpg'
import grid from './film/IMG_6190.jpg'
import spectraBnw from './film/IMG_6400.jpg'
import blackFrameSpectra from './film/impossible_3555_instant_color_film_for_1096476 2.jpg'

export const polaroidSpectraFilm = [
    {
        id: 1,
        type: 'Black & White',
        title: 'B&W Spectra Film',
        image: spectraBnw,
        link: '/bnwspectra',
    },
    {
        id: 2,
        type: 'Color',
        title: 'Color Spectra Film',
        image: spectraColor,
        link: '/colorspectra',
    },
    {
        id: 3,
        type: 'Color',
        title: 'Color Spectra Film',
        image: grid,
        link: '/grid',
    },
    {
        id: 4,
        type: 'Color',
        title: 'Black Frame Edition',
        image: blackFrameSpectra,
        link: '/blackframespectra',
    },
]