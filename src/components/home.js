import { Link } from "react-router-dom";



function Home() {

  
  return (

    <div className="text-center my-3">
      <h1>This is home</h1> 
      <div>
        <h5>View Customers</h5>
        <Link to="/view" className="btn btn-success">View List</Link>

      </div>
    </div>

  )
}

export default Home