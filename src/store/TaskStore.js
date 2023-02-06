import {defineStore} from 'pinia';

export const useTaskStore=defineStore('taskStore', {
state:()=>({
    tasks:[
        {id:1, title:"buy some milk", isFav:false},
        {id:2, title:"buy tortillas", isFav:true}
    ]
}),
 getters:{
    favs(){
        return this.tasks.filter(t =>t.isFav)
    }
 }
})