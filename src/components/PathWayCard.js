import React from "react";
import "../style/pathWay.scss"

// structure the cards
function PathWay() {
    return (
        <React.Fragment>
            <h1 className="h1">Non Profits that can help you... </h1>

            <h2 className="headline">Find the right college</h2>

            <div className="grid-container">

                <div className="card mb-3 taco grid-item">
                    <div className="row no-gutters">
                        <div className="col-md-4">
                            <img className="imageSize" alt="Project One logo" src="https://res.cloudinary.com/connorn/image/upload/v1573658396/fix50Hackathon/project-one-scholar_liqxhu.png" />
                        </div>
                        <div className="col-md-8">
                            <div className="card-body">
                                <h2 className="nonprofit-name">Project One</h2>
                                <p className="nonprofit-about">Project One offers scholarships to students who are Mecklenburg County residents planning to attend a 
                                    North Carolina public college/university and have a high school GPA of 3.0 or higher.</p>
                                <a className="btn btn-success" href="https://www.projectonescholars.org/our-program" rel="noopener noreferrer" target="_blank" >Apply now</a>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="card mb-3 taco grid-item">
                    <div className="row no-gutters">
                        <div className="col-md-4">
                            <img className="imageSize" alt="The North Carolina Community Foundation logo" src="https://res.cloudinary.com/connorn/image/upload/v1573658561/fix50Hackathon/west-nc-community-foundation_gw4sow.png" />
                        </div>
                        <div className="col-md-8">
                            <div className="card-body">
                                <h2 className="nonprofit-name">Community Foundation</h2>
                                <p className="nonprofit-about">Currently manage nearly 150 scholarship funds for individuals, 
                                    families, school systems and organizations in the counties we serve throughout North Carolina..</p>
                                <a className="btn btn-success" href="https://www.nccommunityfoundation.org/apply/scholarships/how-to-apply" rel="noopener noreferrer" target="_blank" >Apply now</a>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="card mb-3 taco grid-item">
                    <div className="row no-gutters">
                        <div className="col-md-4">
                            <img className="imageSize" alt="Right Move logo" src="https://res.cloudinary.com/connorn/image/upload/v1573658752/fix50Hackathon/golden-leaf-foundation_q4np6j.jpg" />
                        </div>
                        <div className="col-md-8">
                            <div className="card-body">
                                <h2 className="nonprofit-name">Golden LEAF Scholarship Program</h2>
                                <p className="nonprofit-about">The Golden LEAF Scholarship Program is designed to assist current
                                     high school seniors and North Carolina community college transfer students.</p>
                                <a className="btn btn-success" href="https://www.cfnc.org/Gateway?command=GetBasedProgramDetail&note=no&type=7&vocType=-1&vocational=no&id=145" rel="noopener noreferrer" target="_blank" >Apply now</a>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="card mb-3 taco grid-item">
                    <div className="row no-gutters">
                        <div className="col-md-4">
                            <img className="imageSize" alt="Right Move logo" src="https://res.cloudinary.com/connorn/image/upload/v1573658848/fix50Hackathon/golden-door-scholars_g4jw32.jpg" />
                        </div>
                        <div className="col-md-8">
                            <div className="card-body">
                                <h2 className="nonprofit-name">Golden Door Scholarship Program</h2>
                                <p className="nonprofit-about">As a Golden Door Scholar, each student receives a scholarship
                                     empowering her or him to earn a bachelor's degree and pursue a dream career.</p>
                                <a className="btn btn-success" href="https://www.goldendoorscholars.org/sign-up" rel="noopener noreferrer" target="_blank" >Apply now</a>
                            </div>
                        </div>
                    </div>
                </div>

            </div>

            <h2 className="headline">Find a mentor</h2>

            <div className="grid-container">

                <div className="card mb-3 taco grid-item">
                    <div className="row no-gutters">
                        <div className="col-md-4">
                            <img className="imageSize" alt="Right Move logo" src="https://res.cloudinary.com/connorn/image/upload/v1573658989/fix50Hackathon/americas-promise-alliance_brvbw5.png" />
                        </div>
                        <div className="col-md-8">
                            <div className="card-body">
                                <h2 className="nonprofit-name">America's Promise Alliance</h2>
                                <p className="nonprofit-about">Mentoring programs are designed to pair
                                     a supportive adult with a young person to foster positive, healthy development. </p>
                                <a className="btn btn-success" href="https://www.americaspromise.org/resource/role-national-service-closing-graduation-gap" rel="noopener noreferrer" target="_blank" >Click for more</a>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="card mb-3 taco grid-item">
                    <div className="row no-gutters">
                        <div className="col-md-4">
                            <img className="imageSize" alt="Right Move logo" src="https://res.cloudinary.com/connorn/image/upload/v1573659062/fix50Hackathon/big-brothers-big-sisters_qzptxk.jpg" />
                        </div>
                        <div className="col-md-8">
                            <div className="card-body">
                                <h2 className="nonprofit-name">Big brother big sister of Center Carolinas</h2>
                                <p className="nonprofit-about">Their Mission is to create and support one-to-one mentoring 
                                    relationships that ignite the power and promise of youth.</p>
                                <a className="btn btn-success" href="https://bbbscentralcarolinas.org/programs/traditional-mentoring" rel="noopener noreferrer" target="_blank" >Apply now</a>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="card mb-3 taco grid-item">
                    <div className="row no-gutters">
                        <div className="col-md-4">
                            <img className="imageSize" alt="Right Move logo" src="https://res.cloudinary.com/connorn/image/upload/v1573659124/fix50Hackathon/junior-achievement_yuevti.png" />
                        </div>
                        <div className="col-md-8">
                            <div className="card-body">
                                <h2 className="nonprofit-name">Junior Achievement’s</h2>
                                <p className="nonprofit-about">Junior Achievement’s high school programs help students make informed, 
                                    intelligent decisions about their future, and foster skills that will be highly useful in the business world.</p>
                                <a className="btn btn-success" href="https://www.juniorachievement.org/web/ja-usa/ja-programs" rel="noopener noreferrer" target="_blank" >Apply now</a>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="card mb-3 taco grid-item">
                    <div className="row no-gutters">
                        <div className="col-md-4">
                            <img className="imageSize" alt="Right Move logo" src="https://res.cloudinary.com/connorn/image/upload/v1573659193/fix50Hackathon/winning-edge_xteab1.png" />
                        </div>
                        <div className="col-md-8">
                            <div className="card-body">
                                <h2 className="nonprofit-name">The Winning Edge</h2>
                                <p className="nonprofit-about">The Winning Edge Leadership Academy develops the next generation by providing mentors, 
                                    an influential network, financial and cognitive resources as they begin their journey.</p>
                                <a className="btn btn-success" href="https://static1.squarespace.com/static/598cff56f14aa183901e4aab/t/5dbf2a9169d48f23f8d4f781/1572809367487/Winning+Edge+Quick+Facts+Sheet.pdf" rel="noopener noreferrer" target="_blank" >Click for more</a>
                            </div>
                        </div>
                    </div>
                </div>

            </div>
        </React.Fragment>

    )
}
export default PathWay;


