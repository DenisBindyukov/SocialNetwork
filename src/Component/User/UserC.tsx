import React from 'react';
import {UserReducerType, UserType} from "../../Redux/users-reducer";
import style from './User.module.css'
import axios from 'axios'
import userPhoto from '../../image/man-avatar-profile-vector-21372076.jpg'


type UsersType = {
    usersPage: UserReducerType
    follow: (userId: number) => void
    unfollow: (userId: number) => void
    setUsers: (users: Array<UserType>) => void
}


export class UserC extends React.Component<UsersType> {

    componentDidMount() {

        axios.get('https://social-network.samuraijs.com/api/1.0/users').then(response => {
            this.props.setUsers(response.data.items);
        })
    }

    render = () => {

        return (
            <div>

                {
                    this.props.usersPage.user.map(u => <div key={u.id}>
                    <span>
                <div>
                    <img src={u.photos.large != null ? u.photos.large : userPhoto} className={style.photo}/>
                </div>
                    <div>
                        {u.followed
                            ? <button className={style.user_button}
                                      onClick={() => this.props.unfollow(u.id)}>Unfollow</button>
                            : <button className={style.user_button}
                                      onClick={() => this.props.follow(u.id)}>Follow</button>}
                    </div>
                        </span>
                        <span>
                        <span>
                            <div>{u.name}</div>
                            <div>{u.status}</div>
                        </span>
                            {/*<span>*/}
                            {/*    <div>{'u.location.country'}</div>*/}
                            {/*    <div>{'u.location.city'}</div>*/}
                            {/*</span>*/}
                    </span>

                    </div>)
                }
            </div>
        );
    }
}