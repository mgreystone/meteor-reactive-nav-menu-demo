function addBadge (menuId, itemId) {
  const menu = ReactiveMenu.getMenu(menuId)
  const item = menu.getItem(itemId)
  item.badge++
}

if (Meteor.isClient) {
  const App = React.createClass({

    displayName: 'App',

    onInboxBadgeClick: addBadge.bind(undefined, 'mailbox', 'inbox'),
    onOutboxBadgeClick: addBadge.bind(undefined, 'mailbox', 'outbox'),
    onSentBadgeClick: addBadge.bind(undefined, 'mailbox', 'sent'),

    render () {
      return (
        <div>
          <h1>Meteor Reactive Nav Menus</h1>
          <p>
            This package creates reactive menus for different packages to
            utilize.
          </p>
          <p>
            <a href='https://github.com/mgreystone/meteor-reactive-nav-menu'>
              Get the Source!
            </a>
          </p>

          <h2>Basic Example</h2>
          <p>
            In this example, the menu is created in the "books-core" package.
            The "Science Fiction" & "Fantasy" items are added by the
            "books-scifi" & "books-fantasy" packages respectively.
          </p>
          <Books.Menu />

          <p>
            Even though the data is hierarchical, the presentation is completely
            flat. This packages contains no styles, allowing the developer
            to style the markup as needed. Here is a basic example:
          </p>

          <Books.Menu className='reactive-menu-basic' />

          <p>
            You can style expanded & collapsed elements. Here is a complete
            example.
          </p>

          <Books.Menu className='reactive-menu-complete' expandable />

          <h2>Reactive Example</h2>

          <p>
            The menus are reactive. When a package updates the menu via the API,
            the UI updates automatically. See below how you can add badges
            to each of the menu items.
          </p>

          <ReactiveMenu.Menu className='reactive-menu-basic' id='mailbox' />

          <button
            onClick={this.onInboxBadgeClick}
            type='button'
          >
            Add Badge to Inbox
          </button>

          <button
            onClick={this.onOutboxBadgeClick}
            type='button'
          >
            Add Badge to Outbox
          </button>

          <button
            onClick={this.onSentBadgeClick}
            type='button'
          >
            Add Badge to Sent
          </button>
        </div>
      )
    }

  })

  Meteor.startup(() => {
    ReactDOM.render(<App />, document.getElementById('app'))
  })
}
