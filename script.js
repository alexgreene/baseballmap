/*
script.js
The Baseball Map
Alex Greene
06/21/15
*/

/*******************************************************/
/* DATA SECTION */
/*******************************************************/

var stadiums = [
	{ id:1  ,  name: 'Oriole Park at Camden Yards', lat:39.283889 , lon:-76.621667 , city: 'Baltimore', state:'MD' },
	{ id:2  ,  name: 'Fenway Park', lat:42.346389 , lon:-71.0975 , city: 'Boston', state:'MA' },
	{ id:3  ,  name: 'Yankee Stadium', lat:40.829167 , lon:-73.926389 , city: 'New York', state:'NY' },
	{ id:4  ,  name: 'Tropicana Field', lat:27.768333 , lon:-82.653333 , city: 'St. Petersburg', state:'FL'	},
	{ id:5  ,  name: 'Rogers Centre', lat:43.641389 , lon:-79.389167 , city: 'Toronto', state:'ON' },
	{ id:6  ,  name: 'U.S. Cellular Field', lat:41.83 , lon:-87.633889 , city: 'Chicago', state:'IL' },
	{ id:7  ,  name: 'Progressive Field', lat:41.495833 , lon:-81.685278 , city: 'Celevaland', state:'OH' },
	{ id:8  ,  name: 'Comerica Park', lat:42.339167 , lon:-83.048611 , city: 'Detroit', state:'MI' },
	{ id:9  ,  name: 'Kauffman Stadium', lat:39.051389 , lon:-94.480556 , city: 'Kansas City', state:'MO' },
	{ id:10 ,  name: 'Target Field', lat:44.981667 , lon:-93.278333 , city: 'Minneapolis', state:'MN' },
	{ id:11 ,  name: 'Minute Maid Park', lat:29.756944 , lon:-95.355556 , city: 'Houston', state:'TX' },
	{ id:12 ,  name: 'Angel Stadium of Anaheim', lat:33.800278 , lon:-117.882778 , city: 'Anaheim', state:'CA' },
	{ id:13 ,  name: 'O.co Coliseum', lat:37.751667 , lon:-122.200556 , city: 'Oakland', state:'CA' },
	{ id:14 ,  name: 'Safeco Field', lat:47.591389 , lon:-122.3325 , city: 'Seattle', state:'WA' },
	{ id:15 ,  name: 'Globe Life Park in Arlington', lat:32.751389 , lon:-97.082778 , city: 'Arlington', state:'TX' },
	{ id:16 ,  name: 'Turner Field', lat:33.735278 , lon:-84.389444 , city: 'Atlanta', state:'GA' },
	{ id:17 ,  name: 'Marlins Park', lat:25.778056 , lon:-80.219722 , city: 'Miami', state:'FL' },
	{ id:18 ,  name: 'Citi Field', lat:40.756944 , lon:-73.845833 , city: 'New York', state:'NY' },
	{ id:19 ,  name: 'Citizens Bank Park', lat:39.905833 , lon:-75.166389 , city: 'Philidelphia', state:'PA' },
	{ id:20 ,  name: 'Nationals Park', lat:38.872778 , lon:-77.0075 , city: 'Washington', state:'D.C.' },
	{ id:21 ,  name: 'Wrigley Field', lat:41.948333 , lon:-87.655556 , city: 'Chicago', state:'IL' },
	{ id:22 ,  name: 'Great American Ball Park', lat:39.0975 , lon:-84.506667 , city: 'Cincinnati', state:'OH' },
	{ id:23 ,  name: 'Miller Park (Milwaukee)', lat:43.028333 , lon:-87.971111 , city: 'Milwaukee', state:'WI' },
	{ id:24 ,  name: 'PNC Park', lat:40.446944 , lon:-80.005833 , city: 'Pittsburgh', state:'PA' },
	{ id:25 ,  name: 'Busch Stadium', lat:38.6225 , lon:-90.193056 , city: 'St. Louis', state:'MO' },
	{ id:26 ,  name: 'Chase Field', lat:33.445278 , lon:-112.066944 , city: 'Phoenix', state:'AZ' },
	{ id:27 ,  name: 'Coors Field', lat:39.756111 , lon:-104.994167 , city: 'Denver', state:'CO' },
	{ id:28 ,  name: 'Dodger Stadium', lat:34.073611 , lon:-118.24 , city: 'Los Angeles', state:'CA' },
	{ id:29 ,  name: 'Petco Park', lat:32.707222 , lon:-117.156667 , city: 'San Diego', state:'CA' },
	{ id:30 ,  name: 'AT&T Park', lat:37.778611 , lon:-122.389167 , city: 'San Francisco', state:'CA' },
	{ id:31 ,  name: 'Coca-Cola Field', lat:42.883333 , lon:-78.866667 , city: 'Buffalo', state:'NY' },
	{ id:32 ,  name: 'Coca-Cola Park', lat:40.626111 , lon:-75.4525 , city: 'Allentown', state:'PA' },
	{ id:33 ,  name: 'McCoy Stadium', lat:41.873164 , lon:-71.370039 , city: 'Pawtucket', state:'RI' },
	{ id:34 ,  name: 'Frontier Field', lat:43.158267 , lon:-77.619794 , city: 'Rochester', state:'NY' },
	{ id:35 ,  name: 'PNC Field', lat:41.360406 , lon:-75.683967 , city: 'Moosic', state:'PA' },
	{ id:36 ,  name: 'NBT Bank Stadium', lat:43.079078 , lon:-76.165358 , city: 'Syracuse', state:'NY' },
	{ id:37 ,  name: 'BB&T Ballpark (Charlotte)', lat:35.227988 , lon:-80.849011 , city: 'Charlotte', state:'NC' },
	{ id:38 ,  name: 'Durham Bulls Athletic Park', lat:35.991689 , lon:-78.904186 , city: 'Durham', state:'NC' },
	{ id:39 ,  name: 'Coolray Field', lat:34.041494 , lon:-83.992367 , city: 'Lawrenceville', state:'GA' },
	{ id:40 ,  name: 'Harbor Park', lat:36.842789 , lon:-76.278869 , city: 'Norfolk', state:'VA' },
	{ id:41 ,  name: 'Huntington Park', lat:39.968619 , lon:-83.010743 , city: 'Columbus', state:'OH' },
	{ id:42 ,  name: 'Victory Field', lat:39.765 , lon:-86.168333 , city: 'Indianapolis', state:'IN' },
	{ id:43 ,  name: 'Louisville Slugger Field', lat:38.256186 , lon:-85.744653 , city: 'Louisville', state:'KY' },
	{ id:44 ,  name: 'Fifth Third Field (Toledo, Ohio)', lat:41.648314 , lon:-83.538986 , city: 'Toledo', state:'OH' },
	{ id:45 ,  name: 'Security Service Field', lat:38.894172 , lon:-104.710311 , city: 'Colorado Springs', state:'CO' },
	{ id:46 ,  name: 'Principal Park', lat:41.580278 , lon:-93.615833 , city: 'Des Moines', state:'IO' },
	{ id:47 ,  name: 'Chickasaw Bricktown Ballpark', lat:35.464961 , lon:-97.50805 , city: 'Oklahoma City', state:'OK' },
	{ id:48 ,  name: 'Werner Park', lat:41.151 , lon:-96.107 , city: 'Papillion', state:'NE' },
	{ id:49 ,  name: 'AutoZone Park', lat:35.143056 , lon:-90.049167 , city: 'Memphis', state:'TN' },
	{ id:50 ,  name: 'First Tennesse Park', lat:36.173031 , lon:-86.785033 , city: 'Nashville', state:'TN' },
	{ id:51 ,  name: 'Zephyr Field', lat:29.975442 , lon:-90.199742 , city: 'Metairie', state:'LA' },
	{ id:52 ,  name: 'Dell Diamond', lat:30.5273 , lon:-97.6305 , city: 'Round Rock', state:'TX' },
	{ id:53 ,  name: 'Chukchansi Park', lat:36.7321 , lon:-119.7905 , city: 'Fresno', state:'CA' },
	{ id:54 ,  name: 'Aces Ballpark', lat:39.528131 , lon:-119.808633 , city: 'Reno', state:'NV' },
	{ id:55 ,  name: 'Raley Field', lat:38.580372 , lon:-121.5138 , city: 'Sacramento', state:'CA' },
	{ id:56 ,  name: 'Cheney Stadium', lat:47.238033 , lon:-122.497544 , city: 'Tacoma', state:'WA' },
	{ id:57 ,  name: 'Isotopes Park', lat:35.069722 , lon:-106.629167 , city: 'Alburquerque', state:'NM' },
	{ id:58 ,  name: 'Southwest University Park', lat:31.7590901 , lon:-106.4896401 , city: 'El Paso', state:'TX' },
	{ id:59 ,  name: 'Cashman Field', lat:36.179667 , lon:-115.129972 , city: 'Las Vegas', state:'NV' },
	{ id:60 ,  name:  "Smith\'s Ballpark", lat:40.740556 , lon:-111.892778 , city: 'Salt Lake City', state:'UT' },
	{ id:61 ,  name: 'NYSEG Stadium', lat:42.102769 , lon:-75.904988 , city: 'Binghamton', state:'NY' },
	{ id:62 ,  name: 'New Britain Stadum', lat:41.648506 , lon:-72.775211 , city: 'New Britain', state:'CT' },
	{ id:63 ,  name: 'Delta Dental Stadium', lat:42.980833 , lon:-71.466667 , city: 'Manchester', state:'NH' },
	{ id:64 ,  name: 'Hadlock Field', lat:43.656944 , lon:-70.278333 , city: 'Portland', state:'ME' },
	{ id:65 ,  name: 'FirstEnergy Stadium', lat:40.365833 , lon:-75.933611 , city: 'Reading', state:'PA' },
	{ id:66 ,  name: 'Arm & Hammer Park', lat:40.2037395 , lon:-74.7612495 , city: 'Trenton', state:'NJ' },
	{ id:67 ,  name: 'Canal Park', lat:41.077924 , lon:-81.522202 , city: 'Akron', state:'OH' },
	{ id:68 ,  name: 'Peoples Natural Gas Field', lat:40.473611 , lon:-78.394722 , city: 'Altoona', state:'PA' },
	{ id:69 ,  name: 'Prince George\'s Stadium', lat:38.945556 , lon:-76.709167 , city: 'Bowie', state:'MD' },
	{ id:70 ,  name: 'Jerry Uht Park', lat:42.126944 , lon:-80.08 , city: 'Erie', state:'PA' },
	{ id:71 ,  name: 'Metro Bank', lat:40.256428 , lon:-76.889977 , city: 'Harrisburg', state:'PA' },
	{ id:72 ,  name: 'The Diamond', lat:37.571806 , lon:-77.463733 , city: 'Richmond', state:'VA' },
	{ id:73 ,  name: 'Regions Field', lat:33.50763 , lon:-86.810218 , city: 'Birmingham', state:'AL' },
	{ id:74 ,  name: 'AT&T Field', lat:35.054444 , lon:-85.313889 , city: 'Chattanooga', state:'TN' },
	{ id:75 ,  name: 'The Ballpark at Jackson', lat:35.676192 , lon:-88.769303 , city: 'Jackson', state:'TN' },
	{ id:76 ,  name: 'Riverwalk Stadium', lat:32.3822 , lon:-86.3106 , city: 'Montgomery', state:'AL' },
	{ id:77 ,  name: 'Smokies Park', lat:35.988889 , lon:-83.604444 , city: 'Kodak', state:'TN' },
	{ id:78 ,  name: 'MGM Park', lat:30.395741 , lon:-88.893463 , city: 'Biloxi', state:'MS' },
	{ id:79 ,  name: 'Grounds of Jacksonville', lat:30.324968 , lon:-81.643069 , city: 'Jacksonville', state:'FL' },
	{ id:80 ,  name: 'Trustmark Park', lat:32.27391 , lon:-90.147969 , city: 'Pearl', state:'MS' },
	{ id:81 ,  name: 'Hank Aaron Stadium', lat:30.64574 , lon:-88.11687 , city: 'Mobile', state:'AL' },
	{ id:82 ,  name: 'Pensacola Bayfront Stadium', lat:30.404295 , lon:-87.219662 , city: 'Pensacola', state:'FL' },
	{ id:83 ,  name: 'Dickey-Stephens Park', lat:34.755215 , lon:-92.272582 , city: 'North Little Rock', state:'AR' },
	{ id:84 ,  name: 'Arvest Ballpark', lat:36.159167 , lon:-94.195 , city: 'Springdale', state:'AR' },
	{ id:85 ,  name: 'Hammons Field', lat:37.2105726 , lon:-93.2801087 , city: 'Springfield', state:'MO' },
	{ id:86 ,  name: 'ONEOK Field', lat:36.159722 , lon:-95.988056 , city: 'Tulsa', state:'OK' },
	{ id:87 ,  name: 'Whataburger Field', lat:27.809583 , lon:-97.399694 , city: 'Corpus Christi', state:'TX' },
	{ id:88 ,  name: 'Dr Pepper Ballpark', lat:33.098382 , lon:-96.81972 , city: 'Frisco', state:'TX' },
	{ id:89 ,  name: 'Security Bank Ballpark', lat:31.987332 , lon:-102.155799 , city: 'Midland', state:'TX' },
	{ id:90 ,  name: 'Nelson W. Wolff Municipal Stadium', lat:29.409131 , lon:-98.601114 , city: 'San Antonio', state:'TX' },
	{ id:91 ,  name: 'Sam Lynn Ballpark', lat:35.397556 , lon:-119.022384 , city: 'Bakersfield', state:'CA' },
	{ id:92 ,  name: 'John Thurman Field', lat:37.622658 , lon:-121.000814 , city: 'Modesto', state:'CA' },
	{ id:93 ,  name: 'San Jose Municipal Stadium', lat:37.320556 , lon:-121.862222 , city: 'San Jose', state:'CA' },
	{ id:94 ,  name: 'Banner Island Ballpark', lat:37.954856 , lon:-121.297956 , city: 'Stockton', state:'CA' },
	{ id:95 ,  name: 'Recreation Park', lat:36.3325 , lon:-119.304722 , city: 'Visalia', state:'CA' },
	{ id:96 ,  name: 'Heritage Field at Stater Bros. Stadium', lat:34.554843 , lon:-117.401758 , city: 'Adelanto', state:'CA' },
	{ id:97 ,  name: 'San Manuel Stadium', lat:34.097222 , lon:-117.295278 , city: 'San Bernadino', state:'CA' },
	{ id:98 ,  name: 'Lake Elsinore Diamond', lat:33.654167 , lon:-117.301944 , city: 'Lake Elsinore', state:'CA' },
	{ id:99 ,  name: 'The Hangar', lat:34.702811 , lon:-118.172972 , city: 'Lancaster', state:'CA' },
	{ id:100,  name: 'LoanMart Field', lat:34.102765 , lon:-117.54797 , city: 'Rancho Cucamonga', state:'CA' },
	{ id:101,  name: 'Harry Grove Stadium', lat:39.401389 , lon:-77.413333 , city: 'Frederick', state:'MD' },
	{ id:102,  name: 'Calvin Valwell Field', lat:37.392816 , lon:-79.165623 , city: 'Lynchburg', state:'VA' },
	{ id:103,  name: 'G. Richard Pfitzner Stadium', lat:38.684167 , lon:-77.3525 , city: 'Wodbridge', state:'VA' },
	{ id:104,  name: 'Daniel S. Frawley Stadium', lat:39.732222 , lon:-75.564444 , city: 'Wilmington', state:'DE' },
	{ id:105,  name: 'Five County Stadium', lat:35.817222 , lon:-78.27 , city: 'Zebulon', state:'NC' },
	{ id:106,  name: 'TicketReturn.Com Field at Pelicans Ballpark', lat:33.711682 , lon:-78.8845 , city: 'Myrtle Beach', state:'SC' },
	{ id:107,  name: 'Lewis-Gale Fiel', lat:37.285278 , lon:-80.036667, city: 'Salem', state:'VA' },
	{ id:108,  name: 'BB&T Ballpark (Winston-Salem, North Carolina)', lat:36.091602 , lon:-80.255962 , city: 'Winston-Salem', state:'NC' },
	{ id:109,  name: 'Space Coast Stadium', lat:28.256944 , lon:-80.739444 , city: 'Viera', state:'FL' },
	{ id:110,  name: 'Bright House Field', lat:27.971667 , lon:-82.731667 , city: 'Clearwater', state:'FL' },
	{ id:111,  name: 'Jackie Robison Ballpark', lat:29.2100769 , lon:-81.016189 , city: 'Daytona', state:'FL' },
	{ id:112,  name: 'Auto Exchange Stadium', lat:28.003611 , lon:-82.786389 , city: 'Dunedin', state:'FL' },
	{ id:113,  name: 'Joker Marchant Stadium', lat:28.074722 , lon:-81.950833 , city: 'Lakeland', state:'FL' },
	{ id:114,  name: 'George M. Steinbrenner Field', lat:27.980278 , lon:-82.506667 , city: 'Tampa', state:'FL' },
	{ id:115,  name: 'McKechnie Field', lat:27.485833 , lon:-82.570278 , city: 'Bradenton', state:'FL' },
	{ id:116,  name: 'Hammond Stadium', lat:26.538333 , lon:-81.841944 , city: 'Fort Myers', state:'FL' },
	{ id:117,  name: 'Roger Dean Stadium', lat:26.891111 , lon:-80.116389 , city: 'Jupiter', state:'FL' },
	{ id:118,  name: 'Tradition Field', lat:27.325281 , lon:-80.404494 , city: 'Port St. Lucie', state:'FL' },
	{ id:119,  name: 'Bowling Green Ballpark', lat:36.996778 , lon:-86.440906 , city: 'Bowling Green', state:'KY' },
	{ id:120,  name: 'Fifth Third Field (Dayton, Ohio)', lat:39.764167 , lon:-84.185 , city: 'Dayton', state:'OH' },
	{ id:121,  name: 'Parkview Field', lat:41.074056 , lon:-85.142861 , city: 'Fort Wayne', state:'IN' },
	{ id:122,  name: 'Dow Diamond', lat:43.609169 , lon:-84.236703 , city: 'Midland', state:'MI' },
	{ id:123,  name: 'Classic Park', lat:41.641111 , lon:-81.435556 , city: 'Eastlake', state:'OH' },
	{ id:124,  name: 'Cooley Law School Stadium', lat:42.734722 , lon:-84.545278 , city: 'Lansing', state:'MI' },
	{ id:125,  name: 'Four Winds Field at Coveleski Stadium', lat:41.670394 , lon:-86.255478 , city: 'South Bend', state:'IN' },
	{ id:126,  name: 'Fifth Third Ballpark', lat:43.040195 , lon:-85.659832 , city: 'Comstock Park', state:'MI' },
	{ id:127,  name: 'Harry C. Pohlman Field', lat:42.5349821 , lon:-89.0086655 , city: 'Beloit', state:'WI' },
	{ id:128,  name: 'Community Field', lat:40.827555 , lon:-91.136903 , city: 'Burlington', state:'IA' },
	{ id:129,  name: 'Veterans Memorial Stadium', lat:41.9677464 , lon:-91.6873377 , city: 'Cedar Rapids', state:'IA' },
	{ id:130,  name: 'Ashford University Field', lat:41.849265 , lon:-90.185394 , city: 'Clinton', state:'IA' },
	{ id:131,  name: 'Fifth Third Bank Ballpark', lat:41.88065 , lon:-88.281756 , city: 'Geneva', state:'IL' },
	{ id:132,  name: 'Dozer Park', lat:40.6875 , lon:-89.5975 , city: 'Peoria', state:'IL' },
	{ id:133,  name: 'Modern Woodmen Park', lat:41.518669 , lon:-90.582242 , city: 'Davenport', state:'IA' },
	{ id:134,  name: 'Neuroscience Group Field at Fox Cities Stadium', lat:44.283524 , lon:-88.468742 , city: 'Appleton', state:'WI' },
	{ id:135,  name: 'Arthur W. Perdue Stadium', lat:38.369722 , lon:-75.529444 , city: 'Salisbury', state:'MD' },
	{ id:136,  name: 'NewBridge Bank Park', lat:36.076667 , lon:-79.794722 , city: 'Greensboro', state:'NC' },
	{ id:137,  name: 'Municipal Stadium', lat:39.632778 , lon:-77.7125 , city: 'Hagerston', state:'MD' },
	{ id:138,  name: 'L. P. Frans Stadium', lat:35.749167 , lon:-81.378611 , city: 'Hickory', state:'NC' },
	{ id:139,  name: 'CMC-NorthEast Stadium', lat:35.507778 , lon:-80.566389 , city: 'Kannapolis', state:'NC' },
	{ id:140,  name: 'FirstEnergy Park', lat:40.075278 , lon:-74.186667 , city: 'Lakewood', state:'NJ' },
	{ id:141,  name: 'Appalachian Power Park', lat:38.349028 , lon:-81.625111 , city: 'Charleston', state:'WV' },
	{ id:142,  name: 'McCormick Field', lat:35.587222 , lon:-82.549167 , city: 'Asheville', state:'NC' },
	{ id:143,  name: 'Lake Olmstead Stadium', lat:33.495 , lon:-82.000556 , city: 'Augusta', state:'GA' },
	{ id:144,  name: 'Joseph P. Riley, Jr. Park', lat:32.790278 , lon:-79.961111 , city: 'Charleston', state:'SC' },
	{ id:145,  name: 'Fluor Field at the West End', lat:34.8422 , lon:-82.4082 , city: 'Greenville', state:'SC' },
	{ id:146,  name: 'Whitaker Bank Ballpark', lat:38.06545 , lon:-84.47852 , city: 'Lexington', state:'KY' },
	{ id:147,  name: 'State Mutual Stadium', lat:34.285833 , lon:-85.167222 , city: 'Rome', state:'GA' },
	{ id:148,  name: 'Grayson Stadium', lat:32.044722 , lon:-81.078889 , city: 'Savannah', state:'GA' },
	{ id:149,  name: 'Leidos Field at Ripken Stadium', lat:39.530873 , lon:-76.185985 , city: 'Aberdeen', state:'MD' },
	{ id:150,  name: 'MCU Park', lat:40.574547 , lon:-73.984353 , city: 'Brooklyn', state:'NY' },
	{ id:151,  name: 'Dutchess Stadium', lat:41.527911 , lon:-73.961067 , city: 'Wappingers Falls', state:'NY' },
	{ id:152,  name: 'Richmond County Bank Ballpark', lat:40.645575 , lon:-74.076428 , city: 'Staten Island', state:'NY' },
	{ id:153,  name: 'Falcon Park', lat:42.9416 , lon:-76.585232 , city: 'Auburn', state:'NY' },
	{ id:154,  name: 'Dwyer Stadium', lat:43.009174 , lon:-78.178722 , city: 'Batavia', state:'NY' },
	{ id:155,  name: 'Eastwood Field', lat:41.218453 , lon:-80.755241 , city: 'Niles', state:'OH' },
	{ id:156,  name: 'Medlar Field at Lubrano Park', lat:40.811944 , lon:-77.850833 , city: 'University Park', state:'PA' },
	{ id:157,  name: 'Monongalia County Ballpark', lat:39.64473 , lon:-79.995838 , city: 'Morgantown', state:'WV' },
	{ id:158,  name: 'Susquehanna Bank Park at Historic Bowman Field', lat:41.242347 , lon:-77.047067 , city: 'Williamsport', state:'PA' },
	{ id:159,  name: 'Senator Thomas J. Dodd Memorial Stadium', lat:41.573875 , lon:-72.107072 , city: 'Norwich', state:'CT' },
	{ id:160,  name: 'Edward A. LeLacheur Park', lat:42.65327 , lon:-71.318114 , city: 'Lowell', state:'MA' },
	{ id:161,  name: 'Joseph L. Bruno Stadium', lat:42.695329 , lon:-73.680464 , city: 'Troy', state:'NY' },
	{ id:162,  name: 'Centennial Field', lat:44.481656 , lon:-73.187656 , city: 'Burlington', state:'VT' },
	{ id:163,  name: 'Everett Memorial Stadium', lat:47.965949 , lon:-122.2019705 , city: 'Everett', state:'WA' },
	{ id:164,  name: 'Avista Stadium', lat:47.662 , lon:-117.345 , city: 'Spokane', state:'WA' },
	{ id:165,  name: 'Gesa Stadium', lat:46.267106 , lon:-119.172006 , city: 'Pasco', state:'WA' },
	{ id:166,  name: 'Nat Bailey Stadium', lat:49.2431 , lon:-123.1063 , city: 'Vancouver', state:'BC' },
	{ id:167,  name: 'Memorial Stadium (Boise)', lat:43.656 , lon:-116.279 , city: 'Boise', state:'ID' },
	{ id:168,  name: 'PK Park', lat:44.059 , lon:-123.066 , city: 'Eugene', state:'OR' },
	{ id:169,  name: 'Ron Tonkin Field', lat:45.5536 , lon:-122.9082 , city: 'Hillsboro', state:'OR' },
	{ id:170,  name: 'Volcanoes Stadium', lat:45.015075 , lon:-122.994011 , city: 'Keizer', state:'OR' },
	{ id:171,  name: 'Bowen Field', lat:37.249444 , lon:-81.246389 , city: 'Bluefield', state:'WV' },
	{ id:172,  name: 'Burlington Athletic Stadium', lat:36.088056 , lon:-79.408333 , city: 'Burlington', state:'NC' },
	{ id:173,  name: 'American Legion Field', lat:36.575833 , lon:-79.3725 , city: 'Danville', state:'VA' },
	{ id:174,  name: 'H. P. Hunnicutt Field', lat:37.358333 , lon:-81.105278 , city: 'Princeton', state:'WV' },
	{ id:175,  name: 'Calfee Park', lat:37.039306 , lon:-80.775556 , city: 'Pulaski', state:'VA' },
	{ id:176,  name: 'Boyce Cox Field at DeVault Memorial Stadium', lat:36.601968 , lon:-82.199251 , city: 'Bristol', state:'VA' },
	{ id:177,  name: 'Joe O\'Brien Field', lat:36.354899 , lon:-82.232183 , city: 'Elizabethton', state:'VA' },
	{ id:178,  name: 'Pioneer Park', lat:36.173149 , lon:-82.756115 , city: 'Greeneville', state:'TN' },
	{ id:179,  name: 'Howard Johnson Field', lat:36.318611 , lon:-82.340833 , city: 'Johnson City', state:'TN' },
	{ id:180,  name: 'Hunter Wright Stadium', lat:36.562778 , lon:-82.598611 , city: 'Kingsport', state:'TN' },
	{ id:181,  name: 'Dehler Park', lat:45.790278 , lon:-108.511111 , city: 'Billings', state:'MT' },
	{ id:182,  name: 'Centene Stadium', lat:47.516919 , lon:-111.259467 , city: 'Great Falls', state:'MT' },
	{ id:183,  name: 'Kindrick Legion Field', lat:46.599167 , lon:-112.027222 , city: 'Helena', state:'MT' },
	{ id:184,  name: 'Ogren Park at Allegiance Field', lat:46.873431 , lon:-114.007294 , city: 'Missoula', state:'MT' },
	{ id:185,  name: 'Suplizio Field', lat:39.076684 , lon:-108.550404 , city: 'Grand Junction', state:'CO' },
	{ id:186,  name: 'Melaleuca Field', lat:43.505161 , lon:-112.037861 , city: 'Idaho Falls', state:'ID' },
	{ id:187,  name: 'Lindquist Field', lat:41.223779 , lon:-111.974845 , city: 'Ogden', state:'UT' },
	{ id:188,  name: 'Brent Brown Ballpark', lat:40.276874 , lon:-111.717234 , city: 'Orem', state:'UT' },
	{ id:189,  name: 'Tempe Diablo Stadium', lat:33.400556 , lon:-111.969722 , city: 'Tempe', state:'AZ' },
	{ id:190,  name: 'Fitch Park', lat:33.428285 , lon:-111.829762 , city: 'Mesa', state:'AZ' },
	{ id:191,  name: 'Maryvale Stadium', lat:33.492222 , lon:-112.173056 , city: 'Phoenix', state:'AZ' },
	{ id:192,  name: 'Sloan Park', lat:33.4313 , lon:-111.8816 , city: 'Mesa', state:'AZ' },
	{ id:193,  name: 'Salt River Fields at Talking Stick', lat:33.546111 , lon:-111.885278 , city: 'Scottsdale', state:'AZ' },
	{ id:194,  name: 'Camelback Ranch', lat:33.514167 , lon:-112.295833 , city: 'Glendale', state:'AZ' },
	{ id:195,  name: 'Scottsdale Stadium', lat:33.488333 , lon:-111.921111 , city: 'Scottsdale', state:'AZ' },
	{ id:196,  name: 'Goodyear Ballpark', lat:33.429167 , lon:-112.39 , city: 'Goodyear', state:'AZ' },
	{ id:197,  name: 'Peoria Sports Complex', lat:33.6319 , lon:-112.2332 , city: 'Peoria', state:'AZ' },
	{ id:198,  name: 'Surprise Stadium', lat:33.627778 , lon:-112.377778 , city: 'Surprise', state:'AZ' },
	{ id:199,  name: 'Osceola County Stadium', lat:28.298333 , lon:-81.363889 , city: 'Kissimmee', state:'FL' },
	{ id:200,  name: 'Champion Stadium', lat:28.337083 , lon:-81.556 , city: 'Lake Buena Vista', state:'FL' },
	{ id:201,  name: 'Bobby Mattick Training Center at Englebert Complex', lat:28.030735 , lon:-82.75685229999999 , city: 'Dunedin', state:'FL' },
	{ id:202,  name: 'Carpenter Complex', lat:27.971667 , lon:-82.731667 , city: 'Clearwater', state:'FL' },
	{ id:203,  name: 'Pirate City', lat:27.482598 , lon:-82.528235 , city: 'Bradenton', state:'FL' },
	{ id:204,  name: 'Ed Smith Stadium', lat:27.347778 , lon:-82.517222 , city: 'Sarasota', state:'FL' },
	{ id:205,  name: 'Charlotte Sports Park', lat:26.999167 , lon:-82.181667 , city: 'Charlotte', state:'FL' },
	{ id:206,  name: 'JetBlue Park at Fenway South', lat:26.548056 , lon:-81.763333 , city: 'Fort Myers', state:'FL' },
	{ id:207,  name: 'Lee County Sports Complex', lat:26.538333 , lon:-81.841944 , city: 'Fort Myers', state:'FL' },
	{ id:208,  name: 'Newman Outdoor Field', lat:46.898489 , lon:-96.804269 , city: 'Fargo', state:'ND' },
	{ id:209,  name: 'Sioux Falls Stadium', lat:43.559721 , lon:-96.7492 , city: 'Sioux Falls', state:'SD' },
	{ id:210,  name: 'CHS Field', lat:44.950172 , lon:-93.085099 , city: 'Saint Paul', state:'MN' },
	{ id:211,  name: 'Shaw Park', lat:49.893831 , lon:-97.133314 , city: 'Winnipeg', state:'MB' },
	{ id:212,  name: 'U.S. Steel Yard', lat:41.602869 , lon:-87.332217 , city: 'Gary', state:'IN' },
	{ id:213,  name: 'CommunityAmerica Ballpark', lat:39.124444 , lon:-94.830833 , city: 'Kansas City', state:'KS' },
	{ id:214,  name: 'Haymarket Park', lat:40.82279 , lon:-96.71391 , city: 'Lincoln', state:'NE' },
	{ id:215,  name: 'Lewis and Clark Park', lat:42.443047 , lon:-96.364217 , city: 'Sioux City', state:'SD' },
	{ id:216,  name: 'Potter County Memorial Stadium', lat:35.206334 , lon:-101.799649 , city: 'Amarillo', state:'TX' },
	{ id:217,  name: 'QuikTrip Park', lat:32.768219 , lon:-96.98635 , city: 'Grand Prairie', state:'TX' },
	{ id:218,  name: 'Uni-Trade Stadium', lat:27.55399 , lon:-99.45544 , city: 'Laredo', state:'TX' },
	{ id:219,  name: 'Joe Becker Stadium', lat:37.08883 , lon:-94.49883 , city: 'Joplin', state:'MO' },
	{ id:220,  name: 'Lawrence–Dumont Stadium', lat:37.681389 , lon:-97.345833 , city: 'Wichita', state:'KS' },
	{ id:221,  name: 'Clipper Magazine Stadium', lat:40.048611 , lon:-76.310833 , city: 'Lancaster', state:'PA' },
	{ id:222,  name: 'Regency Furniture Stadium', lat:38.5625 , lon:-76.903611 , city: 'Waldorf', state:'MD' },
	{ id:223,  name: 'Constellation Field', lat:29.622778 , lon:-95.647222 , city: 'Sugar Land', state:'TX' },
	{ id:224,  name: 'Santander Stadium', lat:39.9675 , lon:-76.729167 , city: 'York', state:'PA' },
	{ id:225,  name: 'The Ballpark at Harbor Yard', lat:41.171944 , lon:-73.1875 , city: 'Bridgeport', state:'CT' },
	{ id:226,  name: 'Campbell\'s Field', lat:39.950278 , lon:-75.127778 , city: 'Camden', state:'NJ' },
	{ id:227,  name: 'Bethpage Ballpark', lat:40.765 , lon:-73.192222 , city: 'Central Islip', state:'NY' },
	{ id:228,  name: 'TD Bank Ballpark', lat:40.560556 , lon:-74.553056 , city: 'Bridgewater', state:'NJ' },
	{ id:229,  name: 'Wheeler Field', lat:36.766319 , lon:-76.092275 , city: 'Virginia Beach', state:'VA' },
	{ id:230,  name: 'Yogi Berra Stadium', lat:40.868734 , lon:-74.195247 , city: 'Little Falls', state:'NJ' },
	{ id:231,  name: 'Raymond Chabot Grant Thornton Park', lat:45.420142 , lon:-75.653569 , city: 'Ottowa', state:'ON' },
	{ id:232,  name: 'Stade Municipal (Quebec City)', lat:46.818611 , lon:-71.233497 , city: 'Quebec City', state:'QC' },
	{ id:233,  name: 'Provident Bank Park', lat:41.17 , lon:-74.037 , city: 'Ramapo', state:'NY' },
	{ id:234,  name: 'Skylands Park', lat:41.125917 , lon:-74.710122 , city: 'Augusta', state:'NJ' },
	{ id:235,  name: 'Stade Fernand-Bédard', lat:46.347778 , lon:-72.556389 , city: 'Trois-Rivières', state:'QC' },
	{ id:236,  name: 'Bosse Field', lat:37.992778 , lon:-87.562222 , city: 'Evansville', state:'IN' },
	{ id:237,  name: 'UC Health Stadium', lat:38.982156 , lon:-84.638479 , city: 'Florence', state:'KY' },
	{ id:238,  name: 'All Pro Freight Stadium', lat:41.46373 , lon:-82.058473 , city: 'Avon', state:'OH' },
	{ id:239,  name: 'Rent One Park', lat:37.745964 , lon:-88.960397 , city: 'Marion', state:'IL' },
	{ id:240,  name: 'Wuerfel Park', lat:44.68173 , lon:-85.660615 , city: 'Blair Township', state:'MI' },
	{ id:241,  name: 'Consol Energy Park', lat:40.154167 , lon:- 80.283611, city: 'North Franklin Township', state:'PA' },
	{ id:242,  name: 'GCS Ballpark', lat:38.566042 , lon:-90.13583 , city: 'Sauget', state:'IL' },
	{ id:243,  name: 'Silver Cross Field', lat:41.525711 , lon:-88.0779 , city: 'Joliet', state:'IL' },
	{ id:244,  name: 'The Corn Crib', lat:40.534251 , lon:-89.004148 , city: 'Normal', state:'IL' },
	{ id:245,  name: 'T.R. Hughes Ballpark', lat:38.820518 , lon:-90.680337 , city: "O'Fallon", state:'MO' },
	{ id:246,  name: 'Aviators Stadium', lat:42.324167 , lon:-88.955 , city: 'Loves Park', state:'IL' },
	{ id:247,  name: 'Schaumburg Baseball Stadium', lat:41.992828 , lon:-88.118089 , city: 'Schaumburg', state:'IL' },
	{ id:248,  name: 'Standard Bank Stadium', lat:41.637056 , lon:-87.731688 , city: 'Crestwood', state:'IL' },
	{ id:249,  name: 'Delano-Hitch Stadium', lat:41.498342 , lon:-74.025061 , city: 'Newburgh', state:'NY' },
	{ id:250,  name: 'The Ballpark', lat:43.516617 , lon:-70.391296 , city: 'Old Orchard Beach', state:'ME' },
	{ id:251,  name: 'Duffy Fairgrounds', lat:43.986489 , lon:-75.929218 , city: 'Watertown', state:'NY' },
	{ id:252,  name: 'City Park Field', lat:38.022146 , lon:-121.889900 , city: 'Pittsburg', state:'CA' },
	{ id:253,  name: 'Albert Park', lat:37.968936 , lon:-122.528160 , city: 'San Rafael', state:'CA' },
	{ id:254,  name: 'Arnold Field', lat:38.297261 , lon:-122.457385 , city: 'Sonoma', state:'CA' },
	{ id:255,  name: 'Wilson Park', lat:38.096214 , lon:-122.243903 , city: 'Vallejo', state:'CA' },
	{ id:256,  name: 'Rodriguez Park', lat:35.587819 , lon:-105.236138 , city: 'Las Vegas', state:'NM' },
	{ id:257,  name: 'Fort Marcy Ballfield', lat:35.689337 , lon:-105.933854 , city: 'Santa Fe', state:'NM' },
	{ id:258,  name: 'Clint Lightner Field', lat:37.960944 , lon:-100.867340 , city: 'Garden City', state:'KS' },
	{ id:259,  name: 'Central Park', lat:37.166722 , lon:-104.516362 , city: 'Trinidad', state:'CO' },
	{ id:260,  name: 'Kokernot Field', lat:30.373 , lon:-103.6645 , city: 'Alpine', state:'TX' },
	{ id:261,  name: 'Apodoca Park', lat:32.329617 , lon:-106.776856 , city: 'Las Cruces', state:'NM' },
	{ id:262,  name: 'Joe Baumann Stadium', lat:33.364016 , lon:-104.509554 , city: 'Roswell', state:'NM' },
	{ id:263,  name: 'Griggs Park', lat:32.918234 , lon:-105.951933 , city: 'Alamogordo', state:'NM' },
	{ id:264,  name: 'Palm Springs Stadium', lat:33.818333 , lon:-116.525833 , city: 'Palm Springs', state:'CA' },
];

