import { NavLink } from 'react-router-dom';
import R from '../render.js'

const Progress = _ => (
    <div className="col-12 p-0 text-center my-auto text-light">
        <i className="indicator fal fa-cog fa-spin"></i>
        <p className="font-weight-bold m-0 mt-4">Считаем</p>
        <div className="col-8 mx-auto ProgressBar border border-light rounded-pill p-0">
            <div className="bg-white position-absolute rounded-pill" style={{width:_.progress+'%'}}></div>
        </div>
    </div>
)

const Complete = _ => (
    <div className="col-12 p-0 text-center my-auto text-light">
        <i className="indicator fal fa-check-circle"></i>
        <p className="font-weight-bold mb-4 h3">Готово!</p>
        <NavLink to='2' className="btn btn-lg btn-light rounded-lg text-primary">
            <i className="fad fa-yey mr-2"></i>
            Посмотреть
        </NavLink>
    </div>
)

const Content = _ => {
    if (_.s.data.progress == 0) {
        _.s.api.subscribe();
        _.s.api.showAd();
        let pt = setInterval(() => {
            _.s.data.progress += _.s.data.progress > 35 && _.s.data.progress < 55 ? 0.01 : 0.1;
            R(_.s);
            if (_.s.data.progress >= 100) clearInterval(pt);
        },10);
    }

    return (
        _.s.data.progress >= 100 ? <Complete /> : <Progress progress={_.s.data.progress}/>
    );
}

export default Content;