## Données Tests

[
    {
        "nom": "New York",
        "surnoms": ["Empire City", "The Big Apple"],
        "pays": "États Unis",
        "longitude": "74°00'22 O",
        "lattitude": "40°42'46 N",
        "climat": "Humide subtropical",
        "continent": "Amérique du nord",
        "population": 8468000 ,
        "superficie": 783.8,
        "elevation": 10,
        "infraImportante":[
            {
                "nom": "Empire State Building",
                "adresse": "20 W 34th St."
            },
            {
                "nom":"One World Trade Center",
                "adresse": "285 Fulton St"
            }
        ],
        "anneeFondation": "24/03/1898",
        "dangereux": true,
        "image": "https://media.istockphoto.com/id/1406960186/fr/photo/lhorizon-de-new-york-%C3%A9tats-unis.jpg?s=612x612&w=0&k=20&c=ZBHoWDoiYZVKbJyLqI33AHI_YUcMitNdEoEtOddkI6g="
    },
    {
        "nom": "Tokyo",
        "surnoms": ["Big Mikan", "Edo"],
        "pays": "Japon",
        "longitude": "139°41'30 E",
        "lattitude": "35°41'22 N",
        "climat": "Humide subtropical",
        "continent": "Asie",
        "population": 14264798 ,
        "superficie": 2190.93,
        "elevation": 40,
        "infraImportante":[
            {
                "nom": "Tokyo Skytree",
                "adresse": "1 Chome-1-2 Oshiage, Sumida City"
            },
            {
                "nom":"Palais Imperial",
                "adresse": "1-1 Chiyoda, Chiyoda-ku 100-0001"
            }
        ],
        "anneeFondation": "24/03/1889",
        "dangereux": false,
        "image": "https://media.istockphoto.com/id/1390815938/photo/tokyo-city-in-japan.jpg?s=612x612&w=0&k=20&c=VHiC3TlbXkb-Yf6WUYjh825Y0nGMCTkNUa9j8X8rVfY="
    },
    {
        "nom": "Londre",
        "surnoms": ["The Square Mile", "The Old Smoke"],
        "pays": "Royaume Unis",
        "longitude": "0°07'39 O",
        "lattitude": "51°30'26 N",
        "climat": "Océanique tempéré",
        "continent": "Europe",
        "population": 8799728 ,
        "superficie": 1572,
        "elevation": 11,
        "infraImportante":[{
            "nom": "Big Ben",
            "adresse": "London SW1A 0AA, Royaume-Uni"
        }],
        "anneeFondation": "24/03/0043" ,
        "dangereux": true,
        "image": "https://media.istockphoto.com/id/1294454411/photo/london-symbols-with-big-ben-double-decker-buses-and-red-phone-booth-in-england-uk.jpg?s=612x612&w=0&k=20&c=IX4_XZC-_P60cq9ZZbxw1CbL68hlv1L5-r_vSgEfx4k="
    },
    {
        "nom": "Sydney",
        "surnoms": ["Emerald City", "Harbour City"],
        "pays": "Australie",
        "longitude": "151°12'36 E",
        "lattitude": "33°52'04 S",
        "climat": "Humide subtropical",
        "continent": "Océanie",
        "population": 5297089 ,
        "superficie": 12367,
        "elevation": 3,
        "infraImportante":[{
            "nom": "Opéra de Sydney",
            "adresse": "Bennelong Point, Sydney NSW 2000"
        }],
        "anneeFondation": "26/01/1788",
        "dangereux": false ,
        "image": "https://media.istockphoto.com/id/535455441/photo/view-of-sydney-harbour-australia.jpg?s=612x612&w=0&k=20&c=o7qSiUvYzMp94lYYb7R1ZUAMcEG54byX0bU3UY1z2sQ="
    },
    {
        "nom": "Paris",
        "surnoms": ["La ville-Lumière"],
        "pays": "France",
        "longitude": "2° 21'07 E",
        "lattitude": "48° 51'24 N",
        "climat": "Océanique",
        "continent": "Europe",
        "population": 2145906 ,
        "superficie": 105.40,
        "elevation": 35,
        "infraImportante":[
            {
                "nom": "Tour Eiffel",
                "adresse": "Champ de Mars, 5 Av. Anatole France, 75007 Paris"
            },
            {
                "nom": "Musée du Louvre",
                "adresse": "75001 Paris, France"
            }
        ],
        "anneeFondation": "15/06/1533",
        "dangereux": true,
        "image": "https://media.istockphoto.com/id/1145422105/fr/photo/vue-a%C3%A9rienne-de-la-tour-eiffel-paris.jpg?s=612x612&w=0&k=20&c=uzZ9u2Io4B92oDVeAhyom9zDaMMrdU8HFMl29bV3opU="
    }
]




## About

This project was created with [express-generator-typescript](https://github.com/seanpmaxwell/express-generator-typescript).


## Available Scripts

### `npm run dev`

Run the server in development mode.

### `npm test`

Run all unit-tests with hot-reloading.

### `npm test -- --testFile="name of test file" (i.e. --testFile=Users).`

Run a single unit-test.

### `npm run test:no-reloading`

Run all unit-tests without hot-reloading.

### `npm run lint`

Check for linting errors.

### `npm run build`

Build the project for production.

### `npm start`

Run the production build (Must be built first).

### `npm start -- --env="name of env file" (default is production).`

Run production build with a different env file.


## Additional Notes

- If `npm run dev` gives you issues with bcrypt on MacOS you may need to run: `npm rebuild bcrypt --build-from-source`. 
