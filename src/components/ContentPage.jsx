
import 'bootstrap/dist/css/bootstrap.min.css';
import 'font-awesome/css/font-awesome.min.css';

const ContentPage = () => {
  return (

    <div className="image-container">
      {/* First Pair */}
      <div className="image-pair">
        <img className="img-bg" src="/bg-img1.png" alt="Image 1" />
        <div className="text-overlay">
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla
            facilisi. Integer non justo ac velit vulputate facilisis. Sed
            auctor arcu eget tortor gravida, eu condimentum odio tempor. Fusce
            hendrerit sapien nec odio rhoncus, vel efficitur libero lacinia.
          </p>
          <button className="rounded-button2">Learn More</button>
        </div>
      </div>
<div>
</div>
      </div>
  );
};

export default ContentPage;


{/* <div className="container">
  <h2>Card Image Overlay</h2>
  <p>Turn an image into a card background and use .card-img-overlay to overlay the card's text:</p>
  <div className="card img-fluid" style="width:500px">
    <img className="card-img-top" src="/bg-img1.png" alt="Card image" style="width:100%"></img>
    <div className="card-img-overlay">
      <h4 className="card-title">John Doe</h4>
      <p className="card-text">Some example text some example text. Some example text some example text. Some example text some example text. Some example text some example text.</p>
      <a href="#" className="btn btn-primary">See Profile</a>
    </div>
  </div>
</div> */}