var teams = [
	{ id:1 , name: 'Baltimore Orioles', league:'American League', level:'MLB'},
	{ id:2 , name: 'Boston Red Sox', league:'American League', level:'MLB'},
	{ id:3 , name: 'New York Yankees', league:'American League', level:'MLB'},
	{ id:4 , name: 'Tampa Bay Rays', league:'American League', level:'MLB'},
	{ id:5 , name: 'Toronto Blue Jays', league:'American League', level:'MLB'},
	{ id:6 , name: 'Chicago White Sox', league:'American League', level:'MLB'},
	{ id:7 , name: 'Cleveland Indians', league:'American League', level:'MLB'},
	{ id:8 , name: 'Detroit Tigers', league:'American League', level:'MLB'},
	{ id:9 , name: 'Kansas City Royals', league:'American League', level:'MLB'},
	{ id:10 , name: 'Minnesota Twins', league:'American League', level:'MLB'},
	{ id:11 , name: 'Houston Astros', league:'American League', level:'MLB'},
	{ id:12 , name: 'Los Angeles Angels of Anaheim', league:'American League', level:'MLB'},
	{ id:13 , name: 'Oakland Athletics', league:'American League', level:'MLB'},
	{ id:14 , name: 'Seattle Mariners', league:'American League', level:'MLB'},
	{ id:15 , name: 'Texas Rangers', league:'American League', level:'MLB'},
	{ id:16 , name: 'Atlanta Braves', league:'National League', level:'MLB'},
	{ id:17 , name: 'Miami Marlins', league:'National League', level:'MLB'},
	{ id:18 , name: 'New York Mets', league:'National League', level:'MLB'},
	{ id:19 , name: 'Philidelphia Phillies', league:'National League', level:'MLB'},
	{ id:20 , name: 'Washington Nationals', league:'National League', level:'MLB'},
	{ id:21 , name: 'Chicago Cubs', league:'National League', level:'MLB'},
	{ id:22 , name: 'Cincinnati Reds', league:'National League', level:'MLB'},
	{ id:23 , name: 'Milwaukee Brewers', league:'National League', level:'MLB'},
	{ id:24 , name: 'Pittsburgh Pirates', league:'National League', level:'MLB'},
	{ id:25 , name: 'St. Louis Cardinals', league:'National League', level:'MLB'},
	{ id:26 , name: 'Arizona Diamondbacks', league:'National League', level:'MLB'},
	{ id:27 , name: 'Colorado Rockies', league:'National League', level:'MLB'},
	{ id:28 , name: 'Los Angeles Dodgers', league:'National League', level:'MLB'},
	{ id:29 , name: 'San Diego Padres', league:'National League', level:'MLB'},
	{ id:30 , name: 'San Francisco Giants', league:'National League', level:'MLB'},
	{ id:31 , name: 'Buffalo Bisons', affiliation:'Toronto Blue Jays' , league:'International League', level:'AAA'},
	{ id:32 , name: 'Lehigh Valley IronPigs', affiliation:'Philidelphia Phillies' , league:'International League', level:'AAA'},
	{ id:33 , name: 'Pawtucket Red Sox', affiliation:'Boston Red Sox' , league:'International League', level:'AAA'},
	{ id:34 , name: 'Rochester Red Wings', affiliation:'Minnesota Twins' , league:'International League', level:'AAA'},
	{ id:35 , name: 'Scranton/Wilkes-Barre RailRiders', affiliation:'New York Yankees' , league:'International League', level:'AAA'},
	{ id:36 , name: 'Syracuse Chiefs', affiliation:'Washington Nationals' , league:'International League', level:'AAA'},
	{ id:37 , name: 'Charlotte Knights', affiliation:'Chicago White Sox' , league:'International League', level:'AAA'},
	{ id:38 , name: 'Durham Bulls', affiliation:'Tampa Bay Rays' , league:'International League', level:'AAA'},
	{ id:39 , name: 'Gwinnett Braves', affiliation:'Atlanta Braves' , league:'International League', level:'AAA'},
	{ id:40 , name: 'Norfolk Tides', affiliation:'Baltimore Orioles' , league:'International League', level:'AAA'},
	{ id:41 , name: 'Columbus Clippers', affiliation:'Cleveland Indians' , league:'International League', level:'AAA'},
	{ id:42 , name: 'Indianapolis Indians', affiliation:'Pittsburgh Pirates' , league:'International League', level:'AAA'},
	{ id:43 , name: 'Louisville Bats', affiliation:'Cincinnati Reds' , league:'International League', level:'AAA'},
	{ id:44 , name: 'Toledo Mud Hens', affiliation:'Detroit Tigers' , league:'International League', level:'AAA'},
	{ id:45 , name: 'Colorado Springs Sky Sox', affiliation:'Milwaukee Brewers' , league:'Pacific Coast League', level:'AAA'},
	{ id:46 , name: 'Iowa Cubs', affiliation:'Chicago Cubs' , league:'Pacific Coast League', level:'AAA'},
	{ id:47 , name: 'Oklahoma City Dodgers', affiliation:'Los Angeles Dodgers' , league:'Pacific Coast League', level:'AAA'},
	{ id:48 , name: 'Omaha Storm Chasers', affiliation:'Kansas City Royals' , league:'Pacific Coast League', level:'AAA'},
	{ id:49 , name: 'Memphis Redbirds', affiliation:'St. Louis Cardinals' , league:'Pacific Coast League', level:'AAA'},
	{ id:50 , name: 'Nashville Sounds', affiliation:'Oakland Athletics' , league:'Pacific Coast League', level:'AAA'},
	{ id:51 , name: 'New Orleans Zephyrs', affiliation:'Miami Marlins' , league:'Pacific Coast League', level:'AAA'},
	{ id:52 , name: 'Round Rock Express', affiliation:'Texas Rangers' , league:'Pacific Coast League', level:'AAA'},
	{ id:53 , name: 'Fresno Grizzlies', affiliation:'Houston Astros' , league:'Pacific Coast League', level:'AAA'},
	{ id:54 , name: 'Reno Aces', affiliation:'Arizona Diamondbacks' , league:'Pacific Coast League', level:'AAA'},
	{ id:55 , name: 'Sacramento River Cats', affiliation:'San Francisco Giants' , league:'Pacific Coast League', level:'AAA'},
	{ id:56 , name: 'Tacoma Rainiers', affiliation:'Seattle Mariners' , league:'Pacific Coast League', level:'AAA'},
	{ id:57 , name: 'Alburquerque Isotopes', affiliation:'Colorado Rockies' , league:'Pacific Coast League', level:'AAA'},
	{ id:58 , name: 'El Paso Chihuahuas', affiliation:'San Diego Padres' , league:'Pacific Coast League', level:'AAA'},
	{ id:59 , name: 'Las Vegas 51s', affiliation:'New York Mets' , league:'Pacific Coast League', level:'AAA'},
	{ id:60 , name: 'Salt Lake Bees', affiliation:'Los Angeles Angels of Anaheim' , league:'Pacific Coast League', level:'AAA'},
	{ id:61 , name: 'Binghamton Mets', affiliation:'New York Mets' , league:'Eastern League', level:'AA'},
	{ id:62 , name: 'New Britain Rock Cats', affiliation:'Coloradp Rockies' , league:'Eastern League', level:'AA'},
	{ id:63 , name: 'New Hampshire Fisher Cats', affiliation:'Toronto Blue Jays' , league:'Eastern League', level:'AA'},
	{ id:64 , name: 'Portland Sea Dogs', affiliation:'Boston Red Sox' , league:'Eastern League', level:'AA'},
	{ id:65 , name: 'Reading Fightin Phils', affiliation:'Philidelphia Philles' , league:'Eastern League', level:'AA'},
	{ id:66 , name: 'Trenton Thunder', affiliation:'New York Yankees' , league:'Eastern League', level:'AA'},
	{ id:67 , name: 'Akron RubberDucks', affiliation:'Cleveland Indians' , league:'Eastern League', level:'AA'},
	{ id:68 , name: 'Altoona Curve', affiliation:'Pittsburgh Pirates' , league:'Eastern League', level:'AA'},
	{ id:69 , name: 'Bowie Baysox', affiliation:'Baltimore Orioles' , league:'Eastern League', level:'AA'},
	{ id:70 , name: 'Erie SeaWolves', affiliation:'Detroit Tigers' , league:'Eastern League', level:'AA'},
	{ id:71 , name: 'Harrisburg Senators', affiliation:'Washington Nationals' , league:'Eastern League', level:'AA'},
	{ id:72 , name: 'Richmond Flying Squirrels', affiliation:'San Francisco Giants' , league:'Eastern League', level:'AA'},
	{ id:73 , name: 'Birmingham Barons', affiliation:'Chicago White Sox' , league:'Southern League', level:'AA'},
	{ id:74 , name: 'Chattanooga Lookouts', affiliation:'Minnesota Twins' , league:'Southern League', level:'AA'},
	{ id:75 , name: 'Jackson Generals', affiliation:'Seattle Mariners' , league:'Southern League', level:'AA'},
	{ id:76 , name: 'Montgomery Biscuits', affiliation:'Tampa Bay Rays' , league:'Southern League', level:'AA'},
	{ id:77 , name: 'Tennessee Smokies', affiliation:'Chicago Cubs' , league:'Southern League', level:'AA'},
	{ id:78 , name: 'South Biloxi Shuckers', affiliation:'Milwaukee Brewers' , league:'Southern League', level:'AA'},
	{ id:79 , name: 'Jacksonville Suns', affiliation:'Miami Marlins' , league:'Southern League', level:'AA'},
	{ id:80 , name: 'Mississippi Bravers', affiliation:'Atlanta Braves' , league:'Southern League', level:'AA'},
	{ id:81 , name: 'Mobile BayBears', affiliation:'Arizona Diamondbacks' , league:'Southern League', level:'AA'},
	{ id:82 , name: 'Pensacola Blue Wahoos', affiliation:'Cincinnati Reds' , league:'Southern League', level:'AA'},
	{ id:83 , name: 'Arkansas Travelers', affiliation:'Los Angeles Angels of Anaheim' , league:'Texas League', level:'AA'},
	{ id:84 , name: 'Northwest Arkansas Naturals', affiliation:'Kansas City Royals' , league:'Texas League', level:'AA'},
	{ id:85 , name: 'Springfield Cardinals', affiliation:'St. Louis Cardinals' , league:'Texas League', level:'AA'},
	{ id:86 , name: 'Tulsa Drillers', affiliation:'Los Angeles Dodgers' , league:'Texas League', level:'AA'},
	{ id:87 , name: 'Corpus Christi Hooks', affiliation:'Houston Astros' , league:'Texas League', level:'AA'},
	{ id:88 , name: 'Frisco RoughRiders',  affiliation:'Texas Rangers' , league:'Texas League', level:'AA'},
	{ id:89 , name: 'Midland RockHounds', affiliation:'Oakland Athletics' , league:'Texas League', level:'AA'},
	{ id:90 , name: 'San Antonio Missions', affiliation:'San Diego Padres' , league:'Texas League', level:'AA'},
	{ id:91 , name: 'Bakersfield Blaze', affiliation:'Seattle Mariners' , league:'California League', level:'A'},
	{ id:92 , name: 'Modesto Nuts', affiliation:'Colorado Rockies' , league:'California League', level:'A'},
	{ id:93 , name: 'San Jose Giants', affiliation:'San Francisco Giants' , league:'California League', level:'A'},
	{ id:94 , name: 'Stockton Ports', affiliation:'Oakland Athletics' , league:'California League', level:'A'},
	{ id:95 , name: 'Visalia Rawhide', affiliation:'Arizona Diamondbacks' , league:'California League', level:'A'},
	{ id:96 , name: 'High Desert Mavericks', affiliation:'Texas Rangers' , league:'California League', level:'A'},
	{ id:97 , name: 'Inland Empire 66ers', affiliation:'Los Angeles Angels of Anaheim' , league:'California League', level:'A'},
	{ id:98 , name: 'Lake Elsinore Storm', affiliation:'San Diego Padres' , league:'California League', level:'A'},
	{ id:99 , name: 'Lancaster JetHawks', affiliation:'Houston Astros' , league:'California League', level:'A'},
	{ id:100 , name: 'Rancho Cucamonga Quakes', affiliation:'Los Angeles Dodgers' , league:'California League', level:'A'},
	{ id:101 , name: 'Frederick Keys', affiliation:'Baltimore Orioles' , league:'Carolina League', level:'A'},
	{ id:102 , name: 'Lynchburg Hillcats', affiliation:'Cleveland Indians' , league:'Carolina League', level:'A'},
	{ id:103 , name: 'Potomac Nationals',  affiliation:'Washington Nationals' , league:'Carolina League', level:'A'},
	{ id:104 , name: 'Wilmington Blue Rocks', affiliation:'Kansas City Royals' , league:'Carolina League', level:'A'},
	{ id:105 , name: 'Carolina Mudcats', affiliation:'Atlanta Braves' , league:'Carolina League', level:'A'},
	{ id:106 , name: 'Myrtle Beach Pelicans', affiliation:'Chicago Cubs' , league:'Carolina League', level:'A'},
	{ id:107 , name: 'Salem Red Sox', affiliation:'Boston Red Sox' , league:'Carolina League', level:'A'},
	{ id:108 , name: 'Winston-Salem Dash', affiliation:'Chicago White Sox' , league:'Carolina League', level:'A'},
	{ id:109 , name: 'Brevard County Manatees', affiliation:'Milwaukee Brewers' , league:'Florida State League', level:'A'},
	{ id:110 , name: 'Clearwater Threshers', affiliation:'Philidelphia Phillies' , league:'Florida State League', level:'A'},
	{ id:111 , name: 'Daytona Tortugas', affiliation:'Cincinnati Reds' , league:'Florida State League', level:'A'},
	{ id:112 , name: 'Dunedin Blue Jays', affiliation:'Toronto Blue Jays' , league:'Florida State League', level:'A'},
	{ id:113 , name: 'Lakeland Flying Tigers', affiliation:'Detroit Tigers' , league:'Florida State League', level:'A'},
	{ id:114 , name: 'Tampa Yankees', affiliation:'New York Yankees' , league:'Florida State League', level:'A'},
	{ id:115 , name: 'Bradenton Marauders', affiliation:'Pittsburgh Pirates' , league:'Florida State League', level:'A'},
	{ id:116 , name: 'Charlotte Stone Crabs' , affiliation:'Tampa Bay Rays' , league:'Florida State League', level:'A'},
	{ id:117 , name: 'Fort Myers Miracle', affiliation:'Minnesota Twins' , league:'Florida State League', level:'A'},
	{ id:118 , name: 'Jupiter Hammerheads', affiliation:'Miami Marlins' , league:'Florida State League', level:'A'},
	{ id:119 , name: 'Palm Beach Cardinals' , affiliation:'St. Louis Cardinals' , league:'Florida State League', level:'A'},
	{ id:120 , name: 'St. Lucie Mets', affiliation:'New York Mets' , league:'Florida State League', level:'A'},
	{ id:121 , name: 'Bowling Green Hot Rods', affiliation:'Tampa Bay Rays' , league:'Midwest League', level:'A'},
	{ id:122 , name: 'Dayton Dragons', affiliation:'Cincinnati Reds' , league:'Midwest League', level:'A'},
	{ id:123 , name: 'Fort Wayne TinCaps', affiliation:'San Diego Padres' , league:'Midwest League', level:'A'},
	{ id:124 , name: 'Great Lakes Loons', affiliation:'Los Angeles Dodgers' , league:'Midwest League', level:'A'},
	{ id:125 , name: 'Lake County Captains', affiliation:'Cleveland Indians' , league:'Midwest League', level:'A'},
	{ id:126 , name: 'Lansing Lugnuts', affiliation:'Toronto Blue Jays' , league:'Midwest League', level:'A'},
	{ id:127 , name: 'South Bend Cubs', affiliation:'Chicago Cubs' , league:'Midwest League', level:'A'},
	{ id:128 , name: 'West Michigan Whitecaps', affiliation:'Detroit Tigers' , league:'Midwest League', level:'A'},
	{ id:129 , name: 'Beloit Snappers', affiliation:'Oakland Athletics' , league:'Midwest League', level:'A'},
	{ id:130 , name: 'Burlington Bees', affiliation:'Los Angeles Angels of Anaheim' , league:'Midwest League', level:'A'},
	{ id:131 , name: 'Cedar Rapids Kernels', affiliation:'Minnesota Twins' , league:'Midwest League', level:'A'},
	{ id:132 , name: 'Clinton LumberKings', affiliation:'Seattle Mariners' , league:'Midwest League', level:'A'},
	{ id:133 , name: 'Kane County Cougars', affiliation:'Arizona Diamondbacks' , league:'Midwest League', level:'A'},
	{ id:134 , name: 'Peoria Chiefs', affiliation:'St. Louis Cardinals' , league:'Midwest League', level:'A'},
	{ id:135 , name: 'Quad Cities River Bandits', affiliation:'Houston Astros' , league:'Midwest League', level:'A'},
	{ id:136 , name: 'Wisconsin Timber Rattlers', affiliation:'Milwaukee Brewers' , league:'Midwest League', level:'A'},
	{ id:137 , name: 'Delmarva Shorebirds', affiliation:'Baltimore Orioles' , league:'South Atlantic League', level:'A'},
	{ id:138 , name: 'Greensboro Grasshoppers', affiliation:'Miami Marlins' , league:'South Atlantic League', level:'A'},
	{ id:139 , name: 'Hagerstown Suns', affiliation:'Washington Nationals' , league:'South Atlantic League', level:'A'},
	{ id:140 , name: 'Hickory Crawdads', affiliation:'Texas Rangers' , league:'South Atlantic League', level:'A'},
	{ id:141 , name: 'Kannapolis Intimidators', affiliation:'Chicago White Sox' , league:'South Atlantic League', level:'A'},
	{ id:142 , name: 'Lakewood BlueClaws', affiliation:'Philidelphia Phillies' , league:'South Atlantic League', level:'A'},
	{ id:143 , name: 'West Virginia Power', affiliation:'Pittsburgh Pirates' , league:'South Atlantic League', level:'A'},
	{ id:144 , name: 'Asheville Tourists', affiliation:'Colorado Rockies' , league:'South Atlantic League', level:'A'},
	{ id:145 , name: 'Augusta GreenJackets', affiliation:'San Francsisco Giants' , league:'South Atlantic League', level:'A'},
	{ id:146 , name: 'Charleston RiverDogs', affiliation:'New York Yankees' , league:'South Atlantic League', level:'A'},
	{ id:147 , name: 'Greenville Drive', affiliation:'Boston Red Sox' , league:'South Atlantic League', level:'A'},
	{ id:148 , name: 'Lexington Legends', affiliation:'Kansas City Royals' , league:'South Atlantic League', level:'A'},
	{ id:149 , name: 'Rome Braves', affiliation:'Atlanta Braves' , league:'South Atlantic League', level:'A'},
	{ id:150 , name: 'Savannah Sand Gnats', affiliation:'New York Mets' , league:'South Atlantic League', level:'A'},
	{ id:151 , name: 'Aberdeen IronBirds', affiliation:'Baltimore Orioles' , league:'New York-Penn League', level:'A'},
	{ id:152 , name: 'Brooklyn Cyclones', affiliation:'New York Mets' , league:'New York-Penn League', level:'A'},
	{ id:153 , name: 'Hudson Valley Renegades', affiliation:'Tampa Bay Rays' , league:'New York-Penn League', level:'A'},
	{ id:154 , name: 'Staten Island Yankees', affiliation:'New York Yankees' , league:'New York-Penn League', level:'A'},
	{ id:155 , name: 'Auburn Doubledays', affiliation:'Washington Nationals' , league:'New York-Penn League', level:'A'},
	{ id:156 , name: 'Batavia Muckdogs', affiliation:'Miami Marlins' , league:'New York-Penn League', level:'A'},
	{ id:157 , name: 'Mahoning Valley Scrappers', affiliation:'Cleveland Indians' , league:'New York-Penn League', level:'A'},
	{ id:158 , name: 'State College Spikes', affiliation:'St. Louis Cardinals' , league:'New York-Penn League', level:'A'},
	{ id:159 , name: 'West Virginia Black Bears', affiliation:'Pittsburgh Pirates' , league:'New York-Penn League', level:'A'},
	{ id:160 , name: 'Williamsport Crosscutters', affiliation:'Philidelphia Phillies' , league:'New York-Penn League', level:'A'},
	{ id:161 , name: 'Connecticut Tigers', affiliation:'Detroit Tigers' , league:'New York-Penn League', level:'A'},
	{ id:162 , name: 'Lowell Spinners', affiliation:'Boston Red Sox' , league:'New York-Penn League', level:'A'},
	{ id:163 , name: 'Tri-City ValleyCats', affiliation:'Houston Astros' , league:'New York-Penn League', level:'A'},
	{ id:164 , name: 'Vermont Lake Monsters', affiliation:'Oakland Athletics' , league:'New York-Penn League', level:'A'},
	{ id:165 , name: 'Everett AquaSox', affiliation:'Seattle Mariners' , league:'Northwest League', level:'A'},
	{ id:166 , name: 'Spokane Indians', affiliation:'Texas Rangers' , league:'Northwest League', level:'A'},
	{ id:167 , name: 'Tri-City Dust Devils', affiliation:'San Diego Padres' , league:'Northwest League', level:'A'},
	{ id:168 , name: 'Vancouver Canadians', affiliation:'Toronto Blue Jays' , league:'Northwest League', level:'A'},
	{ id:169 , name: 'South Boise Hawks', affiliation:'Colorado Rockies' , league:'Northwest League', level:'A'},
	{ id:170 , name: 'Eugene Emeralds', affiliation:'Chicago Cubs' , league:'Northwest League', level:'A'},
	{ id:171 , name: 'Hillsboro Hops', affiliation:'Arizona Diamondbacks' , league:'Northwest League', level:'A'},
	{ id:172 , name: 'Salem-Keizer Volcanoes', affiliation:'San Francisco Giants' , league:'Northwest League', level:'A'},
	{ id:173 , name: 'Bluefield Blue Jays', affiliation:'Toronto Blue Jays' , league:'Appalachian League', level:'Rookie'},
	{ id:174 , name: 'Burlington Royals', affiliation:'Kansas City Royals' , league:'Appalachian League', level:'Rookie'},
	{ id:175 , name: 'Danville Braves', affiliation:'Atlanta Braves' , league:'Appalachian League', level:'Rookie'},
	{ id:176 , name: 'Princeton Rays', affiliation:'Tampa Bay Rays' , league:'Appalachian League', level:'Rookie'},
	{ id:177 , name: 'Pulaski Yankees', affiliation:'New York Yankees' , league:'Appalachian League', level:'Rookie'},
	{ id:178 , name: 'Bristol Pirates', affiliation:'Pittsburgh Pirates' , league:'Appalachian League', level:'Rookie'},
	{ id:179 , name: 'Elizabethton Twins', affiliation:'Minnesota Twins' , league:'Appalachian League', level:'Rookie'},
	{ id:180 , name: 'Greeneville Astros', affiliation:'Houston Astros' , league:'Appalachian League', level:'Rookie'},
	{ id:181 , name: 'Johnson City Cardinals', affiliation:'St. Louis Cardinals' , league:'Appalachian League', level:'Rookie'},
	{ id:182 , name: 'Kingsport Mets', affiliation:'New York Mets' , league:'Appalachian League', level:'Rookie'},
	{ id:183 , name: 'Billings Mustangs', affiliation:'Cincinnati Reds' , league:'Pioneer League', level:'Rookie'},
	{ id:184 , name: 'Great Falls Voyagers', affiliation:'Chicago White Sox' , league:'Pioneer League', level:'Rookie'},
	{ id:185 , name: 'Helena Brewers', affiliation:'Milwaukee Brewers' , league:'Pioneer League', level:'Rookie'},
	{ id:186 , name: 'Missoula Osprey', affiliation:'Arizona Diamondbacks' , league:'Pioneer League', level:'Rookie'},
	{ id:187 , name: 'Grand Junction Rockies', affiliation:'Colorado Rockies' , league:'Pioneer League', level:'Rookie'},
	{ id:188 , name: 'Idaho Falls Chukars', affiliation:'Kansas City Royals' , league:'Pioneer League', level:'Rookie'},
	{ id:189 , name: 'Ogden Raptors', affiliation:'Los Angeles Dodgers' , league:'Pioneer League', level:'Rookie'},
	{ id:190 , name: 'Orem Owlz', affiliation:'Los Angeles Angels of Anaheim' , league:'Pioneer League', level:'Rookie'},
	{ id:191 , name: 'Arizona League Angels', affiliation:'Los Angeles Angels of Anaheim' , league:'Arizona League', level:'Rookie'},
	{ id:192 , name: 'Arizona League Athletics', affiliation:'Oakland Athletics' , league:'Arizona League', level:'Rookie'},
	{ id:193 , name: 'Arizona League Brewers', affiliation:'Milwaukee Brewers' , league:'Arizona League', level:'Rookie'},
	{ id:194 , name: 'Arizona League Cubs', affiliation:'Chicago Cubs' , league:'Arizona League', level:'Rookie'},
	{ id:195 , name: 'Arizona League Diamondbacks', affiliation:'Arizona Diamondbacks' , league:'Arizona League', level:'Rookie'},
	{ id:196 , name: 'Arizona League Dodgers', affiliation:'Los Angeles Dodgers' , league:'Arizona League', level:'Rookie'},
	{ id:197 , name: 'Arizona League Giants', affiliation:'San Francisco Giants' , league:'Arizona League', level:'Rookie'},
	{ id:198 , name: 'Arizona League Indians', affiliation:'Cleveland Indians' , league:'Arizona League', level:'Rookie'},
	{ id:199 , name: 'Arizona League Mariners', affiliation:'Seattle Mariners' , league:'Arizona League', level:'Rookie'},
	{ id:200 , name: 'Arizona League Padres', affiliation:'San Diego Padres' , league:'Arizona League', level:'Rookie'},
	{ id:201 , name: 'Arizona League Rangers', affiliation:'Texas Rangers' , league:'Arizona League', level:'Rookie'},
	{ id:202 , name: 'Arizona League Reds', affiliation:'Cincinnati Reds' , league:'Arizona League', level:'Rookie'},
	{ id:203 , name: 'Arizona League Royals', affiliation:'Kansas City Royals' , league:'Arizona League', level:'Rookie'},
	{ id:204 , name: 'Arizona League White Sox', affiliation:'Chicago White Sox' , league:'Arizona League', level:'Rookie'},
	{ id:205 , name: 'GCL Cardinals', affiliation:'St. Louis Cardinals' , league:'Gulf Coast League', level:'Rookie'},
	{ id:206 , name: 'GCL Marlins', affiliation:'Miami Marlins' , league:'Gulf Coast League', level:'Rookie'},
	{ id:207 , name: 'GCL Mets', affiliation:'New York Mets' , league:'Gulf Coast League', level:'Rookie'},
	{ id:208 , name: 'GCL Nationals', affiliation:'Washington National' , league:'Gulf Coast League', level:'Rookie'},
	{ id:209 , name: 'GCL Astros', affiliation:'Houston Astros' , league:'Gulf Coast League', level:'Rookie'},
	{ id:210 , name: 'GCL Braves', affiliation:'Atlanta Braves' , league:'Gulf Coast League', level:'Rookie'},
	{ id:211 , name: 'GCL Tigers', affiliation:'Detroit Tigers' , league:'Gulf Coast League', level:'Rookie'},
	{ id:212 , name: 'GCL Yankees 2', affiliation:'New York Yankees' , league:'Gulf Coast League', level:'Rookie'},
	{ id:213 , name: 'GCL Blue Jays', affiliation:'Toronto Blue Jays' , league:'Gulf Coast League', level:'Rookie'},
	{ id:214 , name: 'GCL Phillies', affiliation:'Philadelphia Phillies' , league:'Gulf Coast League', level:'Rookie'},
	{ id:215 , name: 'GCL Pirates', affiliation:'Pittsburgh Pirates' , league:'Gulf Coast League', level:'Rookie'},
	{ id:216 , name: 'GCL Yankees 1', affiliation:'New York Yankees' , league:'Gulf Coast League', level:'Rookie'},
	{ id:217 , name: 'GCL Orioles', affiliation:'Baltimore Orioles' , league:'Gulf Coast League', level:'Rookie'},
	{ id:218 , name: 'GCL Rays', affiliation:'Tampa Bay Rays' , league:'Gulf Coast League', level:'Rookie'},
	{ id:219 , name: 'GCL Red Sox', affiliation:'Boston Red Sox' , league:'Gulf Coast League', level:'Rookie'},
	{ id:220 , name: 'GCL Twins', affiliation:'Minnesota Twins' , league:'Gulf Coast League', level:'Rookie'},
	{ id:221 , name: 'Fargo-Moorhead RedHawks', league:'American Association of Independent Professional Baseball', level:'INDEP'},
	{ id:222 , name: 'Sioux Falls Canaries', league:'American Association of Independent Professional Baseball', level:'INDEP'},
	{ id:223 , name: 'St. Paul Saints', league:'American Association of Independent Professional Baseball', level:'INDEP'},
	{ id:224 , name: 'Winnipeg Goldeyes', league:'American Association of Independent Professional Baseball', level:'INDEP'},
	{ id:225 , name: 'Gary SouthShore Railcats', league:'American Association of Independent Professional Baseball', level:'INDEP'},
	{ id:226 , name: 'Kansas City T-Bones', league:'American Association of Independent Professional Baseball', level:'INDEP'},
	{ id:227 , name: 'Lincoln Saltdogs', league:'American Association of Independent Professional Baseball', level:'INDEP'},
	{ id:228 , name: 'Sioux City Explorers', league:'American Association of Independent Professional Baseball', level:'INDEP'},
	{ id:229 , name: 'Amarillo Thunderheads', league:'American Association of Independent Professional Baseball', level:'INDEP'},
	{ id:230 , name: 'Grand Prairie AirHogs', league:'American Association of Independent Professional Baseball', level:'INDEP'},
	{ id:231 , name: 'Laredo Lemurs', league:'American Association of Independent Professional Baseball', level:'INDEP'},
	{ id:232 , name: 'Joplin Blasters', league:'American Association of Independent Professional Baseball', level:'INDEP'},
	{ id:233 , name: 'Wichita Wingnuts', league:'American Association of Independent Professional Baseball', level:'INDEP'},
	{ id:234 , name: 'Lancaster Barnstormers', league:'Atlantic League of Professional Baseball', level:'INDEP'},
	{ id:235 , name: 'Southern Maryland Blue Crabs', league:'Atlantic League of Professional Baseball', level:'INDEP'},
	{ id:236 , name: 'Sugar Land Skeeters', league:'Atlantic League of Professional Baseball', level:'INDEP'},
	{ id:237 , name: 'York Revolution', league:'Atlantic League of Professional Baseball', level:'INDEP'},
	{ id:238 , name: 'Bridgeport Bluefish', league:'Atlantic League of Professional Baseball', level:'INDEP'},
	{ id:239 , name: 'Camden Riversharks', league:'Atlantic League of Professional Baseball', level:'INDEP'},
	{ id:240 , name: 'Long Island Ducks', league:'Atlantic League of Professional Baseball', level:'INDEP'},
	{ id:241 , name: 'Somerset Patriots', league:'Atlantic League of Professional Baseball', level:'INDEP'},
	{ id:242 , name: 'Virginia Beach Neptunes', league:'Atlantic League of Professional Baseball', level:'INDEP'},
	{ id:243 , name: 'New Jersey Jackals', league:'Canadian American Association of Professional Baseball', level:'INDEP'},
	{ id:244 , name: 'Ottawa Champions', league:'Canadian American Association of Professional Baseball', level:'INDEP'},
	{ id:245 , name: 'Québec Capitales', league:'Canadian American Association of Professional Baseball', level:'INDEP'},
	{ id:246 , name: 'Rockland Boulders', league:'Canadian American Association of Professional Baseball', level:'INDEP'},
	{ id:247 , name: 'Sussex County Miners', league:'Canadian American Association of Professional Baseball', level:'INDEP'},
	{ id:248 , name: 'Trois-Rivières Aigles', league:'Canadian American Association of Professional Baseball', level:'INDEP'},
	{ id:249 , name: 'Evansville Otters', league:'Frontier League', level:'INDEP'},
	{ id:250 , name: 'Florence Freedom', league:'Frontier League', level:'INDEP'},
	{ id:251 , name: 'Frontier Greys', league:'Frontier League', level:'INDEP'},
	{ id:252 , name: 'Lake Erie Crushers', league:'Frontier League', level:'INDEP'},
	{ id:253 , name: 'Southern Illinois Miners', league:'Frontier League', level:'INDEP'},
	{ id:254 , name: 'Traverse City Beach Bums', league:'Frontier League', level:'INDEP'},
	{ id:255 , name: 'Washington Wild Things', league:'Frontier League', level:'INDEP'},
	{ id:256 , name: 'Gateway Grizzlies', league:'Frontier League', level:'INDEP'},
	{ id:257 , name: 'Joliet Slammers', league:'Frontier League', level:'INDEP'},
	{ id:258 , name: 'Normal CornBelters', league:'Frontier League', level:'INDEP'},
	{ id:259 , name: 'River City Rascals', league:'Frontier League', level:'INDEP'},
	{ id:260 , name: 'Rockford Aviators', league:'Frontier League', level:'INDEP'},
	{ id:261 , name: 'Schaumburg Boomers', league:'Frontier League', level:'INDEP'},
	{ id:262 , name: 'Windy City ThunderBolts', league:'Frontier League', level:'INDEP'},
	{ id:263 , name: 'Newburgh Newts', league:'North Country Baseball League', level:'INDEP'},
	{ id:264 , name: 'Old Orchard Beach Surge', league:'North Country Baseball League', level:'INDEP'},
	{ id:265 , name: 'Watertown Bucks', league:'North Country Baseball League', level:'INDEP'},
	{ id:266 , name: 'Pittsburg Diamonds', league:'Pacific Association of Professional Baseball Clubs', level:'INDEP'},
	{ id:267 , name: 'San Rafael Pacifics', league:'Pacific Association of Professional Baseball Clubs', level:'INDEP'},
	{ id:268 , name: 'Sonoma Stompers', league:'Pacific Association of Professional Baseball Clubs', level:'INDEP'},
	{ id:269 , name: 'Vallejo Admirals', league:'Pacific Association of Professional Baseball Clubs', level:'INDEP'},
	{ id:270 , name: 'Las Vegas Train Robbers', league:'Pecos League', level:'INDEP'},
	{ id:271 , name: 'Santa Fe Fuego', league:'Pecos League', level:'INDEP'},
	{ id:272 , name: 'Garden City Wind', league:'Pecos League', level:'INDEP'},
	{ id:273 , name: 'Trinidad Triggers', league:'Pecos League', level:'INDEP'},
	{ id:274 , name: 'Alpine Cowboys', league:'Pecos League', level:'INDEP'},
	{ id:275 , name: 'Las Cruces Vaqueros', league:'Pecos League', level:'INDEP'},
	{ id:276 , name: 'Roswell Invaders', league:'Pecos League', level:'INDEP'},
	{ id:277 , name: 'White Sands PupFish', league:'Pecos League', level:'INDEP'},
	{ id:278 , name: 'Bay Area Bootleggers', league:'California Winter League', level:'INDEP'},
	{ id:279 , name: 'Midwest Haymakers', league:'California Winter League', level:'INDEP'},
	{ id:280 , name: 'British Columbia Bombers', league:'California Winter League', level:'INDEP'},
	{ id:281 , name: 'Oregon Lumber Jacks', league:'California Winter League', level:'INDEP'},
	{ id:282 , name: 'Washington Bluesox', league:'California Winter League', level:'INDEP'},
	{ id:283 , name: 'Palm Springs Power', league:'California Winter League', level:'INDEP'},
	{ id:284 , name: "Canada A's", league:'California Winter League', level:'INDEP'},
	{ id:285 , name: 'Coachella Valley Snowbirds', league:'California Winter League', level:'INDEP'},
	{ id:286 , name: 'Palm Desert Coyotes', league:'California Winter League', level:'INDEP'},
	{ id:287 , name: 'Palm Springs Chill', league:'California Winter League', level:'INDEP'},
];

