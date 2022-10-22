import "./style.scss";

function Contacts(props) {
  const { title, subtitle, text, images } = props;
  return (
    <>
      <div
        className="white bg-fon contact d-flex justify-center align-center"
        id="contact"
      >
        <div className="container pos-r">
          <div class="contact__block-two ">
            <form
              class="contact__block-two__content"
              action="send_mail.php"
              name="form"
              method="POST"
            >
              <div class="inputbox">
                <img class="inputbox-img" src="./img/pro.svg" alt="" />
                <input
                  class="inp"
                  required="required"
                  type="text"
                  name="name"
                  id="name"
                  data-reg="^[а-яА-ЯёЁa-zA-Z0-9]+$"
                />
                <span>Name</span>
                <i></i>
              </div>
              <div class="inputbox">
                <img class="inputbox-img" src="./img/name.svg" alt="" />
                <input
                  class="inp"
                  required="required"
                  name="phone"
                  type="text"
                  id="phone"
                  data-reg="^\d{1,}$"
                />
                <span>Phone</span>
                <i></i>
              </div>
              <div class="inputbox">
                <img class="inputbox-img" src="./img/email.svg" alt="" />
                <input
                  class="inp"
                  required="required"
                  type="text"
                  name="email"
                  id="email"
                  data-reg="^[-\w.]+@([A-z0-9][-A-z0-9]+\.)+[A-z]{2,4}$"
                />
                <span>Email</span>
                <i></i>
              </div>
              <div class="inputbox">
                <img class="inputbox-img" src="./img/area.svg" alt="" />
                <textarea class="textarea inp" required="required"></textarea>
                <span>Tell us about your project</span>
                <i></i>
              </div>
              <div class="contact__wrapper">
                <label class="contact__label" for="check">
                  <input
                    class="contact__checkbox-real _req"
                    type="checkbox"
                    id="check"
                  />
                  <span class="contact__checkbox-custom _req"></span>
                </label>
                <label class="contact__text" for="">
                  I agree to the collection and storage of the data provided
                  byme.
                </label>
              </div>
              <button
                class="contact__btn"
                type="submit"
                id="button"
                value="Отправить"
              >
                Send
              </button>
            </form>
          </div>
        </div>
      </div>
    </>
  );
}
export default Contacts;
