import { connect } from 'react-redux'
import Header from '../component/Header'
import {clearfilter, setactivebutton} from "../action/app-actions";

const mapStateToProps = (state) => ({
    activeTab : state.activeButtonId,
    cartItem : state.cartlist.list.length,
    soldItem : state.soldlist.list.length
})

const mapDispatchToProps = (dispatch) => ({
    setactivebutton : (tabid) =>{
        dispatch(setactivebutton(tabid))
        dispatch(clearfilter())
    }
})

const TabHeader = connect(mapStateToProps, mapDispatchToProps)(Header)

export default TabHeader