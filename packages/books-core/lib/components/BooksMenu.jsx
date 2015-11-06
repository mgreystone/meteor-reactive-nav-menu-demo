Books = {
  Menu: React.createClass({

    displayName: 'Books.Menu',

    propTypes: {
      className: React.PropTypes.string
    },

    render () {
      const { className } = this.props

      return (
        <ReactiveMenu.Menu className={className} id='books' />
      )
    }

  })
}
