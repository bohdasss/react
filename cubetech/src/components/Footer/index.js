import "./style.scss";

function Footer() {
  return (
    <>
      <div className="footer">
        <div className="container">
          <div className="footer__content">
            <div className="footer__border pb-35 d-flex justify-between align-center">
              <div className="header__menu ">
                <ul className="header__items adaptiv d-flex">
                  <li className="header__list pr-50">
                    <a className="header__link" href="#">
                      About Us
                    </a>
                  </li>
                  <li className="pr-50">
                    <a className="header__link" href="#">
                      Services
                    </a>
                  </li>
                  <li>
                    <a className="header__link" href="#">
                      Contact
                    </a>
                  </li>
                </ul>
              </div>
              <div className="footer__box">
                <a className="mr-50" href="tel:123-456-7890">
                  <svg
                    width="20"
                    height="20"
                    viewBox="0 0 20 20"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M19.8503 14.3404L19.3884 14.5319C19.3145 14.3537 19.2061 14.1918 19.0694 14.0557L19.0691 14.0553L16.2852 11.2762L16.2848 11.2759C16.0068 10.9979 15.6387 10.8447 15.2452 10.8447H15.2451C15.0525 10.8446 14.8618 10.8826 14.684 10.9565C14.5062 11.0304 14.3447 11.1386 14.2088 11.2751L14.208 11.2759L12.1741 13.3099L11.9287 13.5553L11.6129 13.4112C10.5089 12.9073 9.50485 12.2086 8.64881 11.3485C7.79062 10.4922 7.09428 9.48779 6.59341 8.38376L6.45036 8.06846L6.69518 7.82363L8.72913 5.78965C9.00713 5.51165 9.16035 5.14351 9.16035 4.75V4.74988C9.16039 4.5573 9.12239 4.36661 9.04852 4.18877C8.97465 4.01092 8.86638 3.84942 8.72991 3.71355L8.72913 3.71277L5.94762 0.931221L6.30118 0.57767L5.94762 0.93122C5.66962 0.653215 5.30149 0.5 4.90799 0.5H4.90787C4.7153 0.499954 4.52462 0.537957 4.34678 0.611826C4.16893 0.685694 4.00744 0.793974 3.87157 0.930446L3.87063 0.931387L1.28706 3.51256C1.28684 3.51278 1.28662 3.513 1.2864 3.51323C0.675455 4.12871 0.396368 4.99902 0.534872 5.84081C1.06208 9.00798 2.74433 12.1583 5.29536 14.707C7.84949 17.2588 11.0023 18.9431 14.159 19.463L14.159 19.4629L14.1634 19.4637C14.3018 19.4878 14.443 19.5 14.5923 19.5C15.3002 19.5 15.9903 19.2149 16.488 18.7151L16.4887 18.7144L19.0688 16.1343C19.3468 15.8563 19.5 15.4882 19.5 15.0947L19.5 15.0941C19.5002 14.9012 19.4623 14.7101 19.3884 14.5319L19.8503 14.3404Z"
                      fill="white"
                      stroke="white"
                    />
                  </svg>
                </a>
                <a href="mailto: abc@example.com">
                  <svg
                    width="22"
                    height="18"
                    viewBox="0 0 22 18"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M3 0.5H19C20.1 0.5 21 1.45625 21 2.625V15.375C21 16.5437 20.1 17.5 19 17.5H3C1.9 17.5 1 16.5437 1 15.375V2.625C1 1.45625 1.9 0.5 3 0.5Z"
                      fill="white"
                    />
                    <path d="M21 2.625L11 10.0625L1 2.625" fill="white" />
                    <path
                      d="M21 2.625C21 1.45625 20.1 0.5 19 0.5H3C1.9 0.5 1 1.45625 1 2.625M21 2.625V15.375C21 16.5437 20.1 17.5 19 17.5H3C1.9 17.5 1 16.5437 1 15.375V2.625M21 2.625L11 10.0625L1 2.625"
                      stroke="#434477"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    />
                  </svg>
                </a>
              </div>
            </div>
            <div className=" pt-35 d-flex justify-between align-center">
              <a href="">Cubetech ?? 2022. All rights reserved.</a>
              <a href="">App Privacy Policy</a>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
export default Footer;
