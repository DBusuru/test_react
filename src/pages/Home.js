const Home = () => {
    return (
      <div className="container mt-4">
  
        {/* Carousel Section */}
        <div className="mb-5">
          <div
            id="carouselExampleSlidesOnly"
            className="carousel slide"
            data-bs-ride="carousel"
            style={{ width: '100%', height: '400px', overflow: 'hidden' }}
          >
            <div className="carousel-inner" style={{ height: '100%' }}>
              <div className="carousel-item active">
                <img
                  src="https://images.unsplash.com/photo-1503376780353-7e6692767b70?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8Y2Fyc3xlbnwwfHwwfHx8MA%3D%3D"
                  className="d-block w-100"
                  alt="Slide 1"
                  style={{ objectFit: 'cover', height: '100%' }}
                />
              </div>
              <div className="carousel-item">
                <img
                  src="https://via.placeholder.com/1200x400"
                  className="d-block w-100"
                  alt="Slide 2"
                  style={{ objectFit: 'cover', height: '100%' }}
                />
              </div>
              <div className="carousel-item">
                <img
                  src="https://via.placeholder.com/1200x400"
                  className="d-block w-100"
                  alt="Slide 3"
                  style={{ objectFit: 'cover', height: '100%' }}
                />
              </div>
            </div>
          </div>
        </div>
  
        {/* Cards Section */}
        <div className="row row-cols-1 row-cols-md-3 g-4">
          {[...Array(4)].map((_, index) => (
            <div className="col" key={index}>
              <div className="card h-100">
                <img src="https://via.placeholder.com/150" className="card-img-top" alt={`Card ${index + 1}`} />
                <div className="card-body">
                  <h5 className="card-title">Card title</h5>
                  <p className="card-text">
                    This is a longer card with supporting text below as a natural lead-in to additional content.
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
  
      </div>
    );
  };
  
  export default Home;
  