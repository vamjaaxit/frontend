import logo from './logo.svg';
import './App.css';
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.min.js";

function App() {
  return (
    <div className='w-75 mx-auto mt-5'>
      <div className="accordion " id="accordionExample">
        <div className="accordion-item ">
          <h2 className="accordion-header" id="headingOne">
            <button className="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
              what is your return policy
            </button>
          </h2>
          <div id="collapseOne" className="accordion-collapse collapse show" aria-labelledby="headingOne" data-bs-parent="#accordionExample">
            <div className="accordion-body">
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. At soluta enim recusandae necessitatibus, sapiente corrupti nostrum, cupiditate molestiae accusantium itaque nesciunt tempore, beatae quia consequatur? Dicta quae dolore eum optio.
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. At soluta enim recusandae necessitatibus, sapiente corrupti nostrum, cupiditate molestiae accusantium itaque nesciunt tempore, beatae quia consequatur? Dicta quae dolore eum optio.
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. At soluta enim recusandae necessitatibus, sapiente corrupti nostrum, cupiditate molestiae accusantium itaque nesciunt tempore, beatae quia consequatur? Dicta quae dolore eum optio.

            </div>
          </div>
        </div>
        <div className="accordion-item">
          <h2 className="accordion-header" id="headingTwo">
            <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
              How do i track my order
            </button>
          </h2>
          <div id="collapseTwo" className="accordion-collapse collapse" aria-labelledby="headingTwo" data-bs-parent="#accordionExample">
            <div className="accordion-body">
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. At soluta enim recusandae necessitatibus, sapiente corrupti nostrum, cupiditate molestiae accusantium itaque nesciunt tempore, beatae quia consequatur? Dicta quae dolore eum optio.
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. At soluta enim recusandae necessitatibus, sapiente corrupti nostrum, cupiditate molestiae accusantium itaque nesciunt tempore, beatae quia consequatur? Dicta quae dolore eum optio.        </div>
          </div>
        </div>
        <div className="accordion-item">
          <h2 className="accordion-header" id="headingThree">
            <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
              can i purchase item again?
            </button>
          </h2>
          <div id="collapseThree" className="accordion-collapse collapse" aria-labelledby="headingThree" data-bs-parent="#accordionExample">
            <div className="accordion-body">
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. At soluta enim recusandae necessitatibus, sapiente corrupti nostrum, cupiditate molestiae accusantium itaque nesciunt tempore, beatae quia consequatur? Dicta quae dolore eum optio.Lorem ipsum dolor sit, amet consectetur adipisicing elit. At soluta enim recusandae necessitatibus, sapiente corrupti nostrum, cupiditate molestiae accusantium itaque nesciunt tempore, beatae quia consequatur? Dicta quae dolore eum optio.
            </div>
          </div>
        </div>
      </div>
    </div>

  );
}

export default App;
