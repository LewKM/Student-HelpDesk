import { BsFillBookmarkFill, BsFillPatchQuestionFill } from "react-icons/bs";
import { NavLink, useNavigate } from "react-router-dom";
import {
  AvatarFallbackLg,
  AvatarImage,
  AvatarLg,
} from "../components/radixUI/avatar";
import { MdEmail, MdAccountCircle, MdHome } from "react-icons/md";
import Searchbar from "../components/Navbar/Searchbar";
import Footer_main from "../components/Navbar/Footer_main";
import { HiLightBulb } from "react-icons/hi";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";

function Userprofile() {
  const { isLoading } = useSelector((store) => store.user);
  const [acc, setAcc] = useState({});
  const navigate = useNavigate();

  useEffect(() => {
    const loggedUser = JSON.parse(localStorage.getItem("user") || "{}");
    const auth = JSON.parse(localStorage.getItem("authenticated") || "");
    setAcc(loggedUser);
    //if user isnt loged in redirect to login page
    !auth ? navigate("/") : null;
  }, []);

  return (
    <>
      <Searchbar />
      <section className="main-section">
        {/* side bar */}
        <aside className="aside">
          <NavLink className="side__nav__links" to="/questions">
            <BsFillPatchQuestionFill className="link__icons" />
            <h3>Questions</h3>
          </NavLink>
          <NavLink
            className="side__nav__links"
            activeclassname="active"
            to="/ask"
          >
            <HiLightBulb className="link__icons" />
            <h3>Ask</h3>
          </NavLink>
          <NavLink className="side__nav__links" to="/profile">
            <MdAccountCircle className="link__icons" />
            <h3>Profile</h3>
          </NavLink>
          <NavLink className="side__nav__links" to="/home">
            <MdHome className="link__icons" />
            <h3>Home</h3>
          </NavLink>
        </aside>
        {/* main content area  */}
        <main className="main-section-content">
          <div className="user-account">
            <AvatarLg>
              <AvatarImage src=" " alt="Avatar" />
              {/* if image isnt available revert to user initials */}
              <AvatarFallbackLg>
                {acc?.first_name?.slice(0, 1)}
                {acc?.last_name?.slice(0, 1)}
              </AvatarFallbackLg>
            </AvatarLg>
            <span>
              <h3>{acc?.username}</h3>
              <small>
                <MdEmail /> {acc?.email}
              </small>
            </span>
            <button
              className="btn sec-btn"
              onClick={() => navigate("/myaccount")}
            >
              Edit profile
            </button>
          </div>
          <article className="user-articles">
            <div className="user-questions-wrapper">
              <p>My Questions</p>
              <div className="span-card">
                <span>
                  <button className="btn info-btn">23</button>
                  <small>
                    Lorem ipsum, dolor sit amet consectetur adipisicing.
                  </small>
                </span>
                <span>
                  <button className="btn info-btn">23</button>
                  <small>
                    Lorem ipsum, dolor sit amet consectetur adipisicing.
                  </small>
                </span>
                <span>
                  <button className="btn info-btn">23</button>
                  <small>
                    Lorem ipsum, dolor sit amet consectetur adipisicing.
                  </small>
                </span>
                <span>
                  <button className="btn info-btn">23</button>
                  <small>
                    Lorem ipsum, dolor sit amet consectetur adipisicing.
                  </small>
                </span>
              </div>
            </div>
            <div className="user-solutions-wrapper">
              <p>My Answers</p>
              <div className="span-card">
                <span>
                  <button className="btn info-btn">23</button>
                  <small>
                    Lorem ipsum, dolor sit amet consectetur adipisicing.
                  </small>
                </span>
              </div>
            </div>
            <div className="user-tags-wrapper">
              <p>My Tags</p>
              <div className="span-card">
                <span className="tags-wrapper">
                  <small>student account</small>
                  <small>heroku</small>
                </span>
              </div>
            </div>
            <div className="user-bookmarks-wrapper">
              <p>My Booksmarks</p>
              <div className="span-card">
                <span>
                  <button className="btn info-btn">23</button>
                  <small>
                    Lorem ipsum, dolor sit amet consectetur adipisicing.
                  </small>
                </span>
              </div>
            </div>
          </article>
        </main>
      </section>
      <Footer_main />
    </>
  );
}

export default Userprofile;
