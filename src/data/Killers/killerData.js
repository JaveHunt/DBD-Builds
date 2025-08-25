import perksData from "../perks.json";

export const killerData = [
  {
    id: 1,
    name: "The Trapper",
    shortName: "trapper",
    portrait: "/images/killersImg/K01_The_Trapper_bd1ca1a3dc.webp",
    portraitAlt: "The Trapper Image",
    description:
      "The Trapper is Dead by Daylight’s first and most iconic killer, often considered the game’s “classic” introduction to killer gameplay. His power lies in placing bear traps around the map to control loops, choke points, and high-traffic areas. Experienced Trapper players use traps to restrict survivor movement and force mistakes, turning safe pallets and windows into deadly zones. While his early game can feel slow due to setup time, a well-prepared Trapper can completely dominate the mid-to-late game through strong map control and punishing positioning.",
    power: 1,
    difficulty: 1,
    builds: {
      build1: {
        rating: 1,
        buildName: "Basement Trapper",
        perks: {
          perk1: {
            image: perksData["No_One_Escapes_Death"].image,
            description: perksData["No_One_Escapes_Death"].description,
            name: perksData["No_One_Escapes_Death"].name,
            tunables: perksData["No_One_Escapes_Death"].tunables,
          },
          perk2: {
            image: perksData["Iron_Grasp"].image,
            description: perksData["Iron_Grasp"].description,
            name: perksData["Iron_Grasp"].name,
            tunables: perksData["Iron_Grasp"].tunables,
          },
          perk3: {
            image: perksData["CorruptIntervention"].image,
            description: perksData["CorruptIntervention"].description,
            name: perksData["CorruptIntervention"].name,
            tunables: perksData["CorruptIntervention"].tunables,
          },
          perk4: {
            image: perksData["Agitation"].image,
            description: perksData["Agitation"].description,
            name: perksData["Agitation"].name,
            tunables: perksData["Agitation"].tunables,
          },
        },
        videoUrl: "",
      },

      build2: {
        rating: 2,
        buildName: "Full Haste Trapper",
        perks: {
          perk1: {
            image: perksData["K33P02"].image,
            description: perksData["K33P02"].description,
            name: perksData["K33P02"].name,
            tunables: perksData["K33P02"].tunables,
          },
          perk2: {
            image: perksData["K35P01"].image,
            description: perksData["K35P01"].description,
            name: perksData["K35P01"].name,
            tunables: perksData["K35P01"].tunables,
          },
          perk3: {
            image: perksData["Save_The_Best_For_Last"].image,
            description: perksData["Save_The_Best_For_Last"].description,
            name: perksData["Save_The_Best_For_Last"].name,
            tunables: perksData["Save_The_Best_For_Last"].tunables,
          },
          perk4: {
            image: perksData["Play_With_Your_Food"].image,
            description: perksData["Play_With_Your_Food"].description,
            name: perksData["Play_With_Your_Food"].name,
            tunables: perksData["Play_With_Your_Food"].tunables,
          },
        },
        videoUrl: "",
      },
      build3: {
        rating: 5,
        buildName: "Optimal Trapper Build",
        perks: {
          perk1: {
            image: perksData["CorruptIntervention"].image,
            description: perksData["CorruptIntervention"].description,
            name: perksData["CorruptIntervention"].name,
            tunables: perksData["CorruptIntervention"].tunables,
          },
          perk2: {
            image: perksData["pop_goes_the_weasel"].image,
            description: perksData["pop_goes_the_weasel"].description,
            name: perksData["pop_goes_the_weasel"].name,
            tunables: perksData["pop_goes_the_weasel"].tunables,
          },
          perk3: {
            image: perksData["K26P02"].image,
            description: perksData["K26P02"].description,
            name: perksData["K26P02"].name,
            tunables: perksData["K26P02"].tunables,
          },
          perk4: {
            image: perksData["No_One_Escapes_Death"].image,
            description: perksData["No_One_Escapes_Death"].description,
            name: perksData["No_One_Escapes_Death"].name,
            tunables: perksData["No_One_Escapes_Death"].tunables,
          },
        },
        videoUrl: "",
      },
    },
  },
  {
    id: 2,
    name: "The Wraith",
    shortName: "wraith",
    portrait: "/images/killersImg/K02_The_Wraith_d67b566a99.webp",
    portraitAlt: "The Wraith Image",
    description:
      "The Wraith is one of Dead by Daylight’s stealth killers, known for his ability to cloak and move faster while invisible. His signature Wailing Bell allows him to enter and exit cloak mode, enabling him to sneak up on survivors and apply pressure without being seen. Skilled Wraith players use hit-and-run tactics, keeping survivors injured and constantly on edge. While he lacks ranged abilities or complex map control, his speed, stealth, and ability to quickly reposition make him a consistent threat in the right hands.",
    power: 1,
    difficulty: 2,
    builds: {
      build1: {
        rating: 4,
        buildName: "Expose Wraith Build",
        perks: {
          perk1: {
            image: perksData["DragonsGrip"].image,
            description: perksData["DragonsGrip"].description,
            name: perksData["DragonsGrip"].name,
            tunables: perksData["DragonsGrip"].tunables,
          },
          perk2: {
            image: perksData["MakeYourChoice"].image,
            description: perksData["MakeYourChoice"].description,
            name: perksData["MakeYourChoice"].name,
            tunables: perksData["MakeYourChoice"].tunables,
          },
          perk3: {
            image: perksData["pop_goes_the_weasel"].image,
            description: perksData["pop_goes_the_weasel"].description,
            name: perksData["pop_goes_the_weasel"].name,
            tunables: perksData["pop_goes_the_weasel"].tunables,
          },
          perk4: {
            image: perksData["K24P03"].image,
            description: perksData["K24P03"].description,
            name: perksData["K24P03"].name,
            tunables: perksData["K24P03"].tunables,
          },
        },
      },
      build2: {
        rating: 3,
        buildName: "Pallet Shredder Wraith Build",
        perks: {
          perk1: {
            image: perksData["K27P01"].image,
            description: perksData["Brutal_Strength"].description,
            name: perksData["Brutal_Strength"].name,
            tunables: perksData["Brutal_Strength"].tunables,
          },
          perk2: {
            image: perksData["Bamboozle"].image,
            description: perksData["Bamboozle"].description,
            name: perksData["Bamboozle"].name,
            tunables: perksData["Bamboozle"].tunables,
          },
          perk3: {
            image: perksData["Surge"].image,
            description: perksData["Surge"].description,
            name: perksData["Surge"].name,
            tunables: perksData["Surge"].tunables,
          },
          perk4: {
            image: perksData["FireUp"].image,
            description: perksData["FireUp"].description,
            name: perksData["FireUp"].name,
            tunables: perksData["FireUp"].tunables,
          },
        },
      },
    },
  },
  {
    id: 3,
    name: "The Shape",
    shortName: "shape",
    portrait: "/images/killersImg/K06_The_Shape_7bd066d4a1.webp",
    portraitAlt: "The Shape Image",
    description:
      "The Shape, also known as Michael Myers, is Dead by Daylight’s stalking killer, infamous for his ability to grow stronger the longer he observes survivors. His Evil Within power lets him start as a slow but stealthy threat, then build up to devastating speed and lethality by stalking his victims. Tier III grants an instant-down effect, making him one of the most dangerous killers in short bursts. The Shape excels at ambushes and mind games, but his slower early game requires patience and precise stalking to reach his full potential.",
    power: 2,
    difficulty: 2,
    builds: {
      build1: {
        rating: 5,
        buildName: "Optimal Myers Build",
        perks: {
          perk1: {
            image: perksData["pop_goes_the_weasel"].image,
            description: perksData["pop_goes_the_weasel"].description,
            name: perksData["pop_goes_the_weasel"].name,
            tunables: perksData["pop_goes_the_weasel"].tunables,
          },
          perk2: {
            image: perksData["Bamboozle"].image,
            description: perksData["Bamboozle"].description,
            name: perksData["Bamboozle"].name,
            tunables: perksData["Bamboozle"].tunables,
          },
          perk3: {
            image: perksData["CorruptIntervention"].image,
            description: perksData["CorruptIntervention"].description,
            name: perksData["CorruptIntervention"].name,
            tunables: perksData["CorruptIntervention"].tunables,
          },
          perk4: {
            image: perksData["K24P03"].image,
            description: perksData["K24P03"].description,
            name: perksData["K24P03"].name,
            tunables: perksData["K24P03"].tunables,
          },
        },
        videoUrl: "",
      },
      build2: {
        rating: 5,
        buildName: "Tombstone Myers Build",
        perks: {
          perk1: {
            image: perksData["K30P01"].image,
            description: perksData["K30P01"].description,
            name: perksData["K30P01"].name,
            tunables: perksData["K30P01"].tunables,
          },
          perk2: {
            image: perksData["Play_With_Your_Food"].image,
            description: perksData["Play_With_Your_Food"].description,
            name: perksData["Play_With_Your_Food"].name,
            tunables: perksData["Play_With_Your_Food"].tunables,
          },
          perk3: {
            image: perksData["CorruptIntervention"].image,
            description: perksData["CorruptIntervention"].description,
            name: perksData["CorruptIntervention"].name,
            tunables: perksData["CorruptIntervention"].tunables,
          },
          perk4: {
            image: perksData["K35P02"].image,
            description: perksData["K35P02"].description,
            name: perksData["K35P02"].name,
            tunables: perksData["K35P02"].tunables,
          },
        },
        videoUrl: "",
      },
      build3: {
        rating: 3,
        buildName: "All-seeing Myers Build",
        perks: {
          perk1: {
            image: perksData["Hex_Devour_Hope"].image,
            description: perksData["Hex_Devour_Hope"].description,
            name: perksData["Hex_Devour_Hope"].name,
            tunables: perksData["Hex_Devour_Hope"].tunables,
          },
          perk2: {
            image: perksData["K30P02"].image,
            description: perksData["K30P02"].description,
            name: perksData["K30P02"].name,
            tunables: perksData["K30P02"].tunables,
          },
          perk3: {
            image: perksData["HexUndying"].image,
            description: perksData["HexUndying"].description,
            name: perksData["HexUndying"].name,
            tunables: perksData["HexUndying"].tunables,
          },
          perk4: {
            image: perksData["MonitorAndAbuse"].image,
            description: perksData["MonitorAndAbuse"].description,
            name: perksData["MonitorAndAbuse"].name,
            tunables: perksData["MonitorAndAbuse"].tunables,
          },
        },
        videoUrl: "",
      },
    },
  },
  {
    id: 4,
    name: "The Legion",
    shortName: "legion",
    portrait: "/images/killersImg/K14_The_Legion_c3dfae2e6c.webp",
    portraitAlt: "The Legion Image",
    description:
      "The Legion is a high-mobility killer focused on applying pressure across the map through rapid survivor injuries. Their Feral Frenzy ability lets them sprint at high speed, vault pallets, and chain-hit multiple survivors to spread the Deep Wound status effect. Legion excels at disrupting generator progress by constantly forcing survivors to heal or risk being downed. While they lack instant-down potential and rely on attrition rather than direct kills, skilled Legion players use map knowledge and relentless movement to keep the entire team under constant pressure.",
    power: 2,
    difficulty: 3,
    builds: {
      build1: {
        rating: 5,
        buildName: "Tanky Legion Build",
        perks: {
          perk1: {
            image: perksData["Surge"].image,
            description: perksData["Surge"].description,
            name: perksData["Surge"].name,
            tunables: perksData["Surge"].tunables,
          },
          perk2: {
            image: perksData["K25P01"].image,
            description: perksData["K25P01"].description,
            name: perksData["K25P01"].name,
            tunables: perksData["K25P01"].tunables,
          },
          perk3: {
            image: perksData["Enduring"].image,
            description: perksData["Enduring"].description,
            name: perksData["Enduring"].name,
            tunables: perksData["Enduring"].tunables,
          },
          perk4: {
            image: perksData["SpiritFury"].image,
            description: perksData["SpiritFury"].description,
            name: perksData["SpiritFury"].name,
            tunables: perksData["SpiritFury"].tunables,
          },
        },
        videoUrl: "",
      },
      build2: {
        rating: 3,
        buildName: "Endgame Legion Build",
        perks: {
          perk1: {
            image: perksData["K23P03"].image,
            description: perksData["K23P03"].description,
            name: perksData["K23P03"].name,
            tunables: perksData["K23P03"].tunables,
          },
          perk2: {
            image: perksData["No_One_Escapes_Death"].image,
            description: perksData["No_One_Escapes_Death"].description,
            name: perksData["No_One_Escapes_Death"].name,
            tunables: perksData["No_One_Escapes_Death"].tunables,
          },
          perk3: {
            image: perksData["BloodWarden"].image,
            description: perksData["BloodWarden"].description,
            name: perksData["BloodWarden"].name,
            tunables: perksData["BloodWarden"].tunables,
          },
          perk4: {
            image: perksData["RememberMe"].image,
            description: perksData["RememberMe"].description,
            name: perksData["RememberMe"].name,
            tunables: perksData["RememberMe"].tunables,
          },
        },
        videoUrl: "",
      },
    },
  },
  {
    id: 5,
    name: "The Ghostface",
    shortName: "ghostface",
    portrait: "/images/killersImg/K16_The_Ghostface_979facf1dc.webp",
    portraitAlt: "The Ghostface Image",
    description:
      "Ghostface is a stealth and ambush killer who excels at hunting survivors through his ability to stalk them undetected. Using his power, Night Shroud, he can enter stealth mode to approach targets silently and mark survivors for additional bloodpoints and pressure. Ghostface’s playstyle rewards patience and precision, enabling players to surprise survivors with deadly surprise attacks. While lacking in map control tools, his strength lies in intimidation, picking off isolated survivors and creating constant fear.",
    power: 3,
    difficulty: 3,
    builds: {
      build1: {
        rating: 5,
        buildName: "Full Haste Build",
        perks: {
          perk1: {
            image: perksData["K32P03"].image,
            description: perksData["K32P03"].description,
            name: perksData["K32P03"].name,
            tunables: perksData["K32P03"].tunables,
          },
          perk2: {
            image: perksData["Surge"].image,
            description: perksData["Surge"].description,
            name: perksData["Surge"].name,
            tunables: perksData["Surge"].tunables,
          },
          perk3: {
            image: perksData["Play_With_Your_Food"].image,
            description: perksData["Play_With_Your_Food"].description,
            name: perksData["Play_With_Your_Food"].name,
            tunables: perksData["Play_With_Your_Food"].tunables,
          },
          perk4: {
            image: perksData["K34P03"].image,
            description: perksData["K34P03"].description,
            name: perksData["K34P03"].name,
            tunables: perksData["K34P03"].tunables,
          },
        },
        videoUrl: "",
      },
      build2: {
        rating: 3,
        buildName: "Tanky Ghostface Build",
        perks: {
          perk1: {
            image: perksData["Enduring"].image,
            description: perksData["Enduring"].description,
            name: perksData["Enduring"].name,
            tunables: perksData["Enduring"].tunables,
          },
          perk2: {
            image: perksData["SpiritFury"].image,
            description: perksData["SpiritFury"].description,
            name: perksData["SpiritFury"].name,
            tunables: perksData["SpiritFury"].tunables,
          },
          perk3: {
            image: perksData["Brutal_Strength"].image,
            description: perksData["Brutal_Strength"].description,
            name: perksData["Brutal_Strength"].name,
            tunables: perksData["Brutal_Strength"].tunables,
          },
          perk4: {
            image: perksData["Surge"].image,
            description: perksData["Surge"].description,
            name: perksData["Surge"].name,
            tunables: perksData["Surge"].tunables,
          },
        },
        videoUrl: "",
      },
    },
  },
  {
    id: 6,
    name: "The Onryo",
    shortName: "onryo",
    portrait: "/images/killersImg/K27_The_Onryo_b36d9cbccd.webp",
    portraitAlt: "The Onryo Image",
    description:
      "The Onryō is one of Dead by Daylight’s stealth killers, specializing in sudden ambushes and spreading pressure through her unique teleportation. Her power, Deluge of Fear, allows her to manifest through televisions scattered across the map, letting her quickly reposition and catch survivors off guard. Survivors must turn off these TVs to limit her movement. Skilled Onryō players use her ability to appear unpredictably, applying map-wide pressure and punishing survivors who are careless with TVs. While she has a slower basic movement speed and limited chase tools, her stealth, teleportation, and Condemned mechanic make her a terrifying threat when played with precision and patience",
    power: 2,
    difficulty: 2,
    builds: {
      build1: {
        rating: 5,
        buildName: "Exposed Onryo Build",
        perks: {
          perk1: {
            image: perksData["MakeYourChoice"].image,
            description: perksData["MakeYourChoice"].description,
            name: perksData["MakeYourChoice"].name,
            tunables: perksData["MakeYourChoice"].tunables,
          },
          perk2: {
            image: perksData["K34P02"].image,
            description: perksData["K34P02"].description,
            name: perksData["K34P02"].name,
            tunables: perksData["K34P02"].tunables,
          },
          perk3: {
            image: perksData["K27P01"].image,
            description: perksData["K27P01"].description,
            name: perksData["K27P01"].name,
            tunables: perksData["K27P01"].tunables,
          },
          perk4: {
            image: perksData["K26P02"].image,
            description: perksData["K26P02"].description,
            name: perksData["K26P02"].name,
            tunables: perksData["K26P02"].tunables,
          },
        },
        videoUrl: "",
      },
      build2: {
        rating: 5,
        buildName: "Full Slowdown Onryo Build",
        perks: {
          perk1: {
            image: perksData["BBQAndChilli"].image,
            description: perksData["BBQAndChilli"].description,
            name: perksData["BBQAndChilli"].name,
            tunables: perksData["BBQAndChilli"].tunables,
          },
          perk2: {
            image: perksData["K26P01"].image,
            description: perksData["K26P01"].description,
            name: perksData["K26P01"].name,
            tunables: perksData["K26P01"].tunables,
          },
          perk3: {
            image: perksData["DeadMansSwitch"].image,
            description: perksData["DeadMansSwitch"].description,
            name: perksData["DeadMansSwitch"].name,
            tunables: perksData["DeadMansSwitch"].tunables,
          },
          perk4: {
            image: perksData["K26P02"].image,
            description: perksData["K26P02"].description,
            name: perksData["K26P02"].name,
            tunables: perksData["K26P02"].tunables,
          },
        },
        videoUrl: "",
      },
      build3: {
        rating: 5,
        buildName: "Hex Onryo Build",
        perks: {
          perk1: {
            image: perksData["Hex_Devour_Hope"].image,
            description: perksData["Hex_Devour_Hope"].description,
            name: perksData["Hex_Devour_Hope"].name,
            tunables: perksData["Hex_Devour_Hope"].tunables,
          },
          perk2: {
            image: perksData["HexUndying"].image,
            description: perksData["HexUndying"].description,
            name: perksData["HexUndying"].name,
            tunables: perksData["HexUndying"].tunables,
          },
          perk3: {
            image: perksData["Dying_Light"].image,
            description: perksData["K37P03"].description,
            name: perksData["K37P03"].name,
            tunables: perksData["K37P03"].tunables,
          },
          perk4: {
            image: perksData["Hex_Ruin"].image,
            description: perksData["Hex_Ruin"].description,
            name: perksData["Hex_Ruin"].name,
            tunables: perksData["Hex_Ruin"].tunables,
          },
        },
        videoUrl: "",
      },
      build4: {
        rating: 5,
        buildName: "Chase Onryo Build",
        perks: {
          perk1: {
            image: perksData["Save_The_Best_For_Last"].image,
            description: perksData["Save_The_Best_For_Last"].description,
            name: perksData["Save_The_Best_For_Last"].name,
            tunables: perksData["Save_The_Best_For_Last"].tunables,
          },
          perk2: {
            image: perksData["K33P02"].image,
            description: perksData["K33P02"].description,
            name: perksData["K33P02"].name,
            tunables: perksData["K33P02"].tunables,
          },
          perk3: {
            image: perksData["K22P03"].image,
            description: perksData["K22P03"].description,
            name: perksData["K22P03"].name,
            tunables: perksData["K22P03"].tunables,
          },
          perk4: {
            image: perksData["pop_goes_the_weasel"].image,
            description: perksData["pop_goes_the_weasel"].description,
            name: perksData["pop_goes_the_weasel"].name,
            tunables: perksData["pop_goes_the_weasel"].tunables,
          },
        },
        videoUrl: "",
      },
    },
  },
  {
    id: 7,
    name: "The Ghoul",
    shortName: "ghoul",
    portrait: "/images/killersImg/K39_The_Ghoul_e2d9135332.webp",
    portraitAlt: "The Ghoul Image",
    description:
      "The Ghoul is one of Dead by Daylight’s high-mobility killers, focused on chaining leaps and overwhelming survivors with speed. His power, One-Eyed Terror, lets him use his kagune to leap across obstacles, ambush survivors, and even grab them during a second chained leap. Landing this attack inflicts Deep Wounds and triggers Enraged Mode, granting him faster recovery and enhanced mobility. Skilled Ghoul players use quick leaps to cut off loops, pressure survivors in open areas, and force mistakes with relentless aggression.",
    power: 5,
    difficulty: 2,
    builds: {
      build1: {
        rating: 5,
        buildName: "Hex Kaneki Build",
        perks: {
          perk1: {
            image: perksData["Hex_Devour_Hope"].image,
            description: perksData["Hex_Devour_Hope"].description,
            name: perksData["Hex_Devour_Hope"].name,
            tunables: perksData["Hex_Devour_Hope"].tunables,
          },
          perk2: {
            image: perksData["HexUndying"].image,
            description: perksData["HexUndying"].description,
            name: perksData["HexUndying"].name,
            tunables: perksData["HexUndying"].tunables,
          },
          perk3: {
            image: perksData["Hex_Thrill_Of_The_Hunt"].image,
            description: perksData["Hex_Thrill_Of_The_Hunt"].description,
            name: perksData["Hex_Thrill_Of_The_Hunt"].name,
            tunables: perksData["Hex_Thrill_Of_The_Hunt"].tunables,
          },
          perk4: {
            image: perksData["K37P03"].image,
            description: perksData["K37P03"].description,
            name: perksData["K37P03"].name,
            tunables: perksData["K37P03"].tunables,
          },
        },
        videoUrl: "",
      },
      build2: {
        rating: 4,
        buildName: "Full Slowdown Kaneki Build",
        perks: {
          perk1: {
            image: perksData["Surge"].image,
            description: perksData["Surge"].description,
            name: perksData["Surge"].name,
            tunables: perksData["Surge"].tunables,
          },
          perk2: {
            image: perksData["K26P02"].image,
            description: perksData["K26P02"].description,
            name: perksData["K26P02"].name,
            tunables: perksData["K26P02"].tunables,
          },
          perk3: {
            image: perksData["Thanatophobia"].image,
            description: perksData["Thanatophobia"].description,
            name: perksData["Thanatophobia"].name,
            tunables: perksData["Thanatophobia"].tunables,
          },
          perk4: {
            image: perksData["Dying_Light"].image,
            description: perksData["Dying_Light"].description,
            name: perksData["Dying_Light"].name,
            tunables: perksData["Dying_Light"].tunables,
          },
        },
        videoUrl: "",
      },
      build3: {
        rating: 5,
        buildName: "Best Kaneki Build",
        perks: {
          perk1: {
            image: perksData["K26P02"].image,
            description: perksData["K26P02"].description,
            name: perksData["K26P02"].name,
            tunables: perksData["K26P02"].tunables,
          },
          perk2: {
            image: perksData["Surge"].image,
            description: perksData["Surge"].description,
            name: perksData["Surge"].name,
            tunables: perksData["Surge"].tunables,
          },
          perk3: {
            image: perksData["DeadMansSwitch"].image,
            description: perksData["DeadMansSwitch"].description,
            name: perksData["DeadMansSwitch"].name,
            tunables: perksData["DeadMansSwitch"].tunables,
          },
          perk4: {
            image: perksData["K23P03"].image,
            description: perksData["K23P03"].description,
            name: perksData["K23P03"].name,
            tunables: perksData["K23P03"].tunables,
          },
        },
        videoUrl: "",
      },
      build4: {
        rating: 4,
        buildName: "Stealth Kaneki Build",
        perks: {
          perk1: {
            image: perksData["pop_goes_the_weasel"].image,
            description: perksData["pop_goes_the_weasel"].description,
            name: perksData["pop_goes_the_weasel"].name,
            tunables: perksData["pop_goes_the_weasel"].tunables,
          },
          perk2: {
            image: perksData["Gearhead"].image,
            description: perksData["Gearhead"].description,
            name: perksData["Gearhead"].name,
            tunables: perksData["Gearhead"].tunables,
          },
          perk3: {
            image: perksData["TrailofTorment"].image,
            description: perksData["TrailofTorment"].description,
            name: perksData["TrailofTorment"].name,
            tunables: perksData["TrailofTorment"].tunables,
          },
          perk4: {
            image: perksData["K30P01"].image,
            description: perksData["K30P01"].description,
            name: perksData["K30P01"].name,
            tunables: perksData["K30P01"].tunables,
          },
        },
        videoUrl: "",
      },
    },
  },
  {
    id: 8,
    name: "The Clown",
    shortName: "clown",
    portrait: "/images/killersImg/K12_The_Clown_53a64221fd.webp",
    portraitAlt: "The Clown Image",
    description:
      "The Clown is a disruptive killer who uses chemical gas to control chases and disorient Survivors. His power, The Afterpiece, lets him throw two types of bottles: the Afterpiece Tonic, which releases a pink cloud that slows and blinds Survivors, and the Afterpiece Antidote, which creates a yellow cloud that grants a burst of speed. Skilled Clown players mix both bottles to block escape routes, cut off loops, and maintain relentless pressure with well-timed throws.",
    power: 4,
    difficulty: 1,
    builds: {
      build1: {
        rating: 5,
        buildName: "The Most Evil Clown Build",
        perks: {
          perk1: {
            image: perksData["K26P02"].image,
            description: perksData["K26P02"].description,
            name: perksData["K26P02"].name,
            tunables: perksData["K26P02"].tunables,
          },
          perk2: {
            image: perksData["MakeYourChoice"].image,
            description: perksData["MakeYourChoice"].description,
            name: perksData["MakeYourChoice"].name,
            tunables: perksData["MakeYourChoice"].tunables,
          },
          perk3: {
            image: perksData["K27P01"].image,
            description: perksData["K27P01"].description,
            name: perksData["K27P01"].name,
            tunables: perksData["K27P01"].tunables,
          },
          perk4: {
            image: perksData["K38P02"].image,
            description: perksData["K38P02"].description,
            name: perksData["K38P02"].name,
            tunables: perksData["K38P02"].tunables,
          },
        },
        videoUrl: "",
      },
      build2: {
        rating: 4,
        buildName: "Full Haste Clown Build",
        perks: {
          perk1: {
            image: perksData["K35P01"].image,
            description: perksData["K35P01"].description,
            name: perksData["K35P01"].name,
            tunables: perksData["K35P01"].tunables,
          },
          perk2: {
            image: perksData["K33P02"].image,
            description: perksData["K33P02"].description,
            name: perksData["K33P02"].name,
            tunables: perksData["K33P02"].tunables,
          },
          perk3: {
            image: perksData["K34P03"].image,
            description: perksData["K34P03"].description,
            name: perksData["K34P03"].name,
            tunables: perksData["K34P03"].tunables,
          },
          perk4: {
            image: perksData["K32P03"].image,
            description: perksData["K32P03"].description,
            name: perksData["K32P03"].name,
            tunables: perksData["K32P03"].tunables,
          },
        },
        videoUrl: "",
      },
      build3: {
        rating: 5,
        buildName: "Optimal Clown Build",
        perks: {
          perk1: {
            image: perksData["K26P02"].image,
            description: perksData["K26P02"].description,
            name: perksData["K26P02"].name,
            tunables: perksData["K26P02"].tunables,
          },
          perk2: {
            image: perksData["Surge"].image,
            description: perksData["Surge"].description,
            name: perksData["Surge"].name,
            tunables: perksData["Surge"].tunables,
          },
          perk3: {
            image: perksData["CorruptIntervention"].image,
            description: perksData["CorruptIntervention"].description,
            name: perksData["CorruptIntervention"].name,
            tunables: perksData["CorruptIntervention"].tunables,
          },
          perk4: {
            image: perksData["Bamboozle"].image,
            description: perksData["Bamboozle"].description,
            name: perksData["Bamboozle"].name,
            tunables: perksData["Bamboozle"].tunables,
          },
        },
        videoUrl: "",
      },
      build4: {
        rating: 3,
        buildName: "No Hit Cooldown Clown Build",
        perks: {
          perk1: {
            image: perksData["Surge"].image,
            description: perksData["Surge"].description,
            name: perksData["Surge"].name,
            tunables: perksData["Surge"].tunables,
          },
          perk2: {
            image: perksData["Save_The_Best_For_Last"].image,
            description: perksData["Save_The_Best_For_Last"].description,
            name: perksData["Save_The_Best_For_Last"].name,
            tunables: perksData["Save_The_Best_For_Last"].tunables,
          },
          perk3: {
            image: perksData["K32P03"].image,
            description: perksData["K32P03"].description,
            name: perksData["K32P03"].name,
            tunables: perksData["K32P03"].tunables,
          },
          perk4: {
            image: perksData["K40P01"].image,
            description: perksData["K40P01"].description,
            name: perksData["K40P01"].name,
            tunables: perksData["K40P01"].tunables,
          },
        },
        videoUrl: "",
      },
    },
  },
  {
    id: 9,
    name: "The Knight",
    shortName: "knight",
    portrait: "/images/killersImg/K30_Theknight_8fa9cce2e3.webp",
    portraitAlt: "The Knight Image",
    description:
      "The Knight is a strategic killer who commands his loyal guards to hunt down Survivors and control the map. His power, Guardia Compagnia, lets him summon one of three unique guards — the Carnifex, Assassin, or Jailer — each specializing in pressure, pursuit, or defense. Skilled Knight players use patrol routes to zone Survivors, cut off loops, and force misplays by combining their own chase with the relentless advance of their summoned allies.",
    power: 2,
    difficulty: 1,
    builds: {
      build1: {
        rating: 5,
        buildName: "Best Knight Build",
        perks: {
          perk1: {
            image: perksData["K26P02"].image,
            description: perksData["K26P02"].description,
            name: perksData["K26P02"].name,
            tunables: perksData["K26P02"].tunables,
          },
          perk2: {
            image: perksData["BBQAndChilli"].image,
            description: perksData["BBQAndChilli"].description,
            name: perksData["BBQAndChilli"].name,
            tunables: perksData["BBQAndChilli"].tunables,
          },
          perk3: {
            image: perksData["K23P03"].image,
            description: perksData["K23P03"].description,
            name: perksData["K23P03"].name,
            tunables: perksData["K23P03"].tunables,
          },
          perk4: {
            image: perksData["DeadMansSwitch"].image,
            description: perksData["DeadMansSwitch"].description,
            name: perksData["DeadMansSwitch"].name,
            tunables: perksData["DeadMansSwitch"].tunables,
          },
        },
        videoUrl: "",
      },
      build2: {
        rating: 5,
        buildName: "Most Hated Hex Knight Build",
        perks: {
          perk1: {
            image: perksData["K37P03"].image,
            description: perksData["K37P03"].description,
            name: perksData["K37P03"].name,
            tunables: perksData["K37P03"].tunables,
          },
          perk2: {
            image: perksData["Hex_Devour_Hope"].image,
            description: perksData["Hex_Devour_Hope"].description,
            name: perksData["Hex_Devour_Hope"].name,
            tunables: perksData["Hex_Devour_Hope"].tunables,
          },
          perk3: {
            image: perksData["HexUndying"].image,
            description: perksData["HexUndying"].description,
            name: perksData["HexUndying"].name,
            tunables: perksData["HexUndying"].tunables,
          },
          perk4: {
            image: perksData["Hex_Thrill_Of_The_Hunt"].image,
            description: perksData["Hex_Thrill_Of_The_Hunt"].description,
            name: perksData["Hex_Thrill_Of_The_Hunt"].name,
            tunables: perksData["Hex_Thrill_Of_The_Hunt"].tunables,
          },
        },
        videoUrl: "",
      },
      build3: {
        rating: 2,
        buildName: "Item Stealer Knight Build",
        perks: {
          perk1: {
            image: perksData["K30P01"].image,
            description: perksData["K30P01"].description,
            name: perksData["K30P01"].name,
            tunables: perksData["K30P01"].tunables,
          },
          perk2: {
            image: perksData["FranklinsLoss"].image,
            description: perksData["FranklinsLoss"].description,
            name: perksData["FranklinsLoss"].name,
            tunables: perksData["FranklinsLoss"].tunables,
          },
          perk3: {
            image: perksData["Gearhead"].image,
            description: perksData["Gearhead"].description,
            name: perksData["Gearhead"].name,
            tunables: perksData["Gearhead"].tunables,
          },
          perk4: {
            image: perksData["K36P01"].image,
            description: perksData["K36P01"].description,
            name: perksData["K36P01"].name,
            tunables: perksData["K36P01"].tunables,
          },
        },
        videoUrl: "",
      },
    },
  },
  {
    id: 10,
    name: "The Dark Lord",
    shortName: "dark-lord",
    portrait: "/images/killersImg/K37_The_Dark_Lord_fb2d40500f.webp",
    portraitAlt: "The Dark Lord Image",
    description:
      "Dracula is a shapeshifting killer who blends stealth, speed, and area control to dominate Survivors. His power, Vampiric Shift, lets him switch between Vampire, Wolf, and Bat forms: using flames to zone, lunging strikes to catch, and silent flight to reposition. Skilled Dracula players combine form-switching with map pressure to cut off loops, control objectives, and keep Survivors on edge.",
    power: 4,
    difficulty: 3,
    builds: {
      build1: {
        rating: 5,
        buildName: "Best Dracula Build",
        perks: {
          perk1: {
            image: perksData["K26P02"].image,
            description: perksData["K26P02"].description,
            name: perksData["K26P02"].name,
            tunables: perksData["K26P02"].tunables,
          },
          perk2: {
            image: perksData["BBQAndChilli"].image,
            description: perksData["BBQAndChilli"].description,
            name: perksData["BBQAndChilli"].name,
            tunables: perksData["BBQAndChilli"].tunables,
          },
          perk3: {
            image: perksData["pop_goes_the_weasel"].image,
            description: perksData["pop_goes_the_weasel"].description,
            name: perksData["pop_goes_the_weasel"].name,
            tunables: perksData["pop_goes_the_weasel"].tunables,
          },
          perk4: {
            image: perksData["K26P01"].image,
            description: perksData["K26P01"].description,
            name: perksData["K26P01"].name,
            tunables: perksData["K26P01"].tunables,
          },
        },
        videoUrl: "",
      },
      build2: {
        rating: 5,
        buildName: "Full Hex Dracula Build",
        perks: {
          perk1: {
            image: perksData["K37P03"].image,
            description: perksData["K37P03"].description,
            name: perksData["K37P03"].name,
            tunables: perksData["K37P03"].tunables,
          },
          perk2: {
            image: perksData["Hex_Devour_Hope"].image,
            description: perksData["Hex_Devour_Hope"].description,
            name: perksData["Hex_Devour_Hope"].name,
            tunables: perksData["Hex_Devour_Hope"].tunables,
          },
          perk3: {
            image: perksData["HexUndying"].image,
            description: perksData["HexUndying"].description,
            name: perksData["HexUndying"].name,
            tunables: perksData["HexUndying"].tunables,
          },
          perk4: {
            image: perksData["Hex_Thrill_Of_The_Hunt"].image,
            description: perksData["Hex_Thrill_Of_The_Hunt"].description,
            name: perksData["Hex_Thrill_Of_The_Hunt"].name,
            tunables: perksData["Hex_Thrill_Of_The_Hunt"].tunables,
          },
        },
        videoUrl: "",
      },
      build3: {
        rating: 5,
        buildName: "Exposed Dracula Build",
        perks: {
          perk1: {
            image: perksData["K26P02"].image,
            description: perksData["K26P02"].description,
            name: perksData["K26P02"].name,
            tunables: perksData["K26P02"].tunables,
          },
          perk2: {
            image: perksData["MakeYourChoice"].image,
            description: perksData["MakeYourChoice"].description,
            name: perksData["MakeYourChoice"].name,
            tunables: perksData["MakeYourChoice"].tunables,
          },
          perk3: {
            image: perksData["K27P01"].image,
            description: perksData["K27P01"].description,
            name: perksData["K27P01"].name,
            tunables: perksData["K27P01"].tunables,
          },
          perk4: {
            image: perksData["K38P02"].image,
            description: perksData["K38P02"].description,
            name: perksData["K38P02"].name,
            tunables: perksData["K38P02"].tunables,
          },
        },
        videoUrl: "",
      },
    },
  },
];
