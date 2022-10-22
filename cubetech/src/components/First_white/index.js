import "./style.scss";

function fpTwo(props) {
  const { title, subtitle, text, images } = props;
  return (
    <>
      <div className="white">
        <div className="container pos-r">
          <div className="white__content d-flex justify-between align-center ">
            <div className="white__block">
              <h3 className="pb-10">{subtitle}</h3>
              <h2 className="pb-20">{title}</h2>
              <p>{text}</p>
            </div>
            <div>
              <img src={images}></img>
            </div>
          </div>
          <div className="arr pos-a ">
            <img src="./img/arr-bl.svg"></img>
          </div>
        </div>
      </div>
    </>
  );
}
export default fpTwo;