var tenants = [
	{ name: 'Baltimore Orioles', stadium: 'Oriole Park at Camden Yards' },
	{ name: 'Boston Red Sox',  stadium: 'Fenway Park' },
	{ name: 'New York Yankees',  stadium: 'Yankee Stadium' },
	{ name: 'Tampa Bay Rays', stadium: 'Tropicana Field' },
	{ name: 'Toronto Blue Jays', stadium: 'Rogers Centre' },
	{ name: 'Chicago White Sox', stadium: 'U.S. Cellular Field' },
	{ name: 'Cleveland Indians', stadium: 'Progressive Field' },
	{ name: 'Detroit Tigers', stadium: 'Comerica Park' },
	{ name: 'Kansas City Royals', stadium: 'Kauffman Stadium' },
	{ name: 'Minnesota Twins', stadium: 'Target Field' },
	{ name: 'Houston Astros', stadium: 'Minute Maid Park' },
	{ name: 'Los Angeles Angels of Anaheim', stadium: 'Angel Stadium of Anaheim'},
	{ name: 'Oakland Athletics', stadium: 'O.co Coliseum' },
	{ name: 'Seattle Mariners', stadium: 'Safeco Field' },
	{ name: 'Texas Rangers', stadium: 'Globe Life Park in Arlington' },
	{ name: 'Atlanta Braves', stadium: 'Turner Field' },
	{ name: 'Miami Marlins', stadium: 'Marlins Park' },
	{ name: 'New York Mets', stadium: 'Citi Field' },
	{ name: 'Philidelphia Phillies', stadium: 'Citizens Bank Park' },
	{ name: 'Washington Nationals', stadium: 'Nationals Park' },
	{ name: 'Chicago Cubs', stadium: 'Wrigley Field' },
	{ name: 'Cincinnati Reds', stadium: 'Great American Ball Park' },
	{ name: 'Milwaukee Brewers', stadium: 'Miller Park (Milwaukee)' },
	{ name: 'Pittsburgh Pirates', stadium: 'PNC Park' },
	{ name: 'St. Louis Cardinals', stadium: 'Busch Stadium' },
	{ name: 'Arizona Diamondbacks', stadium: 'Chase Field' },
	{ name: 'Colorado Rockies', stadium: 'Coors Field' },
	{ name: 'Los Angeles Dodgers', stadium: 'Dodger Stadium' },
	{ name: 'San Diego Padres', stadium: 'Petco Park' },
	{ name: 'San Francisco Giants', stadium: 'AT&T Park' },
	{ name: 'Buffalo Bisons', stadium: 'Coca-Cola Field'},
	{ name: 'Lehigh Valley IronPigs', stadium: 'Coca-Cola Park'},
	{ name: 'Pawtucket Red Sox',  stadium: 'McCoy Stadium' },
	{ name: 'Rochester Red Wings',  stadium: 'Frontier Field' },
	{ name: 'Scranton/Wilkes-Barre RailRiders',  stadium: 'PNC Field' },
	{ name: 'Syracuse Chiefs', stadium: 'NBT Bank Stadium' },
	{ name: 'Charlotte Knights', stadium: 'BB&T Ballpark (Charlotte)' },
	{ name: 'Durham Bulls', stadium: 'Durham Bulls Athletic Park' },
	{ name: 'Gwinnett Braves', stadium: 'Coolray Field'},
	{ name: 'Norfolk Tides', stadium: 'Harbor Park' },
	{ name: 'Columbus Clippers', stadium: 'Huntington Park' },
	{ name: 'Indianapolis Indians', stadium: 'Victory Field' },
	{ name: 'Louisville Bats', stadium: 'Louisville Slugger Field' },
	{ name: 'Toledo Mud Hens',  stadium: 'Fifth Third Field (Toledo, Ohio)' },
	{ name: 'Colorado Springs Sky Sox', stadium: 'Security Service Field' },
	{ name: 'Iowa Cubs',  stadium: 'Principal Park' },
	{ name: 'Oklahoma City Dodgers', stadium: 'Chickasaw Bricktown Ballpark' },
	{ name: 'Omaha Storm Chasers',  stadium: 'Werner Park' },
	{ name: 'Memphis Redbirds', stadium: 'AutoZone Park' },
	{ name: 'Nashville Sounds', stadium: 'First Tennesse Park' },
	{ name: 'New Orleans Zephyrs',  stadium: 'Zephyr Field' },
	{ name: 'Round Rock Express',  stadium: 'Dell Diamond' },
	{ name: 'Fresno Grizzlies', stadium: 'Chukchansi Park' },
	{ name: 'Reno Aces', stadium: 'Aces Ballpark' },
	{ name: 'Sacramento River Cats', stadium: 'Raley Field' },
	{ name: 'Tacoma Rainiers', stadium: 'Cheney Stadium' },
	{ name: 'Alburquerque Isotopes', stadium: 'Isotopes Park' },
	{ name: 'El Paso Chihuahuas', stadium: 'Southwest University Park'},
	{ name: 'Las Vegas 51s', stadium: 'Cashman Field' },
	{ name: 'Salt Lake Bees', stadium: 'Smith\'s Ballpark' },
	{ name: 'Binghamton Mets', stadium: 'NYSEG Stadium' },
	{ name: 'New Britain Rock Cats', stadium: 'New Britain Stadum'},
	{ name: 'New Hampshire Fisher Cats', stadium: 'Delta Dental Stadium'},
	{ name: 'Portland Sea Dogs', stadium: 'Hadlock Field' },
	{ name: 'Reading Fightin Phils', stadium: 'FirstEnergy Stadium' },
	{ name: 'Trenton Thunder', stadium: 'Arm & Hammer Park' },
	{ name: 'Akron RubberDucks', stadium: 'Canal Park' },
	{ name: 'Altoona Curve', stadium: 'Peoples Natural Gas Field' },
	{ name: 'Bowie Baysox', stadium: "Prince George's Stadium" },
	{ name: 'Erie SeaWolves', stadium: 'Jerry Uht Park' },
	{ name: 'Harrisburg Senators', stadium: 'Metro Bank' },
	{ name: 'Richmond Flying Squirrels', stadium: 'The Diamond' },
	{ name: 'Birmingham Barons', stadium: 'Regions Field' },
	{ name: 'Chattanooga Lookouts', stadium: 'AT&T Field' },
	{ name: 'Jackson Generals', stadium: 'The Ballpark at Jackson' },
	{ name: 'Montgomery Biscuits', stadium: 'Riverwalk Stadium' },
	{ name: 'Tennessee Smokies', stadium: 'Smokies Park' },
	{ name: 'South Biloxi Shuckers', stadium: 'MGM Park' },
	{ name: 'Jacksonville Suns', stadium: 'Grounds of Jacksonville' },
	{ name: 'Mississippi Bravers', stadium: 'Trustmark Park' },
	{ name: 'Mobile BayBears', stadium: 'Hank Aaron Stadium' },
	{ name: 'Pensacola Blue Wahoos', stadium: 'Pensacola Bayfront Stadium' },
	{ name: 'Arkansas Travelers', stadium: 'Dickey-Stephens Park' },
	{ name: 'Northwest Arkansas Naturals', stadium: 'Arvest Ballpark' },
	{ name: 'Springfield Cardinals', stadium: 'Hammons Field' },
	{ name: 'Tulsa Drillers', stadium: 'ONEOK Field' },
	{ name: 'Corpus Christi Hooks', stadium: 'Whataburger Field' },
	{ name: 'Frisco RoughRiders', stadium: 'Dr Pepper Ballpark' },
	{ name: 'Midland RockHounds', stadium: 'Security Bank Ballpark' },
	{ name: 'San Antonio Missions', stadium: 'Nelson W. Wolff Municipal Stadium' },
	{ name: 'Bakersfield Blaze', stadium: 'Sam Lynn Ballpark' },
	{ name: 'Modesto Nuts', stadium: 'John Thurman Field' },
	{ name: 'San Jose Giants', stadium: 'San Jose Municipal Stadium' },
	{ name: 'Stockton Ports', stadium: 'Banner Island Ballpark' },
	{ name: 'Visalia Rawhide', stadium: 'Recreation Park' },
	{ name: 'High Desert Mavericks',  stadium: 'Heritage Field at Stater Bros. Stadium' },
	{ name: 'Inland Empire 66ers', stadium: 'San Manuel Stadium' },
	{ name: 'Lake Elsinore Storm', stadium: 'Lake Elsinore Diamond' },
	{ name: 'Lancaster JetHawks', stadium: 'The Hangar' },
	{ name: 'Rancho Cucamonga Quakes', stadium: 'LoanMart Field' },
	{ name: 'Frederick Keys', stadium: 'Harry Grove Stadium' },
	{ name: 'Lynchburg Hillcats', stadium: 'Calvin Valwell Field' },
	{ name: 'Potomac Nationals', stadium: 'G. Richard Pfitzner Stadium' },
	{ name: 'Wilmington Blue Rocks',  stadium: 'Daniel S. Frawley Stadium' },
	{ name: 'Carolina Mudcats', stadium: 'Five County Stadium' },
	{ name: 'Myrtle Beach Pelicans', stadium: 'TicketReturn.Com Field at Pelicans Ballpark' },
	{ name: 'Salem Red Sox',  stadium: 'Lewis-Gale Fiel' },
	{ name: 'Winston-Salem Dash', stadium: 'BB&T Ballpark (Winston-Salem, North Carolina)' },
	{ name: 'Brevard County Manatees',  stadium: 'Space Coast Stadium' },
	{ name: 'Clearwater Threshers', stadium: 'Bright House Field' },
	{ name: 'Daytona Tortugas', stadium: 'Jackie Robison Ballpark' },
	{ name: 'Dunedin Blue Jays',  stadium: 'Auto Exchange Stadium' },
	{ name: 'Lakeland Flying Tigers',  stadium: 'Joker Merchant Stadium' },
	{ name: 'Tampa Yankees', stadium: 'George M. Steinbrenner Field' },
	{ name: 'Bradenton Marauders', stadium: 'McKechnie Field' },
	{ name: 'Charlotte Stone Crabs',  stadium: 'Charlotte Sports Park' },
	{ name: 'Fort Myers Miracle', stadium: 'Hammond Stadium' },
	{ name: 'Jupiter Hammerheads', stadium: 'Roger Dean Stadium' },
	{ name: 'Palm Beach Cardinals',  stadium: 'Roger Dean Stadium' },
	{ name: 'St. Lucie Mets', stadium: 'Tradition Field' },
	{ name: 'Bowling Green Hot Rods', stadium: 'Bowling Green Ballpark' },
	{ name: 'Dayton Dragons', stadium: 'Fifth Third Field (Dayton, Ohio)' },
	{ name: 'Fort Wayne TinCaps', stadium: 'Parkview Field' },
	{ name: 'Great Lakes Loons', stadium: 'Dow Diamond' },
	{ name: 'Lake County Captains', stadium: 'Classic Park' },
	{ name: 'Lansing Lugnuts', stadium: 'Cooley Law School Stadium' },
	{ name: 'South Bend Cubs', stadium: 'Four Winds Field at Coveleski Stadium' },
	{ name: 'West Michigan Whitecaps', stadium: 'Fifth Third Ballpark' },
	{ name: 'Beloit Snappers', stadium: 'Harry C. Pohlman Field' },
	{ name: 'Burlington Bees', stadium: 'Community Field'  },
	{ name: 'Cedar Rapids Kernels', stadium: 'Veterans Memorial Stadium' },
	{ name: 'Clinton LumberKings', stadium: 'Ashford University Field' },
	{ name: 'Kane County Cougars', stadium: 'Fifth Third Bank Ballpark' },
	{ name: 'Peoria Chiefs', stadium: 'Dozer Park' },
	{ name: 'Quad Cities River Bandits', stadium: 'Modern Woodmen Park' },
	{ name: 'Wisconsin Timber Rattlers', stadium: 'Neuroscience Group Field at Fox Cities Stadium' },
	{ name: 'Delmarva Shorebirds', stadium: 'Arthur W. Perdue Stadium' },
	{ name: 'Greensboro Grasshoppers', stadium: 'NewBridge Bank Park' },
	{ name: 'Hagerstown Suns', stadium: 'Municipal Stadium' },
	{ name: 'Hickory Crawdads', stadium: 'L. P. Frans Stadium' },
	{ name: 'Kannapolis Intimidators', stadium: 'CMC-NorthEast Stadium' },
	{ name: 'Lakewood BlueClaws', stadium: 'FirstEnergy Park' },
	{ name: 'West Virginia Power', stadium: 'Appalachian Power Park' },
	{ name: 'Asheville Tourists', stadium: 'McCormick Field' },
	{ name: 'Augusta GreenJackets', stadium: 'Lake Olmstead Stadium'  },
	{ name: 'Charleston RiverDogs', stadium: 'Joseph P. Riley, Jr. Park'  },
	{ name: 'Greenville Drive', stadium: 'Fluor Field at the West End'  },
	{ name: 'Lexington Legends', stadium: 'Whitaker Bank Ballpark'  },
	{ name: 'Rome Braves', stadium: 'State Mutual Stadium' },
	{ name: 'Savannah Sand Gnats', stadium: 'Grayson Stadium'  },
	{ name: 'Aberdeen IronBirds', stadium: 'Leidos Field at Ripken Stadium'  },
	{ name: 'Brooklyn Cyclones', stadium: 'MCU Park'  },
	{ name: 'Hudson Valley Renegades', stadium: 'Dutchess Stadium'  },
	{ name: 'Staten Island Yankees', stadium: 'Richmond County Bank Ballpark' },
	{ name: 'Auburn Doubledays', stadium: 'Falcon Park'  },
	{ name: 'Batavia Muckdogs', stadium: 'Dwyer Stadium'  },
	{ name: 'Mahoning Valley Scrappers',  stadium: 'Eastwood Field'  },
	{ name: 'State College Spikes', stadium: 'Medlar Field at Lubrano Park'  },
	{ name: 'West Virginia Black Bears', stadium: 'Monongalia County Ballpark'  },
	{ name: 'Williamsport Crosscutters', stadium: 'Susquehanna Bank Park at Historic Bowman Field'  },
	{ name: 'Connecticut Tigers', stadium: 'Senator Thomas J. Dodd Memorial Stadium'  },
	{ name: 'Lowell Spinners', stadium: 'Edward A. LeLacheur Park'  },
	{ name: 'Tri-City ValleyCats',  stadium: 'Joseph L. Bruno Stadium'  },
	{ name: 'Vermont Lake Monsters',  stadium: 'Centennial Field'  },
	{ name: 'Everett AquaSox', stadium: 'Everett Memorial Stadium' },
	{ name: 'Spokane Indians', stadium: 'Avista Stadium' },
	{ name: 'Tri-City Dust Devils', stadium: 'Gesa Stadium' },
	{ name: 'Vancouver Canadians', stadium: 'Nat Bailey Stadium' },
	{ name: 'South Boise Hawks',  stadium: 'Memorial Stadium (Boise)' },
	{ name: 'Eugene Emeralds', stadium: 'PK Park' },
	{ name: 'Hillsboro Hops', stadium: 'Ron Tonkin Field' },
	{ name: 'Salem-Keizer Volcanoes',  stadium: 'Volcanoes Stadium' },
	{ name: 'Bluefield Blue Jays',  stadium: 'Bowen Field' },
	{ name: 'Burlington Royals', stadium: 'Burlington Athletic Stadium' },
	{ name: 'Danville Braves', stadium: 'American Legion Field' },
	{ name: 'Princeton Rays', stadium: 'H. P. Hunnicutt Field' },
	{ name: 'Pulaski Yankees', stadium: 'Calfee Park' },
	{ name: 'Bristol Pirates', stadium: 'Boyce Cox Field at DeVault Memorial Stadium' },
	{ name: 'Elizabethton Twins', stadium: 'Joe O\'Brien Field' },
	{ name: 'Greeneville Astros', stadium: 'Pioneer Park' },
	{ name: 'Johnson City Cardinals', stadium: 'Howard Johnson Field' },
	{ name: 'Kingsport Mets', stadium: 'Hunter Wright Stadium' },
	{ name: 'Billings Mustangs', stadium: 'Dehler Park' },
	{ name: 'Great Falls Voyagers', stadium: 'Centene Stadium' },
	{ name: 'Helena Brewers', stadium: 'Kindrick Legion Field' },
	{ name: 'Missoula Osprey', stadium: 'Ogren Park at Allegiance Field' },
	{ name: 'Grand Junction Rockies', stadium: 'Suplizio Field' },
	{ name: 'Idaho Falls Chukars', stadium: 'Melaleuca Field' },
	{ name: 'Ogden Raptors', stadium: 'Lindquist Field' },
	{ name: 'Orem Owlz', stadium: 'Brent Brown Ballpark'  },
	{ name: 'Arizona League Angels',  stadium: 'Tempe Diablo Stadium'  },
	{ name: 'Arizona League Athletics',  stadium: 'Fitch Park' },
	{ name: 'Arizona League Brewers',  stadium: 'Maryvale Stadium' },
	{ name: 'Arizona League Cubs',  stadium: 'Sloan Park' },
	{ name: 'Arizona League Diamondbacks',  stadium: 'Salt River Fields at Talking Stick' },
	{ name: 'Arizona League Dodgers',  stadium: 'Camelback Ranch' },
	{ name: 'Arizona League Giants',  stadium: 'Scottsdale Stadium' },
	{ name: 'Arizona League Indians',  stadium: 'Goodyear Ballpark' },
	{ name: 'Arizona League Mariners',  stadium: 'Peoria Sports Complex' },
	{ name: 'Arizona League Padres',  stadium: 'Peoria Sports Complex' },
	{ name: 'Arizona League Rangers',  stadium: 'Surprise Stadium' },
	{ name: 'Arizona League Reds',  stadium: 'Goodyear Ballpark' },
	{ name: 'Arizona League Royals',  stadium: 'Surprise Stadium' },
	{ name: 'Arizona League White Sox', stadium: 'Camelback Ranch' },
	{ name: 'GCL Cardinals', stadium: 'Roger Dean Stadium' },
	{ name: 'GCL Marlins', stadium: 'Roger Dean Stadium' },
	{ name: 'GCL Mets', stadium: 'Tradition Field' },
	{ name: 'GCL Nationals', stadium: 'Washington Nationals Training Complex, Space Coast Stadium' },
	{ name: 'GCL Astros', stadium: 'Osceola County Stadium' },
	{ name: 'GCL Braves', stadium: 'Champion Stadium' },
	{ name: 'GCL Tigers',  stadium: 'Joker Marchant Stadium' },
	{ name: 'GCL Yankees 2',  stadium: 'George M. Steinbrenner Field' },
	{ name: 'GCL Blue Jays',  stadium: 'Bobby Mattick Training Center at Englebert Complex' },
	{ name: 'GCL Phillies', stadium: 'Carpenter Complex' },
	{ name: 'GCL Pirates', stadium: 'Pirate City' },
	{ name: 'GCL Yankees 1',  stadium: 'George M. Steinbrenner Field'  },
	{ name: 'GCL Orioles', stadium: 'Ed Smith Stadium' },
	{ name: 'GCL Rays', stadium: 'Charlotte Sports Park'  },
	{ name: 'GCL Red Sox', stadium: 'JetBlue Park at Fenway South'  },
	{ name: 'GCL Twins',  stadium: 'Lee County Sports Complex' },
    { name: 'Fargo-Moorhead RedHawks', stadium: 'Newman Outdoor Field' },
	{ name: 'Sioux Falls Canaries', stadium: 'Sioux Falls Stadium' },
	{ name: 'St. Paul Saints', stadium: 'CHS Field' },
	{ name: 'Winnipeg Goldeyes', stadium: 'Shaw Park' },
	{ name: 'Gary SouthShore Railcats', stadium: 'U.S. Steel Yard' },
	{ name: 'Kansas City T-Bones', stadium: 'CommunityAmerica Ballpark' },
	{ name: 'Lincoln Saltdogs', stadium: 'Haymarket Park' },
	{ name: 'Sioux City Explorers', stadium: 'Lewis and Clark Park' },
	{ name: 'Amarillo Thunderheads', stadium: 'Potter County Memorial Stadium' },
	{ name: 'Grand Prairie AirHogs', stadium: 'QuikTrip Park' },
	{ name: 'Laredo Lemurs', stadium: 'Uni-Trade Stadium' },
	{ name: 'Joplin Blasters', stadium: 'Joe Becker Stadium' },
	{ name: 'Wichita Wingnuts', stadium: 'Lawrence–Dumont Stadium' },
	{ name: 'Lancaster Barnstormers', stadium: 'Clipper Magazine Stadium' },
	{ name: 'Southern Maryland Blue Crabs', stadium: 'Regency Furniture Stadium' },
	{ name: 'Sugar Land Skeeters', stadium: 'Constellation Field' },
	{ name: 'York Revolution', stadium: 'Santander Stadium' },
	{ name: 'Bridgeport Bluefish', stadium: 'The Ballpark at Harbor Yard' },
	{ name: 'Camden Riversharks', stadium: "Campbell's Field" },
	{ name: 'Long Island Ducks', stadium: 'Bethpage Ballpark' },
	{ name: 'Somerset Patriots', stadium: 'TD Bank Ballpark' },
	{ name: 'Virginia Beach Neptunes', stadium: 'Wheeler Field' },
	{ name: 'New Jersey Jackals', stadium: 'Yogi Berra Stadium' },
	{ name: 'Ottawa Champions', stadium: 'Raymond Chabot Grant Thornton Park' },
	{ name: 'Québec Capitales', stadium: 'Stade Municipal (Quebec City)' },
	{ name: 'Rockland Boulders', stadium: 'Provident Bank Park' },	
	{ name: 'Sussex County Miners', stadium: 'Skylands Park' },
	{ name: 'Trois-Rivières Aigles', stadium: 'Stade Fernand-Bédard' },
	{ name: 'Evansville Otters', stadium: 'Bosse Field' },
	{ name: 'Florence Freedom', stadium: 'UC Health Stadium' },
	{ name: 'Lake Erie Crushers', stadium: 'All Pro Freight Stadium' },
	{ name: 'Southern Illinois Miners', stadium: 'Rent One Park' },
	{ name: 'Traverse City Beach Bums', stadium: 'Wuerfel Park' },
	{ name: 'Washington Wild Things', stadium: 'Consol Energy Park' },
	{ name: 'Gateway Grizzlies', stadium: 'GCS Ballpark' },
	{ name: 'Joliet Slammers', stadium: 'Silver Cross Field' },
	{ name: 'Normal CornBelters', stadium: 'The Corn Crib' },
	{ name: 'River City Rascals', stadium: 'T.R. Hughes Ballpark' },
	{ name: 'Rockford Aviators', stadium: 'Aviators Stadium' },
	{ name: 'Schaumburg Boomers', stadium: 'Schaumburg Baseball Stadium' },
	{ name: 'Windy City ThunderBolts', stadium: 'Standard Bank Stadium' },
	{ name: 'Newburgh Newts', stadium: 'Delano-Hitch Stadium' },
	{ name: 'Old Orchard Beach Surge', stadium: 'The Ballpark' },
	{ name: 'Watertown Bucks', stadium: 'Duffy Fairgrounds' },
	{ name: 'Pittsburg Diamonds', stadium: 'City Park Field' },
	{ name: 'San Rafael Pacifics', stadium: 'Albert Park' },
	{ name: 'Sonoma Stompers', stadium: 'Arnold Field' },
	{ name: 'Vallejo Admirals', stadium: 'Wilson Park' },
	{ name: 'Las Vegas Train Robbers', stadium: 'Rodriguez Park' },
	{ name: 'Santa Fe Fuego', stadium: 'Fort Marcy Ballfield' },
	{ name: 'Garden City Wind', stadium: 'Clint Lightner Field' },
	{ name: 'Trinidad Triggers', stadium: 'Central Park' },
	{ name: 'Alpine Cowboys', stadium: 'Kokernot Field' },
	{ name: 'Las Cruces Vaqueros', stadium: 'Apodoca Park' },
	{ name: 'Roswell Invaders', stadium: 'Joe Baumann Stadium' },
	{ name: 'White Sands PupFish', stadium: 'Griggs Park' },
	{ name: 'Bay Area Bootleggers', stadium: 'Palm Springs Stadium' },
	{ name: 'Midwest Haymakers', stadium: 'Palm Springs Stadium' },
	{ name: 'British Columbia Bombers', stadium: 'Palm Springs Stadium' },
	{ name: 'Oregon Lumber Jacks', stadium: 'Palm Springs Stadium' },
	{ name: 'Washington Bluesox', stadium: 'Palm Springs Stadium' },
	{ name: 'Palm Springs Power', stadium: 'Palm Springs Stadium' },
	{ name: 'Canada A\'s', stadium: 'Palm Springs Stadium' },
	{ name: 'Coachella Valley Snowbirds', stadium: 'Palm Springs Stadium' },
	{ name: 'Palm Desert Coyotes', stadium: 'Palm Springs Stadium' },
	{ name: 'Palm Springs Chill', stadium: 'Palm Springs Stadium' },
];

