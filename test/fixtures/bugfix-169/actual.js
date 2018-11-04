class Test extends React.Component {
    static propTypes = {
        columns: PropTypes.shape({
            [constants.TEST]: STRING_PROP_TYPE,
        }),
    };
}
