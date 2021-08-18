import imgResultPrice from "./../img/resultprice.png";

const Content = _ => {
    if (_.s.data.progress > 0) {
        _.s.data.progress = 0;
        _.s.api.showAd();
        _.s.api.messages();
    }

    const dl = ['ЕЙ','Ь','Я','Я','Я','ЕЙ','ЕЙ','ЕЙ','ЕЙ','ЕЙ'];
    return (
        <div className="col-12 p-0 text-center my-auto text-light">
            <p className="h5 font-weight-bold m-0 mb-3">Стоимость твоей страницы</p>
            <p className="h2 font-weight-bold m-0 mb-4">{_.s.data.price} РУБЛ{ String(_.s.data.price).slice(-2)[0] == 1 ? 'ЕЙ' : dl[String(_.s.data.price).slice(-2)[1]] }</p>
            <img src={imgResultPrice} alt="imgGetPrice" className="col-6 mx-auto" />

            <div className="btn btn-lg btn-light rounded-lg text-primary mt-4" onClick={ () => { _.s.api.share() } }>
                <i class="fal fa-share mr-2"></i>
                Рассказать друзьям
            </div>
            <p className="col-8 h6 font-weight-bold m-0 mt-3 mx-auto">Поделись результатом с друзьями и узнай, сколько стоят их страницы!</p>
        </div>
    );
}

export default Content;