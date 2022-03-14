const db = require('./connection');
const { User, Post, Location, Comment } = require('../models');
db.once('open', async () => {
    const location = await Location.insertMany([
        {
            name: 'Tahquamenon Falls State Park',
            description: '',
            image: '../../client/public/tahquamenonFalls.jpg',
            posts: '',
        },
        {
            name: 'Soo Locks',
            description: '',
            image: '../../client/public/SaultSteMarie.jpg',
            posts: '',
        },
        {
            name: 'Pictured Rocks National Lakeshore ',
            description: '',
            image: '../../client/public/Pictured-Rocks.jpg',
            posts: '',
        },
        {
            name: 'Mackinac Island ',
            description: '',
            image: '../../client/public/MackinacIsland.jpg',
            posts: '',
        },
        {
            name: 'Isle Royale National Park',
            description: '',
            image: '../../client/public/IsleRoyale.jpg',
            posts: '',
        },
        {
            name: 'Traverse City ',
            description: '',
            image: '../../client/public/TraverseCity.jpg',
            posts: '',
        },
        {
            name: 'Petosky',
            description: '',
            image: '../../client/public/Petosky.jpg',
            posts: '',
        },
        {
            name: 'Manistee',
            description: '',
            image: '../../client/public/Manistee.jpg',
            posts: '',
        },
        {
            name: 'Mackinaw City',
            description: '',
            image: '../../client/public/MackinawCity.jpg',
            posts: '',
        },
        {
            name: 'Beaver Island',
            description: '',
            image: '../../client/public/BeaverIsland.jpg',
            posts: '',
        },
        {
            name: 'Detroit',
            description: '',
            image: '../../client/public/Detroit.jpg',
            posts: '',
        },
        {
            name: 'Bay City',
            description: '',
            image: '../../client/public/BayCity.jpg',
            posts: '',
        },
        {
            name: 'Frankenmuth',
            description: '',
            image: '../../client/public/Frankenmuth.jpg',
            posts: '',
        },
        {
            name: 'Ann Arbor',
            description: '',
            image: '../../client/public/AnnArbor.jpg',
            posts: '',
        },
        {
            name: 'Troy Summerset',
            description: '',
            image: '../../client/public/Troy.jpg',
            posts: '',
        },
        {
            name: 'Grand Rapids ',
            description: '',
            image: '../../client/public/grand-rapids-hero (1).jpg',
            posts: '',
        },
        {
            name: 'Grand Haven ',
            description: '',
            image: '../../client/public/Grand Haven.jpg',
            posts: '',
        },
        {
            name: 'Saugatuck',
            description: '',
            image: '../../client/public/Saugatuck.jpg',
            posts: '',
        },
        {
            name: 'Ludington',
            description: '',
            image: '../../client/public/Ludington.jpg',
            posts: '',
        },
        {
            name: 'Holland',
            description: '',
            image: '../../client/public/Holland.jpg',
            posts: '',
        },
    ])
})