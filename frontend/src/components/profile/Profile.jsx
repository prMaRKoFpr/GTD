import './Profile.scss'
import avatar from './data/avatar.png'

const Profile = () => {
    return (
        <div className="Profile">
            <div className="txt_inf_cont">
                <div className="name">Александр</div>
                <div className="date_time">01.01.01 01:01</div>
            </div>
            <div className="avatar">
                <img src={avatar} alt="avatar" />
            </div>
        </div>
    )
}

export default Profile;