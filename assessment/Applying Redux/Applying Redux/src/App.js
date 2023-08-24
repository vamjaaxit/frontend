import logo from './logo.svg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.min.js'
import 'bootstrap-icons/font/bootstrap-icons.min.css'
import Modal from 'react-bootstrap/Modal';
import { useEffect, useRef, useState } from 'react';
import axios from 'axios';
import swal from 'sweetalert';
import { Container } from 'react-bootstrap';

// DATA STORE IN API 
function App() {
  const title = useRef("");
  const price = useRef("");
  const category = useRef("");

  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);


  const addtask = () => {
    var insert = {
      title: title.current.value,
      price: price.current.value,
      category: category.current.value
    }

    axios.post("http://localhost:400/task", insert)
      .then(() => {
        swal("Product Added Successfully");
        window.location = '/'
      });

  }

  // DESTRUCTURE OF DATA 

  const [task, settask] = useState([]);

  function Adddata() {
    axios.get("http://localhost:400/task")
      .then((res) => { settask(res.data) });
  }

  useEffect(() => {
    Adddata();
  }, []);

  // DELETE DATA FROM API 
  const Deletedata = (id) => {
    axios.delete(`http://localhost:400/task/${id}`)
      .then((res) => {
        console.warn(res)
        swal({
          icon: 'success',
          title: 'Delete Successfully'
        })
        Adddata();
      })
  }


  return (
    <>     <div className='TaskManager rounded '>
        <div className='pops bg-dark mx-auto mt-5 p-2'>
          <div>
            <h2 className='searchproduct mt-3 text-light'>Search Products</h2>
          </div>
          <div className='d-flex justify-content-between m-0 p-3'>
            <div className=''>
              <div class="input-group mb-3">
                <input type="text" class="searchinput form-control" placeholder="search" aria-label="Username" aria-describedby="basic-addon1"/>
                <span class="input-group-text" id="basic-addon1"><i className='bi bi-search'></i></span>
              </div>
            </div>
            <div className=''>
              <button className='btn btn-danger ' onClick={handleShow}><i class="bi bi-plus"></i> Add Product</button>
            </div>
          </div>
          <div className='Manage mx-auto pt-1'>
            <table class="table table-striped" border="1" >
              <thead>
                <tr border="1">
                  <th scope="col">Title</th>
                  <th scope="col">Price</th>
                  <th scope="col">Category</th>
                  <th scope="col">Action</th>
                </tr>
              </thead>
              <tbody>
                {task && task.map((item) => {
                  return (


                    <tr>
                      <td>{item.title}</td>
                      <td>{item.price}</td>
                      <td>{item.category}</td>
                      <td>
                        <button type='button' className='ms-2 p-1 border-0 bg-success text-light rounded-1'><i class="bi bi-eye"></i> Read</button>
                        <button type='button' className='ms-2 p-1 border-0 bg-info text-light rounded-1'> <i class="bi bi-pencil"></i> Edit</button>
                        <button type='button' onClick={() => Deletedata(item.id)} className='ms-2 p-1 border-0 bg-danger text-light rounded-1'><i class="bi bi-x"></i> Delete</button>
                      </td>

                    </tr>

                  )
                })}
              </tbody>
            </table>
          </div>
        </div>
      </div>

      <Modal className='' show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Task Manager App</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <form className='form-control'>
            <label>Product Name</label><br />
            <input type='text' ref={title} placeholder='Product Name **' className='form-control' /><br />
            <label>Price</label><br />
            <input type='text' ref={price} placeholder='Product Price **' className='form-control' /><br />
            <label>Category</label><br />
            <input type='text' ref={category} placeholder='Product Category **' className='form-control' /><br />
            <button type='button' onClick={addtask} className='form-control bg-dark text-white'>Create Product</button>
          </form>
        </Modal.Body>
      </Modal>


    </>
  );
}

export default App;