var locations = [
	{ id: 9000 , name: 'Polo Grounds', lat:40.830833 , lon:-73.9375  , city: 'New York', state: 'NY' },
	{ id: 9001 , name: 'Exposition Park (Pittsburgh)', lat:40.446944 , lon:-80.010833  , city: 'Pittsburgh', state: 'PA' },
	{ id: 9002 , name: 'Robison Field', lat:38.662778 , lon:-90.222222  , city: 'St. Louis', state: 'MO' },	
	{ id: 9003 , name: 'South End Grounds', lat:42.3375 , lon:-71.086944  , city: 'Boston', state: 'MA' },
	{ id: 9004 , name: 'West Side Grounds', lat:41.870278 , lon:-87.6725  , city: 'Chicago', state: 'IL' },
	{ id: 9005 , name: 'League Park (Cincinnati)', lat:39.116944 , lon:-84.536667  , city: 'Cincinnati', state: 'OH' },
	{ id: 9006 , name: 'Baker Bowl', lat:39.993056 , lon:-75.155833  , city: 'Philadelphia', state: 'PA' },
	{ id: 9007 , name: 'Washington Park', lat:40.673972 , lon:-73.985722  , city: 'Brooklyn', state: 'NY' },
	{ id: 9008 , name: 'Columbia Park', lat:39.981111 , lon:-75.182778  , city: 'Philadelphia', state: 'PA' },
	{ id: 9009 , name: 'League Park', lat:41.511389 , lon:-81.644167  , city: 'Cleveland', state: 'OH' },
	{ id: 9010 , name: 'Lloyd Street Grounds', lat:43.058889 , lon:-87.933889  , city: 'Milwaukee', state: 'WI' },
	{ id: 9011 , name: 'Huntington Avenue Grounds', lat:42.338889 , lon:-71.088889  , city: 'Boston', state: 'MA' },
	{ id: 9012 , name: 'Bennett Park (Detroit)', lat:42.332222 , lon:-83.068056  , city: 'Detroit', state: 'MI' },
	{ id: 9013 , name: 'Burns Park', lat:42.316714 , lon:-83.111590  , city: 'Detroit', state: 'MI' },
	{ id: 9014 , name: 'South Side Park', lat:41.824444 , lon:-87.632778  , city: 'Chicago', state: 'IL' },
	{ id: 9015 , name: 'Sportsman\'s Park', lat:38.657778 , lon:-90.220278  , city: 'St. Louis', state: 'MO' },
	{ id: 9016 , name: 'Palace of the Fans', lat:39.116944 , lon:-84.536667  , city: 'Cincinnati', state: 'OH' },		
	{ id: 9017 , name: 'Hilltop Park', lat:40.840556 , lon:-73.942222  , city: 'New York', state: 'NY' },
	{ id: 9018 , name: 'American League Park', lat:38.901667 , lon:-76.986667  , city: 'Washington', state: 'DC' },	
	{ id: 9019 , name: 'Shibe Park', lat:39.996111 , lon:-75.165  , city: 'Philadelphia', state: 'PA' },
	{ id: 9020 , name: 'Forbes Field', lat:40.441944 , lon:-79.954167  , city: 'Pittsburgh', state: 'PA' },
	{ id: 9021 , name: 'League Park', lat:41.511389 , lon:-81.644167  , city: 'Cleveland', state: 'OH' },
	{ id: 9022 , name: 'Comiskey Park', lat:41.831667 , lon:-87.633611  , city: 'Chicago', state: 'IL' },
	{ id: 9023 , name: 'Griffith Stadium', lat:38.9175 , lon:-77.020278  , city: 'Washington', state: 'DC' },
	{ id: 9024 , name: 'Crosley Field', lat:39.116667 , lon:-84.535278  , city: 'Cincinnati', state: 'OH' },
	{ id: 9025 , name: 'Tiger Stadium (Detroit)', lat:42.331944 , lon:-83.068889  , city: 'Detroit', state: 'MI' },
	{ id: 9026 , name: 'Ebbets Field', lat:40.665 , lon:-73.958056  , city: 'Brooklyn', state: 'NY' },
	{ id: 9027 , name: 'Braves Field', lat:42.353333 , lon:-71.12  , city: 'Boston', state: 'MA' },
	{ id: 9028 , name: 'Yankee Stadium (1923)', lat:40.829167 , lon:-73.926389  , city: 'New York', state: 'NY' },
	{ id: 9029 , name: 'Cleveland Stadium', lat:41.505833 , lon:-81.699722  , city: 'Cleveland', state: '' },
	{ id: 9030 , name: 'County Stadium', lat:43.03 , lon:-87.974  , city: 'Milwaukee', state: 'WI' },
	{ id: 9031 , name: 'Memorial Stadium (Baltimore)', lat:39.329444 , lon:-76.601389  , city: 'Baltimore', state: 'MD' },
	{ id: 9032 , name: 'Municipal Stadium (Kansas City, Missouri)', lat:39.085833 , lon:-94.556944  , city: 'Kansas City', state: 'MO' },
	{ id: 9033 , name: 'Roosevelt Stadium', lat:40.706389 , lon:-74.105  , city: 'Jersey City', state: 'NJ' },
	{ id: 9034 , name: 'Seals Stadium', lat:37.766667 , lon:-122.409167  , city: 'San Francisco', state: 'CA' },
	{ id: 9035 , name: 'Candlestick Park', lat:37.713611 , lon:-122.386111  , city: 'San Francisco', state: 'CA' },	
	{ id: 9036 , name: 'Wrigley Field (Los Angeles)', lat:34.0075 , lon:-118.266111  , city: 'Los Angeles', state: 'CA' },
	{ id: 9037 , name: 'Metropolitan Stadium', lat:44.854444 , lon:-93.241944  , city: 'Minneapolis', state: 'MN' },
	{ id: 9038 , name: 'Colt Stadium', lat:29.688333 , lon:-95.408611 , city: 'Houston', state: 'TX' },
	{ id: 9039 , name: 'RFK Stadium', lat:38.889722 , lon:-76.971667  , city: 'Washington', state: 'DC' },
	{ id: 9040 , name: 'Shea Stadium', lat:40.755556 , lon:-73.848056  , city: 'New York', state: 'NY' },
	{ id: 9041 , name: 'Atlanta Fulton County Stadium', lat:33.739444 , lon:-84.389444  , city: 'Atlanta', state: 'GA' },
	{ id: 9042 , name: 'Sicks\' Stadium', lat:47.579444 , lon:-122.297778  , city: 'Seattle', state: 'WA' },	
	{ id: 9043 , name: 'Qualcomm Stadium', lat:32.783056 , lon:-117.119444  , city: 'San Diego', state: 'CA' },
	{ id: 9044 , name: 'Three Rivers Stadium', lat:40.446667 , lon:-80.012778  , city: 'Pittsburgh', state: 'CA' },
	{ id: 9045 , name: 'Cinergy Field', lat:39.096667 , lon:-84.508333  , city: 'Cincinnati', state: 'OH' },
	{ id: 9046 , name: 'Veterans Stadium', lat:39.906667 , lon:-75.171111  , city: 'Philadelphia', state: 'PA' },
	{ id: 9047 , name: 'Arlington Stadium', lat:32.756389 , lon:-97.084722  , city: 'Arlington', state: 'TX' },
	{ id: 9048 , name: 'Exhibition Stadium', lat:43.631944 , lon:-79.417778  , city: 'Toronto', state: 'ON' },
	{ id: 9049 , name: 'Olympic Stadium (Montreal)', lat:45.558 , lon:-73.552  , city: 'Montreal', state: 'QC' },
	{ id: 9050 , name: 'Kingdome', lat:47.595278 , lon:-122.331389  , city: 'Seattle', state: 'WA' },	
	{ id: 9051 , name: 'Hubert H. Humphrey Metrodome', lat:44.973889 , lon:-93.258056  , city: 'Minneapolis', state: 'MN' },
];

