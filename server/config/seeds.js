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
            description: 'Sandstone cliffs, beaches, waterfalls, sand dunes, inland lakes, deep forest, and wild shoreline beckon you to visit Pictured Rocks National Lakeshore. The power of Lake Superior shapes the park\'s coastal features and affects every ecosystem, creating a unique landscape to explore. Hiking, camping, sightseeing, and four-season outdoor opportunities abound.',
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
            description: 'For centuries, visitors have enjoyed this national treasure that\'s home to historic Fort Mackinac, world-famous Mackinac Island fudge and car-free streets full of horse-drawn carriages. This ideal vacation spot is a paradise of exploration with incredible natural landmarks, awe-inspiring sunrises and unforgettable sunsets. There\'s unique shopping, diverse dining and extraordinary nightlife, too.',
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
            description: 'Explore a rugged, isolated island far from our connected communities. Isle Royale offers adventures for backpackers, hikers, boaters, paddlers, and divers. Cross Lake Superior and make a commitment: Become a part of this island, and let it become a part of you. Find peace and refuge in island wilderness – because Isle Royale, in turn, finds refuge in us. Help Isle Royale stay wild.',
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
            description: 'Whether you want to spend time racing down mountain bike trails or ziplines, teeing off on spectacular greens or leisurely riding or hiking along trails with gorgeous water views, our communities are the perfect fall setting in northern Michigan. Your taste buds will love it here, too as you sip and sample in the Petoskey Wine Region, at local breweries, distilleries and at welcoming restaurants where cuisine of all kinds is served with a smile. ',
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
            description: 'Visit downtown Manistee, known as the Victorian Port City. Spend time browsing the shopping district, which features everything from unique kitchen products to consignment items to trendy clothing. Then satisfy your hunger at one of Manistee\'s exceptional restaurants. Whatever you\'re craving, you\'ll find a perfect meal at an affordable price in downtown Manistee.',
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
            description: 'The largest island in Lake Michigan, Beaver Island hosts many activities for every nature lover. The year round population is approximately 600 – with a large percentage of Irish descent. Time slows down here, offering a peaceful, relaxed way of life. Tour the Island by bicycle, or bring your car over on the ferry or rent a car to circle the Island in an afternoon.',
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
            description: 'It\'s time to explore, unsalted. Because, in Bay City, our freshwater playground beckons-and, here, majestic tall ships aren\'t just for daydreaming-they\'re for sailing.',
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
            description: 'Located in southeast Michigan\'s Lower Peninsula, Ann Arbor lies at the center of a greater collection of communities in Washtenaw County. With so many thriving communities nearby, Ann Arbor has become a cultural melting pot and urban oasis.',
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
            description: 'Somerset Collection is an upscale, luxury, super-regional shopping mall, located in Metro Detroit, in Troy, Michigan with more than 180 specialty stores.',
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
            description: 'From world-class attractions and outdoor recreation to nationally ranked food and craft beverage scenes – Grand Rapids, Michigan is filled with unexpected surprises. Discover why we\'re America\'s Best Beer City, the nation\'s Craft Beverage Capital and a Top 20 U.S. Foodie City. Get an eyeful of spectacular art and an earful of live music. Explore our endless opportunities for family fun. Make your travel dreams come true in Grand Rapids!',
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
            description: 'There are so many Ludington beaches to discover! You\'ll find miles of clean, sandy beaches along Lake Michigan and Hamlin Lake, just minutes from wherever you are in the area.',
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
            description: 'Throughout the history of Holland, the city\'s Dutch heritage has been preserved and celebrated. You\'ll have an opportunity for a true Dutch experience in the spring as millions of tulips bloom throughout the city. You\'ll see it in the Dutch architecture downtown, you\'ll taste it in the Dutch delicacies found in local shops and eateries, and you\'ll experience it at our Dutch attractions and events - like the Dutch Winterfest and the Tulip Time Festival. ',
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