Books = {
  Menu: React.createClass({

    displayName: 'Books.Menu',

    propTypes: {
      className: React.PropTypes.string,
      expandable: React.PropTypes.bool
    },

    getDefaultProps () {
      return {
        expandable: false
      }
    },

    render () {
      const { className, expandable } = this.props

      return (
        <ReactiveMenu.Menu
          className={className}
          expandable={expandable}
          id='books'
        />
      )
    }

  })
}
