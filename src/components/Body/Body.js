import React from 'react';
import './Body.css';
import card1 from '../Img/Cards/01.jpg';
import card2 from '../Img/Cards/02.jpg';
import card3 from '../Img/Cards/03.jpg';
import card4 from '../Img/KUAL.png';

const Body = () => {
    return (
        <div class="body">

            <div className="container row update">
                <div className="col-2 upone">আপডেট</div>
                <div className="col-10 uptwo"><marquee>****** খান্দারপাড়া ইউনিয়ন আওয়ামী লীগ এ্রর ওয়েব সাইটে আপনাকে স্বাগতম ******* </marquee></div>
            </div>


            <div class="cadr-head">
                <div className="col-3 text-left CARD-2">
                    <img class="head-logo" src={card4} alt="..."/>
                    দলীয় খবর
                </div>
            </div>

            <div class="right-card">

                <div class="one">
                    <div class="card-group">
                        <div class="card">
                            <img src={card2} class="card-img-top" alt="..."/>
                            <div class="card-body bg">
                            <h5 class="card-title">যার হাত ধরে গঠিত আমাদের সোনার বাংলা</h5></div>
                        </div>
                        <div class="card">
                            <img src={card1} class="card-img-top" alt="..."/>
                            <div class="card-body bg">
                            <h5 class="card-title">ডিজিটাল বাংলাদেশের স্বপ্ন এখন বাস্তব</h5></div>
                        </div>
                        <div class="card">
                            <img src={card3} class="card-img-top" alt="..."/>
                            <div class="card-body bg">
                            <h5 class="card-title">গঠিত হওয়া আমাদের সেই দিনের কথা</h5></div>
                        </div>
                    </div>
                </div>
                
                <div class="two">
                    কাজ চলছে, কাজ চলছে, কাজ চলছে
                </div>

            </div>

            <div class="cadr-head">
                <div className="col-3 text-left CARD-2">
                    <img class="head-logo" src={card4} alt="..."/>
                    সাম্প্রতিক খবর
                </div>
            </div>

            <div class="right-card">

                <div class="one">
                    <div class="card-group">
                        <div class="card">
                            <img src={card2} class="card-img-top" alt="..."/>
                            <div class="card-body bg">
                            <h5 class="card-title">যার হাত ধরে গঠিত আমাদের সোনার বাংলা</h5></div>
                        </div>
                        <div class="card">
                            <img src={card1} class="card-img-top" alt="..."/>
                            <div class="card-body bg">
                            <h5 class="card-title">ডিজিটাল বাংলাদেশের স্বপ্ন এখন বাস্তব</h5></div>
                        </div>
                        <div class="card">
                            <img src={card3} class="card-img-top" alt="..."/>
                            <div class="card-body bg">
                            <h5 class="card-title">গঠিত হওয়া আমাদের সেই দিনের কথা</h5></div>
                        </div>
                    </div>
                </div>
                
                <div class="two">
                    কাজ চলছে, কাজ চলছে, কাজ চলছে
                </div>

            </div>

            
        </div>
    );
};

export default Body;