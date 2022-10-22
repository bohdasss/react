import "./style.scss";

function fpTwo(props) {
  const { title, subtitle, text, images } = props;
  return (
    <>
      <div className="blu">
        <div className="container pos-r">
          <div className="blu__content d-flex justify-between align-center ">
            <div>
              <img src={images}></img>
            </div>
            <div className="blu__block">
              <h3 className="mb-10">{subtitle}</h3>
              <h2 className="pb-20">{title}</h2>
              <p>{text}</p>
            </div>
          </div>
          <div className="arr pos-a ">
            <img src="./img/arr-w.svg"></img>
          </div>
        </div>
      </div>
    </>
  );
}
export default fpTwo;
