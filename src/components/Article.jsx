import React from 'react'
import "../assets/css/article.css";
import girl1 from "../assets/image/girl1.svg";
import girl2 from "../assets/image/girl2.svg";
import girl3 from "../assets/image/girl3.svg";
const Article = () => {
  return (
    <div>
      <section className="latest">
        <div className="article">
          <a href="#">
            <h2>Latest Article</h2>
          </a>
        </div>
        
        <div className="overall-container">
            <div className="imge">
          <img src={girl1} alt="" />
          <div className="imge-content">
                      <i>
            <h6>April 02 2022</h6>
          </i>
          <h2>
            Build an Athletic Body <br />
            With In Eight Weeks Time
          </h2>
          </div>
            </div>

            <div className="imge2">
            <img src={girl2} alt="" />
          <i>
            <h6>April 02 2022</h6>
          </i>
          <h2>
            Build an Athletic Body <br />
            With In Eight Weeks Time
          </h2>  
            </div>

        <div className="imge3">
        <img src={girl3} alt="" />
          <i>
            <h6>April 02 2022</h6>
          </i>
          <h2>
            Build an Athletic Body <br />
            With In Eight Weeks Time
          </h2>
        </div>
        </div>
        

        
      </section>
    </div>
  );
}

export default Article
