import { UserInfo } from "../types/user";

const cardSetMock = [
    {
        "id": 1,
        "externalId": "gym2",
        "name": "HS—Triumphant",
        "series": "HeartGold & SoulSilver",
        "symbol": "https://images.pokemontcg.io/hgss4/symbol.png",
        "logo": "https://images.pokemontcg.io/hgss4/logo.png",
        "price": 50,
        "firstCardImage": "https://images.pokemontcg.io/hgss4/94.png",
        "secondCardImage": "https://images.pokemontcg.io/hgss4/99_hires.png",
        "thirdCardImage": "https://images.pokemontcg.io/hgss4/101_hires.png"
    }
];

const userInfoMock: UserInfo = {
    "username": "kauan",
    "createdDate": "2025-03-31",
    "balance": 100000000000000000000,
    "cardAmount": 3,
    "deckAmount": 3
}

const myCardsMock = [
    {
        "id": 3,
        "name": "Brock's Sandslash",
        "externalCode": "gym2-36",
        "rarity": "UNCOMMON",
        "description": null,
        "types": [
            "FIGHTING"
        ],
        "subTypes": [
            "STAGE_1"
        ],
        "evolvesFrom": null,
        "images": {
            "small": "https://images.pokemontcg.io/gym2/36.png",
            "large": "https://images.pokemontcg.io/gym2/36_hires.png"
        },
        "price": 4.8
    },
    {
        "id": 4,
        "name": "Brock's Graveler",
        "externalCode": "gym2-34",
        "rarity": "UNCOMMON",
        "description": null,
        "types": [
            "FIGHTING"
        ],
        "subTypes": [
            "STAGE_1"
        ],
        "evolvesFrom": null,
        "images": {
            "small": "https://images.pokemontcg.io/gym2/34.png",
            "large": "https://images.pokemontcg.io/gym2/34_hires.png"
        },
        "price": 2.13
    },
    {
        "id": 5,
        "name": "Sabrina's Psyduck",
        "externalCode": "gym2-99",
        "rarity": "COMMON",
        "description": null,
        "types": [
            "WATER"
        ],
        "subTypes": [
            "BASIC"
        ],
        "evolvesFrom": null,
        "images": {
            "small": "https://images.pokemontcg.io/gym2/99.png",
            "large": "https://images.pokemontcg.io/gym2/99_hires.png"
        },
        "price": 2.96
    }
]

