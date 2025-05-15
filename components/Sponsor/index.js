import SectionLayout from "../SectionLayout";
import { sponsorConfig } from "../../config/sponsor";
import { Allsponsor } from "../../config/Allsponsor";
import SponsorContainer from "./SponsorContainer";
import Image from "next/image";

const SponsorWrapper = ({ Img, Name, Link, Type }) => {
  return (
    <a href={Link || "#"} target="_blank">
      <div
        className={Type == "communityPartner" ? "card_nonPadding card" : "card"}
      >
        <div className={Type == "communityPartner" ? Type : "pic"}>
          <Image
            src={Img}
            alt={`${Name.toUpperCase()} LOGO`}
            width={200}
            height={200}
          />
        </div>
      </div>
    </a>
  );
};

const Sponsor = () => {
  const {
    diamond,
    specialsponsor,
    gold,
    silver,
    bronze,
    inkind,
    hiringPartner,
    mediaPartner,
    communityPartner,
  } = sponsorConfig;

  return (
    <>
      <SectionLayout
        Classname={"sponsor-section"}
        Title={"OUR SPONSORS"}
        
        id="sponsors"
      >
        
        <div className="sponsor-container">
            <br/>
          <div className="GoldContainer">
            <hr className="HackText"></hr>
            <h1 className="Goldt"> ORGANIZING PARTNER </h1>
            <hr className="HackTextP"></hr>
          </div>
          {/* <SponsorContainer
          Name={diamond.Name}
          Img={diamond.Img}
          Type={diamond.Type}
        >
          {diamond.Sponsor.map((sponsor) => (
            <SponsorWrapper
              key={sponsor.id}
              Name={sponsor.Name}
              Img={sponsor.Img}
              Link={sponsor.Link}
            />
          ))}
        </SponsorContainer>

        <SponsorContainer
          Name={specialsponsor.Name}
          Img={specialsponsor.Img}
          Type={specialsponsor.Type}
        >
          {specialsponsor.Sponsor.map((sponsor) => (
            <SponsorWrapper
              key={sponsor.id}
              Name={sponsor.Name}
              Img={sponsor.Img}
              Link={sponsor.Link}
            />
          ))}
        </SponsorContainer>


        <SponsorContainer Name={gold.Name} Img={gold.Img} Type={gold.Type}>
          {gold.Sponsor.map((sponsor) => (
            <SponsorWrapper
              key={sponsor.id}
              Name={sponsor.Name}
              Img={sponsor.Img}
              Link={sponsor.Link}
            />
          ))}
        </SponsorContainer>
        <SponsorContainer
          Name={silver.Name}
          Img={silver.Img}
          Type={silver.Type}
        >
          {silver.Sponsor.map((sponsor) => (
            <SponsorWrapper
              key={sponsor.id}
              Name={sponsor.Name}
              Img={sponsor.Img}
              Link={sponsor.Link}
            />
          ))}
        </SponsorContainer>
        <SponsorContainer
          Name={bronze.Name}
          Img={bronze.Img}
          Type={bronze.Type}
        >
          {bronze.Sponsor.map((sponsor) => (
            <SponsorWrapper
              key={sponsor.id}
              Name={sponsor.Name}
              Img={sponsor.Img}
              Link={sponsor.Link}
            />
          ))}
        </SponsorContainer>
        <SponsorContainer
          Name={inkind.Name}
          Img={inkind.Img}
          Type={inkind.Type}
        >
          {inkind.Sponsor.map((sponsor) => (
            <SponsorWrapper
              key={sponsor.id}
              Name={sponsor.Name}
              Img={sponsor.Img}
              Link={sponsor.Link}
            />
          ))}
        </SponsorContainer>

        <div className="hiring-and-media">
          <SponsorContainer
            Name={hiringPartner.Name}
            Img={hiringPartner.Img}
            Type={hiringPartner.Type}
            wid={hiringPartner.wid}
            Link={hiringPartner.Link}
          >
            {hiringPartner.Partner.map((partner) => (
              <SponsorWrapper
                key={partner.id}
                Name={partner.Name}
                Img={partner.Img}
                Link={partner.Link}
              />
            ))}
          </SponsorContainer>
          <SponsorContainer
            Name={mediaPartner.Name}
            Img={mediaPartner.Img}
            Type={mediaPartner.Type}
            wid={mediaPartner.wid}
            Link={mediaPartner.Link}
          >
            {mediaPartner.Partner.map((partner) => (
              <SponsorWrapper
                key={partner.id}
                Name={partner.Name}
                Img={partner.Img}
                Link={partner.Link}
              />
            ))}
          </SponsorContainer>
          <SponsorContainer
            Name={communityPartner.Name}
            Img={communityPartner.Img}
            Type={communityPartner.Type}
            wid={communityPartner.wid}
          >
            {communityPartner.Partner.map((partner) => (
              <SponsorWrapper
                key={partner.id}
                Name={partner.Name}
                Img={partner.Img}
                Link={partner.Link}
                Type={communityPartner.Name}
              />
            ))}
          </SponsorContainer>
        </div> */}


            <SponsorContainer
              Name={"inkind"}
              Img={communityPartner.Img}
              Type={"PARTNERS"}
              
            >
              {Allsponsor.OrgPart.map((sponsor) => (
                <SponsorWrapper
                  
                  key={sponsor.id}
                  Name={sponsor.Name}
                  Img={sponsor.Img}
                  Link={sponsor.Link}
                />
              ))}
            </SponsorContainer>
            <div className="GoldContainer">
          <hr className="HackText"></hr>
          <h1 style={{fontSize: "40px"}}> HACKATHON PARTNERS </h1>
          <hr className="HackTextP"></hr>
          </div>
          <SponsorContainer
            Name={"inkind"}
            Img={communityPartner.Img}
            Type={"SILVER SPONSORS"}
          >
            {Allsponsor.HackPart.map((sponsor) => (
              <SponsorWrapper
              className="imgHack"
                key={sponsor.id}
                Name={sponsor.Name}
                Img={sponsor.Img}
                Link={sponsor.Link}
              />
            ))}
          </SponsorContainer>
          <div className="GoldContainer">
          <hr className="HackText"></hr>
          <h1 style={{fontSize: "40px"}}> EDUCATIONAL PARTNER </h1>
          <hr className="HackTextP"></hr>
          </div>

          <SponsorContainer
            Name={"inkind"}
            Img={communityPartner.Img}
            Type={"PARTNERS"}
          >
            {Allsponsor.Edupart.map((sponsor) => (
              <SponsorWrapper
              className="imgHack"
                key={sponsor.id}
                Name={sponsor.Name}
                Img={sponsor.Img}
                Link={sponsor.Link}
              />
            ))}
          </SponsorContainer>

          <div className="GoldContainer">
          <hr className="HackText"></hr>
          <h1 style={{fontSize: "40px"}}> TECHNICAL PARTNER </h1>
          <hr className="HackTextP"></hr>
          </div>

          <SponsorContainer
            Name={"inkind"}
            Img={communityPartner.Img}
            Type={"PARTNERS"}
          >
            {Allsponsor.Techpart.map((sponsor) => (
              <SponsorWrapper
              className="imgHack"
                key={sponsor.id}
                Name={sponsor.Name}
                Img={sponsor.Img}
                Link={sponsor.Link}
              />
            ))}
          </SponsorContainer>


            <div className="GoldContainer">
          <hr className="SilverText"></hr>
          <h1 style={{fontSize: "40px"}}> GOLD </h1>
          <hr className="SilverTextp"></hr>
          </div>
          <SponsorContainer
            Name={"inkind"}
            Img={communityPartner.Img}
            Type={"SILVER SPONSORS"}
          >
            {Allsponsor.GOLD.map((sponsor) => (
              <SponsorWrapper
                key={sponsor.id}
                Name={sponsor.Name}
                Img={sponsor.Img}
                Link={sponsor.Link}
              />
            ))}
          </SponsorContainer>
            <div className="GoldContainer">
          <hr className="SilverText"></hr>
          <h1 style={{fontSize: "40px"}}> SILVER </h1>
          <hr className="SilverTextp"></hr>
          </div>
          <SponsorContainer
            Name={"inkind"}
            Img={communityPartner.Img}
            Type={"SILVER SPONSORS"}
          >
            {Allsponsor.SILVER.map((sponsor) => (
              <SponsorWrapper
                key={sponsor.id}
                Name={sponsor.Name}
                Img={sponsor.Img}
                Link={sponsor.Link}
              />
            ))}
          </SponsorContainer>
        
            <div className="GoldContainer">
          <hr className="HackTextt"></hr>
          <h1 style={{fontSize: "40px"}}> PAST SPONSORS </h1>
          <hr className="HackTextPP"></hr>
          </div>
          <SponsorContainer
            Name={"inkind"}
            Img={communityPartner.Img}
            Type={"PAST SPONSORS"}
          >
            {Allsponsor.PAST_SPNSRS.map((sponsor) => (
              <SponsorWrapper
                key={sponsor.id}
                Name={sponsor.Name}
                Img={sponsor.Img}
                Link={sponsor.Link}
              />
            ))}
          </SponsorContainer>
        
          
            
            
          
        </div>
          </SectionLayout>
    </>
  );
};

export default Sponsor;
