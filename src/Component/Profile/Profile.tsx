import React from "react";
import ProfileInfo from "./ProfileInfo/ProfileInfo";
import MyPostsContainer from "./MyPosts/MyPostsContainer";
import {ProfileType} from "../../api/api";
import {Redirect} from "react-router";


type ProfilePageType = {
    preloader: boolean
    status: string
    profile: ProfileType | null
    upDateUserStatus: (status: string) => void
}

const Profile: React.FC<ProfilePageType> = React.memo((props) => {



    return (
        <div>
            <ProfileInfo {...props} profile={props.profile} upDateUserStatus={props.upDateUserStatus}/>
            <hr/>
            <MyPostsContainer/>
        </div>
    );
})

export default Profile;


// <form onSubmit={props.handleSubmit}>
//             <div>
//                 <Field  component={TextArea}  name={'message'} validate={[requiredField,maxLengthUtil]}/>
//             </div>
//             <div>
//                 <button className={style.myButton}>Add post</button>
//             </div>
//         </form>