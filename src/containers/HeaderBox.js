import { connect } from 'react-redux'
import Header from '../components/Header'

function mapStateToProps (state) {
  return {
    users: state.users
  }
}

const HeaderBox = connect(
  mapStateToProps
)(Header)

export default HeaderBox
