import {useDispatch, useSelector} from "react-redux";
import {PostThumbnail} from "../components/Post/styles.ts";
import {PostPopupContainer, PostPopupWrapper} from "./styles.ts";
import {setSelectedPost} from "../redux/reducers/postImageReducer.tsx";
import {useContext} from "react";
import ThemedContext from "../globalContexts/ThemedContext.tsx";
import {ThemeEnum} from "../utils/globalTypes.ts";


export const PostImageModal = () => {
    const {selectedPost} = useSelector(state => state.postImageReducer)
    const dispatch = useDispatch()
    const {theme} = useContext(ThemedContext)

    const handleClosePopup = () => {
        dispatch(setSelectedPost(null))
    }

    if (!selectedPost) {
        return <></>
    }
    return (
        <PostPopupContainer onClick={handleClosePopup}>
            <PostPopupWrapper isDark={theme == ThemeEnum.dark}>
                <PostThumbnail src={selectedPost.image} loading={"lazy"}/>
            </PostPopupWrapper>
        </PostPopupContainer>
    )
}