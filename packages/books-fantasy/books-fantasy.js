Meteor.startup(() => {
  const menu = ReactiveMenu.getMenu('books')

  const item = menu.addItem({
    id: 'fantasy',
    title: 'Fantasy',
    url: '#fantasy'
  })

  item.addItem({
    id: 'lotr',
    title: 'Lord of the Rings',
    url: '#lotr'
  })

  item.addItem({
    id: 'got',
    title: 'Game of Thrones',
    url: '#got'
  })
})
