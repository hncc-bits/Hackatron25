import { useState, useEffect } from "react";
import SectionLayout from "../SectionLayout";
import Image from "next/image";
import { trackConfig } from "../../config/tracks";

const cardStyle = {
  justifyContent: "center",
  alignItems: "center",
  padding: "20px 20px 30px 20px",
  width: "250px",
  height: "200px",
  cursor: "pointer",
};
const headingStyle = {
  fontSize: "1.4rem",
  marginBottom: "10px",
};

const TrackCard = ({ logo, title, onClick }) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div className="tracks-card" style={cardStyle} onClick={onClick} title="See Problem Statement"
    onMouseEnter={() => setIsHovered(true)}
    onMouseLeave={() => setIsHovered(false)}>
      <div className="centered-icon">
        <Image
          src={logo}
          alt=""
          priority={true}
          sizes="100%"
          width={150}
          height={150}
        />
      </div>
      <h2 style={headingStyle}>{isHovered ? "See Problem Statement" : title}</h2>
    </div>
  );
};

const Popup = ({ track, onClose }) => {
  const [show, setShow] = useState(false);

  useEffect(() => {
    if (track) {
      setShow(true);
    } else {
      setShow(false);
    }
  }, [track]);

  if (!track) return null;

  const { problem,id ,title, techStack, description, challenges,challengeDescription } = track;

  return (
    <div className={`popup-overlay ${show ? "show" : ""}`} onClick={onClose} data-lenis-prevent>
      <div className={`popup-content ${show ? "show" : ""}`} onClick={(e) => e.stopPropagation()}>
        <h2>{title}</h2>
        <p><strong>Problem Statement (PS-{id}): </strong> {problem}</p>
        <div className="description">
          <p><strong>Description:</strong>{description}</p>
          <p>{challenges && <strong>Challenge:</strong>}
          <p>{challengeDescription}
          <ol>
            {challenges?.map((challenge, index) => (
              <li key={index}>{challenge}</li>
            ))}
          </ol>
          </p>
          </p>
        </div>
        {techStack && <p><strong>Note:</strong> {techStack}</p> }
        <button onClick={onClose}>Close</button>
      </div>
    </div>
  );
};

const Trakcs = () => {
  const { Track } = trackConfig;
  const [selectedTrack, setSelectedTrack] = useState(null);

  const handleCardClick = (track) => {
    setSelectedTrack(track);
  };

  const handleClosePopup = () => {
    setSelectedTrack(null);
  };

  return (
    <SectionLayout Title="PROBLEM STATEMENT" Classname={"why-sponsor-section tracks"}>
      <h3>
      Hackatron is a platform to Think, Build, and Launch, welcoming all skill levels to explore innovation, solve real-world challenges, and push technological boundaries. With diverse tracks, it fosters hands-on problem-solving, creativity, and collaboration.
        <br />
        Beyond competition, Hackatron promotes learning, networking, and impact. Whether enhancing skills, connecting with innovators, or launching ideas, it provides the ideal space to turn vision into reality.
=      </h3>
      <div className="tracks-container">      
      <div className="table-container">
        <table className="tracks-table">
          <thead>
            <tr>
              <th>Statement</th>
              <th>Description</th>
            </tr>
          </thead>
          <tbody>
            {Track.map((item, index) => (
              <tr key={index} className={index % 2 === 0 ? 'even-row' : 'odd-row'}>
                <td>{item.statement}</td>
                <td>{item.description}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>

      <Popup track={selectedTrack} onClose={handleClosePopup} />
    </SectionLayout>
  );
};  

export default Trakcs;