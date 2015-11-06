if (Meteor.isClient) {
  const App = React.createClass({

    displayName: 'App',

    render () {
      return (
        <div>
          <h1>Meteor Reactive Nav Menus</h1>
          <p>
            This package creates reactive menus for different packages to
            utilize.
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

          <Books.Menu className='reactive-menu-complete' />
        </div>
      )
    }

  })

  Meteor.startup(() => {
    ReactDOM.render(<App />, document.getElementById('app'))
  })
}
