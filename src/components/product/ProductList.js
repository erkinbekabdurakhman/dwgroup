import React from 'react';

const ProductList = () => {
    return(
        <section id="products" className="portfolio">
            <div className="container">

                <div className="section-title">
                    <span>Products Catalog</span>
                    <h2>Products Catalog</h2>
                    <p>Sit sint consectetur velit quisquam cupiditate impedit suscipit alias</p>
                </div>

                <div className="row">
                    <div className="col-lg-12">
                        <ul id="portfolio-flters">
                        <li data-filter="*" className="filter-active">Dresses</li>
                        <li data-filter=".filter-app">T-Shirts</li>
                        <li data-filter=".filter-card">Pants</li>
                        <li data-filter=".filter-web">Skirt</li>
                        </ul>
                    </div>
                </div>

                <div className="row portfolio-container">

                    <div className="col-lg-4 col-md-6 portfolio-item filter-app">
                        <div className="portfolio-wrap">
                        <img src="assets/img/portfolio/portfolio-1.jpg" className="img-fluid" alt="" />
                        <div className="portfolio-info">
                            <h4>App 1</h4>
                            <p>App</p>
                            <div className="portfolio-links">
                                <a href="assets/img/portfolio/portfolio-1.jpg" data-gallery="portfolioGallery" className="portfolio-lightbox" title="App 1"><i className="ri-add-fill"></i></a>
                                <a href="portfolio-details.html" title="More Details"><i className="ri-links-fill"></i></a>
                            </div>
                        </div>
                        </div>
                    </div>

                    <div className="col-lg-4 col-md-6 portfolio-item filter-web">
                        <div className="portfolio-wrap">
                        <img src="assets/img/portfolio/portfolio-2.jpg" className="img-fluid" alt="" />
                        <div className="portfolio-info">
                            <h4>Web 3</h4>
                            <p>Web</p>
                            <div className="portfolio-links">
                            <a href="assets/img/portfolio/portfolio-2.jpg" data-gallery="portfolioGallery" className="portfolio-lightbox" title="Web 3"><i className="ri-add-fill"></i></a>
                            <a href="portfolio-details.html" title="More Details"><i className="ri-links-fill"></i></a>
                            </div>
                        </div>
                        </div>
                    </div>

                    <div className="col-lg-4 col-md-6 portfolio-item filter-app">
                        <div className="portfolio-wrap">
                        <img src="assets/img/portfolio/portfolio-3.jpg" className="img-fluid" alt="" />
                        <div className="portfolio-info">
                            <h4>App 2</h4>
                            <p>App</p>
                            <div className="portfolio-links">
                            <a href="assets/img/portfolio/portfolio-3.jpg" data-gallery="portfolioGallery" className="portfolio-lightbox" title="App 2"><i className="ri-add-fill"></i></a>
                            <a href="portfolio-details.html" title="More Details"><i className="ri-links-fill"></i></a>
                            </div>
                        </div>
                        </div>
                    </div>

                    <div className="col-lg-4 col-md-6 portfolio-item filter-card">
                        <div className="portfolio-wrap">
                        <img src="assets/img/portfolio/portfolio-4.jpg" className="img-fluid" alt="" />
                        <div className="portfolio-info">
                            <h4>Card 2</h4>
                            <p>Card</p>
                            <div className="portfolio-links">
                            <a href="assets/img/portfolio/portfolio-4.jpg" data-gallery="portfolioGallery" className="portfolio-lightbox" title="Card 2"><i className="ri-add-fill"></i></a>
                            <a href="portfolio-details.html" title="More Details"><i className="ri-links-fill"></i></a>
                            </div>
                        </div>
                        </div>
                    </div>

                    <div className="col-lg-4 col-md-6 portfolio-item filter-web">
                        <div className="portfolio-wrap">
                        <img src="assets/img/portfolio/portfolio-5.jpg" className="img-fluid" alt="" />
                        <div className="portfolio-info">
                            <h4>Web 2</h4>
                            <p>Web</p>
                            <div className="portfolio-links">
                            <a href="assets/img/portfolio/portfolio-5.jpg" data-gallery="portfolioGallery" className="portfolio-lightbox" title="Web 2"><i className="ri-add-fill"></i></a>
                            <a href="portfolio-details.html" title="More Details"><i className="ri-links-fill"></i></a>
                            </div>
                        </div>
                        </div>
                    </div>

                    <div className="col-lg-4 col-md-6 portfolio-item filter-app">
                        <div className="portfolio-wrap">
                        <img src="assets/img/portfolio/portfolio-6.jpg" className="img-fluid" alt="" />
                        <div className="portfolio-info">
                            <h4>App 3</h4>
                            <p>App</p>
                            <div className="portfolio-links">
                            <a href="assets/img/portfolio/portfolio-6.jpg" data-gallery="portfolioGallery" className="portfolio-lightbox" title="App 3"><i className="ri-add-fill"></i></a>
                            <a href="portfolio-details.html" title="More Details"><i className="ri-links-fill"></i></a>
                            </div>
                        </div>
                        </div>
                    </div>

                    <div className="col-lg-4 col-md-6 portfolio-item filter-card">
                        <div className="portfolio-wrap">
                        <img src="assets/img/portfolio/portfolio-7.jpg" className="img-fluid" alt="" />
                        <div className="portfolio-info">
                            <h4>Card 1</h4>
                            <p>Card</p>
                            <div className="portfolio-links">
                            <a href="assets/img/portfolio/portfolio-7.jpg" data-gallery="portfolioGallery" className="portfolio-lightbox" title="Card 1"><i className="ri-add-fill"></i></a>
                            <a href="portfolio-details.html" title="More Details"><i className="ri-links-fill"></i></a>
                            </div>
                        </div>
                        </div>
                    </div>

                    <div className="col-lg-4 col-md-6 portfolio-item filter-card">
                        <div className="portfolio-wrap">
                        <img src="assets/img/portfolio/portfolio-8.jpg" className="img-fluid" alt="" />
                        <div className="portfolio-info">
                            <h4>Card 3</h4>
                            <p>Card</p>
                            <div className="portfolio-links">
                            <a href="assets/img/portfolio/portfolio-8.jpg" data-gallery="portfolioGallery" className="portfolio-lightbox" title="Card 3"><i className="ri-add-fill"></i></a>
                            <a href="portfolio-details.html" title="More Details"><i className="ri-links-fill"></i></a>
                            </div>
                        </div>
                        </div>
                    </div>

                    <div className="col-lg-4 col-md-6 portfolio-item filter-web">
                        <div className="portfolio-wrap">
                        <img src="assets/img/portfolio/portfolio-9.jpg" className="img-fluid" alt="" />
                        <div className="portfolio-info">
                            <h4>Web 3</h4>
                            <p>Web</p>
                            <div className="portfolio-links">
                            <a href="assets/img/portfolio/portfolio-9.jpg" data-gallery="portfolioGallery" className="portfolio-lightbox" title="Web 3"><i className="ri-add-fill"></i></a>
                            <a href="portfolio-details.html" title="More Details"><i className="ri-links-fill"></i></a>
                            </div>
                        </div>
                        </div>
                    </div>

                </div>

            </div>
        </section>
    )
}

export default ProductList;