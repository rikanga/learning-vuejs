import axios from 'axios'

const state = {
    user:null,
    posts:null
};

const getters = {
    isAuthenticated: state => !!state.user,
    StatePosts: state => state.posts,
    StateUser: state => state.user
};

const mutations = {
    setUser(state, username){
        state.username = username;
    },

    setPosts(state, posts){
        state.posts = posts;
    },

    LogOut(state){
        state.user = null
    }
};

const actions = {
    async Register({dispatch}, form){
        await axios.post('register', form)

        let UserForm = new FormData()
        UserForm.append('username', form.username)
        UserForm.append('password', form.password)

        await dispatch('LogIn', UserForm)
    }, 

    async LogIn({commit}, User){
        await axios.post('login', User);
        await commit('setUser', User.get('username'))
    },

    async CreatePost({dispatch}, post){
        await axios.post('post', post);
        await dispatch('GetPosts');
    },
    async GetPost({commit}){
        let response = await axios.get('posts')
        commit('setPosts', response.data)
    },

    async LogOut({commit}){
        let user = null
        commit('logout', user)
    }
}

export default {
    state,
    getters,
    mutations,
    actions
}