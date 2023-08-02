import { Link } from "react-router-dom";



function Home() {

  
  return (
    <div className="text-center home">
      <h1>XYZ Bank</h1> 
      <div>
        <h5>View Customers</h5>
        <div className="btnn">
          <Link to="/view" className="btn btn-success">View List</Link>
        </div>
      </div>
    </div>
  )
}

export default Home