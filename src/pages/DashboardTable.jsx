import './dash.css'

const DashboardTable = (props) => {
  return (
   
          <div className="tableData">
              <h1 className='dataTitle'>{props.title}</h1>
              <table className='dataTable'>
                <thead>
                <tr>
                  <td>Id</td>
                  <td>Name</td>
                  <td>Email</td>
                </tr>
                </thead>
                <tbody> 
                {
                  props.user.map((data)=>{
                  return <tr>
                  <td>{data.id}</td>
                  <td>{data.name}</td>
                  <td>{data.email}</td> 
                  </tr>
                },)}
                </tbody>
              </table>
            </div>
  )
}

export default DashboardTable