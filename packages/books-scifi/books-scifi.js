Meteor.startup(() => {
  const menu = ReactiveMenu.getMenu('books')

  const item = menu.addItem({
    id: 'scifi',
    title: 'Science Fiction',
    url: '#scifi'
  })

  item.addItem({
    id: 'dune',
    title: 'Dune',
    url: '#dune'
  })

  item.addItem({
    id: 'foundation',
    title: 'Foundation',
    url: '#foundation'
  })
})
