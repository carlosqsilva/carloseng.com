import { screen } from "../assets"

export const LanguageHero = {
  pt: {
    cta: "Olá estranho",
    description:
      "Meu nome é Carlos, moro no Pará, Brasil. Atualmente faço Pós-Graduação em Engenharia de Software."
  },
  en: {
    cta: "Hi there",
    description:
      "My name is Carlos, i live in Pará, Brazil. Currently doing a major in software engineering."
  }
}

export const LanguageProject = {
  pt: {
    last: {
      name: "YASCC",
      description:
        "Yet Another SoundCloud Client é um tocador de música, utiliza localStorage para salvar playlists do usuário, e Media Session API fornecendo integração com smartphones androids.",
      link: "https://carlosqsilva.github.io/YASCC/#/",
      tech: ["Preact", "Redux", "React-Router"],
      image: screen
    },
    other: [
      {
        name: "CCharts",
        description:
          "Plota gráficos de controle de qualidade no navegador, usando arquivos csv.",
        link: "https://carlosqsilva.github.io/ccharts-online/",
        tech: ["React", "Redux", "Chartjs"]
      },
      {
        name: "APOD",
        description:
          "Exibição de imagens/fotografias do espaço, usando a API APOD.",
        link: "https://carlosqsilva.github.io/Astronomy-Picture-of-the-Day/",
        tech: ["Vuejs", "Bulma"]
      },
      {
        name: "Pyspc",
        description:
          "Biblioteca Python para plotar gráficos de controle de qualidade.",
        link: "https://github.com/carlosqsilva/pyspc",
        tech: ["Python", "Numpy", "Matplotlib"]
      },
      {
        name: "ytview",
        description:
          "Cli para buscar e assistir videos do Youtube diretamente no Vlc ou mpv.",
        link: "https://github.com/carlosqsilva/ytview",
        tech: ["Node"]
      },
      {
        name: "SpreadSheet-unlock",
        description: "Desbloqueia planilhas excel bloqueadas por senha.",
        link: "https://github.com/carlosqsilva/SpreadSheet-Unlock",
        tech: ["Python"]
      }
    ]
  },
  en: {
    last: {
      name: "YASCC",
      description:
        "Yet Another SoundCloud Client is a music player, it persist user playlist using localStorage, and Media Session API to give a cool integration with Android devices.",
      link: "https://carlosqsilva.github.io/YASCC/#/",
      tech: ["Preact", "Redux", "React-Router"],
      image: screen
    },
    other: [
      {
        name: "CCharts",
        description:
          "Plot quality control charts on browser, by importing CSV files.",
        link: "https://carlosqsilva.github.io/ccharts-online/",
        tech: ["React", "Redux", "Chartjs"]
      },
      {
        name: "APOD",
        description:
          "Uses Nasa APOD api to display new Astronomy picture every day",
        link: "https://carlosqsilva.github.io/Astronomy-Picture-of-the-Day/",
        tech: ["Vuejs", "Bulma"]
      },
      {
        name: "Pyspc",
        description: "Python library to plot quality control charts.",
        link: "https://github.com/carlosqsilva/pyspc",
        tech: ["Python", "Numpy", "Matplotlib"]
      },
      {
        name: "ytview",
        description:
          "Node cli tool to search and view youtube in mpv/vlc player",
        link: "https://github.com/carlosqsilva/ytview",
        tech: ["Node"]
      },
      {
        name: "SpreadSheet-unlock",
        description: "Unlock SpreadSheets Protected by Passwords",
        link: "https://github.com/carlosqsilva/SpreadSheet-Unlock",
        tech: ["Python"]
      }
    ]
  }
}
