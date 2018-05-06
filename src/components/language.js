import { screen } from "../assets"

export const LanguageHero = {
  pt: {
    cta: "Olá estranho",
    description:
      "Meu nome é Carlos, tenho 24 anos e moro no Pará, Brasil. Sou formado em Engenharia de Produção e atualmente faço Pós-Graduação em Engenharia de Software."
  },
  en: {
    cta: "Hi there",
    description:
      "My name is Carlos, i'm 24 years old, and live in Pará, Brazil. I have a bachelor degree in Production Engineering and currently doing a major in software engineering."
  }
}

export const LanguageProject = {
  pt: {
    last: {
      name: "YASCC",
      description:
        "Yet Another SoundCloud Client é um tocador de música feito em Preact e Redux, o mesmo utiliza localStorage através do redux-persist para salvar playlists criadas pelo usuário, outro destaque é o uso de Media Session API para fornecer integração com smartphones androids na tela de bloqueio.",
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
        "Yet Another SoundCloud Client is a music player, built with Preact and Redux, it uses localStorage through redux-persist to persist user created playlist, other highlight is the usage of Media Session API to give a cool integration with Android devices.",
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