/*******************************************************/
/* CODE SECTION */
/*******************************************************/

var map;
var geocoder;
var latitude;
var lonitude;
var marker;
var pos;
var marker_image;
var info_popup;
var info_popup_content;
var last_popup_opened = null;

var web = [];

var mlbMarkers = [];
var aaaMarkers = [];
var aaMarkers = [];
var aMarkers = [];
var rookieMarkers = [];
var independentMarkers = [];
var locationsMarkers = [];

var mlbToggle = true;
var aaaToggle = true;
var aaToggle = true;
var aToggle = true;
var rookieToggle = true;
var independentToggle = true;
var locationsToggle = true;

function initialize() {
	// console.log('# active stadiums is ' + stadiums.length);
	// console.log('# teams is ' + teams.length);
	// console.log('# user submitted locations is ' + locations.length)
	// $("#panel").hide();
	geocoder = new google.maps.Geocoder();
	var cent = new google.maps.LatLng(39.520271, -96.195108); /* centers the map on the U.S. */
	var mapOptions = {
  		center: cent,
      	zoom: 5,
			keyboardShortcuts: false,
			streetViewControl: false,
			mapTypeControl: false,
			panControl: false,
			scaleControl: false,
			zoomControlOptions: {
      			style: google.maps.ZoomControlStyle.SMALL,
				position: google.maps.ControlPosition.LEFT_BOTTOM
    	},
			styles: [{"featureType":"administrative","elementType":"labels","stylers":[{"visibility":"off"}]},{"featureType":"administrative.country","elementType":"geometry.stroke","stylers":[{"visibility":"off"}]},{"featureType":"administrative.province","elementType":"geometry.stroke","stylers":[{"visibility":"on"}]},{"featureType":"landscape","elementType":"geometry","stylers":[{"visibility":"on"},{"color":"#e3e3e3"}]},{"featureType":"landscape.natural","elementType":"labels","stylers":[{"visibility":"off"}]},{"featureType":"poi","elementType":"all","stylers":[{"visibility":"off"}]},{"featureType":"road","elementType":"all","stylers":[{"color":"#cccccc"}]},{"featureType":"road","elementType":"labels","stylers":[{"visibility":"off"}]},{"featureType":"transit","elementType":"labels.icon","stylers":[{"visibility":"off"}]},{"featureType":"transit.line","elementType":"geometry","stylers":[{"visibility":"off"}]},{"featureType":"transit.line","elementType":"labels.text","stylers":[{"visibility":"off"}]},{"featureType":"transit.station.airport","elementType":"geometry","stylers":[{"visibility":"off"}]},{"featureType":"transit.station.airport","elementType":"labels","stylers":[{"visibility":"off"}]},{"featureType":"water","elementType":"geometry","stylers":[{"color":"#FFFFFF"}]},{"featureType":"water","elementType":"labels","stylers":[{"visibility":"off"}]}]
  };
  map = new google.maps.Map(document.getElementById('map-canvas'), mapOptions);
	addStadiums(map);
	addLocations(map);

	google.maps.event.addListener(map, 'click', function(){
		/* close the last opened popup. only one at a time */
		if (last_popup_opened != null)
			last_popup_opened.popup.close();
	});
		
	var e = document.getElementById("filterBar");
    e.style.visibility = 'visible';
}

