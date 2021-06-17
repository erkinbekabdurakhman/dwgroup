import React from 'react';

const Team = () => {
    return(
        <section id="team" className="team">
            <div className="container">
                <div className="section-title">
                    <span>Team</span>
                    <h2>Team</h2>
                    <p>Sit sint consectetur velit quisquam cupiditate impedit suscipit alias</p>
                </div>

                <div className="row">
                    <div className="col-lg-6">
                        <div className="member d-flex align-items-start">
                            <div className="pic"><img src="assets/img/team/team-1.jpg" className="img-fluid" alt="" /></div>
                            <div className="member-info">
                                <h4>Walter White</h4>
                                <span>Chief Executive Officer</span>
                                <p>Explicabo voluptatem mollitia et repellat qui dolorum quasi</p>
                            </div>
                        </div>
                    </div>

                    <div className="col-lg-6 mt-4 mt-lg-0">
                        <div className="member d-flex align-items-start">
                            <div className="pic"><img src="assets/img/team/team-2.jpg" className="img-fluid" alt="" /></div>
                            <div className="member-info">
                                <h4>Sarah Jhonson</h4>
                                <span>Product Manager</span>
                                <p>Aut maiores voluptates amet et quis praesentium qui senda para</p>
                            </div>
                        </div>
                    </div>

                    <div className="col-lg-6 mt-4">
                        <div className="member d-flex align-items-start">
                            <div className="pic"><img src="assets/img/team/team-3.jpg" className="img-fluid" alt="" /></div>
                            <div className="member-info">
                                <h4>William Anderson</h4>
                                <span>CTO</span>
                                <p>Quisquam facilis cum velit laborum corrupti fuga rerum quia</p>
                            </div>
                        </div>
                    </div>

                    <div className="col-lg-6 mt-4">
                        <div className="member d-flex align-items-start">
                            <div className="pic"><img src="assets/img/team/team-4.jpg" className="img-fluid" alt="" /></div>
                            <div className="member-info">
                                <h4>Amanda Jepson</h4>
                                <span>Accountant</span>
                                <p>Dolorum tempora officiis odit laborum officiis et et accusamus</p>
                            </div>
                        </div>
                    </div>

                </div> 
            </div>
        </section>
    )
};

export default Team;