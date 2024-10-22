import PropTypes from 'prop-types'
import Button from './Button'

const Header = ({ onAdd, show }) => {
    return (
        <header className='header'>
            {/* css in js */}
            {/* <h1 style={headingStyles}>{title}</h1> */}
            <h1>Task Tracker</h1>
            <Button onClick={onAdd} text={show ? 'Close' : 'Add'} color={show ? 'red' : 'green'} />
        </header>
    )
}

Header.propTypes = {
    title: PropTypes.string.isRequired,
}

//CSS in JS
// const headingStyles = {
//     color: 'red',
//     backgroundColor: 'black'
// }

export default Header
