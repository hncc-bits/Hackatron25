import Image from "next/image";

const DevfolioBtn = () => {
  return (
    <div className="butHolder">
      <button type="button" className="Btn zinc-bg">
        {
          <a href="" target="">
            <div className="gradient-mask black-bg"></div>

            <Image
              src="/images/icons/edit.png"
              alt="edit"
              className="ionicon icon"
              width={20}
              height={20}
              style={{ filter: "invert(1)" }}
            />

            <span className="text">Register Now</span>
          </a>
        }
      </button>
    </div>
  );
};

export default DevfolioBtn;
