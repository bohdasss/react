import "./style.scss";

function FpOne() {
  return (
    <>
      <div className="blu">
        <div className="container pos-r">
          <div className="blu__content d-flex justify-between align-center ">
            <div>
              <h1>It conference from thebest teachers</h1>
              <div className="btn mt-40">
                <a href="#contact">Contact</a>
              </div>
            </div>
            <div className=" blu__img pos-r">
              <img src="./img/1.png"></img>
              <div className="settings pos-a">
                <img
                  className="settings__1 pos-a"
                  src="./img/Vector1.svg"
                ></img>
                <img
                  className="settings__2 pos-a"
                  src="./img/Vector2.svg"
                ></img>
                <img
                  className="settings__3 pos-a"
                  src="./img/Vector3.svg"
                ></img>
              </div>
            </div>
          </div>
          <div className="arr pos-a">
            <img src="./img/arr-w.svg"></img>
          </div>
        </div>
      </div>
    </>
  );
}
export default FpOne;
