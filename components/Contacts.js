var Contacts = React.createClass({
    propTypes: {
        items: React.PropTypes.array.isRequired,
    },

    render: function() {
        return (
            <ul className="contactsList">
                {this.props.items.map((contact) => [
                    <Contact item={contact} key={contact.id} />
                ])}
            </ul>
        );
    }
});
