/* ============================================================================
   PORTFÓLIO — DADOS  (este é o ÚNICO arquivo que você precisa editar)
   ----------------------------------------------------------------------------
   • Edite os textos entre aspas.
   • IMAGENS: crie uma pasta "images" ao lado dos arquivos e aponte os caminhos
     em images: ["images/projeto-1.jpg", "images/projeto-2.jpg"].
     - 0 imagens -> aparece um placeholder estiloso (não quebra nada).
     - 1 imagem   -> mostra a imagem (sem setas).
     - 2+ imagens -> vira carrossel automático com setas e bolinhas.
   • VÍDEO: em video: "..."  Cole um link do YouTube OU um arquivo .mp4.
     - vazio -> a página usa a primeira imagem como destaque (fallback automático).
   • LINKS: cada item é { label:"Steam", url:"https://..." }.
   • Para ADICIONAR um projeto, copie um bloco { ... } e ajuste o "slug" (precisa
     ser único — é o que vai na URL da página do projeto).
   • Onde houver  ⚠️  é um ponto de atenção pra você revisar/preencher.
   ============================================================================ */

const PORTFOLIO = {

  /* -------------------------------------------------------- PERFIL / TOPO -- */
  profile: {
    name:     "Danilo Santos",                       // ⚠️ seu nome (como quer aparecer)
    role:     ["Game Programmer", "Gameplay · Systems · Networking", "Console Porting & Optimization"],
    location: "Brazil",                           // ⚠️ ajuste se quiser
    yearsExp: "8",
    availability: "Open to new opportunities — remote / relocation",

    pitch: "Game programmer with nearly 8 years in the industry. I've shipped and ported commercial titles across PC, PlayStation, Xbox, Nintendo Switch and mobile — as a systems programmer, technical lead and porting lead. I specialize in gameplay, multiplayer networking and console porting & optimization, primarily in Unreal Engine.",

    links: {
      email:    "danilos.santos@outlook.com",         // ⚠️ TROCAR
      github:   "https://github.com/DaniloRodriguesSantos",   // ⚠️ TROCAR (ou "")
      linkedin: "https://www.linkedin.com/in/danilorodriguesdossantos/", // ⚠️ TROCAR (ou "")
      resume:   "DaniloRodrigues_GameProgrammer.pdf"                                // CV em PDF, ex.: "cv.pdf" (opcional)
    },

    about: [
      "I'm a game programmer with nearly 8 years of professional experience. I've worked across full-cycle development and porting, contributing to commercial titles on PC, console and mobile.",
      "I specialize in Unreal Engine, with hands-on depth in gameplay programming, multiplayer networking and replication, system architecture, and console porting & optimization. I've held Technical Lead and Porting Lead roles on multiple shipped titles.",
      "I work comfortably with international teams in English, and I'm looking to contribute to studios building technically ambitious games."
    ]
  },

  /* ----------------------------------------------------------- AJUSTES UI -- */
  carouselIntervalMs: 4000,   // intervalo do autoplay do carrossel (ms). Ex.: 5000 = 5s.

  /* nomes das duas seções da home (mude à vontade) */
  sections: {
    fulldev: { label: "01 / Full-Cycle Development", title: "Full-Cycle Development",
               blurb: "End-to-end game development — gameplay, systems, networking and technical leadership on commercial titles." },
    porting: { label: "02 / Porting & Platform Engineering", title: "Porting & Platform Engineering",
               blurb: "Bringing games to every major console — re-engineering systems to meet strict platform and certification requirements." }
  },

  /* ============================================================ PROJETOS == */
  /* category: "fulldev" (Full Development)  ou  "porting" (Porting)          */
  /* A ordem aqui é a ordem que aparece no site (coloquei os mais fortes 1º). */
  projects: [

    /* ============ FULL DEVELOPMENT ============ */

    {
      slug: "uniqkiller",
      category: "fulldev",
      title: "Uniqkiller: Urban Shooter",
      tagline: "Cross-platform multiplayer top-down shooter",
      status: "Released — Open Beta · Dec 2025",
      role: "Gameplay & Networking Programmer",
      platforms: ["Steam (PC)", "Android", "iOS"],
      developer: "HypeJoe Games",
      publisher: "HypeJoe Games",
      tech: ["Unreal Engine 5", "C++", "AWS", "Git", "Postman"],
      video: "https://www.youtube.com/watch?v=pHNyr016mEE",                                   // ⚠️ link do YouTube ou .mp4 (opcional)
      images: [
          "images/Uniqkiller_01.avif", 
        "images/Uniqkiller_02.jpg", 
        "images/Uniqkiller_03.png", 
        "images/Uniqkiller_04.png"],                                  // ⚠️ ex.: ["images/uniqkiller-1.jpg", ...]
      links: [
        {label:"Steam", url:"https://store.steampowered.com/app/3099330/UniqKiller_Urban_Shooter/"},
        {label:"Android", url:"https://play.google.com/store/apps/details?id=com.HypeJoeGames.UniqKiller"},
        {label:"IOS", url:"https://apps.apple.com/br/app/uniqkiller/id6745983212"},
      ],                                   // ⚠️ ex.: [{label:"Steam", url:"https://..."}]

      overview: "A cross-platform, top-down multiplayer shooter for mobile and PC. I contributed from a full redesign of the game through to its open beta, owning the core gameplay systems and the entire networking layer.",

      responsibilities: ["Gameplay systems", "Networking & replication", "Cross-platform build certification", "Backend integration"],

      contributions: [
        "Designed and implemented the weapon system and RPG progression mechanics.",
        "Built the full networking and replication layer, delivering smooth, accurately replicated gameplay over dedicated servers hosted on AWS.",
        "Configured and shipped certified builds across Steam, Android and iOS.",
        "Integrated cross-platform authentication with a custom backend, persisting player accounts and progress across sessions and devices with a focus on data security."
      ],

      challenges: [
        { problem: "Delivering responsive, fair gameplay in a real-time shooter across very different mobile and PC clients.",
          solution: "A dedicated-server architecture on AWS with authoritative, carefully replicated game state, keeping every client in sync regardless of device." },
        { problem: "A single player identity and persistent progress across three platforms, each with its own login system.",
          solution: "Integrated each platform's authentication into a shared backend, persisting accounts and game data across sessions and devices while securing player information." }
      ],

      highlights: [
        "Owned the full networking & replication layer over AWS dedicated servers",
        "Shipped certified builds to Steam, Android & iOS",
        "Built the weapon system + RPG progression from the ground up",
        "Cross-platform account persistence via custom backend"
      ]
    },

    {
      slug: "thats-my-family",
      category: "fulldev",
      title: "That's my Family: Family Fun Night",
      tagline: "Console party collection of 14 classic games",
      status: "Released · Mar 2023",
      role: "Technical Lead",
      platforms: ["Steam (PC)", "Microsoft Store (PC)", "Nintendo Switch", "PS4", "Xbox One"],
      developer: "DXGameworks",
      publisher: "Plug In Digital",
      tech: ["Unreal Engine 5", "C++", "SVN"],
      video: "https://www.youtube.com/watch?v=XgA4R2gagaM",
      images: [
          "images/tmf_01.webp",
        "images/tmf_02.avif",
        "images/tmf_03.avif",
        "images/tmf_04.jpg"
      ],
      links: [
        {label:"Playstation", url:"https://store.playstation.com/pt-br/product/UP1309-CUSA37759_00-8496504645642835"},
        {label:"Microsoft", url:"https://www.xbox.com/pt-BR/games/store/that-s-my-family-family-fun-night/9nzxj2fg2dmr?ocid=storeforweb"},
        {label:"Nintendo", url:"https://www.nintendo.com/pt-br/store/products/thats-my-family-family-fun-night-switch/?srsltid=AfmBOopJ2VhZol0Uu0vL0-z80b8yggCGAk8rIU3BiHEQSzJdDM1o4M12"},
      ],

      overview: "My first project as Technical Lead — a console party collection bundling 14 classic tabletop and arcade games (chess, checkers, backgammon, awele, Connect 4, Simon and more), shipped to Nintendo Switch, PS4 and Xbox One. I drove it from initial concept through to multi-platform launch.",

      responsibilities: ["Technical leadership (full cycle)", "System architecture", "AI", "Local multiplayer", "Platform certification"],

      contributions: [
        "Architected a shared, data-driven framework abstracting the common elements across all 14 games (boards, pieces, turn and movement rules), enabling heavy code reuse and dramatically accelerating development.",
        "Leveraged that architecture to implement a single, generic AI driven by per-game rule sets — instead of building 14 separate opponents.",
        "Implemented local multiplayer for up to 4 human players plus 2 AI opponents, with per-player character selection.",
        "Owned technical direction across the project, from early concept to certification and launch on three consoles."
      ],

      challenges: [
        { problem: "Building 14 distinct games on schedule without duplicating effort 14 times over.",
          solution: "Identified the structural patterns shared across the games and built a unified, reusable framework — plus one rule-fed AI — which accelerated development across the entire collection." }
      ],

      highlights: [
        "First project as Technical Lead — concept to launch",
        "Unified architecture powering 14 classic games from shared code",
        "A single data-driven AI configured per game",
        "Local multiplayer (4 players + 2 AI) shipped to 3 consoles"
      ]
    },

    {
      slug: "unannounced-reboot",
      category: "fulldev",
      title: "Unannounced Reboot",
      tagline: "Cinematic action-adventure — AA franchise reboot",
      status: "Cancelled · Under NDA",
      role: "Gameplay & Systems Programmer",
      platforms: ["PC"],
      developer: "DXGameworks",
      publisher: "SOEDESCO",
      tech: ["Unity", "Unreal Engine 5", "C++", "SVN"],
      video: "",
      images: [],
      links: [],

      overview: "An unannounced reboot of an established AA action-adventure franchise — a cinematic action and puzzle title in the spirit of Uncharted and Tomb Raider. Development began in Unity and later moved to Unreal Engine 5. I owned a range of systems spanning UI and gameplay.",

      responsibilities: ["Gameplay systems", "UI systems", "Character traversal / animation"],

      contributions: [
        "Built a dynamic UI navigation-stack system that preserved menu navigation order and automatically restored focus to the correct widget on back-navigation — effectively the behavior Unreal's CommonUI provides today, implemented before CommonUI existed.",
        "Designed and implemented a full Uncharted-style climbing system: ledge detection, ledge-to-ledge traversal, character animation, and resolution of the many edge cases traversal systems introduce.",
        "Contributed across multiple gameplay and UI systems through a mid-project engine migration from Unity to Unreal Engine 5."
      ],

      challenges: [
        { problem: "Robust navigation across deep, nested menus before engine-level UI tooling existed.",
          solution: "A dynamic navigation stack that tracked widget order and restored focus when the player backed out — anticipating the design CommonUI would later standardize." },
        { problem: "Believable ledge traversal, which is notorious for edge cases.",
          solution: "A complete climbing system handling detection, movement, animation and corner-case resolution end to end." }
      ],

      highlights: [
        "Cinematic action-adventure (Uncharted / Tomb Raider inspired)",
        "Authored a UI navigation-stack system predating CommonUI",
        "Built a full Uncharted-style climbing & traversal system",
        "Cross-engine experience: Unity → Unreal Engine 5"
      ]
    },

    {
      slug: "171",
      category: "fulldev",
      title: "171",
      tagline: "GTA-inspired open world set in São Paulo, Brazil",
      status: "Early Access",
      role: "Gameplay Systems Programmer",
      platforms: ["Steam (PC)"],
      developer: "Betagames Group",
      publisher: "Betagames Group",
      tech: ["Unreal Engine 5", "C++", "Git"],
      video: "https://youtu.be/V6qnyGGZ9Xo?si=PhY1AYtEnb6HItSm",
      images: [
        "images/171_01.jpg",
        "images/171_02.jpg",
        "images/171_03.jpg",
        "images/171_04.jpg",
      ],
      links: [
        {label:"Steam", url:"https://store.steampowered.com/app/1269370/171/"},
      ],

      overview: "An open-world action game inspired by the Grand Theft Auto series, set in the state of São Paulo, Brazil (currently in Early Access). I reworked several core gameplay systems, focused on combat and AI.",

      responsibilities: ["Combat systems", "NPC behavior", "Animation integration"],

      contributions: [
        "Reworked core gameplay systems, including NPC behavior.",
        "Owned the firearm and melee combat systems.",
        "Integrated Unreal Engine's Motion Matching to deliver the grounded, realistic animation the game's tone required."
      ],

      challenges: [
        { problem: "Delivering grounded, realistic movement and combat fitting an open-world crime setting.",
          solution: "Reworked the combat systems and adopted Unreal's Motion Matching to raise animation fidelity to the level the genre demands." }
      ],

      highlights: [
        "GTA-inspired open world set in São Paulo, Brazil",
        "Owned firearm & melee combat systems",
        "Reworked NPC behavior",
        "Realistic animation via Unreal Motion Matching"
      ]
    },

    {
      slug: "superkid-x1",
      category: "fulldev",
      title: "Superkid X1",
      tagline: "1v1 street-football with local & online multiplayer",
      status: "In Development",
      role: "UI Programmer & Certification",
      platforms: ["Steam (PC)"],
      developer: "Fogo Games",
      publisher: "Aoca Game Lab · Fogo Games",
      tech: ["Unreal Engine 5", "C++", "Git"],
      video: "",
      images: [
        "images/superkid_01.jpg",
        "images/superkid_02.jpg",
        "images/superkid_03.png",
        "images/superkid_04.jpg",
      ],
      links: [
        {label:"Steam", url:"https://store.steampowered.com/app/4614880/Superkid_X1/"},
      ],

      overview: "A 1v1 street-football game featuring both local and online multiplayer, currently in development. I'm responsible for UI programming and Steam certification.",

      responsibilities: ["UI / UMG programming", "Steam certification"],

      contributions: [
        "Building responsive UI systems (UMG) for the game.",
        "Owning the Steam certification process and platform compliance."
      ],

      challenges: [
        { problem: "Delivering a polished, responsive UI that holds up across resolutions and input devices.",
          solution: "Developing UMG-based UI systems with responsiveness and platform compliance in mind from the start." }
      ],

      highlights: [
        "1v1 street football — local & online multiplayer",
        "Responsive UI systems (UMG)",
        "Steam certification ownership"
      ]
    },

    /* ============ PORTING ============ */

    {
      slug: "supraland-six-inches-under",
      category: "porting",
      title: "Supraland: Six Inches Under",
      tagline: "Open-world puzzle-adventure ported to every major console",
      status: "Released · May 2023",
      role: "Technical Lead (Porting)",
      platforms: ["Microsoft Store", "PS4", "PS5", "Xbox One", "Xbox Series X|S"],
      developer: "Supra Games · DXGameworks",
      publisher: "Supra Games",
      tech: ["Unreal Engine 4", "C++", "Perforce"],
      video: "https://www.youtube.com/watch?v=yXMCyJxwpQY",
      images: [
        "images/ssiu_01.jpg",
        "images/ssiu_02.avif",
        "images/ssiu_03.avif",
        "images/ssiu_04.avif",
      ],
      links: [
        {label:"Playstation", url:"https://store.playstation.com/pt-br/product/UP3864-PPSA13783_00-SUPRALANDSIUP5NA"},
        {label:"Microsoft", url:"https://www.xbox.com/en-US/games/store/supraland-six-inches-under/9P5RS5065835"}
      ],

      overview: "Technical Lead on the console port of this open-world puzzle-adventure, bringing a PC title to PlayStation and Xbox (with an in-progress Switch version). The port required re-engineering several systems to meet strict console requirements.",

      responsibilities: ["Porting technical leadership", "Save system re-engineering", "Memory & streaming optimization"],

      contributions: [
        "Led the port to all major consoles as Technical Lead.",
        "Re-engineered the save system into a queued, console-compliant pipeline.",
        "Rewrote the game's map-persistence feature into a console-supported format.",
        "Implemented Level Streaming plus a custom dynamic-object freeze/unfreeze system to fit an open world into Switch memory without breaking backtracking."
      ],

      challenges: [
        { problem: "The original save system issued multiple concurrent save requests, which consoles prohibit.",
          solution: "Re-architected saving to serialize requests through a queue, and adapted the game so players couldn't interrupt the process and corrupt the save file." },
        { problem: "The progressively-revealed map with player annotations was stored in a format consoles didn't support.",
          solution: "Rewrote the feature entirely into a console-supported format so it persisted correctly across sessions." },
        { problem: "The open-world, backtracking-heavy game loaded its entire map into memory with no optimization — heavy even on PC, and it wouldn't boot on Switch.",
          solution: "Implemented Level Streaming to load only the regions relevant to the player. Since unloading a level reset its dynamic objects (physics objects fell into the void, and moving them to the persistent level left them unaware of when to behave normally), I built a system where each dynamic object knows which level it currently belongs to — 'freezing' it when its level unloads and 'unfreezing' it on reload. This preserved backtracking and made the game fully playable start-to-finish on Switch, where it previously wouldn't even open." }
      ],

      highlights: [
        "Technical Lead — ported to PS4 / PS5 / Xbox One / Series X|S",
        "Re-architected the save system to meet console concurrency rules",
        "Fit an open world into Nintendo Switch memory via Level Streaming",
        "Custom freeze/unfreeze system preserved backtracking under streaming"
      ]
    },

    {
      slug: "niche",
      category: "porting",
      title: "Niche — a genetics survival game",
      tagline: "First professional project — sole programmer on the console port",
      status: "Released · Sep 2020",
      role: "Sole Porting Programmer",
      platforms: ["Nintendo Switch", "Xbox One", "PS4"],
      developer: "Stray Fawn Studio · Garage227 Studios",
      publisher: "Stray Fawn Publishing · WhisperGames",
      tech: ["Unity", "C#", "Git"],
      video: "https://www.youtube.com/watch?v=s52Prk9PWXU",
      images: [
        "images/niche_01.jpg",
        "images/niche_02.avif",
        "images/niche_03.avif",
        "images/niche_04.avif",
      ],
      links: [
        {label:"Playstation", url:"https://store.playstation.com/pt-br/product/UP6479-CUSA26912_00-2566556070177226"},
        {label:"Microsoft", url:"https://www.xbox.com/pt-BR/games/store/niche-a-genetics-survival-game/9n2f6txprdb0"},
        {label:"Nintendo", url:"https://www.nintendo.com/us/store/products/niche-a-genetics-survival-game-switch/?srsltid=AfmBOopZVMhCoFHKZpfzMy5oOjN5d3U_6T9mOv2E0wnenhaf-ywBrK6g"}
      ],

      overview: "My first professional project — sole programmer on the console port of this PC genetics survival sim, initially to Nintendo Switch and later to Xbox One and PS4. As the only engineer, I owned every system needed to bring it to console.",

      responsibilities: ["Sole porting programmer", "Gamepad input re-engineering", "Console SDK integration", "Save/load rebuild"],

      contributions: [
        "Sole programmer — adapted all systems required for Switch, Xbox One and PS4.",
        "Re-engineered the keyboard/mouse-only UI and gameplay for full gamepad control.",
        "Integrated the Nintendo SDK (and later the other consoles' SDKs) and substantially rebuilt the save/load system for console.",
        "Adapted UI layouts to remain usable on the small Switch handheld screen."
      ],

      challenges: [
        { problem: "The game was built entirely for keyboard and mouse — all UI and gameplay assumed mouse input.",
          solution: "Re-engineered the full navigation and gameplay interaction model for gamepad, making many design decisions in collaboration with the original team." },
        { problem: "PC players use far larger displays than the Switch screen, leaving several UIs unusable on handheld.",
          solution: "Adapted the affected UI layouts so they remained clear and usable on a small screen." },
        { problem: "The original save system had no console support.",
          solution: "Integrated the Nintendo SDK (then the other consoles) and largely rebuilt save/load to work correctly on console hardware." }
      ],

      highlights: [
        "First professional project — sole programmer on the port",
        "Full keyboard/mouse → gamepad re-engineering",
        "Nintendo SDK integration + rebuilt save system",
        "Shipped to Switch, Xbox One & PS4"
      ]
    },

    {
      slug: "unannounced-souls-fps",
      category: "porting",
      title: "Unannounced FPS (Souls-like)",
      tagline: "Console port of a AA souls-like shooter during active development",
      status: "Unannounced · Under NDA",
      role: "Porting Lead",
      platforms: ["PS5", "Xbox Series X|S"],
      developer: "Eschatology Entertainment",
      publisher: "Focus Entertainment",
      tech: ["Unreal Engine 5", "C++", "Perforce"],
      video: "",
      images: [],
      links: [],

      overview: "Porting Lead bringing an unannounced AA first-person, souls-like shooter with RPG elements to PS5 and Xbox Series X|S — while the title was still in active development.",

      responsibilities: ["Porting leadership", "Console certification readiness", "Cross-studio coordination"],

      contributions: [
        "Led console porting for PS5 and Xbox Series X|S.",
        "Coordinated intensively with the original studio to port systems that were constantly changing, converging on a certification-ready build."
      ],

      challenges: [
        { problem: "Porting a moving target — systems we ported were frequently reworked or removed by the original team shortly afterward.",
          solution: "Established continuous, close planning with the original developer to keep the port aligned with the evolving game and reach a console-certification-ready product." }
      ],

      highlights: [
        "Porting Lead — PS5 & Xbox Series X|S",
        "Ported a AA souls-like FPS during active development",
        "Drove the title toward console certification readiness",
        "Close coordination with Focus Entertainment / Eschatology Entertainment"
      ]
    },

    {
      slug: "sunnyside",
      category: "porting",
      title: "Sunnyside",
      tagline: "Console port reconciled with ongoing development",
      status: "Released · Aug 2024",
      role: "Porting Programmer",
      platforms: ["PS5", "Xbox Series X|S"],
      developer: "Aftabi Games · Side",
      publisher: "Aftabi Games",
      tech: ["Unreal Engine 5", "C++", "Perforce"],
      video: "https://www.youtube.com/watch?v=fg6zNAipwNs",
      images: [
        "images/sunnyside_01.jpg",
        "images/sunnyside_02.jpg",
        "images/sunnyside_03.jpg",
        "images/sunnyside_04.jpg",
      ],
      links: [],

      overview: "Console port of this PC title to PS5 and Xbox Series X|S. Unlike earlier ports, the game was still in active development, so the central challenge was reconciling continuous development with porting needs — performance and optimization in particular.",

      responsibilities: ["Console porting", "Performance optimization"],

      contributions: [
        "Ported the title to PS5 and Xbox Series X|S.",
        "Balanced the game's ongoing development against console optimization and performance targets throughout the port."
      ],

      challenges: [
        { problem: "Porting a game that was still being built, while keeping it optimized for console.",
          solution: "Aligned the continuous development with console performance requirements at every step, treating optimization as a moving target rather than a final pass." }
      ],

      highlights: [
        "Console port to PS5 & Xbox Series X|S",
        "Managed porting against a still-evolving codebase",
        "Focus on console optimization & performance"
      ]
    }

  ]
};
