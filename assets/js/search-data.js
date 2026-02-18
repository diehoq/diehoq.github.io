// get the ninja-keys element
const ninja = document.querySelector('ninja-keys');

// add the home and posts menu items
ninja.data = [{
    id: "nav-about",
    title: "about",
    section: "Navigation",
    handler: () => {
      window.location.href = "/";
    },
  },{id: "nav-publications",
          title: "publications",
          description: "",
          section: "Navigation",
          handler: () => {
            window.location.href = "/publications/";
          },
        },{id: "nav-talks",
          title: "talks",
          description: "",
          section: "Navigation",
          handler: () => {
            window.location.href = "/talks/";
          },
        },{id: "nav-cv",
          title: "cv",
          description: "Download the PDF CV or browse the sections below.",
          section: "Navigation",
          handler: () => {
            window.location.href = "/cv/";
          },
        },{id: "nav-repositories",
          title: "repositories",
          description: "A selection of GitHub repositories I contribute to.",
          section: "Navigation",
          handler: () => {
            window.location.href = "/repositories/";
          },
        },{id: "news-officially-graduated-from-epfl-with-a-master-in-quantum-science-and-engineering",
          title: 'Officially graduated from EPFL with a Master in Quantum Science and Engineering! 🎓...',
          description: "",
          section: "News",},{id: "news-i-ll-be-at-mit-iquhack-2026-as-a-mentor-for-the-alice-amp-amp-bob-challenge-get-in-touch-if-you-ll-be-there",
          title: 'I’ll be at MIT IQuHack 2026 as a mentor for the Alice&amp;amp;amp;Bob challenge!...',
          description: "",
          section: "News",},{id: "news-i-ll-be-at-the-epfl-quantum-hackathon-2026-as-a-mentor-for-the-alice-amp-amp-bob-challenge-get-in-touch-if-you-ll-be-there",
          title: 'I’ll be at the EPFL Quantum Hackathon 2026 as a mentor for the...',
          description: "",
          section: "News",},{
        id: 'social-email',
        title: 'email',
        section: 'Socials',
        handler: () => {
          window.open("mailto:%64%69%65%67%6F.%70%6F%6C%69%6D%65%6E%69.%77%6F%72%6B@%67%6D%61%69%6C.%63%6F%6D", "_blank");
        },
      },{
        id: 'social-github',
        title: 'GitHub',
        section: 'Socials',
        handler: () => {
          window.open("https://github.com/diehoq", "_blank");
        },
      },{
        id: 'social-linkedin',
        title: 'LinkedIn',
        section: 'Socials',
        handler: () => {
          window.open("https://www.linkedin.com/in/diegopolimeni", "_blank");
        },
      },{
      id: 'light-theme',
      title: 'Change theme to light',
      description: 'Change the theme of the site to Light',
      section: 'Theme',
      handler: () => {
        setThemeSetting("light");
      },
    },
    {
      id: 'dark-theme',
      title: 'Change theme to dark',
      description: 'Change the theme of the site to Dark',
      section: 'Theme',
      handler: () => {
        setThemeSetting("dark");
      },
    },
    {
      id: 'system-theme',
      title: 'Use system default theme',
      description: 'Change the theme of the site to System Default',
      section: 'Theme',
      handler: () => {
        setThemeSetting("system");
      },
    },];
