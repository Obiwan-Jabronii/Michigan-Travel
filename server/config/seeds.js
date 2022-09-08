const db = require('./connection');
const { User, Post, Location, Comment, Region } = require('../models');


db.once('open', async () => {
    await Region.deleteMany();

    const regions = await Region.insertMany([
        {name: 'Upper Peninsula'},
        {name: 'Northern Lower Peninsula'},
        {name: 'Eastern Lower Peninsula'},
        {name: 'Western Lower Peninsula'}

    ])

    console.log('Regions seeded!')

    await Location.deleteMany();


    const location = await Location.insertMany([
        {
            name: 'Tahquamenon Falls State Park',
            description: 'Tahquamenon Falls State Park encompasses close to 50,000 acres stretching over 13 miles. Most of this is undeveloped woodland without roads, buildings or power lines. The centerpiece of the park, and the very reason for its existence, is the Tahquamenon River with its waterfalls. The Upper Falls is one the largest waterfalls east of the Mississippi.',
            image: 'tahquamenonFalls.jpg',
            posts: [
                {
                    username: 'Mitchell',
                    postBody: 'Hello',
                    
                }
            ],
            region: regions[0]._id
        },
        {
            name: 'Sault Ste. Marie',
            description: 'Sault Ste. Marie was settled as early as 1668, which makes it Michigan\'s oldest city and among the oldest cities in the United States. Located at the northeastern edge of the Upper Peninsula, it is separated by the St. Marys River from the much-larger city of Sault Ste. Marie, Ontario. The two are connected by the Sault Ste. Marie International Bridge, which represents the northern terminus of Interstate 75. This portion of the river also contains the Soo Locks, as well as a swinging railroad bridge. The city is also home to Lake Superior State University.',
            image: 'SaultSteMarie.jpg',
            posts: [
                {
                    username: 'Mitchell',
                    postBody: 'Hello',
                    
                }
            ],
            region: regions[0]._id
        },
        {
            name: 'Pictured Rocks National Lakeshore ',
            description: 'as;dlkfjlkasjdflkj',
            image: 'Pictured-Rocks.jpg',
            posts: [
                {
                    username: 'Mitchell',
                    postBody: 'Hello',
                    
                }
            ],
            region: regions[0]._id
        },
        {
            name: 'Mackinac Island ',
            description: 'as;dlkfjlkasjdflkj',
            image: 'MackinacIsland.jpg',
            posts: [
                {
                    username: 'Mitchell',
                    postBody: 'Hello',
                    
                }
            ],
            region: regions[0]._id
        },
        {
            name: 'Isle Royale National Park',
            description: 'as;dlkfjlkasjdflkj',
            image: 'IsleRoyale.jpg',
            posts: [
                {
                    username: 'Mitchell',
                    postBody: 'Hello',
                    
                }
            ],
            region: regions[0]._id
        },
        {
            name: 'Traverse City ',
            description: 'The Traverse City area is the largest producer of tart cherries in the United States, as of 2010. Near the time of cherry harvest, the city hosts the annual week-long National Cherry Festival in the first full week of July, attracting approximately 500,000 visitors annually. The surrounding countryside also produces grapes, and is one of the centers of wine production in the Midwest.',
            image: 'TraverseCity.jpg',
            posts: [
                {
                    username: 'Mitchell',
                    postBody: 'Hello',
                    
                }
            ],
            region: regions[1]._id
        },
        {
            name: 'Petosky',
            description: 'as;dlkfjlkasjdflkj',
            image: 'Petosky.jpg',
            posts: [
                {
                    username: 'Mitchell',
                    postBody: 'Hello',
                    
                }
            ],
            region: regions[1]._id
        },
        {
            name: 'Manistee',
            description: 'as;dlkfjlkasjdflkj',
            image: 'Manistee.jpg',
            posts: [
                {
                    username: 'Mitchell',
                    postBody: 'Hello',
                    
                }
            ],
            region: regions[1]._id
        },
        {
            name: 'Mackinaw City',
            description: 'According to AAA\'s 2009 TripTik requests, Mackinaw City is the most popular tourist spot in the state of Michigan. Local attractions include Fort Michilimackinac, the Mackinac Bridge, the Mackinaw Crossings shopping mall, Mill Creek, the Old Mackinac Point Light, the Historic Village, the McGulpin Point Light, and the retired US Coast Guard Icebreaker Mackinaw.',
            image: 'MackinawCity.jpg',
            posts: [
                {
                    username: 'Mitchell',
                    postBody: 'Hello',
                    
                }
            ],
            region: regions[1]._id
        },
        {
            name: 'Beaver Island',
            description: 'as;dlkfjlkasjdflkj',
            image: 'BeaverIsland.jpg',
            posts: [
                {
                    username: 'Mitchell',
                    postBody: 'Hello',
                    
                }
            ],
            region: regions[1]._id
        },
        {
            name: 'Detroit',
            description: 'Detroit is a major port on the Detroit River, one of the four major straits that connect the Great Lakes system to the Saint Lawrence Seaway. The City of Detroit anchors the second-largest regional economy in the Midwest, behind Chicago and ahead of Minneapolis–Saint Paul, and the 14th-largest in the United States. Detroit is best known as the center of the U.S. automobile industry, and the "Big Three" auto manufacturers General Motors, Ford, and Stellantis North America are all headquartered in Metro Detroit.',
            image: 'Detroit.jpg',
            posts: [
                {
                    username: 'Mitchell',
                    postBody: 'Hello',
                    
                }
            ],
            region: regions[2]._id
        },
        {
            name: 'Bay City',
            description: 'as;dlkfjlkasjdflkj',
            image: 'BayCity.jpg',
            posts: [
                {
                    username: 'Mitchell',
                    postBody: 'Hello',
                    
                }
            ],
            region: regions[2]._id
        },
        {
            name: 'Frankenmuth',
            description: 'The city\'s name is a combination of two words. "Franken" represents the Province of Franconia in the Kingdom of Bavaria from which the original settlers came, and the German word "Mut" means courage. Thus, the name Frankenmuth means "courage of the Franconians". The most popular nickname is "Little Bavaria", in reference to the city\'s German heritage, but the city is also nicknamed "Muth".',
            image: 'Frankenmuth.jpg',
            posts: [
                {
                    username: 'Mitchell',
                    postBody: 'Hello',
                    
                }
            ],
            region: regions[2]._id
        },
        {
            name: 'Ann Arbor',
            description: 'as;dlkfjlkasjdflkj',
            image: 'AnnArbor.jpg',
            posts: [
                {
                    username: 'Mitchell',
                    postBody: 'Hello',
                    
                }
            ],
            region: regions[2]._id
        },
        {
            name: 'Troy Summerset',
            description: 'as;dlkfjlkasjdflkj',
            image: 'Troy.jpg',
            posts: [
                {
                    username: 'Mitchell',
                    postBody: 'Hello',
                    
                }
            ],
            region: regions[2]._id
        },
        {
            name: 'Grand Rapids ',
            description: 'as;dlkfjlkasjdflkj',
            image: 'grand-rapids-hero (1).jpg',
            posts: [
                {
                    username: 'Mitchell',
                    postBody: 'Hello',
                    
                }
            ],
            region: regions[3]._id
        },
        {
            name: 'Grand Haven ',
            description: 'The Grand Haven port community is an active beach resort with boating, fishing, sailing, biking, skating etc. along with connecting campgrounds and recreational areas. The city has over 100 miles (160 km) of bike trails, a state beach, boardwalk, two lighthouses, a pier, wharf, large charter fishing fleet and a Great Lakes port.Grand Haven hosts the annual Coast Guard Festival, a celebration based on Coast Guard Day, which draws U.S. and Canadian vessels along with parades of bands and other activities, including a memorial to the 101 sailors lost in the Escanaba sinking. The yearly attendance for this event exceeds 300,000 people over the two-week period of the festival.',
            image: 'Grand Haven.jpg',
            posts: [
                {
                    username: 'Mitchell',
                    postBody: 'Hello',
                    
                }
            ],
            region: regions[3]._id
        },
        {
            name: 'Saugatuck',
            description: 'People are drawn to the art galleries, harbor, marinas, scenery, unusual stores, the view from atop Mount Baldhead, and tourist attractions as well as Oval Beach on Lake Michigan, which enjoys a worldwide reputation. Nearby are Saugatuck Dunes State Park and Allegan State Game Area as is the city of Holland. Saugatuck is known as a popular vacation destination for the LGBT+ community with similar cultural similarities as Fire Island Pines and Provincetown, Massachusetts.',
            image: 'Saugatuck.jpg',
            posts: [
                {
                    username: 'Mitchell',
                    postBody: 'Hello',
                }
            ],
            region: regions[3]._id
        },
        {
            name: 'Ludington',
            description: 'as;dlkfjlkasjdflkj',
            image: 'Ludington.jpg',
            posts: [
                {
                    username: 'Mitchell',
                    postBody: 'Hello',

                }
            ],
            region: regions[3]._id
        },
        {
            name: 'Holland',
            description: 'as;dlkfjlkasjdflkj',
            image: 'Holland.jpg',
            posts: [
                {
                    username: 'Mitchell',
                    postBody: 'Hello',
                    
                }
            ],
            region: regions[3]._id
        },
    ]);

    console.log('Locations seeded!')

    await User.deleteMany();

    await User.create({
        username: 'Mitchell',
        email: 'email@email.com',
        password: '12345',
        locations: [],
        posts: [],
        comments:[]
    });

    console.log('Users seeded!')
})