function addStadiums(map) {
	/* add stadiums to map */
	stadiums.forEach(function(stadium) {
		/* generate the text content for each popup */
		info_popup_content =  '<strong>' + stadium.name + '</strong><br>' +
			'<a href="#" onClick="openPanel(' + stadium.id + ')">More information ></a>';

		/* create the popup */
		info_popup = new google.maps.InfoWindow({content: info_popup_content, maxWidth: 300});

		var isMLB = false;
		var isAAA = false;
		var isAA = false;
		var isA = false;
		var isRookie = false;
		var isINDEP = false;

		var zdex;

		for(var k = 0; k < tenants.length; k ++){
			if(tenants[k].stadium === stadium.name){
				for(var h = 0; h < teams.length; h++){
					if(tenants[k].name === teams[h].name){
						switch(teams[h].level){
							case 'MLB':
								isMLB = true;
								break;
							case 'AAA':
								isAAA = true;
								break;
							case 'AA':
								isAA = true;
								break;
							case 'A':
								isA = true;
								break;
							case 'Rookie':
								isRookie = true;
								break;
							case 'INDEP':
								isINDEP = true;
								break;
							default:
								break;
						}
						break;
					}
				}
			}
		}

		if (isMLB) {
			marker_image = new google.maps.MarkerImage('images/marker_blue.gif', null, null, null, new google.maps.Size(15,15));
			zdex = 7;
		}
		else if (isAAA) {
			marker_image = new google.maps.MarkerImage('images/marker_blue_lighter.gif', null, null, null, new google.maps.Size(15,15));
			zdex = 6;
		}
		else if (isAA) {
			marker_image = new google.maps.MarkerImage('images/marker_blue_morelight.gif', null, null, null, new google.maps.Size(15,15));
			zdex = 4;
		}
		else if (isA) {
			marker_image = new google.maps.MarkerImage('images/marker_blue_light.gif', null, null, null, new google.maps.Size(15,15));
			zdex = 3;
		}
		else if (isRookie) {
			marker_image = new google.maps.MarkerImage('images/marker_blue_lightest.gif', null, null, null, new google.maps.Size(15,15));
			zdex = 2;
		}
		else if (isINDEP) {
			marker_image = new google.maps.MarkerImage('images/marker_green.gif', null, null, null, new google.maps.Size(15,15));
			zdex = 1;
		}
		
		/* create the marker */
		pos = new google.maps.LatLng(stadium.lat, stadium.lon);
		marker = new google.maps.Marker({
			zIndex: zdex,
			position: pos,
			map: map,
			title: stadium.name,
			popup: info_popup,
			icon: marker_image,
		});

		if (isMLB) {
			mlbMarkers.push(marker);
		}
		if (isAAA) {
			aaaMarkers.push(marker);
		}
		if (isAA) {
			aaMarkers.push(marker);
		}
		if (isA) {
			aMarkers.push(marker);
		}
		if (isRookie) {
			rookieMarkers.push(marker);
		}
		if (isINDEP) {
			independentMarkers.push(marker);
		}

		/* create a listener for each popup. using 'this' keyword is important so as not to
		only open the most recent popup attached to the listener */
		google.maps.event.addListener(marker, 'click', function() {
			/* close the last opened popup. only one at a time */
			if (last_popup_opened != null)
				last_popup_opened.popup.close();
			this.popup.open(map, this);
			last_popup_opened = this;
		});
	});
}

