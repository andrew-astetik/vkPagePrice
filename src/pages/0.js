import { NavLink } from "react-router-dom";
import imgGetPrice from "./../img/getprice.png";

const Content = _ => (
    <div className="col-12 p-0 text-center my-auto text-light">
        <p className="h4 font-weight-bold m-0 mb-4">Хочешь узнать цену<br/>своей страницы?</p>
        <NavLink to='1' className="col-6 mx-auto">
            <img src={imgGetPrice} alt="imgGetPrice" className="col-6 mx-auto" />
        </NavLink>
        <p className="h2 font-weight-bold m-0 mt-4">Жми на стикер!</p>
    </div>
);

export default Content;