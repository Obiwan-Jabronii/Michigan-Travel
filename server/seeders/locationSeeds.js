const db = require('./connection');
const { User, Post, Location, Comment } = require('../models');


db.once('open', async () => {
    const location = await Location.insertMany([
        {
            name: 'Tahquamenon Falls State Park',
            description: 'Tahquamenon Falls State Park encompasses close to 50,000 acres stretching over 13 miles. Most of this is undeveloped woodland without roads, buildings or power lines. The centerpiece of the park, and the very reason for its existence, is the Tahquamenon River with its waterfalls. The Upper Falls is one the largest waterfalls east of the Mississippi.',
            image: '../../client/public/tahquamenonFalls.jpg',
            posts: '',
        },
        {
            name: 'Sault Ste. Marie',
            description: 'Sault Ste. Marie was settled as early as 1668, which makes it Michigan\'s oldest city and among the oldest cities in the United States. Located at the northeastern edge of the Upper Peninsula, it is separated by the St. Marys River from the much-larger city of Sault Ste. Marie, Ontario. The two are connected by the Sault Ste. Marie International Bridge, which represents the northern terminus of Interstate 75. This portion of the river also contains the Soo Locks, as well as a swinging railroad bridge. The city is also home to Lake Superior State University.',
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
            description: 'The Traverse City area is the largest producer of tart cherries in the United States, as of 2010. Near the time of cherry harvest, the city hosts the annual week-long National Cherry Festival in the first full week of July, attracting approximately 500,000 visitors annually. The surrounding countryside also produces grapes, and is one of the centers of wine production in the Midwest.',
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
            description: 'According to AAA\'s 2009 TripTik requests, Mackinaw City is the most popular tourist spot in the state of Michigan. Local attractions include Fort Michilimackinac, the Mackinac Bridge, the Mackinaw Crossings shopping mall, Mill Creek, the Old Mackinac Point Light, the Historic Village, the McGulpin Point Light, and the retired US Coast Guard Icebreaker Mackinaw.',
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
            description: 'Detroit is a major port on the Detroit River, one of the four major straits that connect the Great Lakes system to the Saint Lawrence Seaway. The City of Detroit anchors the second-largest regional economy in the Midwest, behind Chicago and ahead of Minneapolis???Saint Paul, and the 14th-largest in the United States. Detroit is best known as the center of the U.S. automobile industry, and the "Big Three" auto manufacturers General Motors, Ford, and Stellantis North America are all headquartered in Metro Detroit.',
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
            description: 'The city\'s name is a combination of two words. "Franken" represents the Province of Franconia in the Kingdom of Bavaria from which the original settlers came, and the German word "Mut" means courage. Thus, the name Frankenmuth means "courage of the Franconians". The most popular nickname is "Little Bavaria", in reference to the city\'s German heritage, but the city is also nicknamed "Muth".',
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
            description: 'The Grand Haven port community is an active beach resort with boating, fishing, sailing, biking, skating etc. along with connecting campgrounds and recreational areas. The city has over 100 miles (160 km) of bike trails, a state beach, boardwalk, two lighthouses, a pier, wharf, large charter fishing fleet and a Great Lakes port.Grand Haven hosts the annual Coast Guard Festival, a celebration based on Coast Guard Day, which draws U.S. and Canadian vessels along with parades of bands and other activities, including a memorial to the 101 sailors lost in the Escanaba sinking. The yearly attendance for this event exceeds 300,000 people over the two-week period of the festival.',
            image: '../../client/public/Grand Haven.jpg',
            posts: '',
        },
        {
            name: 'Saugatuck',
            description: 'People are drawn to the art galleries, harbor, marinas, scenery, unusual stores, the view from atop Mount Baldhead, and tourist attractions as well as Oval Beach on Lake Michigan, which enjoys a worldwide reputation. Nearby are Saugatuck Dunes State Park and Allegan State Game Area as is the city of Holland. Saugatuck is known as a popular vacation destination for the LGBT+ community with similar cultural similarities as Fire Island Pines and Provincetown, Massachusetts.',
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