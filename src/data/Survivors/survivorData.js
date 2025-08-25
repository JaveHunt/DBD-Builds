import perksData from "../perks.json";

export const survivorData = [
  {
    id: 1,
    img: "/images/survivor/beginners.webp",
    alt: "Survivor Icon",
    title: "Beginner Builds",
    pageTitle: "Best Beginner Builds",
    shortTitle: "beginner-builds",
    description:
      "Perfect starter builds for new players. These setups focus on ease of use and learning core mechanics to help you get comfortable and confident fast.",
    builds: {
      build1: {
        rating: 5,
        buildName: "Beginner Chase Build",
        perks: {
          perk1: {
            image: perksData["Lithe"].image,
            description: perksData["Lithe"].description,
            name: perksData["Lithe"].name,
            tunables: perksData["Lithe"].tunables,
          },
          perk2: {
            image: perksData["Resilience"].image,
            description: perksData["Resilience"].description,
            name: perksData["Resilience"].name,
            tunables: perksData["Resilience"].tunables,
          },
          perk3: {
            image: perksData["Kindred"].image,
            description: perksData["Kindred"].description,
            name: perksData["Kindred"].name,
            tunables: perksData["Kindred"].tunables,
          },
          perk4: {
            image: perksData["WindowsOfOpportunity"].image,
            description: perksData["WindowsOfOpportunity"].description,
            name: perksData["WindowsOfOpportunity"].name,
            tunables: perksData["WindowsOfOpportunity"].tunables,
          },
        },
        videoUrl: "",
      },
      build2: {
        rating: 5,
        buildName: "Full Chase & Endgame Build",
        perks: {
          perk1: {
            image: perksData["Sprint_Burst"].image,
            description: perksData["Sprint_Burst"].description,
            name: perksData["Sprint_Burst"].name,
            tunables: perksData["Sprint_Burst"].tunables,
          },
          perk2: {
            image: perksData["Adrenaline"].image,
            description: perksData["Adrenaline"].description,
            name: perksData["Adrenaline"].name,
            tunables: perksData["Adrenaline"].tunables,
          },
          perk3: {
            image: perksData["Hope"].image,
            description: perksData["Hope"].description,
            name: perksData["Hope"].name,
            tunables: perksData["Hope"].tunables,
          },
          perk4: {
            image: perksData["WindowsOfOpportunity"].image,
            description: perksData["WindowsOfOpportunity"].description,
            name: perksData["WindowsOfOpportunity"].name,
            tunables: perksData["WindowsOfOpportunity"].tunables,
          },
        },
        videoUrl: "",
      },
    },
  },
  {
    id: 2,
    img: "/images/survivor/healBuilds.webp",
    alt: "Heal Icon",
    title: "Heal Builds",
    pageTitle: "Best Heal Builds",
    description:
      "Optimize your healing skills with these top builds. Boost your efficiency, speed, and teamwork to keep survivors alive longer and turn the tide of the game.",
    shortTitle: "heal-builds",
    builds: {
      build1: {
        rating: 5,
        buildName: "410% Full Heal Build",
        perks: {
          perk1: {
            image: perksData["WellMakeIt"].image,
            description: perksData["WellMakeIt"].description,
            name: perksData["WellMakeIt"].name,
            tunables: perksData["WellMakeIt"].tunables,
          },
          perk2: {
            image: perksData["Botany_Knowledge"].image,
            description: perksData["Botany_Knowledge"].description,
            name: perksData["Botany_Knowledge"].name,
            tunables: perksData["Botany_Knowledge"].tunables,
          },
          perk3: {
            image: perksData["DesperateMeasures"].image,
            description: perksData["DesperateMeasures"].description,
            name: perksData["DesperateMeasures"].name,
            tunables: perksData["DesperateMeasures"].tunables,
          },
          perk4: {
            image: perksData["S46P01"].image,
            description: perksData["S46P01"].description,
            name: perksData["S46P01"].name,
            tunables: perksData["S46P01"].tunables,
          },
        },
        videoUrl: "",
      },
      build2: {
        rating: 4,
        buildName: "Autodidact Heal Build",
        perks: {
          perk1: {
            image: perksData["Autodidact"].image,
            description: perksData["Autodidact"].description,
            name: perksData["Autodidact"].name,
            tunables: perksData["Autodidact"].tunables,
          },
          perk2: {
            image: perksData["S40P03"].image,
            description: perksData["S40P03"].description,
            name: perksData["S40P03"].name,
            tunables: perksData["S40P03"].tunables,
          },
          perk3: {
            image: perksData["Empathy"].image,
            description: perksData["Empathy"].description,
            name: perksData["Empathy"].name,
            tunables: perksData["Empathy"].tunables,
          },
          perk4: {
            image: perksData["Sprint_Burst"].image,
            description: perksData["Sprint_Burst"].description,
            name: perksData["Sprint_Burst"].name,
            tunables: perksData["Sprint_Burst"].tunables,
          },
        },
        videoUrl: "",
      },
    },
  },
  {
    id: 3,
    img: "/images/survivor/genRush.webp",
    alt: "Toolbox Icon",
    title: "Gen Rush Builds",
    pageTitle: "Best Gen Rush Builds",
    description:
      "Maximize your generator repair speed with builds designed for efficient gen rushing. Perfect for survivors aiming to finish objectives quickly and pressure the killer.",
    shortTitle: "genrush-builds",
    builds: {
      build1: {
        rating: 5,
        buildName: "Best Gen Rush Build",
        perks: {
          perk1: {
            image: perksData["StakeOut"].image,
            description: perksData["StakeOut"].description,
            name: perksData["StakeOut"].name,
            tunables: perksData["StakeOut"].tunables,
          },
          perk2: {
            image: perksData["S33P03"].image,
            description: perksData["S33P03"].description,
            name: perksData["S33P03"].name,
            tunables: perksData["S33P03"].tunables,
          },
          perk3: {
            image: perksData["BuiltToLast"].image,
            description: perksData["BuiltToLast"].description,
            name: perksData["BuiltToLast"].name,
            tunables: perksData["BuiltToLast"].tunables,
          },
          perk4: {
            image: perksData["S42P02"].image,
            description: perksData["S42P02"].description,
            name: perksData["S42P02"].name,
            tunables: perksData["S42P02"].tunables,
          },
        },
        videoUrl: "",
      },
      build2: {
        rating: 5,
        buildName: "Key Gen Rush Build",
        perks: {
          perk1: {
            image: perksData["S43P03"].image,
            description: perksData["S43P03"].description,
            name: perksData["S43P03"].name,
            tunables: perksData["S43P03"].tunables,
          },
          perk2: {
            image: perksData["S24P01"].image,
            description: perksData["S24P01"].description,
            name: perksData["S24P01"].name,
            tunables: perksData["S24P01"].tunables,
          },
          perk3: {
            image: perksData["Plunderers_Instinct"].image,
            description: perksData["Plunderers_Instinct"].description,
            name: perksData["Plunderers_Instinct"].name,
            tunables: perksData["Plunderers_Instinct"].tunables,
          },
          perk4: {
            image: perksData["S44P03"].image,
            description: perksData["S44P03"].description,
            name: perksData["S44P03"].name,
            tunables: perksData["S44P03"].tunables,
          },
        },
        videoUrl: "",
      },
    },
  },
  {
    id: 4,
    img: "/images/survivor/chase.webp",
    alt: "Sprint Burst Icon",
    title: "Chase Builds",
    pageTitle: "Best Chase Builds",
    description:
      "Master the art of the chase with builds focused on agility, evasion, and outsmarting killers. Perfect for survivors who want to stay one step ahead and survive every encounter.",
    shortTitle: "chase-builds",
    builds: {
      build1: {
        rating: 5,
        buildName: "Chase & Endgame Build",
        perks: {
          perk1: {
            image: perksData["Sprint_Burst"].image,
            description: perksData["Sprint_Burst"].description,
            name: perksData["Sprint_Burst"].name,
            tunables: perksData["Sprint_Burst"].tunables,
          },
          perk2: {
            image: perksData["Adrenaline"].image,
            description: perksData["Adrenaline"].description,
            name: perksData["Adrenaline"].name,
            tunables: perksData["Adrenaline"].tunables,
          },
          perk3: {
            image: perksData["Hope"].image,
            description: perksData["Hope"].description,
            name: perksData["Hope"].name,
            tunables: perksData["Hope"].tunables,
          },
          perk4: {
            image: perksData["Vigil"].image,
            description: perksData["Vigil"].description,
            name: perksData["Vigil"].name,
            tunables: perksData["Vigil"].tunables,
          },
        },
        videoUrl: "",
      },
      build2: {
        rating: 5,
        buildName: "Best Looper Build",
        perks: {
          perk1: {
            image: perksData["Lithe"].image,
            description: perksData["Lithe"].description,
            name: perksData["Lithe"].name,
            tunables: perksData["Lithe"].tunables,
          },
          perk2: {
            image: perksData["S43P01"].image,
            description: perksData["S43P01"].description,
            name: perksData["S43P01"].name,
            tunables: perksData["S43P01"].tunables,
          },
          perk3: {
            image: perksData["Vigil"].image,
            description: perksData["Vigil"].description,
            name: perksData["Vigil"].name,
            tunables: perksData["Vigil"].tunables,
          },
          perk4: {
            image: perksData["WindowsOfOpportunity"].image,
            description: perksData["WindowsOfOpportunity"].description,
            name: perksData["WindowsOfOpportunity"].name,
            tunables: perksData["WindowsOfOpportunity"].tunables,
          },
        },
        videoUrl: "",
      },
      build3: {
        rating: 5,
        buildName: "Dramaturgy Build",
        perks: {
          perk1: {
            image: perksData["S38P01"].image,
            description: perksData["S38P01"].description,
            name: perksData["S38P01"].name,
            tunables: perksData["S38P01"].tunables,
          },
          perk2: {
            image: perksData["Vigil"].image,
            description: perksData["Vigil"].description,
            name: perksData["Vigil"].name,
            tunables: perksData["Vigil"].tunables,
          },
          perk3: {
            image: perksData["S43P01"].image,
            description: perksData["S43P01"].description,
            name: perksData["S43P01"].name,
            tunables: perksData["S43P01"].tunables,
          },
          perk4: {
            image: perksData["Fixated"].image,
            description: perksData["Fixated"].description,
            name: perksData["Fixated"].name,
            tunables: perksData["Fixated"].tunables,
          },
        },
        videoUrl: "",
      },
    },
  },
];
