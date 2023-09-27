
import { Post, PostProvider } from './05-dependency-b';
import localPosts from './data/local-database.json'
export class LocalDataBaseService implements PostProvider {
    async getPosts(): Promise<Post[]> {
        return await this.getFakePosts();
    }


    async getFakePosts() {
        return [
            {
                'userId': 1,
                'id': 1,
                'title': 'sunt aut facere repellat provident occaecati excepturi optio reprehenderit',
                'body': 'quia et suscipit suscipit recusandae consequuntur expedita et cum reprehenderit molestiae ut ut quas totam nostrum rerum est autem sunt rem eveniet architecto'
            },
            {
                'userId': 1,
                'id': 2,
                'title': 'qui est esse',
                'body': 'est rerum tempore vitae sequi sint nihil reprehenderit dolor beatae ea dolores neque fugiat blanditiis voluptate porro vel nihil molestiae ut reiciendis qui aperiam non debitis possimus qui neque nisi nulla'
            }
        ]
    }

}

export class JsonDatabaseService implements PostProvider{

    async getPosts(  ){
        return localPosts;
    }


}
export class WebApiPostService implements PostProvider{

    private providerUrl : string = 'https://jsonplaceholder.typicode.com/posts';

    constructor(){}


   async getServiceData(): Promise<Post[]>{

        const response = await fetch ( this.providerUrl );
        const data = await response.json() 
        return data as Post[];
    }

    async getPosts(): Promise<Post[]> {
     return await this.getServiceData();
    }

}