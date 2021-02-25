import React from "react";
import ProfileInfo from "./ProfileInfo/ProfileInfo";
import MyPostsContainer from "./MyPosts/MyPostsContainer";
import {ProfileType} from "../../api/api";
import {InjectedFormProps} from "redux-form";


type ProfilePageType = {
    preloader: boolean
    status: string
    profile: ProfileType | null
    upDateUserStatus: (status: string) => void
}

const Profile: React.FC<ProfilePageType> = (props) => {

    return (
        <div>
            <ProfileInfo {...props} profile={props.profile} upDateUserStatus={props.upDateUserStatus}/>
            <hr/>
            <MyPostsContainer/>
        </div>
    );
}

export default Profile;