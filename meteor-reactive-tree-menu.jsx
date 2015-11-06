if (Meteor.isClient) {
  let lastId = 0

  const menu = ReactiveMenu.createMenu({ id: 'primary' })

  menu.addItem({
    id: 'first',
    title: 'First'
  })

  const second = menu.addItem({
    id: 'second',
    title: 'Second',
    url: 'http://markusgreystone.com'
  })

  second.addItem({
    id: 'third',
    title: 'Third'
  })

  const App = React.createClass({

    displayName: 'App',

    onAddClick () {
      menu.addItem({
        id: ++lastId,
        title: 'Another Item'
      })
    },

    render () {
      return (
        <div>
          <button onClick={this.onAddClick}>Add Another Item</button>
          <ReactiveMenu.Menu id='primary' />
        </div>
      )
    }

  })

  Meteor.startup(() => {
    ReactDOM.render(<App />, document.getElementById('app'))
  })
}
