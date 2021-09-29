import React, { Component } from 'react'
import img from './img1.png';
import pic from './img2.png';
import mou from './img3.png';
import pho from './img4.png';
import evt from './img5.png';


export default class App extends Component {
  render() {
    return (  
    <div>
                       {/* HOME START */}
        <div className='home'>
             <h3 style={{fontWeight:700,fontSize:24}}>Simple and Elegant</h3>
              <h1>Lavish</h1>
           <p style={{fontSize:15,fontWeight:'lighter',paddingBottom:35}}>Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt <br/> ut laoreet. Dolore magna aliquam erat volutpat.</p>
           <button className='btn btn-default smoothScroll wow fadeInUp button1'>Get Started</button>
          </div> 
                        {/* HOME END  */}

                        {/* WHAT I DO START */}
            
                        <div id="work" className="section">
            <div className="container">
				<div className="row">
					<div className="col-md-12 wow bounce">
						<h2 id='different'>WHAT I DO</h2>
					</div>
                </div>  
                
                <div className="row">
					<div className="col-md-4 col-xs-11 wow fadeInUp" data-wow-delay="0.6s">
						<div className="media">
							<div className="media-object media-left">
              <i className="fas fa-laptop"></i>
							</div>
							<div className="media-body">
								<h3 className="media-heading">Responsive Mobile</h3>
								<p>Lavish CSS Template is designed by templatemo. Download, edit and use this layout.</p>
							</div>
						</div>
					</div>
                    
					<div className="col-md-4 col-xs-11 wow fadeInUp" data-wow-delay="0.6s">
						<div className="media">
							<div className="media-object media-left">
              <i className="fas fa-link"></i>
							</div>
							<div className="media-body">
								<h3 className="media-heading">CSS Templates</h3>
								<p>We provide a wide range of HTML5 templates for free. Please spread a word about us on social media.</p>
							</div>
						</div>
					</div>
                    
					<div className="col-md-4 col-xs-11 wow fadeInUp" data-wow-delay="0.6s">
						<div className="media">
							<div className="media-object media-left">
							<i className="fas fa-paper-plane"></i>
							</div>
							<div className="media-body">
								<h3 className="media-heading">UI & UX Design</h3>
								<p>Credits go to <a rel="nofollow" href="https://google.com">google</a> and <a rel="nofollow" href="http://facebook.com">facebook</a> for images used in this free CSS website template.</p>
							</div>
						</div>
					</div>
                    
				</div>
			</div>      
    </div>
                                {/* WHAT I DO END */}

                                {/* ABOUT START */}
                                <div id="about" className="section">
			<div className="container">
				<div className="row">
					<div className="col-md-6 col-xs-11 wow fadeInLeft" data-wow-delay="0.9s">
						<h2>ABOUT LAVISH</h2>
						<h4>DESIGNER & DEVELOPER</h4>
						<p>Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet. Dolore magna aliquam erat volutpat.</p>
						<p>Dolore magna aliquam erat volutpat. Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet.</p>
					</div>
					<div className="col-md-6 col-xs-11 wow fadeInRight" data-wow-delay="0.9s">
						<span className="text-top">Web Design <small>95%</small></span>
							<div className="progress">
								<div className="progress-bar progress-bar-success" role="progressbar" aria-valuenow="60" aria-valuemin="0" aria-valuemax="100" style={{width: '95%'}}></div>
							</div>
						<span>Mobile Apps <small>80%</small></span>
							<div className="progress">
								<div className="progress-bar progress-bar-info" role="progressbar" aria-valuenow="80" aria-valuemin="0" aria-valuemax="100" style={{width: '80%'}}></div>
							</div>
						<span>SEO Stuffs <small>70%</small></span>
							<div className="progress">
								<div className="progress-bar progress-bar-warning" role="progressbar" aria-valuenow="60" aria-valuemin="0" aria-valuemax="100" style={{width: '70%'}}></div>
							</div>
						<span>HTLM5 & CSS3 <small>90%</small></span>
							<div className="progress">
								<div className="progress-bar progress-bar-secondary" role="progressbar" aria-valuenow="60" aria-valuemin="0" aria-valuemax="100" style={{width: "90%"}}></div>
							</div>
					</div>
				</div>
			</div>
		</div>
                                            {/* ABOUT END */}
                                         
                                         {/* PORTFOLIO START */}
      <div id="portfolio" className="section">
		<div className="container">
			<div className="row">
				<div className="col-md-12">
					<h2 className="wow bounce">PORTFOLIO</h2>
				</div>
				<div className="col-md-4 col-xs-6 wow fadeIn" data-wow-delay="0.6s">
					<div className="portfolio-thumb">
						<img src={img} className="img-responsive" alt="portfolio img"/>
							<div className="portfolio-overlay">
								<h4>Web Design</h4>
								<h5>Author: Cindy</h5>
							</div>
					</div>
				</div>
				<div className="col-md-4 col-xs-6 wow fadeIn" data-wow-delay="0.6s">
					<div className="portfolio-thumb">
						<img src={pic} className="img-responsive" alt="portfolio img"/>
							<div className="portfolio-overlay">
								<h4>Web App</h4>
								<h5>Author: Linda</h5>
							</div>
					</div>
				</div>
				<div className="col-md-4 col-xs-6 wow fadeIn" data-wow-delay="0.6s">
					<div className="portfolio-thumb">
						<img src={mou} className="img-responsive" alt="portfolio img"/>
							<div className="portfolio-overlay">
								<h4>Mobile App</h4>
								<h5>Author: Kate</h5>
							</div>
					</div>
				</div>
				<div className="col-md-6 col-xs-6 wow fadeIn" data-wow-delay="0.6s">
					<div className="portfolio-thumb">
						<img src={pho} className="img-responsive" alt="portfolio img"/>
							<div className="portfolio-overlay">
								<h4>Old Artwork</h4>
								<h5>Author: Catherine</h5>
							</div>
					</div>
				</div>
				<div className="col-md-6 col-xs-6 wow fadeIn" data-wow-delay="0.6s">
					<div className="portfolio-thumb">
						<img src={evt} className="img-responsive" alt="portfolio img"/>
							<div className="portfolio-overlay">
								<h4>New Animation</h4>
								<h5>Author: Kathy</h5>
							</div>
					</div>
				</div>
			</div>
		</div>
	</div> 
                                    {/* PORTFOLIO END */}
         <div id="contact" className="section">
			<div className="container">
				<div className="row">
					<div className="col-lg-5 col-lg-offset-1 col-md-6 wow fadeInUp" data-wow-delay="0.6s">
						<address>
							<p className="contact-title">CONTACT ME</p>
							<p><i className="fas fa-phone"></i> 090-426-89937</p>
							<p><i className="fas fa-envelope"></i> muiz@google.com</p>
							<p><i className="fas fa-map-marker"></i> 120 Old Town Road</p>
						</address>
					</div>
					<div className="col-lg-6 col-md-6 col-xs-10 wow fadeInUp" data-wow-delay="0.6s">
						<form role="form">
							<input name="name" type="text" className="form-control" placeholder="Your Name"/>
							<input name="email" type="email" className="form-control" placeholder="Your Email"/>
							<textarea name="message" rows="5" className="form-control" placeholder="Your Message"/>
							<input name="send" type="submit" className="form-control" value="SEND ME"/>
						</form>
					</div>
				</div>
			</div>
		</div>
            
                                        {/* FOOTER  */}
         <div id='footer'>
             <p>Copyright © 2021 Lavish Personal Profile . Designed by Muheez</p>
             <div className='flex'>
               <p><i class="fab fa-facebook"></i></p>
               <p><i class="fab fa-twitter"></i></p>
               <p><i class="fab fa-instagram"></i></p>
             </div>
         </div>
       </div>
       ) 
      }
    }
    
    
    
    
    
    
    
    












 