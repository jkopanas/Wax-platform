module.exports = {
  templates: [
    // {
    //   label: "atla",
    //   url: "https://gitlab.coko.foundation/ketty-templates/atla",
    //   assetsRoot: "dist",
    //   supportedNoteTypes: ["footnotes"],
    // },
    // {
    //   label: 'lategrey',
    //   url: '../templates/lategrey',
    //   assetsRoot: 'dist',
    //   supportedNoteTypes: ['chapterEnd'],
    // },
    {
      label: 'significa',
      url: '../templates/significa',
      assetsRoot: 'dist',
      supportedNoteTypes: ['chapterEnd'],
    },
    {
      label: 'bikini',
      url: '../templates/bikini',
      assetsRoot: 'dist',
      supportedNoteTypes: ['chapterEnd'],
    },
    {
      label: 'vanilla',
      url: '../templates/vanilla',
      assetsRoot: 'dist',
      default: true,
      supportedNoteTypes: ['chapterEnd'],
    },
    {
      label: 'atosh',
      url: '../templates/atosh',
      assetsRoot: 'dist',
      supportedNoteTypes: ['chapterEnd'],
    },
    {
      label: 'eclypse',
      url: '../templates/eclypse',
      assetsRoot: 'dist',
      supportedNoteTypes: ['chapterEnd'],
    },
    {
      label: 'logical',
      url: '../templates/logical',
      assetsRoot: 'dist',
      supportedNoteTypes: ['chapterEnd'],
    },
    {
      label: 'tenberg',
      url: '../templates/tenberg',
      assetsRoot: 'dist',
      supportedNoteTypes: ['chapterEnd'],
    },
  ],
  mailer: {
    transport: {
      secure: false,
    },
  },
}
