module.exports = {
  pathPrefix: '/', // Prefix for all links. If you deploy your site to example.com/portfolio your pathPrefix should be "portfolio"
  title: 'Career Switch - RemotePETGA', // Navigation and Site Title
  titleAlt: 'Junior Remote Developer', // Title for JSONLD
  description: 'Carnet de notes pour un changement de carrière : Passer de gestionnaire des stocks à remote developer en 6 mois',
  headline: 'Ecrire et Publier des Notes pour RemotePETGA', // Headline for schema.org JSONLD
  url: 'https://remotepetga.netlify.com', // Domain of your site. No trailing slash!
  siteLanguage: 'en', // Language Tag on <html> element
  logo: '/logos/logo-1024.png', // Used for SEO
  ogLanguage: 'en_US', // Facebook Language

  // JSONLD / Manifest
  favicon: 'src/favicon.png', // Used for manifest favicon generation
  shortName: 'dpetga', // shortname for manifest. MUST be shorter than 12 characters
  author: 'Duverger PETGA', // Author for schemaORGJSONLD
  themeColor: '#3D63AE',
  backgroundColor: '#EBEDF2',

  twitter: '@epegase', // Twitter Username
  facebook: 'Pegase Ecofinance', // Facebook Site Name
  googleAnalyticsID: 'UA-47519312-7',

  skipNavId: 'reach-skip-nav', // ID for the "Skip to content" a11y feature
}
