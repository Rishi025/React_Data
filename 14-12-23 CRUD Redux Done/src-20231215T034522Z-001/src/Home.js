import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Link } from 'react-router-dom';
import { deleteUsers } from './UserReducer';


function Home() {

  const users = useSelector(state=>state.users);
  console.log(users);
  const dispatch = useDispatch();

  const LoadDelete = (userId)=>{
    dispatch(deleteUsers({id:userId}))
  }
  return (
    <div>
      
      <div className='container'>

        <h3 className='my-3'>Users Data</h3>
        <div className='my-2'>
            <Link to="/create" className='btn btn-info'>Add Users</Link>
        </div>
        <table className='table'>
            <thead className='table-dark'>
                <tr>
                    <td>Id</td>
                    <td>Name</td>
                    <td>Email</td>
                    <td>Action</td>
                </tr>
            </thead>

            <tbody>

              {users.map((items)=>(

            <tr key={items.id}>
            <td>{items.id}</td>
            <td>{items.name}</td>
            <td>{items.email}</td>
            <td>
                <Link to={`/edit/${items.id}` } className='btn btn-success me-2'>Edit</Link>
                <button onClick={()=>{LoadDelete(items.id)}} className='btn btn-danger '>Delete</button>
            </td>
            </tr>


              ))}
          
            </tbody>
        </table>

      </div>


    </div>
  )
}

export default Home


