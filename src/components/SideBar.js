import { PropaneSharp } from '@mui/icons-material'
import './sideBar.css'

const SideBar = (props) => {
  return (
    <div className='sideBar'>
        <ul>
            <li onClick={()=>{
              props.setShowProducts(true)
              props.setShowClient(false)
              props.setShowCharts(false)
            }}>Products</li>
            <li onClick={()=>{
              props.setShowProducts(false)
              props.setShowClient(true)
              props.setShowCharts(false)
            }}>Client List</li>
            <li onClick={()=>{
              props.setShowProducts(false)
              props.setShowClient(false)
              props.setShowCharts(true)
            }}>Sales Statistics</li>
        </ul>
    </div>
  )
}

export default SideBar