const cardSetCardsMock = [
    {
        "cardSet": {
            "id": 1,
            "externalId": "gym2",
            "name": "HS—Triumphant",
            "series": "HeartGold & SoulSilver",
            "symbol": "https://images.pokemontcg.io/hgss4/symbol.png",
            "logo": "https://images.pokemontcg.io/hgss4/logo.png",
            "price": 50,
            "firstCardImage": "https://images.pokemontcg.io/hgss4/94.png",
            "secondCardImage": "https://images.pokemontcg.io/hgss4/99_hires.png",
            "thirdCardImage": "https://images.pokemontcg.io/hgss4/101_hires.png"
        },
        "cards": [
            {
                "id": null,
                "name": "Blaine's Charizard",
                "externalCode": "gym2-2",
                "rarity": "Rare Holo",
                "description": null,
                "types": [
                    "Fire"
                ],
                "subTypes": [
                    "Stage 2"
                ],
                "evolvesFrom": "Blaine's Charmeleon",
                "images": {
                    "small": "https://images.pokemontcg.io/gym2/2.png",
                    "large": "https://images.pokemontcg.io/gym2/2_hires.png"
                },
                "price": 461.21
            },
            {
                "id": null,
                "name": "Rocket's Mewtwo",
                "externalCode": "gym2-14",
                "rarity": "Rare Holo",
                "description": null,
                "types": [
                    "Psychic"
                ],
                "subTypes": [
                    "Basic"
                ],
                "evolvesFrom": null,
                "images": {
                    "small": "https://images.pokemontcg.io/gym2/14.png",
                    "large": "https://images.pokemontcg.io/gym2/14_hires.png"
                },
                "price": 110.79
            },
            {
                "id": null,
                "name": "Blaine's Arcanine",
                "externalCode": "gym2-1",
                "rarity": "Rare Holo",
                "description": null,
                "types": [
                    "Fire"
                ],
                "subTypes": [
                    "Stage 1"
                ],
                "evolvesFrom": "Blaine's Growlithe",
                "images": {
                    "small": "https://images.pokemontcg.io/gym2/1.png",
                    "large": "https://images.pokemontcg.io/gym2/1_hires.png"
                },
                "price": 88.49
            },
            {
                "id": null,
                "name": "Erika's Venusaur",
                "externalCode": "gym2-4",
                "rarity": "Rare Holo",
                "description": null,
                "types": [
                    "Grass"
                ],
                "subTypes": [
                    "Stage 2"
                ],
                "evolvesFrom": "Erika's Ivysaur",
                "images": {
                    "small": "https://images.pokemontcg.io/gym2/4.png",
                    "large": "https://images.pokemontcg.io/gym2/4_hires.png"
                },
                "price": 87.25
            },
            {
                "id": null,
                "name": "Sabrina's Gengar",
                "externalCode": "gym2-29",
                "rarity": "Rare",
                "description": null,
                "types": [
                    "Psychic"
                ],
                "subTypes": [
                    "Stage 2"
                ],
                "evolvesFrom": "Sabrina's Haunter",
                "images": {
                    "small": "https://images.pokemontcg.io/gym2/29.png",
                    "large": "https://images.pokemontcg.io/gym2/29_hires.png"
                },
                "price": 80.83
            },
            {
                "id": null,
                "name": "Lt. Surge's Raichu",
                "externalCode": "gym2-11",
                "rarity": "Rare Holo",
                "description": null,
                "types": [
                    "Lightning"
                ],
                "subTypes": [
                    "Stage 1"
                ],
                "evolvesFrom": "Lt. Surge's Pikachu",
                "images": {
                    "small": "https://images.pokemontcg.io/gym2/11.png",
                    "large": "https://images.pokemontcg.io/gym2/11_hires.png"
                },
                "price": 78.03
            },
            {
                "id": null,
                "name": "Misty's Gyarados",
                "externalCode": "gym2-13",
                "rarity": "Rare Holo",
                "description": null,
                "types": [
                    "Water"
                ],
                "subTypes": [
                    "Stage 1"
                ],
                "evolvesFrom": "Misty's Magikarp",
                "images": {
                    "small": "https://images.pokemontcg.io/gym2/13.png",
                    "large": "https://images.pokemontcg.io/gym2/13_hires.png"
                },
                "price": 76.34
            },
            {
                "id": null,
                "name": "Giovanni's Gyarados",
                "externalCode": "gym2-5",
                "rarity": "Rare Holo",
                "description": null,
                "types": [
                    "Water"
                ],
                "subTypes": [
                    "Stage 1"
                ],
                "evolvesFrom": "Giovanni's Magikarp",
                "images": {
                    "small": "https://images.pokemontcg.io/gym2/5.png",
                    "large": "https://images.pokemontcg.io/gym2/5_hires.png"
                },
                "price": 75.92
            },
            {
                "id": null,
                "name": "Giovanni's Machamp",
                "externalCode": "gym2-6",
                "rarity": "Rare Holo",
                "description": null,
                "types": [
                    "Fighting"
                ],
                "subTypes": [
                    "Stage 2"
                ],
                "evolvesFrom": "Giovanni's Machoke",
                "images": {
                    "small": "https://images.pokemontcg.io/gym2/6.png",
                    "large": "https://images.pokemontcg.io/gym2/6_hires.png"
                },
                "price": 67.66
            },
            {
                "id": null,
                "name": "Giovanni's Nidoking",
                "externalCode": "gym2-7",
                "rarity": "Rare Holo",
                "description": null,
                "types": [
                    "Grass"
                ],
                "subTypes": [
                    "Stage 2"
                ],
                "evolvesFrom": "Giovanni's Nidorino",
                "images": {
                    "small": "https://images.pokemontcg.io/gym2/7.png",
                    "large": "https://images.pokemontcg.io/gym2/7_hires.png"
                },
                "price": 57.68
            },
            {
                "id": null,
                "name": "Sabrina's Alakazam",
                "externalCode": "gym2-16",
                "rarity": "Rare Holo",
                "description": null,
                "types": [
                    "Psychic"
                ],
                "subTypes": [
                    "Stage 2"
                ],
                "evolvesFrom": "Sabrina's Kadabra",
                "images": {
                    "small": "https://images.pokemontcg.io/gym2/16.png",
                    "large": "https://images.pokemontcg.io/gym2/16_hires.png"
                },
                "price": 56.78
            },
            {
                "id": null,
                "name": "Rocket's Zapdos",
                "externalCode": "gym2-15",
                "rarity": "Rare Holo",
                "description": null,
                "types": [
                    "Lightning"
                ],
                "subTypes": [
                    "Basic"
                ],
                "evolvesFrom": null,
                "images": {
                    "small": "https://images.pokemontcg.io/gym2/15.png",
                    "large": "https://images.pokemontcg.io/gym2/15_hires.png"
                },
                "price": 54.6
            },
            {
                "id": null,
                "name": "Koga's Beedrill",
                "externalCode": "gym2-9",
                "rarity": "Rare Holo",
                "description": null,
                "types": [
                    "Grass"
                ],
                "subTypes": [
                    "Stage 2"
                ],
                "evolvesFrom": "Koga's Kakuna",
                "images": {
                    "small": "https://images.pokemontcg.io/gym2/9.png",
                    "large": "https://images.pokemontcg.io/gym2/9_hires.png"
                },
                "price": 51.26
            },
            {
                "id": null,
                "name": "Misty's Golduck",
                "externalCode": "gym2-12",
                "rarity": "Rare Holo",
                "description": null,
                "types": [
                    "Water"
                ],
                "subTypes": [
                    "Stage 1"
                ],
                "evolvesFrom": "Misty's Psyduck",
                "images": {
                    "small": "https://images.pokemontcg.io/gym2/12.png",
                    "large": "https://images.pokemontcg.io/gym2/12_hires.png"
                },
                "price": 45.59
            },
            {
                "id": null,
                "name": "Koga's Ditto",
                "externalCode": "gym2-10",
                "rarity": "Rare Holo",
                "description": null,
                "types": [
                    "Colorless"
                ],
                "subTypes": [
                    "Basic"
                ],
                "evolvesFrom": null,
                "images": {
                    "small": "https://images.pokemontcg.io/gym2/10.png",
                    "large": "https://images.pokemontcg.io/gym2/10_hires.png"
                },
                "price": 40.16
            },
            {
                "id": null,
                "name": "Brock's Ninetales",
                "externalCode": "gym2-3",
                "rarity": "Rare Holo",
                "description": null,
                "types": [
                    "Fire"
                ],
                "subTypes": [
                    "Stage 1"
                ],
                "evolvesFrom": "Brock's Vulpix",
                "images": {
                    "small": "https://images.pokemontcg.io/gym2/3.png",
                    "large": "https://images.pokemontcg.io/gym2/3_hires.png"
                },
                "price": 38.72
            },
            {
                "id": null,
                "name": "Giovanni's Persian",
                "externalCode": "gym2-8",
                "rarity": "Rare Holo",
                "description": null,
                "types": [
                    "Colorless"
                ],
                "subTypes": [
                    "Stage 1"
                ],
                "evolvesFrom": "Giovanni's Meowth",
                "images": {
                    "small": "https://images.pokemontcg.io/gym2/8.png",
                    "large": "https://images.pokemontcg.io/gym2/8_hires.png"
                },
                "price": 35.43
            },
            {
                "id": null,
                "name": "Lt. Surge's Jolteon",
                "externalCode": "gym2-28",
                "rarity": "Rare",
                "description": null,
                "types": [
                    "Lightning"
                ],
                "subTypes": [
                    "Stage 1"
                ],
                "evolvesFrom": "Lt. Surge's Eevee",
                "images": {
                    "small": "https://images.pokemontcg.io/gym2/28.png",
                    "large": "https://images.pokemontcg.io/gym2/28_hires.png"
                },
                "price": 13.83
            },
            {
                "id": null,
                "name": "Giovanni's Pinsir",
                "externalCode": "gym2-24",
                "rarity": "Rare",
                "description": null,
                "types": [
                    "Grass"
                ],
                "subTypes": [
                    "Basic"
                ],
                "evolvesFrom": null,
                "images": {
                    "small": "https://images.pokemontcg.io/gym2/24.png",
                    "large": "https://images.pokemontcg.io/gym2/24_hires.png"
                },
                "price": 12.61
            },
            {
                "id": null,
                "name": "Blaine's Ninetales",
                "externalCode": "gym2-21",
                "rarity": "Rare",
                "description": null,
                "types": [
                    "Fire"
                ],
                "subTypes": [
                    "Stage 1"
                ],
                "evolvesFrom": "Blaine's Vulpix",
                "images": {
                    "small": "https://images.pokemontcg.io/gym2/21.png",
                    "large": "https://images.pokemontcg.io/gym2/21_hires.png"
                },
                "price": 11.56
            }
        ],
        "totalCount": 95
    },
    {
        "cardSet": {
            "id": 1,
            "externalId": "gym2",
            "name": "HS—Triumphant",
            "series": "HeartGold & SoulSilver",
            "symbol": "https://images.pokemontcg.io/hgss4/symbol.png",
            "logo": "https://images.pokemontcg.io/hgss4/logo.png",
            "price": 50,
            "firstCardImage": "https://images.pokemontcg.io/hgss4/94.png",
            "secondCardImage": "https://images.pokemontcg.io/hgss4/99_hires.png",
            "thirdCardImage": "https://images.pokemontcg.io/hgss4/101_hires.png"
        },
        "cards": [
            {
                "id": null,
                "name": "Giovanni's Nidoqueen",
                "externalCode": "gym2-23",
                "rarity": "Rare",
                "description": null,
                "types": [
                    "Grass"
                ],
                "subTypes": [
                    "Stage 2"
                ],
                "evolvesFrom": "Giovanni's Nidorina",
                "images": {
                    "small": "https://images.pokemontcg.io/gym2/23.png",
                    "large": "https://images.pokemontcg.io/gym2/23_hires.png"
                },
                "price": 10.93
            },
            {
                "id": null,
                "name": "Koga's Pidgeotto",
                "externalCode": "gym2-27",
                "rarity": "Rare",
                "description": null,
                "types": [
                    "Colorless"
                ],
                "subTypes": [
                    "Stage 1"
                ],
                "evolvesFrom": "Koga's Pidgey",
                "images": {
                    "small": "https://images.pokemontcg.io/gym2/27.png",
                    "large": "https://images.pokemontcg.io/gym2/27_hires.png"
                },
                "price": 10.75
            },
            {
                "id": null,
                "name": "Erika's Bulbasaur",
                "externalCode": "gym2-39",
                "rarity": "Uncommon",
                "description": null,
                "types": [
                    "Grass"
                ],
                "subTypes": [
                    "Basic"
                ],
                "evolvesFrom": null,
                "images": {
                    "small": "https://images.pokemontcg.io/gym2/39.png",
                    "large": "https://images.pokemontcg.io/gym2/39_hires.png"
                },
                "price": 8.79
            },
            {
                "id": null,
                "name": "Koga's Arbok",
                "externalCode": "gym2-25",
                "rarity": "Rare",
                "description": null,
                "types": [
                    "Grass"
                ],
                "subTypes": [
                    "Stage 1"
                ],
                "evolvesFrom": "Koga's Ekans",
                "images": {
                    "small": "https://images.pokemontcg.io/gym2/25.png",
                    "large": "https://images.pokemontcg.io/gym2/25_hires.png"
                },
                "price": 8.37
            },
            {
                "id": null,
                "name": "Koga's Muk",
                "externalCode": "gym2-26",
                "rarity": "Rare",
                "description": null,
                "types": [
                    "Grass"
                ],
                "subTypes": [
                    "Stage 1"
                ],
                "evolvesFrom": "Koga's Grimer",
                "images": {
                    "small": "https://images.pokemontcg.io/gym2/26.png",
                    "large": "https://images.pokemontcg.io/gym2/26_hires.png"
                },
                "price": 8.28
            },
            {
                "id": null,
                "name": "Erika's Ivysaur",
                "externalCode": "gym2-41",
                "rarity": "Uncommon",
                "description": null,
                "types": [
                    "Grass"
                ],
                "subTypes": [
                    "Stage 1"
                ],
                "evolvesFrom": "Erika's Bulbasaur",
                "images": {
                    "small": "https://images.pokemontcg.io/gym2/41.png",
                    "large": "https://images.pokemontcg.io/gym2/41_hires.png"
                },
                "price": 7.69
            },
            {
                "id": null,
                "name": "Brock's Dugtrio",
                "externalCode": "gym2-22",
                "rarity": "Rare",
                "description": null,
                "types": [
                    "Fighting"
                ],
                "subTypes": [
                    "Stage 1"
                ],
                "evolvesFrom": "Brock's Diglett",
                "images": {
                    "small": "https://images.pokemontcg.io/gym2/22.png",
                    "large": "https://images.pokemontcg.io/gym2/22_hires.png"
                },
                "price": 7.49
            },
            {
                "id": null,
                "name": "Lt. Surge's Eevee",
                "externalCode": "gym2-51",
                "rarity": "Uncommon",
                "description": null,
                "types": [
                    "Colorless"
                ],
                "subTypes": [
                    "Basic"
                ],
                "evolvesFrom": null,
                "images": {
                    "small": "https://images.pokemontcg.io/gym2/51.png",
                    "large": "https://images.pokemontcg.io/gym2/51_hires.png"
                },
                "price": 6.72
            },
            {
                "id": null,
                "name": "Sabrina's Golduck",
                "externalCode": "gym2-30",
                "rarity": "Rare",
                "description": null,
                "types": [
                    "Water"
                ],
                "subTypes": [
                    "Stage 1"
                ],
                "evolvesFrom": "Sabrina's Psyduck",
                "images": {
                    "small": "https://images.pokemontcg.io/gym2/30.png",
                    "large": "https://images.pokemontcg.io/gym2/30_hires.png"
                },
                "price": 6.69
            },
            {
                "id": null,
                "name": "Lt. Surge's Pikachu",
                "externalCode": "gym2-84",
                "rarity": "Common",
                "description": null,
                "types": [
                    "Lightning"
                ],
                "subTypes": [
                    "Basic"
                ],
                "evolvesFrom": null,
                "images": {
                    "small": "https://images.pokemontcg.io/gym2/84.png",
                    "large": "https://images.pokemontcg.io/gym2/84_hires.png"
                },
                "price": 5.47
            },
            {
                "id": null,
                "name": "Brock's Sandslash",
                "externalCode": "gym2-36",
                "rarity": "Uncommon",
                "description": null,
                "types": [
                    "Fighting"
                ],
                "subTypes": [
                    "Stage 1"
                ],
                "evolvesFrom": "Brock's Sandshrew",
                "images": {
                    "small": "https://images.pokemontcg.io/gym2/36.png",
                    "large": "https://images.pokemontcg.io/gym2/36_hires.png"
                },
                "price": 5.18
            },
            {
                "id": null,
                "name": "Blaine's Charmeleon",
                "externalCode": "gym2-31",
                "rarity": "Uncommon",
                "description": null,
                "types": [
                    "Fire"
                ],
                "subTypes": [
                    "Stage 1"
                ],
                "evolvesFrom": "Blaine's Charmander",
                "images": {
                    "small": "https://images.pokemontcg.io/gym2/31.png",
                    "large": "https://images.pokemontcg.io/gym2/31_hires.png"
                },
                "price": 4.93
            },
            {
                "id": null,
                "name": "Brock's Vulpix",
                "externalCode": "gym2-37",
                "rarity": "Uncommon",
                "description": null,
                "types": [
                    "Fire"
                ],
                "subTypes": [
                    "Basic"
                ],
                "evolvesFrom": null,
                "images": {
                    "small": "https://images.pokemontcg.io/gym2/37.png",
                    "large": "https://images.pokemontcg.io/gym2/37_hires.png"
                },
                "price": 4.54
            },
            {
                "id": null,
                "name": "Sabrina's Haunter",
                "externalCode": "gym2-55",
                "rarity": "Uncommon",
                "description": null,
                "types": [
                    "Psychic"
                ],
                "subTypes": [
                    "Stage 1"
                ],
                "evolvesFrom": "Sabrina's Gastly",
                "images": {
                    "small": "https://images.pokemontcg.io/gym2/55.png",
                    "large": "https://images.pokemontcg.io/gym2/55_hires.png"
                },
                "price": 4
            },
            {
                "id": null,
                "name": "Erika's Clefairy",
                "externalCode": "gym2-40",
                "rarity": "Uncommon",
                "description": null,
                "types": [
                    "Colorless"
                ],
                "subTypes": [
                    "Basic"
                ],
                "evolvesFrom": null,
                "images": {
                    "small": "https://images.pokemontcg.io/gym2/40.png",
                    "large": "https://images.pokemontcg.io/gym2/40_hires.png"
                },
                "price": 3.91
            },
            {
                "id": null,
                "name": "Giovanni's Meowth",
                "externalCode": "gym2-43",
                "rarity": "Uncommon",
                "description": null,
                "types": [
                    "Colorless"
                ],
                "subTypes": [
                    "Basic"
                ],
                "evolvesFrom": null,
                "images": {
                    "small": "https://images.pokemontcg.io/gym2/43.png",
                    "large": "https://images.pokemontcg.io/gym2/43_hires.png"
                },
                "price": 3.7
            },
            {
                "id": null,
                "name": "Sabrina's Kadabra",
                "externalCode": "gym2-58",
                "rarity": "Uncommon",
                "description": null,
                "types": [
                    "Psychic"
                ],
                "subTypes": [
                    "Stage 1"
                ],
                "evolvesFrom": "Sabrina's Abra",
                "images": {
                    "small": "https://images.pokemontcg.io/gym2/58.png",
                    "large": "https://images.pokemontcg.io/gym2/58_hires.png"
                },
                "price": 3.54
            },
            {
                "id": null,
                "name": "Sabrina's Hypno",
                "externalCode": "gym2-56",
                "rarity": "Uncommon",
                "description": null,
                "types": [
                    "Psychic"
                ],
                "subTypes": [
                    "Stage 1"
                ],
                "evolvesFrom": "Sabrina's Drowzee",
                "images": {
                    "small": "https://images.pokemontcg.io/gym2/56.png",
                    "large": "https://images.pokemontcg.io/gym2/56_hires.png"
                },
                "price": 3.51
            },
            {
                "id": null,
                "name": "Sabrina's Gastly",
                "externalCode": "gym2-97",
                "rarity": "Common",
                "description": null,
                "types": [
                    "Psychic"
                ],
                "subTypes": [
                    "Basic"
                ],
                "evolvesFrom": null,
                "images": {
                    "small": "https://images.pokemontcg.io/gym2/97.png",
                    "large": "https://images.pokemontcg.io/gym2/97_hires.png"
                },
                "price": 3.29
            },
            {
                "id": null,
                "name": "Giovanni's Machoke",
                "externalCode": "gym2-42",
                "rarity": "Uncommon",
                "description": null,
                "types": [
                    "Fighting"
                ],
                "subTypes": [
                    "Stage 1"
                ],
                "evolvesFrom": "Giovanni's Machop",
                "images": {
                    "small": "https://images.pokemontcg.io/gym2/42.png",
                    "large": "https://images.pokemontcg.io/gym2/42_hires.png"
                },
                "price": 3.21
            }
        ],
        "totalCount": 95
    },
    {
        "cardSet": {
            "id": 1,
            "externalId": "gym2",
            "name": "HS—Triumphant",
            "series": "HeartGold & SoulSilver",
            "symbol": "https://images.pokemontcg.io/hgss4/symbol.png",
            "logo": "https://images.pokemontcg.io/hgss4/logo.png",
            "price": 50,
            "firstCardImage": "https://images.pokemontcg.io/hgss4/94.png",
            "secondCardImage": "https://images.pokemontcg.io/hgss4/99_hires.png",
            "thirdCardImage": "https://images.pokemontcg.io/hgss4/101_hires.png"
        },
        "cards": [
            {
                "id": null,
                "name": "Brock's Primeape",
                "externalCode": "gym2-35",
                "rarity": "Uncommon",
                "description": null,
                "types": [
                    "Fighting"
                ],
                "subTypes": [
                    "Stage 1"
                ],
                "evolvesFrom": "Brock's Mankey",
                "images": {
                    "small": "https://images.pokemontcg.io/gym2/35.png",
                    "large": "https://images.pokemontcg.io/gym2/35_hires.png"
                },
                "price": 3.13
            },
            {
                "id": null,
                "name": "Misty's Dewgong",
                "externalCode": "gym2-54",
                "rarity": "Uncommon",
                "description": null,
                "types": [
                    "Water"
                ],
                "subTypes": [
                    "Stage 1"
                ],
                "evolvesFrom": "Misty's Seel",
                "images": {
                    "small": "https://images.pokemontcg.io/gym2/54.png",
                    "large": "https://images.pokemontcg.io/gym2/54_hires.png"
                },
                "price": 3.09
            },
            {
                "id": null,
                "name": "Sabrina's Mr. Mime",
                "externalCode": "gym2-59",
                "rarity": "Uncommon",
                "description": null,
                "types": [
                    "Psychic"
                ],
                "subTypes": [
                    "Basic"
                ],
                "evolvesFrom": null,
                "images": {
                    "small": "https://images.pokemontcg.io/gym2/59.png",
                    "large": "https://images.pokemontcg.io/gym2/59_hires.png"
                },
                "price": 2.98
            },
            {
                "id": null,
                "name": "Koga's Pidgey",
                "externalCode": "gym2-49",
                "rarity": "Uncommon",
                "description": null,
                "types": [
                    "Colorless"
                ],
                "subTypes": [
                    "Basic"
                ],
                "evolvesFrom": null,
                "images": {
                    "small": "https://images.pokemontcg.io/gym2/49.png",
                    "large": "https://images.pokemontcg.io/gym2/49_hires.png"
                },
                "price": 2.95
            },
            {
                "id": null,
                "name": "Sabrina's Psyduck",
                "externalCode": "gym2-99",
                "rarity": "Common",
                "description": null,
                "types": [
                    "Water"
                ],
                "subTypes": [
                    "Basic"
                ],
                "evolvesFrom": null,
                "images": {
                    "small": "https://images.pokemontcg.io/gym2/99.png",
                    "large": "https://images.pokemontcg.io/gym2/99_hires.png"
                },
                "price": 2.91
            },
            {
                "id": null,
                "name": "Blaine's Rapidash",
                "externalCode": "gym2-33",
                "rarity": "Uncommon",
                "description": null,
                "types": [
                    "Fire"
                ],
                "subTypes": [
                    "Stage 1"
                ],
                "evolvesFrom": "Blaine's Ponyta",
                "images": {
                    "small": "https://images.pokemontcg.io/gym2/33.png",
                    "large": "https://images.pokemontcg.io/gym2/33_hires.png"
                },
                "price": 2.87
            },
            {
                "id": null,
                "name": "Blaine's Charmander",
                "externalCode": "gym2-60",
                "rarity": "Common",
                "description": null,
                "types": [
                    "Fire"
                ],
                "subTypes": [
                    "Basic"
                ],
                "evolvesFrom": null,
                "images": {
                    "small": "https://images.pokemontcg.io/gym2/60.png",
                    "large": "https://images.pokemontcg.io/gym2/60_hires.png"
                },
                "price": 2.8
            },
            {
                "id": null,
                "name": "Erika's Bellsprout",
                "externalCode": "gym2-38",
                "rarity": "Uncommon",
                "description": null,
                "types": [
                    "Grass"
                ],
                "subTypes": [
                    "Basic"
                ],
                "evolvesFrom": null,
                "images": {
                    "small": "https://images.pokemontcg.io/gym2/38.png",
                    "large": "https://images.pokemontcg.io/gym2/38_hires.png"
                },
                "price": 2.66
            },
            {
                "id": null,
                "name": "Giovanni's Nidorina",
                "externalCode": "gym2-44",
                "rarity": "Uncommon",
                "description": null,
                "types": [
                    "Grass"
                ],
                "subTypes": [
                    "Stage 1"
                ],
                "evolvesFrom": "Giovanni's Nidoran ♀",
                "images": {
                    "small": "https://images.pokemontcg.io/gym2/44.png",
                    "large": "https://images.pokemontcg.io/gym2/44_hires.png"
                },
                "price": 2.54
            },
            {
                "id": null,
                "name": "Sabrina's Jynx",
                "externalCode": "gym2-57",
                "rarity": "Uncommon",
                "description": null,
                "types": [
                    "Psychic"
                ],
                "subTypes": [
                    "Basic"
                ],
                "evolvesFrom": null,
                "images": {
                    "small": "https://images.pokemontcg.io/gym2/57.png",
                    "large": "https://images.pokemontcg.io/gym2/57_hires.png"
                },
                "price": 2.51
            },
            {
                "id": null,
                "name": "Misty's Psyduck",
                "externalCode": "gym2-90",
                "rarity": "Common",
                "description": null,
                "types": [
                    "Water"
                ],
                "subTypes": [
                    "Basic"
                ],
                "evolvesFrom": null,
                "images": {
                    "small": "https://images.pokemontcg.io/gym2/90.png",
                    "large": "https://images.pokemontcg.io/gym2/90_hires.png"
                },
                "price": 2.5
            },
            {
                "id": null,
                "name": "Koga's Weezing",
                "externalCode": "gym2-50",
                "rarity": "Uncommon",
                "description": null,
                "types": [
                    "Grass"
                ],
                "subTypes": [
                    "Stage 1"
                ],
                "evolvesFrom": "Koga's Koffing",
                "images": {
                    "small": "https://images.pokemontcg.io/gym2/50.png",
                    "large": "https://images.pokemontcg.io/gym2/50_hires.png"
                },
                "price": 2.49
            },
            {
                "id": null,
                "name": "Sabrina's Abra",
                "externalCode": "gym2-93",
                "rarity": "Common",
                "description": null,
                "types": [
                    "Psychic"
                ],
                "subTypes": [
                    "Basic"
                ],
                "evolvesFrom": null,
                "images": {
                    "small": "https://images.pokemontcg.io/gym2/93.png",
                    "large": "https://images.pokemontcg.io/gym2/93_hires.png"
                },
                "price": 2.44
            },
            {
                "id": null,
                "name": "Lt. Surge's Raticate",
                "externalCode": "gym2-53",
                "rarity": "Uncommon",
                "description": null,
                "types": [
                    "Colorless"
                ],
                "subTypes": [
                    "Stage 1"
                ],
                "evolvesFrom": "Lt. Surge's Rattata",
                "images": {
                    "small": "https://images.pokemontcg.io/gym2/53.png",
                    "large": "https://images.pokemontcg.io/gym2/53_hires.png"
                },
                "price": 2.4
            },
            {
                "id": null,
                "name": "Koga's Koffing",
                "externalCode": "gym2-48",
                "rarity": "Uncommon",
                "description": null,
                "types": [
                    "Grass"
                ],
                "subTypes": [
                    "Basic"
                ],
                "evolvesFrom": null,
                "images": {
                    "small": "https://images.pokemontcg.io/gym2/48.png",
                    "large": "https://images.pokemontcg.io/gym2/48_hires.png"
                },
                "price": 2.38
            },
            {
                "id": null,
                "name": "Brock's Graveler",
                "externalCode": "gym2-34",
                "rarity": "Uncommon",
                "description": null,
                "types": [
                    "Fighting"
                ],
                "subTypes": [
                    "Stage 1"
                ],
                "evolvesFrom": "Brock's Geodude",
                "images": {
                    "small": "https://images.pokemontcg.io/gym2/34.png",
                    "large": "https://images.pokemontcg.io/gym2/34_hires.png"
                },
                "price": 2.34
            },
            {
                "id": null,
                "name": "Giovanni's Nidorino",
                "externalCode": "gym2-45",
                "rarity": "Uncommon",
                "description": null,
                "types": [
                    "Grass"
                ],
                "subTypes": [
                    "Stage 1"
                ],
                "evolvesFrom": "Giovanni's Nidoran ♂",
                "images": {
                    "small": "https://images.pokemontcg.io/gym2/45.png",
                    "large": "https://images.pokemontcg.io/gym2/45_hires.png"
                },
                "price": 2.3
            },
            {
                "id": null,
                "name": "Blaine's Dodrio",
                "externalCode": "gym2-32",
                "rarity": "Uncommon",
                "description": null,
                "types": [
                    "Colorless"
                ],
                "subTypes": [
                    "Stage 1"
                ],
                "evolvesFrom": "Blaine's Doduo",
                "images": {
                    "small": "https://images.pokemontcg.io/gym2/32.png",
                    "large": "https://images.pokemontcg.io/gym2/32_hires.png"
                },
                "price": 2.2
            },
            {
                "id": null,
                "name": "Lt. Surge's Electrode",
                "externalCode": "gym2-52",
                "rarity": "Uncommon",
                "description": null,
                "types": [
                    "Lightning"
                ],
                "subTypes": [
                    "Stage 1"
                ],
                "evolvesFrom": "Lt. Surge's Voltorb",
                "images": {
                    "small": "https://images.pokemontcg.io/gym2/52.png",
                    "large": "https://images.pokemontcg.io/gym2/52_hires.png"
                },
                "price": 2.14
            },
            {
                "id": null,
                "name": "Koga's Golbat",
                "externalCode": "gym2-46",
                "rarity": "Uncommon",
                "description": null,
                "types": [
                    "Grass"
                ],
                "subTypes": [
                    "Stage 1"
                ],
                "evolvesFrom": "Koga's Zubat",
                "images": {
                    "small": "https://images.pokemontcg.io/gym2/46.png",
                    "large": "https://images.pokemontcg.io/gym2/46_hires.png"
                },
                "price": 2.12
            }
        ],
        "totalCount": 95
    },
    {
        "cardSet": {
            "id": 1,
            "externalId": "gym2",
            "name": "HS—Triumphant",
            "series": "HeartGold & SoulSilver",
            "symbol": "https://images.pokemontcg.io/hgss4/symbol.png",
            "logo": "https://images.pokemontcg.io/hgss4/logo.png",
            "price": 50,
            "firstCardImage": "https://images.pokemontcg.io/hgss4/94.png",
            "secondCardImage": "https://images.pokemontcg.io/hgss4/99_hires.png",
            "thirdCardImage": "https://images.pokemontcg.io/hgss4/101_hires.png"
        },
        "cards": [
            {
                "id": null,
                "name": "Sabrina's Abra",
                "externalCode": "gym2-94",
                "rarity": "Common",
                "description": null,
                "types": [
                    "Psychic"
                ],
                "subTypes": [
                    "Basic"
                ],
                "evolvesFrom": null,
                "images": {
                    "small": "https://images.pokemontcg.io/gym2/94.png",
                    "large": "https://images.pokemontcg.io/gym2/94_hires.png"
                },
                "price": 2.09
            },
            {
                "id": null,
                "name": "Misty's Magikarp",
                "externalCode": "gym2-88",
                "rarity": "Common",
                "description": null,
                "types": [
                    "Water"
                ],
                "subTypes": [
                    "Basic"
                ],
                "evolvesFrom": null,
                "images": {
                    "small": "https://images.pokemontcg.io/gym2/88.png",
                    "large": "https://images.pokemontcg.io/gym2/88_hires.png"
                },
                "price": 2.08
            },
            {
                "id": null,
                "name": "Sabrina's Gastly",
                "externalCode": "gym2-96",
                "rarity": "Common",
                "description": null,
                "types": [
                    "Psychic"
                ],
                "subTypes": [
                    "Basic"
                ],
                "evolvesFrom": null,
                "images": {
                    "small": "https://images.pokemontcg.io/gym2/96.png",
                    "large": "https://images.pokemontcg.io/gym2/96_hires.png"
                },
                "price": 1.99
            },
            {
                "id": null,
                "name": "Giovanni's Magikarp",
                "externalCode": "gym2-73",
                "rarity": "Common",
                "description": null,
                "types": [
                    "Water"
                ],
                "subTypes": [
                    "Basic"
                ],
                "evolvesFrom": null,
                "images": {
                    "small": "https://images.pokemontcg.io/gym2/73.png",
                    "large": "https://images.pokemontcg.io/gym2/73_hires.png"
                },
                "price": 1.74
            },
            {
                "id": null,
                "name": "Blaine's Vulpix",
                "externalCode": "gym2-66",
                "rarity": "Common",
                "description": null,
                "types": [
                    "Fire"
                ],
                "subTypes": [
                    "Basic"
                ],
                "evolvesFrom": null,
                "images": {
                    "small": "https://images.pokemontcg.io/gym2/66.png",
                    "large": "https://images.pokemontcg.io/gym2/66_hires.png"
                },
                "price": 1.52
            },
            {
                "id": null,
                "name": "Blaine's Growlithe",
                "externalCode": "gym2-62",
                "rarity": "Common",
                "description": null,
                "types": [
                    "Fire"
                ],
                "subTypes": [
                    "Basic"
                ],
                "evolvesFrom": null,
                "images": {
                    "small": "https://images.pokemontcg.io/gym2/62.png",
                    "large": "https://images.pokemontcg.io/gym2/62_hires.png"
                },
                "price": 1.49
            },
            {
                "id": null,
                "name": "Koga's Kakuna",
                "externalCode": "gym2-47",
                "rarity": "Uncommon",
                "description": null,
                "types": [
                    "Grass"
                ],
                "subTypes": [
                    "Stage 1"
                ],
                "evolvesFrom": "Koga's Weedle",
                "images": {
                    "small": "https://images.pokemontcg.io/gym2/47.png",
                    "large": "https://images.pokemontcg.io/gym2/47_hires.png"
                },
                "price": 1.47
            },
            {
                "id": null,
                "name": "Erika's Oddish",
                "externalCode": "gym2-70",
                "rarity": "Common",
                "description": null,
                "types": [
                    "Grass"
                ],
                "subTypes": [
                    "Basic"
                ],
                "evolvesFrom": null,
                "images": {
                    "small": "https://images.pokemontcg.io/gym2/70.png",
                    "large": "https://images.pokemontcg.io/gym2/70_hires.png"
                },
                "price": 1.42
            },
            {
                "id": null,
                "name": "Giovanni's Meowth",
                "externalCode": "gym2-74",
                "rarity": "Common",
                "description": null,
                "types": [
                    "Colorless"
                ],
                "subTypes": [
                    "Basic"
                ],
                "evolvesFrom": null,
                "images": {
                    "small": "https://images.pokemontcg.io/gym2/74.png",
                    "large": "https://images.pokemontcg.io/gym2/74_hires.png"
                },
                "price": 1.31
            },
            {
                "id": null,
                "name": "Sabrina's Porygon",
                "externalCode": "gym2-98",
                "rarity": "Common",
                "description": null,
                "types": [
                    "Colorless"
                ],
                "subTypes": [
                    "Basic"
                ],
                "evolvesFrom": null,
                "images": {
                    "small": "https://images.pokemontcg.io/gym2/98.png",
                    "large": "https://images.pokemontcg.io/gym2/98_hires.png"
                },
                "price": 1.31
            },
            {
                "id": null,
                "name": "Erika's Jigglypuff",
                "externalCode": "gym2-69",
                "rarity": "Common",
                "description": null,
                "types": [
                    "Colorless"
                ],
                "subTypes": [
                    "Basic"
                ],
                "evolvesFrom": null,
                "images": {
                    "small": "https://images.pokemontcg.io/gym2/69.png",
                    "large": "https://images.pokemontcg.io/gym2/69_hires.png"
                },
                "price": 1.3
            },
            {
                "id": null,
                "name": "Misty's Seel",
                "externalCode": "gym2-91",
                "rarity": "Common",
                "description": null,
                "types": [
                    "Water"
                ],
                "subTypes": [
                    "Basic"
                ],
                "evolvesFrom": null,
                "images": {
                    "small": "https://images.pokemontcg.io/gym2/91.png",
                    "large": "https://images.pokemontcg.io/gym2/91_hires.png"
                },
                "price": 1.07
            },
            {
                "id": null,
                "name": "Lt. Surge's Rattata",
                "externalCode": "gym2-85",
                "rarity": "Common",
                "description": null,
                "types": [
                    "Colorless"
                ],
                "subTypes": [
                    "Basic"
                ],
                "evolvesFrom": null,
                "images": {
                    "small": "https://images.pokemontcg.io/gym2/85.png",
                    "large": "https://images.pokemontcg.io/gym2/85_hires.png"
                },
                "price": 1.06
            },
            {
                "id": null,
                "name": "Misty's Staryu",
                "externalCode": "gym2-92",
                "rarity": "Common",
                "description": null,
                "types": [
                    "Water"
                ],
                "subTypes": [
                    "Basic"
                ],
                "evolvesFrom": null,
                "images": {
                    "small": "https://images.pokemontcg.io/gym2/92.png",
                    "large": "https://images.pokemontcg.io/gym2/92_hires.png"
                },
                "price": 0.99
            },
            {
                "id": null,
                "name": "Koga's Tangela",
                "externalCode": "gym2-81",
                "rarity": "Common",
                "description": null,
                "types": [
                    "Grass"
                ],
                "subTypes": [
                    "Basic"
                ],
                "evolvesFrom": null,
                "images": {
                    "small": "https://images.pokemontcg.io/gym2/81.png",
                    "large": "https://images.pokemontcg.io/gym2/81_hires.png"
                },
                "price": 0.99
            },
            {
                "id": null,
                "name": "Misty's Poliwag",
                "externalCode": "gym2-89",
                "rarity": "Common",
                "description": null,
                "types": [
                    "Water"
                ],
                "subTypes": [
                    "Basic"
                ],
                "evolvesFrom": null,
                "images": {
                    "small": "https://images.pokemontcg.io/gym2/89.png",
                    "large": "https://images.pokemontcg.io/gym2/89_hires.png"
                },
                "price": 0.98
            },
            {
                "id": null,
                "name": "Brock's Geodude",
                "externalCode": "gym2-68",
                "rarity": "Common",
                "description": null,
                "types": [
                    "Fighting"
                ],
                "subTypes": [
                    "Basic"
                ],
                "evolvesFrom": null,
                "images": {
                    "small": "https://images.pokemontcg.io/gym2/68.png",
                    "large": "https://images.pokemontcg.io/gym2/68_hires.png"
                },
                "price": 0.96
            },
            {
                "id": null,
                "name": "Misty's Horsea",
                "externalCode": "gym2-87",
                "rarity": "Common",
                "description": null,
                "types": [
                    "Water"
                ],
                "subTypes": [
                    "Basic"
                ],
                "evolvesFrom": null,
                "images": {
                    "small": "https://images.pokemontcg.io/gym2/87.png",
                    "large": "https://images.pokemontcg.io/gym2/87_hires.png"
                },
                "price": 0.94
            },
            {
                "id": null,
                "name": "Erika's Paras",
                "externalCode": "gym2-71",
                "rarity": "Common",
                "description": null,
                "types": [
                    "Grass"
                ],
                "subTypes": [
                    "Basic"
                ],
                "evolvesFrom": null,
                "images": {
                    "small": "https://images.pokemontcg.io/gym2/71.png",
                    "large": "https://images.pokemontcg.io/gym2/71_hires.png"
                },
                "price": 0.93
            },
            {
                "id": null,
                "name": "Koga's Koffing",
                "externalCode": "gym2-79",
                "rarity": "Common",
                "description": null,
                "types": [
                    "Grass"
                ],
                "subTypes": [
                    "Basic"
                ],
                "evolvesFrom": null,
                "images": {
                    "small": "https://images.pokemontcg.io/gym2/79.png",
                    "large": "https://images.pokemontcg.io/gym2/79_hires.png"
                },
                "price": 0.92
            }
        ],
        "totalCount": 95
    },
    {
        "cardSet": {
            "id": 1,
            "externalId": "gym2",
            "name": "HS—Triumphant",
            "series": "HeartGold & SoulSilver",
            "symbol": "https://images.pokemontcg.io/hgss4/symbol.png",
            "logo": "https://images.pokemontcg.io/hgss4/logo.png",
            "price": 50,
            "firstCardImage": "https://images.pokemontcg.io/hgss4/94.png",
            "secondCardImage": "https://images.pokemontcg.io/hgss4/99_hires.png",
            "thirdCardImage": "https://images.pokemontcg.io/hgss4/101_hires.png"
        },
        "cards": [
            {
                "id": null,
                "name": "Blaine's Rhyhorn",
                "externalCode": "gym2-65",
                "rarity": "Common",
                "description": null,
                "types": [
                    "Fighting"
                ],
                "subTypes": [
                    "Basic"
                ],
                "evolvesFrom": null,
                "images": {
                    "small": "https://images.pokemontcg.io/gym2/65.png",
                    "large": "https://images.pokemontcg.io/gym2/65_hires.png"
                },
                "price": 0.9
            },
            {
                "id": null,
                "name": "Koga's Zubat",
                "externalCode": "gym2-83",
                "rarity": "Common",
                "description": null,
                "types": [
                    "Grass"
                ],
                "subTypes": [
                    "Basic"
                ],
                "evolvesFrom": null,
                "images": {
                    "small": "https://images.pokemontcg.io/gym2/83.png",
                    "large": "https://images.pokemontcg.io/gym2/83_hires.png"
                },
                "price": 0.89
            },
            {
                "id": null,
                "name": "Giovanni's Machop",
                "externalCode": "gym2-72",
                "rarity": "Common",
                "description": null,
                "types": [
                    "Fighting"
                ],
                "subTypes": [
                    "Basic"
                ],
                "evolvesFrom": null,
                "images": {
                    "small": "https://images.pokemontcg.io/gym2/72.png",
                    "large": "https://images.pokemontcg.io/gym2/72_hires.png"
                },
                "price": 0.89
            },
            {
                "id": null,
                "name": "Giovanni's Nidoran ♂",
                "externalCode": "gym2-76",
                "rarity": "Common",
                "description": null,
                "types": [
                    "Grass"
                ],
                "subTypes": [
                    "Basic"
                ],
                "evolvesFrom": null,
                "images": {
                    "small": "https://images.pokemontcg.io/gym2/76.png",
                    "large": "https://images.pokemontcg.io/gym2/76_hires.png"
                },
                "price": 0.88
            },
            {
                "id": null,
                "name": "Blaine's Mankey",
                "externalCode": "gym2-63",
                "rarity": "Common",
                "description": null,
                "types": [
                    "Fighting"
                ],
                "subTypes": [
                    "Basic"
                ],
                "evolvesFrom": null,
                "images": {
                    "small": "https://images.pokemontcg.io/gym2/63.png",
                    "large": "https://images.pokemontcg.io/gym2/63_hires.png"
                },
                "price": 0.87
            },
            {
                "id": null,
                "name": "Sabrina's Drowzee",
                "externalCode": "gym2-95",
                "rarity": "Common",
                "description": null,
                "types": [
                    "Psychic"
                ],
                "subTypes": [
                    "Basic"
                ],
                "evolvesFrom": null,
                "images": {
                    "small": "https://images.pokemontcg.io/gym2/95.png",
                    "large": "https://images.pokemontcg.io/gym2/95_hires.png"
                },
                "price": 0.85
            },
            {
                "id": null,
                "name": "Brock's Diglett",
                "externalCode": "gym2-67",
                "rarity": "Common",
                "description": null,
                "types": [
                    "Fighting"
                ],
                "subTypes": [
                    "Basic"
                ],
                "evolvesFrom": null,
                "images": {
                    "small": "https://images.pokemontcg.io/gym2/67.png",
                    "large": "https://images.pokemontcg.io/gym2/67_hires.png"
                },
                "price": 0.85
            },
            {
                "id": null,
                "name": "Giovanni's Nidoran ♀",
                "externalCode": "gym2-75",
                "rarity": "Common",
                "description": null,
                "types": [
                    "Grass"
                ],
                "subTypes": [
                    "Basic"
                ],
                "evolvesFrom": null,
                "images": {
                    "small": "https://images.pokemontcg.io/gym2/75.png",
                    "large": "https://images.pokemontcg.io/gym2/75_hires.png"
                },
                "price": 0.83
            },
            {
                "id": null,
                "name": "Lt. Surge's Voltorb",
                "externalCode": "gym2-86",
                "rarity": "Common",
                "description": null,
                "types": [
                    "Lightning"
                ],
                "subTypes": [
                    "Basic"
                ],
                "evolvesFrom": null,
                "images": {
                    "small": "https://images.pokemontcg.io/gym2/86.png",
                    "large": "https://images.pokemontcg.io/gym2/86_hires.png"
                },
                "price": 0.81
            },
            {
                "id": null,
                "name": "Blaine's Ponyta",
                "externalCode": "gym2-64",
                "rarity": "Common",
                "description": null,
                "types": [
                    "Fire"
                ],
                "subTypes": [
                    "Basic"
                ],
                "evolvesFrom": null,
                "images": {
                    "small": "https://images.pokemontcg.io/gym2/64.png",
                    "large": "https://images.pokemontcg.io/gym2/64_hires.png"
                },
                "price": 0.8
            },
            {
                "id": null,
                "name": "Koga's Pidgey",
                "externalCode": "gym2-80",
                "rarity": "Common",
                "description": null,
                "types": [
                    "Colorless"
                ],
                "subTypes": [
                    "Basic"
                ],
                "evolvesFrom": null,
                "images": {
                    "small": "https://images.pokemontcg.io/gym2/80.png",
                    "large": "https://images.pokemontcg.io/gym2/80_hires.png"
                },
                "price": 0.79
            },
            {
                "id": null,
                "name": "Koga's Ekans",
                "externalCode": "gym2-77",
                "rarity": "Common",
                "description": null,
                "types": [
                    "Grass"
                ],
                "subTypes": [
                    "Basic"
                ],
                "evolvesFrom": null,
                "images": {
                    "small": "https://images.pokemontcg.io/gym2/77.png",
                    "large": "https://images.pokemontcg.io/gym2/77_hires.png"
                },
                "price": 0.74
            },
            {
                "id": null,
                "name": "Koga's Weedle",
                "externalCode": "gym2-82",
                "rarity": "Common",
                "description": null,
                "types": [
                    "Grass"
                ],
                "subTypes": [
                    "Basic"
                ],
                "evolvesFrom": null,
                "images": {
                    "small": "https://images.pokemontcg.io/gym2/82.png",
                    "large": "https://images.pokemontcg.io/gym2/82_hires.png"
                },
                "price": 0.73
            },
            {
                "id": null,
                "name": "Koga's Grimer",
                "externalCode": "gym2-78",
                "rarity": "Common",
                "description": null,
                "types": [
                    "Grass"
                ],
                "subTypes": [
                    "Basic"
                ],
                "evolvesFrom": null,
                "images": {
                    "small": "https://images.pokemontcg.io/gym2/78.png",
                    "large": "https://images.pokemontcg.io/gym2/78_hires.png"
                },
                "price": 0.68
            },
            {
                "id": null,
                "name": "Blaine's Doduo",
                "externalCode": "gym2-61",
                "rarity": "Common",
                "description": null,
                "types": [
                    "Colorless"
                ],
                "subTypes": [
                    "Basic"
                ],
                "evolvesFrom": null,
                "images": {
                    "small": "https://images.pokemontcg.io/gym2/61.png",
                    "large": "https://images.pokemontcg.io/gym2/61_hires.png"
                },
                "price": 0.65
            }
        ],
        "totalCount": 95
    }
];

export {
    cardSetMock,
    userInfoMock,
    myCardsMock,
    cardSetCardsMock
}