function addLocations(map) {
	/* add stadiums to map */
	locations.forEach(function(location) {
		/* generate the text content for each popup */
		info_popup_content =  '<strong>' + location.name + '</strong><br>' +
			'<a href="#" onClick="openPanel(' + location.id + ')">More information ></a>';

		/* create the popup */
		info_popup = new google.maps.InfoWindow({content: info_popup_content, maxWidth: 300});
		var marker_image = new google.maps.MarkerImage('images/marker_red.gif', null, null, null, new google.maps.Size(15,15));

		/* create the marker */
		pos = new google.maps.LatLng(location.lat, location.lon);
		marker = new google.maps.Marker({
			zIndex: 5,
			position: pos,
			map: map,
			title: location.name,
			popup: info_popup,
			icon: marker_image,
		});

		locationsMarkers.push(marker);

		/* create a listener for each popup. using 'this' keyword is important so as not to
		only open the most recent popup attached to the listener */
		google.maps.event.addListener(marker, 'click', function() {
			/* close the last opened popup. only one at a time */
			if (last_popup_opened != null)
				last_popup_opened.popup.close();
			this.popup.open(map, this);
			last_popup_opened = this;
		});
	});
}

/* pan map to searched location */
function searchForLocation() {
	var query = document.getElementById('address').value;
	geocoder.geocode( { address: query}, function(results, status) {
		if (status == google.maps.GeocoderStatus.OK) {
			latitude = results[0].geometry.location.lat();
			lonitude = results[0].geometry.location.lng();
			map.panTo({lat: latitude, lng: lonitude});
			map.setZoom(11);
		}
		else {
			//idea: make some sort of responsive shake for the search bar if an error occurs
			//alert('Geocode was not successful for the following reason: ' + status);
		}
	});
}

