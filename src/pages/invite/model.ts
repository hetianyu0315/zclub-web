interface InviteType  {
    wallet:string|null
}
const InviteModel = {
    namespace:'invite',
    state:{
        wallet:null
    },
    reducers:{
        setWallet(state:InviteType,action:any){
            return {
                ...state,
                ...action.payload
            }
        }
    }
}

export default InviteModel;