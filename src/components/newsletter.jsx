
import '../css/newsletter.css'
export const NewsLetter = () => {
    return(
        <section className="newsletter d-none d-sm-none d-lg-block">
<div className="container">
<div className="row">
<div className="col-sm-12">
	<div className="content">
		<p>Subscribe to our Newsletters for updates on on our services and exclusive offer</p>
	<div className="input-group">
         <input type="email" className="form-control" placeholder="Enter your email" />
         <span className="input-group-btn">
         <button className="btn" type="submit">Subscribe</button>
         </span>
          </div>
	</div>
</div>
</div>
</div>
</section>
    )
}