function getHomeTeams(stadium) {
	var tenantSet = [];

	for(var i = 0; i < tenants.length; i++){
		if(tenants[i].stadium === stadium){
			tenantSet.push(tenants[i].name);
		}
	}
	return tenantSet;
}

function testAjax(handleData) {
  $.ajax({
    url:"getvalue.php",
    success:function(data) {
      handleData(data);
    }
  });
}

function getWikipediaInfo(query) {

	var ret;
	var url = 'https://en.wikipedia.org/w/api.php?format=json&action=query&prop=extracts&exintro=&explaintext=&exsentences=10&titles=' + query.toString().replace("&", "%26");;
	url = url.replace(" ", "%20");
	$.ajax({
    url:url,
    type:'GET',
    dataType:'JSONP',
    success: function(data){
				page = data.query.pages;
				var dangKey;
				for(var thing in page)
				{
					dangKey = thing;
					break;
				}
				des = page[dangKey].extract;
				if (des){
					document.getElementById("stadium_description").innerHTML = des + '<a href="#" id="stadium_link" target="_blank"></a>';
					var urlDos = 'https://en.wikipedia.org/wiki/' + query.toString();
					document.getElementById("stadium_link").href = urlDos.replace(" ", "%20");
					document.getElementById("stadium_link").innerHTML = " Learn more >";
				} 
				else {
					document.getElementById("stadium_description").innerHTML = "";
					document.getElementById("stadium_link").innerHTML = "";

				}
    }
	});
}

function openPanel(id) {
	$("#panel").css("visibility", "visible");
	var name = '';
	var city = '';
	var state = '';

	for(var q = 0; q < stadiums.length; q++){
		if(stadiums[q].id === id){
			name = stadiums[q].name;
			city = stadiums[q].city;
			state = stadiums[q].state;
			break;
		}
	}
	if (!name) {
		for(var y = 0; y < locations.length; y++){
			if(locations[y].id === id){
				name = locations[y].name;
				city = locations[y].city;
				state = locations[y].state;
				break;
			}
		}
	}
	
	var color;
	var level;
	var lati = 0;
	var loni = 0;
	$('.street-view').remove();
	$(".stadium-tenant").remove();
	var homeTeams = getHomeTeams(name);
	last_popup_opened.popup.close();
	last_popup_opened = null;
	$("#panel").show();
	document.getElementById("stadium_name").innerHTML = name;
	document.getElementById("stadium_location").innerHTML = city + ', ' + state;
	getWikipediaInfo(name);
	for(var i = 0; i< homeTeams.length; i++){
		var team2;
		for(var j = 0; j < teams.length; j++){
			if( teams[j].name === homeTeams[i]){
				team2 = teams[j];
				break;
			}
		}
		if(team2.level === 'INDEP'){
			level = '';
		}
		else {
			level = ', ' + team2.level;
		}

		switch(team2.level){
			case 'MLB':
				color = "#789EB5";
				break;
			case 'AAA':
				color = "#94C2DF";
				break;
			case 'AA':
				color = "#a5d8f8";
				break;
			case 'A':
				color = "#B7E0F9";
				break;
			case 'Rookie':
				color = "#DFF1FD";
				break;
			case 'INDEP':
				color = "#87d39c";
				break;
			default:
				break;
		}

		$('#panelHeader').after('<div class="stadium-tenant" style="background-color: ' + color + ';">' + team2.name + '<br /><span id="team-league-level">' + team2.league + level + '</span></div>');
		
	}
	for(var p = 0; p < stadiums.length; p++){
		if(stadiums[p].name === name){
			lati =  stadiums[p].lat;
			loni = stadiums[p].lon;
			break;
		}
	}
	if(!lati){
		for(var t = 0; t < locations.length; t++){
			
			if(locations[t].name === name){
				lati =  locations[t].lat;
			    loni = locations[t].lon;
			    break;
			}
		}
	}	
	
	$('#stadium_description').after('<div id="street-container"><img class="street-view" src="https://maps.googleapis.com/maps/api/staticmap?center=' + lati + ',' + loni + '&zoom=16&size=385x385&maptype=satellite"></div>');
}

function toggleMLB() {
	if(mlbToggle){
		for(var c = 0; c < mlbMarkers.length; c++){
			mlbMarkers[c].setMap(null);
		}
		mlbToggle = false;
	} else {
		for(var c = 0; c < mlbMarkers.length; c++){
			mlbMarkers[c].setMap(map);
		}
		mlbToggle = true;
	}
}

function toggleAAA() {
	if(aaaToggle){
		for(var c = 0; c < aaaMarkers.length; c++){
			aaaMarkers[c].setMap(null);
		}
		aaaToggle = false;
	} else {
		for(var c = 0; c < aaaMarkers.length; c++){
			aaaMarkers[c].setMap(map);
		}
		aaaToggle = true;
	}
}

function toggleAA() {
	if(aaToggle){
		for(var c = 0; c < aaMarkers.length; c++){
			aaMarkers[c].setMap(null);
		}
		aaToggle = false;
	} else {
		for(var c = 0; c < aaMarkers.length; c++){
			aaMarkers[c].setMap(map);
		}
		aaToggle = true;
	}
}

function toggleA() {
	if(aToggle){
		for(var c = 0; c < aMarkers.length; c++){
			aMarkers[c].setMap(null);
		}
		aToggle = false;
	} else {
		for(var c = 0; c < aMarkers.length; c++){
			aMarkers[c].setMap(map);
		}
		aToggle = true;
	}
}

function toggleRookie() {
	if(rookieToggle){
		for(var c = 0; c < rookieMarkers.length; c++){
			rookieMarkers[c].setMap(null);
		}
		rookieToggle = false;
	} else {
		for(var c = 0; c < rookieMarkers.length; c++){
			rookieMarkers[c].setMap(map);
		}
		rookieToggle = true;
	}
}

function toggleIndependent() {
	if(independentToggle){
		for(var c = 0; c < independentMarkers.length; c++){
			independentMarkers[c].setMap(null);
		}
		independentToggle = false;
	} else {
		for(var c = 0; c < independentMarkers.length; c++){
			independentMarkers[c].setMap(map);
		}
		independentToggle = true;
	}
}

function toggleLocations() {
	if(locationsToggle){
		for(var c = 0; c < locationsMarkers.length; c++){
			locationsMarkers[c].setMap(null);
		}
		locationsToggle = false;
	} else {
		for(var c = 0; c < locationsMarkers.length; c++){
			locationsMarkers[c].setMap(map);
		}
		locationsToggle = true;
	}
}

function toggleToggles(){
	var e = document.getElementById("filterBar");
	var f = document.getElementById("filterLink");
	if(e.style.display == 'none') {
		f.innerHTML = 'Filter + Key  ╳';
    	e.style.display = 'block';
    }
    else {
    	f.innerHTML = 'Filter + Key ↓';
        e.style.display = 'none';
    }

   //  if ( $( "#filterBar" ).is( ":hidden" ) ) {
   //  	f.innerHTML = 'Filter + Key  ╳';
   //  	$( "#filterBar" ).slideDown(("fast"));
  	// } 
  	// else {
  	// 	f.innerHTML = 'Filter + Key ↓';
   //  	$( "#filterBar" ).hide();
  	// }

}
//-->

function mapAffiliatesForTeam()
{	
	var minorTeam;
	var minorStadium;
	var mlbStadium;
	var mlbLatLon = [2];
	var mlbTeam = document.getElementById('choose-team').value;

	if (mlbTeam === "Default"){
		return;
	}
	else if (mlbTeam == "Clear"){
		for (var w = 0; w < web.length; w++) {
			web[w].setMap(null);
		}
		web = [];
		return;
	}

	var affils = [];
	for (var s = 31; s < teams.length; s++) {
		if (teams[s].affiliation === mlbTeam) {
			minorTeam = teams[s].name
			for (var u = 0; u < tenants.length; u++) {
				if (tenants[u].name === minorTeam) {
					minorStadium = tenants[u].stadium;
					for (var r = 31; r < stadiums.length; r++) {
						if(stadiums[r].name === minorStadium){
							var latlon = [2];
							latlon[0] = stadiums[r].lat;
							latlon[1] = stadiums[r].lon;
							affils.push(latlon);
						}
					}
				}
			}
		}
	}

	// get the coords of the mlb team
	for (var u = 0; u < tenants.length; u++) {
		if (tenants[u].name === mlbTeam) {
			mlbStadium = tenants[u].stadium;
			for (var r = 0; r < stadiums.length; r++) {
				if(stadiums[r].name === mlbStadium){
					mlbLatLon[0] = stadiums[r].lat;
					mlbLatLon[1] = stadiums[r].lon;
				}
			}
		}
	}

	// affils now has all minor league team coords. 
	// and mlbLatLon has the mlb team coords.
	// oy vey...
	for (var v = 0; v < affils.length; v++){
		
		var line = [
    		new google.maps.LatLng(affils[v][0], affils[v][1]),
    		new google.maps.LatLng(mlbLatLon[0], mlbLatLon[1]),
  		];

  		var path = new google.maps.Polyline({
    		path: line,
    		geodesic: true,
    		strokeColor: '#FF0000',
    		strokeOpacity: 1.0,
    		strokeWeight: 2
  		});

  		path.setMap(map);
  		web.push(path); //web holds all of the lines
	}
}

google.maps.event.addDomListener(window, 'load', initialize);
