import {PostType, UserType, PostWithUserType} from "../utils/globalTypes.ts";

export const getUsers =async ():Promise<UserType[]> => {
    const data =await fetch("https://jsonplaceholder.typicode.com/users")
    if (!data.ok) throw new Error("error")
    return await data.json()
}

export const getPosts =async ():Promise<PostType[]> => {
    const data =await fetch("https://jsonplaceholder.org/posts")
    if (!data.ok) throw new Error("error")
    return await data.json()
}

export const getPost =async (postID: number):Promise<PostType> => {
    const data =await fetch(`https://jsonplaceholder.org/posts/${postID}`)
    if (!data.ok) throw new Error("error")
    return await data.json()
}

export const getUser= async (userId: number):Promise<UserType> => {
    const data =await fetch(`https://jsonplaceholder.org/users?id=${userId}`)
    if (!data.ok) throw new Error('error')

    // const userDataInArray = await data.json()
    return await data.json()
}

// export const attachUsersToPost =
//     (posts: PostType[], users: UserType[]): PostWithUserType[] =>
//         posts.map(post => {
//             const userOfPost = users.find(user => user.id === post.userId)
//             const {userId, ...productWithoutId} = post
//             const newPost = userOfPost ? ({...productWithoutId, user: userOfPost}) : post
//             return ({...newPost, date: getRandomDate(new Date(2020, 1, 1), new Date())})
//
//         }) as PostWithUserType[]

export const attachUsersToPost =
    (posts: PostType[], users: UserType[]): PostWithUserType[] =>
        posts.map(post => {
            const userOfPost = users.find(user => user.id === Number(post.userId));
            return {...post, user: userOfPost }
            //
            // const { userId, ...postsWithoutId } = post;
            // return userOfPost ? { ...postsWithoutId, user: userOfPost } : {...post, user: null};
        });


