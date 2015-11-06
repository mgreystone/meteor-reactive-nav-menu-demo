Package.describe({
  name: 'mgreystone:books-core',
  version: '0.0.1',
  // Brief, one-line summary of the package.
  summary: '',
  // URL to the Git repository containing the source code for this package.
  git: '',
  // By default, Meteor will default to using README.md for documentation.
  // To avoid submitting documentation, set this field to null.
  documentation: 'README.md'
})

Package.onUse(function (api) {
  api.versionsFrom('1.2.1')

  const packages = [
    'ecmascript@0.1.6',
    'react@0.14.1_1',
    'mgreystone:reactive-nav-menu@0.0.1'
  ]

  api.use(packages)
  api.imply(packages)

  api.addFiles([
    'lib/startup.js',
    'lib/components/BooksMenu.jsx'
  ], 'client')

  api.export('Books', 'client')
})

Package.onTest(function (api) {
  api.use('ecmascript')
  api.use('tinytest')
  api.use('mgreystone:books-core')
  api.addFiles('books-core-tests.js')
})
