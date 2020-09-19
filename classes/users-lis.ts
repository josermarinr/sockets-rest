import { User } from './user';
import { user } from '../sockets/socket';

export class UsersList{
    private list: User[] =[]

    constructor(){
    }

    //adding user
    public add(user:User){
        this.list.push(user)
        console.log(this.list)

        return user;
    }
    //update a user name
    public updateName( id: string, name: string){
        for(let user of this.list){
            if(user.id === id){
                user.name = name;
                break;
            }
        }

        console.info('===========user update ============')
        console.info(this.list)

    }

    //return users list conected
    public getList(){
        return this.list
    }

    //retunr an user
    public getUser(id: string){
        return this.list.find( user =>{
            return user.id === id
        })
    }

    //all user in a room
    public getUserinRoom( room: string){
        return this.list.filter( user =>{
            return user.room === room;
        })
    }

    //delete user
    public deleteUser( id: string){
        const tempUser= this.getUser(id);

        this.list = this.list.filter(user => {
            return user.id !== id;
        })

        return tempUser;
    }

}