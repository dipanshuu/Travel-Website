import React from "react";
import styled from "styled-components";
import homeImage from "../assets/hero.png";
import play from "../assets/img14.png";
export default function Hero() {
  return (
    <Section id="hero">
      <div className="background">
        <img src={homeImage} alt="" align="right"/>
      
      <div className="content">
        <div className="title">
          <p id="para">BEST DESTINATIONS AROUND THE WORLD</p>
          <h2>
           TRAVEL,enjoy <br></br>and live a new and full life
          </h2>
          <h4>Built Wicket longer admire do barton vanity itself do in it.<br></br>Preferred to sportsmen it engrossed listening.Park gate <br></br>sell they west hard for the.</h4>
        </div>
        <div >
        <button className="btn">Find out more</button>
        <div className="play">
        <span className="im"><img src={play} alt=""/></span>
       
        </div>
        </div>
        
      </div>
      </div>

      {/* <div className="background">
        <img src={homeImage} alt="" align="right"/>
      </div> */}
    </Section>
  );
}

const Section = styled.section`
  position: relative;
  margin-top: 2rem;
  width: 100%;
  height: 100%;

  .background {
    height: 100%;
    align-items:right;
    img {
      height:40%;
      width: 40%;
      filter: brightness(100%);
      margin-left:3%;
      margin-right:3%;
      ${'' /* align-items:right; */}
    }
  }
  
 

  .play{
    display:inline-block;
    width:9rem;
    height:9rem;
    padding:3rem;
    margin-top:5rem;
    margin-left:5rem;
  }
  .pl{
    padding-left:3rem;
  }
  .btn{
    background-color:orange;
    border:none;
    height:2.5rem;
    width:8rem;
    ${'' /* margin-top:0.5rem; */}
    border-radius:7px;
  }
  h4{
    color:black;
    word-wrap:break-word;
    margin-top:1rem;
  }
  
  
  .content {
    height: 100%;
    ${'' /* width: 50%; */}
    position: absolute;
    top: 0;
    z-index: 3;
    ${'' /* text-align: center; */}
    display: flex;
    flex-direction: column;
    justify-content: center;
    ${'' /* align-items: center; */}
    ${'' /* gap: 1rem; */}
    .title {
      color: white;
      h2 {
        font-size: 3rem;
        ${'' /* letter-spacing: 0.2rem; */}
        color:black;
        width:70%;
      }
      p {
        text-align: left;
        ${'' /* padding: 0 30vw; */}
        ${'' /* margin-top: 0.5rem; */}
        font-size: 1.2rem;
        color:rgb(200,56,32);
        font-weight:190px;
        margin-top:85%;
      }
    }
    .search {
      display: flex;
      background-color: #ffffffce;
      padding: 0.5rem;
      border-radius: 0.5rem;
      .container {
        display: flex;
        align-items: center;
        justify-content: center;
        flex-direction: column;
        padding: 0 1.5rem;
        label {
          font-size: 1.1rem;
          color: #03045e;
        }
        input {
          background-color: transparent;
          border: none;
          text-align: center;
          color: black;
          &[type="date"] {
            padding-left: 3rem;
          }

          &::placeholder {
            color: black;
          }
          &:focus {
            outline: none;
          }
        }
      }
      button {
        margin-top:1rem;
        padding: 1rem;
        cursor: pointer;
        border-radius: 0.3rem;
        border: none;
        color: white;
        background-color: #4361ee;
        font-size: 1.1rem;
        text-transform: uppercase;
        transition: 0.3s ease-in-out;
        &:hover {
          background-color: #023e8a;
        }
      }
    }
  }
  @media screen and (min-width: 280px) and (max-width: 980px) {
    ${'' /* height: 25rem; */}
    .background {
      ${'' /* background-color: palegreen; */}
      ${'' /* img {
        height: 50%;
      } */}
      img {
      height:50%;
      width: 50%;
      filter: brightness(100%);
      margin-left:5%;
      margin-right:3%;
      ${'' /* align-items:right; */}
    }
    }
    .content {
      .title {
        h2 {
          font-size: 1rem;
          margin-top:21rem;
        }
        p {
          margin-top:3rem;
          font-size: 0.8rem;
          word-wrap: break-word;
          max-width:70%;
          ${'' /* padding: 1vw; */}
        }
      }
      .search {
        flex-direction: column;
        padding: 0.8rem;
        gap: 0.8rem;
        /* padding: 0; */
        .container {
          padding: 0 0.8rem;
          input[type="date"] {
            padding-left: 1rem;
          }
        }
        button {
          padding: 1rem;
          font-size: 1rem;
        }
        /* display: none; */
      }
    }
  }
`;
