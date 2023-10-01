

import pic from "../images/pic.jpg"


import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"

import { faEnvelope } from "@fortawesome/free-solid-svg-icons"

import { faLinkedin } from "@fortawesome/free-brands-svg-icons"



export default function Info(){
  return(
    <div className="info">
      <img src={pic} />
      <h1>Ahmed Ali</h1>
      <h5>Frontend Developer</h5>
      <p>ahmedali.website</p>
      <div className="buttons">
        <button>
          <FontAwesomeIcon icon={faEnvelope}  className="icon" />
          Email
        </button>
        <button>
          <FontAwesomeIcon icon={faLinkedin} />
          LinkedIn
        </button>
      </div>
    </div>
  )
}